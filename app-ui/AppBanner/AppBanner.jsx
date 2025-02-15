"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import api from "@/services/api";
import { getImage } from "@/utils/helper";
import Image from "next/image";

const AppBanner = (props) => {
  const { className = "" } = props;

  const [sliderImages, setSliderImage] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSLiderImages = async () => {
    setLoading(true);
    const res = await api.get("/banner-images");
    if (res?.data?.status) {
      let images = JSON.parse(res?.data?.images?.[0]?.banner_images);

      let bannerData = {
        signature_key: res?.data?.images?.[0]?.signature_key,
        images: images,
      };

      let getbanner = JSON.parse(localStorage.getItem("@banner"));

      if (getbanner?.signature_key !== bannerData?.signature_key) {
        localStorage.setItem("@banner", JSON.stringify(bannerData));
        setSliderImage(images);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    getSLiderImages();
    let getbanner = JSON.parse(localStorage.getItem("@banner"));
    setSliderImage(getbanner?.images);
  }, []);

  return (
    <>
      {sliderImages?.length > 0 ? (
        <>
          <Swiper className={`app_banner ${className}`} slidesPerView={1}>
            {sliderImages?.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="slider_wrap">
                  <Image priority loading="eager" fill src={getImage(item)} alt="Mobile Market - Platform to Buy and Sell Smartphones" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <>
          <div className="banner_placeholder">
            <div className="image_placeholder"></div>
          </div>
        </>
      )}
    </>
  );
};

export default React.memo(AppBanner);
