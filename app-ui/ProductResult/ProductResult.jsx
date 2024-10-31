"use client";

import {Col, Row, Select} from "antd";
import React, {useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import {MdOutlineYoutubeSearchedFor} from "react-icons/md";
import Skeleton from "../Skeleton/Skeleton";
import BlogSkeleton from "../BlogSkeleton/BlogSkeleton";
import {FaListUl} from "react-icons/fa6";
import {LuLayoutGrid} from "react-icons/lu";
import {useRouter} from "next/navigation";

import StyledButton from "../StyledButton/StyledButton";
import Image from "next/image";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";

const ProductResult = (props) => {
    const {
        deviceData = {},
        loading = true,
        isLoadMore = false,
        isDomReady = false,
        setLoading = () => {
        },
        setDeviceData = () => {
        },
    } = props;

    const router = useRouter();
    const [layout, setLayout] = useState("grid");

    const onChangeLayout = (type) => () => {
        setLayout(type);
    };

    const onSort = (e) => {
        setLoading(true)
        setDeviceData([])
        let payload = {
            sort: e.split(",")[0],
            order: e.split(",")[1],
        };

        let url = new URL(window.location.href);
        let params = new URLSearchParams(url.search);
        Object.entries(payload).forEach(([key, value]) => {
            if (value !== undefined) {
                params.set(key, value);
            }
        });
        url.search = params.toString();
        router.push(url.pathname + url.search);
    };

    return (
        <>
            <div className="filters_header">
                <div className="flex_between">
                    <div className="filters_right_section">
                        {
                            isDomReady && <>
                                <Select
                                    onChange={onSort}
                                    placeholder="Sort by"
                                    className="styled_select"
                                >
                                    <Select.Option value="created_at,desc">Default</Select.Option>
                                    <Select.Option value="price,desc">
                                        Price : (High to low)
                                    </Select.Option>
                                    <Select.Option value="price,asc">
                                        Price : (Low to High)
                                    </Select.Option>
                                    <Select.Option value="created_at,asc">
                                        Recently Added
                                    </Select.Option>
                                </Select>
                                <div>
                                    <StyledButton
                                        onClick={onChangeLayout("list")}
                                        className="primary with_icon sm"
                                    >
                                        <FaListUl/> List
                                    </StyledButton>
                                    <StyledButton
                                        onClick={onChangeLayout("grid")}
                                        className="primary with_icon sm"
                                    >
                                        <LuLayoutGrid/> Grid
                                    </StyledButton>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className="results_wrapper">
                {loading && isLoadMore !== true ? (
                    <ProductCardSkeleton className={'three_items'}/>
                ) : (
                    <div className={`product_result_row ${layout}`}>
                        <>
                            {deviceData?.length > 0 ? (
                                <>
                                    {deviceData?.map((item) => (

                                        <ProductCard
                                            showQuickView={true}
                                            key={item?.id}
                                            className={`${layout} card_small_mobile`}
                                            data={item}
                                        />

                                    ))}

                                </>
                            ) : (
                                <>
                                    <div className="no_result_found">

                                        <h3>No result found!</h3>
                                    </div>
                                </>
                            )}

                        </>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductResult;
