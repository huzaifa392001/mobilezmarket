'use client'
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {getImage} from "@/utils/helper";
import api from "@/services/api";
import BrandSliderSkeleton from "../BrandSliderSkeleton/BrandSliderSkeleton";
import {Autoplay, Pagination} from 'swiper/modules';
import Link from "next/link";

const BrandSlider = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState()

    const getBrands = async () => {
        try {
            setLoading(true);
            const res = await api.get(`/major-brands`).then((data) => {
                setData(data?.data?.data)
            })
        } catch (error) {
            console.error(error);
            return null;
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getBrands()
    }, [])

    return (
        <>
            {loading ? (
                <BrandSliderSkeleton/>
            ) : (
                <>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        loop={true}
                        className={'brandsSlider'}
                        slidesPerView={2}
                        breakpoints={{
                            380: {
                                slidesPerView: 3,
                            },
                            575: {
                                slidesPerView: 5,
                            },
                            991: {
                                slidesPerView: 6,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 20
                            },
                            1281: {
                                slidesPerView: 8,
                                spaceBetween: 20
                            }
                        }}
                    >
                        {data?.map((item) => (
                            <SwiperSlide key={item?.id}>
                                <Link href={`devices/cat-mobile/b-${item?.name}`}>
                                    <figure>
                                        <Image
                                            fill
                                            src={getImage(item?.image)}
                                            alt={`${item?.name} Logo`}
                                        />
                                    </figure>
                                    <h4>{item?.name}</h4>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </>
    );
};

export default BrandSlider;
