"use client";
import {useEffect, useState} from "react";
import {FaTimes} from "react-icons/fa";
import Image from "next/image";

const QuickView = ({prodData, modalVisible, onClose}) => {
    const [isVisible, setIsVisible] = useState(modalVisible);
    const [data, setData] = useState();

    useEffect(() => {
        setIsVisible(modalVisible);
        setData(prodData);
    }, [prodData, modalVisible]);

    return (
        <>
            {isVisible && (
                <div className="quickViewModal">
                    <div className="modalBg" onClick={onClose}/>
                    <div className="modalContent">
                        <button className='closeBtn' onClick={onClose}>
                            <FaTimes/>
                        </button>
                        <div className="modalBody">
                            <figure className="imageWrap">
                                <div className="loader"/>
                                <Image
                                    src={data?.image?.img_url}
                                    fill
                                    alt={data?.model}
                                />
                            </figure>
                            <div className="contentWrap">

                                {data?.accessories_title ? (
                                    <h2>{data?.accessories_title}</h2>
                                ) : (
                                    <h2>
                                        {data?.brand}{" "}
                                        {data?.model.replace(
                                            new RegExp(`^${data?.brand}\\s*`, "i"),
                                            ""
                                        )}
                                    </h2>
                                )}
                                <p>{data?.description}</p>
                                <h4>Rs. {data?.price}</h4>
                                <h3>Specifications</h3>
                                {data?.ram && (
                                    <div className="descRow">
                                        <p>Ram:</p>
                                        <p>{data?.ram} GB</p>
                                    </div>
                                )}
                                {data?.storage && (
                                    <div className="descRow">
                                        <p>Storage:</p>
                                        <p>{data?.storage} GB</p>
                                    </div>
                                )}
                                {data?.pta_status && (
                                    <div className="descRow">
                                        <p>PTA Status:</p>
                                        <p>{data?.pta_status}</p>
                                    </div>
                                )}
                                {data?.warranty && (
                                    <div className="descRow">
                                        <p>Warranty: </p>
                                        <p>{data?.warranty}</p>
                                    </div>
                                )}
                                {data?.product_type && (
                                    <div className="descRow">
                                        <p>Condition:</p>
                                        <p>{data?.product_type}</p>
                                    </div>
                                )}
                                <div className="spacer"/>
                                {data?.user?.name && (
                                    <div className="descRow">
                                        <p>Posted By:</p>
                                        <p>{data?.user?.name}</p>
                                    </div>
                                )}
                                {data?.user?.city && (
                                    <div className="descRow">
                                        <p>Location:</p>
                                        <p>{data?.user?.city}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default QuickView;
