import React from 'react'
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import ProductCard from '../ProductCard/ProductCard';

const MobileSlider = (props) => {

    const {loading, data, sliderProp} = props;

    return (
        <div className="content_wrap mb_60">
            {loading ? (
                <ProductCardSkeleton/>
            ) : (
                <>
                    <Swiper
                        className="p_15"
                        {...sliderProp}
                        modules={[Pagination]}
                        loop={true}
                    >
                        {data?.map((item) => (
                            <SwiperSlide key={item?.id}>
                                <ProductCard className="card_small_mobile" data={item}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </div>
    )
}

export default MobileSlider