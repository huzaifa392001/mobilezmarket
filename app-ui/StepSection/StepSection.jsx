import React, {useEffect, useState} from "react";
import {FaArrowRightLong} from "react-icons/fa6";
import Link from "next/link";
import {HiMiniSquare3Stack3D} from "react-icons/hi2";
import {FiUploadCloud} from "react-icons/fi";
import {FaRupeeSign} from "react-icons/fa6";

const StepSection = () => {
    return (
        <div className='stepCont'>
            <div className='stepRow'>
                <div className="stepItem">
                    <div className="number">
                        <h4>1</h4>
                        <div className="icon">
                            <HiMiniSquare3Stack3D/>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Select Your Category</h3>
                        <p>Choose from the list</p>
                    </div>
                </div>
                <div className="stepItem">
                    <div className="number">
                        <h4>2</h4>
                        <div className="icon">
                            <FiUploadCloud/>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Publish Your Ad</h3>
                        <p>Fill your details</p>
                    </div>
                </div>
                <div className="stepItem">
                    <div className="number">
                        <h4>3</h4>
                        <div className="icon">
                            <FaRupeeSign/>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Get The Best Price</h3>
                        <p>Find the best deals for your Mobile</p>
                    </div>
                </div>
            </div>
            <Link href={`/login`} className='customBtn'>
                <span>Get Started</span>
                <FaArrowRightLong/>
            </Link>
        </div>
    )
}

export default StepSection