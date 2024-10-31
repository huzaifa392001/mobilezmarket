"use client";
import React, { useEffect, useState } from "react";
import StyledButton from "@/app-ui/StyledButton/StyledButton";
import Image from "next/image";
import PropTypes from "prop-types";
import { getImage, getFormattedDate, numberWithCommas } from "@/utils/helper";
import Link from "next/link";
import moment from "moment";
import { HiLocationMarker } from "react-icons/hi";
import api from "@/services/api";
import { notification } from "antd";
import { FaEye, FaHeart } from "react-icons/fa6";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import ContactSellerModal from "../ContactSellerModal/ContactSellerModal";
import { useAuthCheck } from "../../utils/hooks";
import { useRouter } from "next/navigation";
import QuickView from "../QuickView/QuickView";

const ProductCard = (props) => {
    const { className = "", data = {}, type = "mobile", profile = {}, showQuickView = {} } = props;
    const { authCheck } = useAuthCheck();
    const router = useRouter();

    const [isWishlist, setIsWishlist] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openContactSellerModal, setOpenContactSellerModal] = useState(false);
    const [quickViewVisible, setQuickViewVisible] = useState(false);

    const getHumanReadableTimeDifference = (date) => {
        const now = moment();
        const inputDate = moment(date);

        const diffInSeconds = now.diff(inputDate, "seconds");
        if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;

        const diffInMinutes = now.diff(inputDate, "minutes");
        if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;

        const diffInHours = now.diff(inputDate, "hours");
        if (diffInHours < 24) return `${diffInHours} hours ago`;

        const diffInDays = now.diff(inputDate, "days");
        if (diffInDays < 30) return `${diffInDays} days ago`;

        const diffInMonths = now.diff(inputDate, "months");
        return `${diffInMonths} months ago`;
    };

    const timeDifference = Date.now() - new Date(data?.created_at).getTime();
    const isNew = timeDifference < 24 * 60 * 60 * 1000;

    const onAddIntoWishList = async (id) => {
        try {
            setLoading(true);
            let res = await api.post(`/wishlist/${id}`, { id, product_id: id });
            if (res?.data?.status) {
                setIsWishlist(true);
                notification.success({
                    message: "Success",
                    description: "Successfully added into wishlist!",
                });
            }
        } catch (error) {
            if (error?.response?.data?.message === "Unauthenticated.") {
                notification.error({
                    message: "Oops",
                    description: "Please login first!",
                });
            }
        }
        setLoading(false);
    };

    const onRemoveFromWishlist = async (id) => {
        try {
            setLoading(true);

            let res = await api.post(`remove-wishlist/${id}`);
            if (res?.data?.status) {
                setIsWishlist(false);
                notification.success({
                    message: "Success",
                    description: "Successfully removed from wishlist!",
                });
            }
        } catch (error) {
        }
        setLoading(false);
    };

    const handleWishlistClick = (id) => async (e) => {
        e.preventDefault();
        if (isWishlist) {
            await onRemoveFromWishlist(id);
        } else {
            await onAddIntoWishList(id);
        }
    };

    const handleContactSellerModal = () => {
        if (!authCheck) {
            router.push("/login");
            return;
        }

        setOpenContactSellerModal(!openContactSellerModal);
    };

    const handleQuickViewModal = () => {
        setQuickViewVisible(!quickViewVisible);
    };
    // useEffect(() => {
    //     console.log("data?.brand=> ", data?.brand);
    //     console.log("data?.model=> ", data?.model)
    // })
    return (
        <>
            <div>
                <div className={`product_card_wrap ${className}`}>
                    <div className="badge_wrapper">
                        {data?.feature_add && <div className={`badge primary`}>Featured</div>}
                        {data?.sell_status === "Sold" && (
                            <div className={`badge danger`}>Sold</div>
                        )}
                        {isNew && <div className={`badge danger`}>New</div>}
                    </div>
                    <div className="image_wrap">
                        <div className="wishlist_wrapper">
                            {showQuickView === true && (<button disabled={loading} onClick={handleQuickViewModal}>
                                <FaEye />
                            </button>
                            )}
                            <button disabled={loading} onClick={handleWishlistClick(data?.id)}>
                                {isWishlist ? <FaHeart /> : <CiHeart />}
                            </button>
                            {showQuickView === true && (
                                <button disabled={loading} onClick={() => handleContactSellerModal()}>
                                    <CiShoppingCart />
                                </button>
                            )}
                        </div>
                        {data?.image?.thumbnail_url ? (
                            <>
                                <Image
                                    fill
                                    src={data?.image?.thumbnail_url}
                                    alt={`${data?.model}`}
                                    sizes="(max-width: 640px) 100vw, (max-width: 750px) 90vw, 50vw"
                                />
                            </>
                        ) : (
                            <>
                                <Image
                                    fill
                                    src={getImage(data?.image?.img_url)}
                                    alt={`${data?.model}`}
                                    sizes="(max-width: 640px) 100vw, (max-width: 750px) 90vw, 50vw"
                                />
                            </>
                        )}
                    </div>
                    <Link className="card_content" href={`/product/${data?.id}/${data?.slug}`}>
                        <div>
                            {data?.accessories_title ? (
                                <h3>{data?.accessories_title}</h3>
                            ) : (
                                <h3>
                                    {data?.brand ? data.brand : "Not Available"}{" "}
                                    {data?.model
                                        ? (() => {
                                            // Split brand and model by space to get the first word and convert to lowercase
                                            const brandFirstWord = data.brand.split(" ")[0].toLowerCase();
                                            const modelWords = data.model.split(" ");
                                            const modelFirstWord = modelWords[0].toLowerCase();

                                            // Check if the first word of the brand and model are the same
                                            if (brandFirstWord === modelFirstWord) {
                                                // Return the model without the first word
                                                return modelWords.slice(1).join(" ") || "Not Available";
                                            } else {
                                                return data.model;
                                            }
                                        })()
                                        : "Not Available"}{" "}
                                </h3>
                            )}

                            {data?.ram || data?.storage ? (
                                <p>
                                    {data?.ram} GB |{" "}
                                    {data?.storage === 1 ? "1 TB" : `${data?.storage} GB`} |{" "}
                                    {data?.pta_status}
                                </p>
                            ) : null}

                            {data?.accessories_category ? (
                                <p>{data?.accessories_category}</p>
                            ) : null}

                            {profile?.area ? (
                                <>
                                    <p className="location">
                                        <Image
                                            height={22}
                                            width={22}
                                            src={"/map_marker.webp"}
                                            alt="marker"
                                        />
                                        <span>
                                            {profile?.city
                                                ? profile?.city
                                                : profile?.country}
                                        </span>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="location">
                                        <Image
                                            height={22}
                                            width={22}
                                            src={"/map_marker.webp"}
                                            alt="marker"
                                        />
                                        <span>
                                            {data.user?.city && data.user?.city !== "null"
                                                ? data.user?.city
                                                : data.user?.area}
                                        </span>
                                    </p>
                                </>
                            )}
                            <div className="priceCont">
                                <p className="price">PKR - {numberWithCommas(data?.price)}</p>
                                <p className="time">
                                    {getHumanReadableTimeDifference(data?.created_at, "DD MMM")}
                                </p>
                            </div>
                        </div>
                        <div className="blog_card_footer" />
                    </Link>
                </div>
                {showQuickView === true && (
                    <>
                        <ContactSellerModal
                            product={data?.slug}
                            data={data}
                            open={openContactSellerModal}
                            onClose={handleContactSellerModal}
                        />
                        <QuickView
                            prodData={data}
                            modalVisible={quickViewVisible}
                            onClose={handleQuickViewModal}
                        />
                    </>
                )}
            </div>
        </>
    );
};

ProductCard.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
};

export default React.memo(ProductCard);
