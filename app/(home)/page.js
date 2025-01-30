"use client";

import React, { useEffect, useState } from "react";
import SignupBanner from "@/app-ui/SignupBanner/SignupBanner";
import api from "@/services/api";
import ProductSlider from "@/app-ui/AccessoriesSlider/AccessoriesSlider";
import HomeBanner from "@/app-ui/HomeBanner/HomeBanner";
import SectionHeading from "@/app-ui/SectionHeading/SectionHeading";
import BrandSlider from "@/app-ui/BrandSlider/BrandSlider";
import BlogSection from "@/app-ui/BlogSection/BlogSection";
import StepSection from "@/app-ui/StepSection/StepSection";
import AddBanner from "@/app-ui/AddBanner/AddBanner";
import AppDownloadModal from "@/app-ui/AppDownloadModal/AppDownloadModal";
import StyledButton from "@/app-ui/StyledButton/StyledButton";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import axios from "axios";
import CategorySlider from "@/app-ui/CategorySlider/CategorySlider";

export default function Home() {
    const [fullContent, setFullContent] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [deviceWidth, setDeviceWidth] = useState(578);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        mobiles: [],
        tablets: [],
        smartWatches: [],
        accessories: [],
    });

    const getDevices = async () => {
        try {
            setLoading(true);
            const res = await api.get("/home-devices");
            if (res?.data?.status) {
                setData({
                    mobiles: res?.data?.mobile_ads || [],
                    tablets: res?.data?.tablet_ads || [],
                    smartWatches: res?.data?.watch_ads || [],
                    accessories: res?.data?.accessories_ads || [],
                });
            }
        } catch (error) {
            console.error("Error fetching devices:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDevices();

        const handleResize = () => {
            if (typeof window !== "undefined") {
                setDeviceWidth(window.innerWidth);
            }
        };

        if (typeof window !== "undefined") {
            handleResize(); // Set initial width
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);

    useEffect(() => {
        setModalVisible(deviceWidth <= 991);
    }, [deviceWidth]);

    const sliderProp = {
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            575: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1281: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
        navigation: true,
    };

    return (
        <div className="home_wrap">
            <HomeBanner />
            {!deviceWidth <= 575 &&<h1 className="mainHeading">Top Mobile Phone Marketplace in Pakistan</h1>}
            <main>
                {deviceWidth <= 575 && (
                    <>
                        <section className="BrandSliderSec secPadding">
                            <div className="content_wrap">
                                <SectionHeading text="categories" />
                                <CategorySlider />
                            </div>
                        </section>
                        <section className="BrandSliderSec secPadding">
                            <div className="content_wrap">
                                <SectionHeading text="top brands" />
                                <BrandSlider />
                            </div>
                        </section>
                    </>
                )}
                <section className="SliderSec secPadding">
                    <div className="content_wrap">
                        <SectionHeading btn btnLink="/devices/cat-mobile" text="recently added mobiles" />
                        <ProductSlider loading={loading} data={data.mobiles} sliderProp={sliderProp} />
                    </div>
                </section>

                {deviceWidth <= 575 ? (
                    <>
                        <section className="SliderSec secPadding">
                            <div className="content_wrap">
                                <SectionHeading btn btnLink="/devices/cat-tablet" text="recently added tablets" />
                                <ProductSlider loading={loading} data={data.tablets} sliderProp={sliderProp} />
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        <section className="BrandSliderSec secPadding">
                            <div className="content_wrap">
                                <SectionHeading text="top brands" />
                                <BrandSlider />
                            </div>
                        </section>
                        <section className="SliderSec secPadding">
                            <div className="content_wrap">
                                <SectionHeading btn btnLink="/devices/cat-tablet" text="recently added tablets" />
                                <ProductSlider loading={loading} data={data.tablets} sliderProp={sliderProp} />
                            </div>
                        </section>
                    </>
                )}
                <section className="stepSec secPadding">
                    <div className="content_wrap">
                        <SectionHeading text="publish your ad on mobilez market" />
                        <StepSection />
                    </div>
                </section>
                <section className="SliderSec secPadding">
                    <div className="content_wrap">
                        <SectionHeading btn btnLink="/devices/cat-watch" text="recently added smart watches" />
                        <ProductSlider loading={loading} data={data.smartWatches} sliderProp={sliderProp} />
                    </div>
                </section>
                <section className="bannerSec secPadding">
                    <div className="content_wrap">
                        <AddBanner />
                    </div>
                </section>
                <section className="SliderSec secPadding">
                    <div className="content_wrap">
                        <SectionHeading btn btnLink="/devices/cat-accessories" text="recently added accessories" />
                        <ProductSlider loading={loading} data={data.accessories} sliderProp={sliderProp} />
                    </div>
                </section>
                <section className="contentSec secPadding">
                    <div className="content_wrap">
                        <h2>
                            <span>
                                the Leading Online Mobile Market in Pakistan
                            </span>
                            Start your shopping with Mobilez Market
                        </h2>
                        <p>
                            Welcome to Mobilez Market Pakistan, where you can shop the latest smartphones, tablets, and associated products at affordable and competitive prices. For all your tech accessory needs, discover the perfect gadgets for your digital life, all in one place. With Mobilez Market, we are proud to be the best mobile phone marketplace in Pakistan, as we sell most types of original mobile devices, making the online shopping experience easier.

                            {!fullContent && (
                                <button onClick={() => setFullContent(!fullContent)}>
                                    <FaChevronDown />
                                </button>
                            )}
                        </p>
                        {fullContent && (
                            <>
                                <h3>
                                    Mobilez Market: the Most Trusted Platform for Mobile Phone Buyers and Sellers
                                </h3>
                                <p>
                                    At Mobilez Market, we not only provide detailed reviews about the new products that are emerging into the market from the giant companies such as Apple, Samsung, Huawei, OnePlus, and Xiaomi, but also offer a platform for buying and selling mobile devices. Whether you are considering purchasing a high-performance smartphone for work purposes or a low-cost model for everyday life, buying a smartphone in our marketplace ensures a safe and seamless transaction. We bring a better way of facilitating the suppliers and the customers, making mobile shopping more easy and exciting.
                                </p>
                                <h3>
                                    Stay in the Loop with Mobilez Market
                                </h3>
                                <p>
                                    What makes us most unique is our lively community at Mobilez Market. We provide you with an easy-to-use forum for listing your devices for sale and getting connected to potential buyers in the shortest time possible. With Mobilez Market, it has never been easier to sell your old smartphone or tablet. So, join our digital mobile market by simply creating an account, posting your listing, and watching the offers roll in!
                                </p>
                                <ul>
                                    <li>
                                        <span>
                                            Explore Our Listings:
                                        </span>
                                        Spend time here choosing from a diverse range of mobile gadgets and accessories.
                                    </li>
                                    <li>
                                        <span>
                                            List Your Device:
                                        </span>
                                        Create a listing for your smartphone, tablet, or accessory with very easy steps.
                                    </li>
                                    <li>
                                        <span>
                                            Connect with Buyers:
                                        </span>
                                        Engage with potential buyers through our platform, making the selling process simple and safe.
                                    </li>
                                    <li>
                                        <span>
                                            Secure Transactions:
                                        </span>
                                        Pay with confidence and enjoy a smooth checkout experience.
                                    </li>
                                </ul>
                                <h3>
                                    A Better Way to Buy and Sell Mobiles in Pakistan with Mobilez Market
                                </h3>
                                <p>
                                    Mobilez Market is focused on improving the mobile device purchasing and selling experience in the mobile market Pakistan by keeping everything honest. We operate an authentic online marketplace where purchasing is made simple and engaging while providing complete details of any smartphone, tablet, and accessory. Moreover, it is committed to continually establishing an active user-generated community where members have the opportunity to exchange ideas and receive up-to-date information on the latest advances in mobile technology.
                                </p>
                                <h3>
                                    Your Premier Tablets and Electronics Store
                                </h3>
                                <p>
                                    Searching for the best tablets marketplace in Pakistan that fits perfectly into your life? You are lucky to be at the right place! Mobilez Market is, indeed, the perfect place to shop for tablets of your choice because we offer an amazing selection of tablets from top brands, serving students, professionals, and entertainment enthusiasts equally. Moreover, you can explore detailed listings, compare features, and read user reviews to find the tablet that relates to you.
                                </p>
                                <h3>
                                    Accessories That Make a Statement
                                </h3>
                                <p>
                                    With our exclusive selection of accessories, you can redefine your mobile trading experience! These best accessories marketplace in Pakistan, which range from stylish cases to powerful chargers and premium headphones, not only improve the performance of your devices but also give your transactions more individuality. We have everything you need at Mobilez Market to make your electronic devices look great and perform even better whether you're buying, selling, or trading!
                                </p>
                                <h3>
                                    Why Choose Mobilez Market?
                                </h3>
                                <p>
                                    As you know, we are not only an e-commerce platform focused on a definite type of goods - mobile phone marketplace - but also a community. With our focus on connecting people, secure transactions, and unbeatable pricing, we deliver an experience that’s smooth and trustworthy.
                                </p>
                                <ul>
                                    <li>
                                        <span>In-Depth Product Information:</span>
                                        Get comprehensive information on various models of mobile phones, tablets, and other accessories, along with specifications and genuine customer feedback.
                                    </li>
                                    <li>
                                        <span>
                                            Fast Advertising Platform:
                                        </span>
                                        Advertise and sell any of your mobile phones, tablets, and smartwatches in the market space, reaching a wider audience within no time.
                                    </li>
                                    <li>
                                        <span>
                                            Engaging Community:
                                        </span>
                                        Join our dialog box where you can discuss technology with like-minded people. Also, stay informed with our blog's section featuring the latest news in the mobile market, both in Pakistan and globally.
                                    </li>
                                    <li>
                                        <span>
                                            Safe and Reliable Online Shopping:
                                        </span>
                                        With our secure payment solutions, shop with confidence and take full advantage of a simple checkout experience.
                                    </li>
                                    <li>
                                        <span>
                                            Excellent Customer Support:
                                        </span>
                                        To guarantee a flawless experience, our customer support service is available 24/7 to help you with any queries.
                                    </li>
                                </ul>
                                <h3>
                                    Stay Connected with Mobilez Market
                                </h3>
                                <p>
                                    At Mobilez Market, we are revolutionizing the online buying and selling experience for mobile devices in Pakistan. We equip users with valuable insights and resources they need to make smart decisions, all while creating a connected and inclusive community in the mobile marketplace. So, what are you waiting for? Let’s start shopping today!

                                    {fullContent && (
                                        <button onClick={() => setFullContent(!fullContent)}>
                                            <FaChevronUp />
                                        </button>
                                    )}
                                </p>
                            </>
                        )}
                        {/* <StyledButton className="secondary" onClick={() => setFullContent(!fullContent)}>{fullContent == false ? 'Read More' : "Read Less"}</StyledButton> */}

                        {/* <button className="themeBtn">
                            read more
                        </button> */}
                    </div>
                </section>
                <section className="BlogsSec secPadding">
                    <div className="content_wrap">
                        <SectionHeading text="recently added blogs" />
                        <BlogSection />
                    </div>
                </section>
            </main>
            <AppDownloadModal modalVisible={modalVisible} />
        </div>
    );
}
