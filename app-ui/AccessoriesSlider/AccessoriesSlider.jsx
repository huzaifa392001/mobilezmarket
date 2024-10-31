import React from 'react'
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import ProductCard from '../ProductCard/ProductCard';
import './AccessoriesSlider.scss'

const ProductSlider = (props) => {

    const {loading, data, sliderProp} = props;

    return (
        <div className="accSlider">
            {loading ? (
                <ProductCardSkeleton/>
            ) : (
                <>
                    <Swiper
                        {...sliderProp}
                        pagination={{
                            dynamicBullets: true,
                        }}
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

export default ProductSlider