import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { getImage } from "@/utils/helper";
import api from "@/services/api";
import { Dancing_Script } from "next/font/google";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeBanner = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [isDesktop, setIsDesktop] = useState(false);

    const getBanners = async () => {
        try {
            setLoading(true);
            const res = await api.get(`/web-banners`).then((data) => {
                setData(data?.data?.data);
            });
        } catch (error) {
            console.error(error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleResize = () => {
        setIsDesktop(window.innerWidth > 767);
    };

    useEffect(() => {
        getBanners();
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {isDesktop ? (
                <>
                    {loading ? (
                        <div className="content_wrap">
                            <div className="banner_placeholder">
                                <div className="image_placeholder" />
                            </div>
                        </div>
                    ) : (
                        <section className="bannerCont">
                            <div className="content_wrap">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="bannerSlider"
                                >
                                    {data?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <figure>
                                                <Image
                                                    fill
                                                    alt={'abc'}
                                                    src={getImage(item?.image)}
                                                />
                                            </figure>
                                            <div className="content">
                                                {item?.heading && (
                                                    <h2>
                                                        {item?.sub_heading && (<span>{item?.sub_heading}</span>)}
                                                        {item?.heading}
                                                    </h2>
                                                )}
                                                {item?.content && (
                                                    <div dangerouslySetInnerHTML={{ __html: item?.content }} />
                                                )}
                                                {item?.heading && (
                                                    <Link href={`/${item?.link}`} className='customBtn'>
                                                        <span>Shop Now</span>
                                                        <FaArrowRightLong />
                                                    </Link>
                                                )}
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </section>
                    )}
                </>
            ) : (
                <>
                    {loading ? (
                        <div className="content_wrap">
                            <div className="banner_placeholder">
                                <div className="image_placeholder" />
                            </div>
                        </div>
                    ) : (
                        <section className="bannerCont">
                            <div className="content_wrap">
                                <div className='banner'>
                                    <figure>
                                        <Image
                                            fill
                                            alt={'abc'}
                                            src={getImage(data[0]?.image)}
                                        />
                                    </figure>
                                    <div className="content">
                                        {data[0]?.heading && (
                                            <h2>
                                                <span>{data[0]?.sub_heading}</span>
                                                {data[0]?.heading}
                                            </h2>
                                        )}
                                        {data[0]?.content && (
                                            <div dangerouslySetInnerHTML={{ __html: data[0]?.content }} />
                                        )}
                                        {data[0]?.heading && (
                                            <Link href={`/${data[0]?.link}`} className='customBtn'>
                                                <span>Shop Now</span>
                                                <FaArrowRightLong />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </>
            )}
        </>
    )
}

export default React.memo(HomeBanner);
