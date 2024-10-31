"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { RiAdvertisementFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { IoGiftSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import { notification } from "antd";
import { FaWallet } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";



const Menu = (props) => {

  const { handleToogleMenu = () => { }, toogleMenu } = props;
  const wrapperRef = useRef(null);
  const router = useRouter();



  const [openDropDown, setOpenDropDown] = useState(false);
  const [walletDropDown, setWalletDropDown] = useState(false);

  const onOpenDropDown = (e) => {
    e.preventDefault();
    setOpenDropDown(!openDropDown);
  };

  const onOpenWalletDropDown = (e) => {
    e.preventDefault();
    setWalletDropDown(!walletDropDown);
  };



  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (toogleMenu) {
            handleToogleMenu();
          }
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, toogleMenu]);
  }

  useOutsideAlerter(wrapperRef);

  const openWhatsApp = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("@user"));



    const whatsappUrl = `https://api.whatsapp.com/send?text=MM-${user?.id} is Referral code Visit : https://www.mobilezmarket.com/signupregistration`;
    window.open(whatsappUrl, "_blank");
  };

  const openFacebookShare = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("@user"));
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=MM-${user?.id} is Referral code Visit : https://www.mobilezmarket.com/signupregistration`;
    window.open(facebookShareUrl, "_blank");
  };

  const copyLinkToClipboard = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("@user"));
    navigator.clipboard.writeText(`MM-${user?.id} is Referral code Visit : https://www.mobilezmarket.com/signupregistration`);
    notification.success({ message: "Link copied to clipboard!" });
  };


  const onRoutToHome = () => {
    router.push('/');
  }



  return (
    <div ref={wrapperRef} className={`menu_wrap ${toogleMenu ? "show" : ''}`}>
      <div className="logo_container">
        {/* <Link href={"/"}> */}

          <Image
            onClick={onRoutToHome}
            src={"/logo.webp"}
            alt="logo"
            width={200}
            height={100}
            layout="responsive"
          />
        {/* </Link> */}
      </div>
      <div className="menu_scroll_container">
        <div className="menu_links">
          <Link href={"/"}>
            <IoHome /> Go to Website
          </Link>
          <Link href={"/my-devices"}>
            <RiAdvertisementFill /> My Ads
          </Link>
          <Link href={"/post-ad?type=mobile"}>
            <FiPlus /> Post Ads
          </Link>
          <Link onClick={onOpenDropDown} href={"/"}>
            <IoIosShareAlt /> Share Your Referal
          </Link>
          {openDropDown && (
            <div className="drop_down">
              <Link onClick={openFacebookShare} href={"/"}>
                <FaFacebookF />
                Facebook
              </Link>
              <Link onClick={openWhatsApp} href={"/"}>
                <FaWhatsapp />
                Whatsapp
              </Link>
              <Link onClick={copyLinkToClipboard} href={"/"}>
                <IoCopy />
                Copy Referal Code
              </Link>
            </div>
          )}
          <Link onClick={onOpenWalletDropDown} href={"/"}>
            <FaWallet />
            Wallet
          </Link>
          {walletDropDown && (
            <div className="drop_down">
              <Link href={"/statement"}>
                <RiBankFill />
                Statement
              </Link>
              <Link href={"/referral-earning"}>
                <FaRegMoneyBillAlt />
                Referrals Earning
              </Link>
            </div>
          )}
          <Link href={"/manage-account"}>
            <AiOutlineUser /> Manage Your Account
          </Link>
          <Link href={"/winning-participation"}>
            <IoGiftSharp /> Winning Participation
          </Link>
          <Link href={"/how-it-works"}>
            <RiAdvertisementFill /> How it Works
          </Link>
          <Link href={"/my-progress"}>
            <FaListCheck /> My Progress
          </Link>
          <Link href={"/wishlist"}>
            <IoHeartOutline /> Wishlist
          </Link>
          <Link href={"/profile-setting"}>
            <IoSettingsOutline /> Profile Setting
          </Link>
          <Link href={"/my-progress"}>
            <BsChatDots /> Chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
