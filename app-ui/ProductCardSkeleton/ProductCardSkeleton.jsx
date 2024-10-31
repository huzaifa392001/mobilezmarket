import React from 'react'

const ProductCardSkeleton = ({ className }) => {
    return (
        <div className={`product_card_skeletons ${className}`}>
            <div className="grid_4">
                <div className="grid_col">
                    <div className="image_placeholder">
                    </div>
                    <div className="text_placeholder_wrapper">
                        <div className='text_placeholder'></div>
                        <div className='text_placeholder'></div>
                        <div className='text_placeholder'></div>
                    </div>
                </div>
                <div className="grid_col">
                    <div className="image_placeholder">
                    </div>
                    <div className="text_placeholder_wrapper">
                        <div className='text_placeholder'></div>
                        <div className='text_placeholder'></div>
                        <div className='text_placeholder'></div>
                    </div>
                </div>
                <div className="grid_col">
                    <div className="image_placeholder">
                    </div>
                    <div className="text_placeholder_wrapper">
                        <div className='text_placeholder'></div>
                        <div className='text_placeholder'></div>
                        <div className='text_placeholder'></div>
                    </div>
                </div>
                <div className="grid_col">
                    <div className="image_placeholder">
                    </div>
                    <div className="text_placeholder_wrapper">
                        <div className='text_placeholder'></div>
                        <div className='text_placeholder'></div>
                        <div className='text_placeholder'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardSkeleton