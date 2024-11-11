"use client";

import BlogSkeleton from "../BlogSkeleton/BlogSkeleton";
import ContactSellerModal from "../ContactSellerModal/ContactSellerModal";
import ImagesGallery from "../ImagesGallery/ImagesGallery";
import ProductCard from "../ProductCard/ProductCard";
import Skeleton from "../Skeleton/Skeleton";
import StyledButton from "../StyledButton/StyledButton";
import StyledHeading from "../StyledHeading/StyledHeading";
import api from "@/services/api";
import { getFormattedDate, getImage, numberWithCommas } from "@/utils/helper";
import { useAuthCheck, useFcmToken } from "@/utils/hooks";
import { Col, Row, notification } from "antd";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { useRouter } from "next/navigation";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";
import Head from "next/head";
import Script from "next/script";

const ProductDetailsLayout = (props) => {
    const { slug } = props;

    const { authCheck } = useAuthCheck();

    const router = useRouter();

    const { fcmToken, notificationPermissionStatus } = useFcmToken();
    const [productDetails, setProductDetails] = useState(null);
    const [views, setViews] = useState(0);
    const [relatedAdds, setRelatedAdds] = useState([]);
    const [shopAdds, setShopAdds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openContactSellerModal, setOpenContactSellerModal] = useState(false);
    const [currentPath, setCurrentPath] = useState("");
    const [schemaData, setSchemaData] = useState(null);

    useEffect(() => {
        if (window !== undefined) {
            setCurrentPath(window.location.href);
        }
    }, []);

    const handleContactSellerModal = () => {
        if (!authCheck) {
            router.push("/login");
            return;
        }

        setOpenContactSellerModal(!openContactSellerModal);
    };

    const getProductsDetails = async (fcm) => {
        const body = {
            device_token: fcm,
        };

        try {
            let res = await api.get(`/details/${slug[0]}/${slug[1]}`, {
                params: body,
            }).then((res) => {
                if (res?.data?.status) {
                    setProductDetails(res?.data?.details);
                    setViews(res?.data?.views);
                    setRelatedAdds(res?.data?.related_ads);
                    setShopAdds(res?.data?.more_ads);
                    setLoading(false);
                } else {
                    console.error("Product Not Found");
                }
            });

        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getProductsDetails(fcmToken);
    }, [slug]);

    const productImages = productDetails?.productimages.map((item) => ({
        original: item?.img_url,
        thumbnail: item?.img_url,
        originalAlt: `${productDetails?.model}`,
        thumbnailAlt: `${productDetails?.model}`,
    }));

    let sliderProp = {
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        navigation: true,
    };

    const openWhatsApp = () => {
        const whatsappUrl = `https://api.whatsapp.com/send?text=${currentPath}`;
        window.open(whatsappUrl, "_blank");
    };

    const openFacebookShare = () => {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentPath}`;
        window.open(facebookShareUrl, "_blank");
    };

    const copyLinkToClipboard = () => {
        navigator.clipboard.writeText(currentPath);
        notification.success({ message: "Link copied to clipboard!" });
    };

    const onPushToProfile = () => {
        router.push(
            `/profile/${productDetails?.seller_id}/${productDetails?.user?.slug}`
        );
    };

    useEffect(() => {
        console.log('productDetails=> ', productDetails);
        setSchemaData({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": productDetails?.accessories_title ? productDetails?.accessories_title : `${productDetails?.brand} ${productDetails?.model.replace(new RegExp(`^${productDetails?.brand}\\s*`, 'i'), '')}`,
            "image": `${productDetails?.productimages[0]?.thumbnail_url}`,
            "description": productDetails?.description,
            "sku": productDetails?.sku || productDetails?.id,
            "brand": {
                "@type": "Brand",
                "name": productDetails?.brand
            },
            "offers": {
                "@type": "Offer",
                "url": `https://www.mobilezmarket.com/${productDetails?.id}/${productDetails?.slug}`,
                "priceCurrency": "PKR",
                "price": productDetails?.price,
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
            }
        });
        console.log('schemaData=> ', schemaData);
    }, [productDetails]);

    return (
        <>
            {schemaData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            )}
            <div className="product_details_header">
                <div className="content_wrap">
                    {loading ? (
                        ""
                    ) : (
                        <div className="styled_breadcrumb">
                            <Link href="/">
                                <IoHome />
                                Home
                            </Link>{" "}
                            <span className="separator">/</span>
                            <Link href={`/devices/${"cat-" + productDetails?.category?.replaceAll(" ", "_")}`}>
                                {productDetails?.category}
                            </Link>
                            <span className="separator">/</span>
                            {productDetails?.brand && (
                                <>
                                    <Link
                                        href={`/devices/${"cat-" + productDetails?.category?.replaceAll(" ", "_")}/${"b-" + productDetails?.brand?.replaceAll(" ", "_")}`}
                                    >
                                        {productDetails?.brand}
                                    </Link>
                                    <span className="separator">/</span>
                                </>
                            )}
                            {productDetails?.accessories_category && (
                                <>
                                    <Link
                                        href={`/devices/accessories?accessories_category=${productDetails?.accessories_category}`}
                                    >
                                        {productDetails?.accessories_category}
                                    </Link>
                                    <span className="separator">/</span>
                                </>
                            )}
                            <Link href={`/product/${slug[0]}/${slug[1]}`}>
                                {slug[1]?.split("-").join(" ")}
                            </Link>
                            <span className="separator">/</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="content_wrap">
                <Row gutter={[20, 20]}>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        {loading ? (
                            <div className="image_gallery_loader" />
                        ) : (
                            <ImagesGallery images={productImages || []} />
                        )}
                    </Col>

                    <Col lg={12} md={12} sm={24} xs={24}>
                        {loading ? (
                            <div className="loading_skeleton" />
                        ) : (
                            <h1>
                                {productDetails?.accessories_title ? (
                                    <>{productDetails?.accessories_title}</>
                                ) : (
                                    <>
                                        {/*{productDetails?.brand} {productDetails?.model}*/}
                                        {productDetails?.brand} {productDetails?.model.replace(new RegExp(`^${productDetails?.brand}\\s*`, 'i'), '')}
                                    </>
                                )}
                            </h1>
                        )}

                        <h2>
                            {loading ? (
                                <Skeleton isActive={false} height="40px" width="150px" />
                            ) : (
                                `Rs: ${numberWithCommas(productDetails?.price)}`
                            )}
                        </h2>
                        <h3 className="m_0">Specifications</h3>

                        {loading ? (
                            <div>
                                <Skeleton
                                    isActive={false}
                                    height="34px"
                                    width="100%"
                                    margin=" 0 0 10px 0"
                                />
                                <Skeleton
                                    isActive={false}
                                    height="34px"
                                    width="100%"
                                    margin=" 0 0 10px 0"
                                />
                                <Skeleton
                                    isActive={false}
                                    height="34px"
                                    width="100%"
                                    margin=" 0 0 10px 0"
                                />
                                <Skeleton
                                    isActive={false}
                                    height="34px"
                                    width="100%"
                                    margin=" 0 0 10px 0"
                                />
                                <Skeleton
                                    isActive={false}
                                    height="34px"
                                    width="100%"
                                    margin=" 0 0 10px 0"
                                />
                            </div>
                        ) : (
                            <div className="styled_table">
                                {productDetails?.ram && (
                                    <div className="t_row">
                                        <div className="t_cols">Ram</div>
                                        <div className="t_cols">{productDetails?.ram} GB</div>
                                    </div>
                                )}
                                {productDetails?.storage && (
                                    <div className="t_row">
                                        <div className="t_cols">Storage</div>
                                        <div className="t_cols">
                                            {productDetails?.storage === 1
                                                ? "1 TB"
                                                : `${productDetails?.storage} GB`}
                                        </div>
                                    </div>
                                )}
                                {productDetails?.pta_status && (
                                    <div className="t_row">
                                        <div className="t_cols">PTA Status</div>
                                        <div className="t_cols">{productDetails?.pta_status}</div>
                                    </div>
                                )}
                                <div className="t_row">
                                    <div className="t_cols">Warranty</div>
                                    <div className="t_cols">{productDetails?.warranty}</div>
                                </div>
                                <div className="t_row">
                                    <div className="t_cols">Product Condition</div>
                                    <div className="t_cols">{productDetails?.product_type}</div>
                                </div>
                            </div>
                        )}

                        {loading ? (
                            <div>
                                <Skeleton
                                    isActive={false}
                                    height="34px"
                                    width="100%"
                                    margin=" 0 0 10px 0"
                                />
                                <Skeleton
                                    isActive={false}
                                    height="34px"
                                    width="100%"
                                    margin=" 0 0 10px 0"
                                />
                                <Skeleton
                                    isActive={false}
                                    height="34px"
                                    width="100%"
                                    margin=" 0 0 10px 0"
                                />
                                <Skeleton
                                    isActive={false}
                                    height="34px"
                                    width="100%"
                                    margin=" 0 0 10px 0"
                                />
                            </div>
                        ) : (
                            <div className="styled_table mt_20">
                                <div className="t_row">
                                    <div className="t_cols">Posted By</div>
                                    <div className="t_cols">
                                        <span onClick={onPushToProfile} className="blink">
                                            {productDetails?.user?.user_type === "business"
                                                ? productDetails?.user?.shop_name
                                                : productDetails?.user?.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="t_row">
                                    <div className="t_cols">Posted At</div>
                                    <div className="t_cols">
                                        {getFormattedDate(productDetails?.created_at)}
                                    </div>
                                </div>
                                <div className="t_row">
                                    <div className="t_cols">Location</div>
                                    <div className="t_cols">{productDetails?.user?.area}</div>
                                </div>
                            </div>
                        )}

                        <h3 className="my_20">Description</h3>
                        <p>{productDetails?.description}</p>

                        {loading ? (
                            <Skeleton height="30px" width="120px" />
                        ) : (
                            <>
                                <p className="styled_chip">
                                    <FiEye /> Views {views}
                                </p>
                            </>
                        )}

                        <div className="contact_actions">
                            <StyledButton
                                onClick={handleContactSellerModal}
                                className="primary"
                            >
                                Contact Seller
                            </StyledButton>
                            <StyledButton className="secondary">
                                Chat With Seller
                            </StyledButton>
                        </div>
                        <div className="social">
                            <button onClick={openWhatsApp} className="whatsapp">
                                <FaWhatsapp />
                            </button>
                            <button onClick={openFacebookShare} className="facebook">
                                <FaFacebookF />
                            </button>
                            <button onClick={copyLinkToClipboard} className="secondary">
                                <FiLink />
                            </button>
                        </div>
                    </Col>
                </Row>

                <div className="mt_60">
                    <div className="mb_60">
                        <StyledHeading
                            text={
                                productDetails?.user?.shop_name
                                    ? productDetails?.user?.shop_name
                                    : productDetails?.user?.name
                            }
                        />
                    </div>
                    <div className="mb_60">
                        {loading ? (
                            <ProductCardSkeleton />
                        ) : (
                            <>
                                <Swiper {...sliderProp} modules={[Pagination]} loop={true}>
                                    {relatedAdds?.map((item) => (
                                        <SwiperSlide key={item?.id}>
                                            <ProductCard className="card_small_mobile" data={item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )}
                    </div>
                </div>
                <div>
                    <div className="mb_60">
                        <StyledHeading text="RELATED ITEMS" />
                    </div>
                    <div className="mb_60">
                        {loading ? (
                            <ProductCardSkeleton />
                        ) : (
                            <>
                                <Swiper {...sliderProp} modules={[Pagination]} loop={true}>
                                    {shopAdds?.map((item) => (
                                        <SwiperSlide key={item?.id}>
                                            <ProductCard className="card_small_mobile" data={item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )}
                    </div>
                </div>
                <ContactSellerModal
                    product={slug}
                    data={productDetails}
                    open={openContactSellerModal}
                    onClose={handleContactSellerModal}
                />
            </div>
        </>
    );
};

export default ProductDetailsLayout;
