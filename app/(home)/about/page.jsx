import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import PageBanner from "@/app-ui/PageBanner/PageBanner";
import AddBanner from "@/app-ui/AddBanner/AddBanner";
import SectionHeading from "@/app-ui/SectionHeading/SectionHeading";

const Page = () => {
    return (
        <>
            <div className="about_wrap">
                <PageBanner title="About Us" currentPage="about" />
                <div className="content_wrap">
                    <Row>
                        <Col lg={10} md={24}>
                            <figure>
                                <Image
                                    src="/about.webp"
                                    alt="Illustration showing Mobilez Market"
                                    layout="responsive"
                                    width={500}
                                    height={500}
                                />
                            </figure>
                        </Col>
                        <Col lg={14} md={24}>
                            <div className="content">
                                <SectionHeading text="About Mobilez Market" />
                                <p>
                                    Mobilez Market is Pakistan’s #1 web portal for mobile phones,
                                    providing information about various brands, models, features,
                                    prices, and reviews. It also offers a platform for users to
                                    advertise their devices such as mobile phones, tablets, and
                                    smartwatches for sale.
                                </p>
                                <p>
                                    It serves as a hub where buyers and sellers can interact and
                                    offers a comprehensive mobile phone portal with a forum for
                                    discussions and a blog for the latest news in the mobile phone
                                    industry in Pakistan and worldwide.
                                </p>
                                <p>
                                    Our mission is to revolutionize and continuously add value to
                                    the way people buy and sell mobile phones online in Pakistan.
                                    We aim to provide users with the most comprehensive knowledge
                                    of mobile phones in Pakistan and worldwide and foster a sense
                                    of belonging in the mobile phone industry.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <section className="bannerSec secPadding">
                <div className="content_wrap">
                    <AddBanner />
                </div>
            </section>
        </>
    );
};

export default Page;

export const metadata = {
    title: "About Mobilez Market - Best Mobile Phone Marketplace in Pakistan",
    description: "Mobilez Market is Pakistan’s top web portal for mobile phones, offering information, reviews, and a marketplace for buying and selling devices.",
    alternates: {
        canonical: "https://www.mobilezmarket.com/about",
    },
};
