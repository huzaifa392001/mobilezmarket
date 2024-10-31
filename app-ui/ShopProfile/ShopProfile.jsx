import React, { useRef } from "react";
import StyledButton from "../StyledButton/StyledButton";
import { RiUser6Line } from "react-icons/ri";
import { useAuthCheck } from "@/utils/hooks";
import { getImage } from "@/utils/helper";
import Image from "next/image";
import UserAvatar from "../UserAvatar/UserAvatar";


const ShopProfile = ({ data, total }) => {

  const { authCheck } = useAuthCheck();
  const imageRef = useRef(null);



  return (
    <div className="shop_profile_wrap">
      <div className="user">
        {data?.photo ?
          <UserAvatar data={data}
            height={80} width={80}
          /> :
          <RiUser6Line />}
      </div>
      <h1>Publish ads - {total}</h1>
      <StyledButton className="secondary m_auto d_block">Share User Profile</StyledButton>
      <div className="profile_flex_content">
        <StyledButton className="light">Report user</StyledButton>
        <StyledButton className="light">Block user</StyledButton>
      </div>
      <div className="separator" />
      <h1>{data?.shop_name}</h1>
      <p>{data?.shop_address}</p>
      <p>
        City : <span>{data?.city}</span>
      </p>
      {
        authCheck ? <p>Phone : {data?.phone}</p> : <p>
          Phone : <span>*******</span>
        </p>
      }

    </div>
  );
};

export default ShopProfile;
