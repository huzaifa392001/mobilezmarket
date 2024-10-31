import React from "react";
import Skeleton from "../Skeleton/Skeleton";
import {Row} from "antd";

const BrandSliderSkeleton = () => {

    return (
        <div className='brandSkeletonCont'>
            <Skeleton borderRadius="100px" margin="0 20px" height="120px" width="120px"/>
            <Skeleton borderRadius="100px" margin="0 20px" height="120px" width="120px"/>
            <Skeleton borderRadius="100px" margin="0 20px" height="120px" width="120px"/>
            <Skeleton borderRadius="100px" margin="0 20px" height="120px" width="120px"/>
            <Skeleton borderRadius="100px" margin="0 20px" height="120px" width="120px"/>
            <Skeleton borderRadius="100px" margin="0 20px" height="120px" width="120px"/>
            <Skeleton borderRadius="100px" margin="0 20px" height="120px" width="120px"/>
            <Skeleton borderRadius="100px" margin="0 20px" height="120px" width="120px"/>
        </div>
    );
};

export default BrandSliderSkeleton;
