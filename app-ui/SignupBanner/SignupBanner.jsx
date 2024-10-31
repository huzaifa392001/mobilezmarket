import React from "react";
import StyledButton from "../StyledButton/StyledButton";
import {Col, Input, Row} from "antd";
import {FaPaperPlane} from "react-icons/fa";
import Image from "next/image";

const SignupBanner = () => {
    return (
        <section className="newsletterSec">
            <div className="content_wrap">
                <Row>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <div className="content">
                            <h2>Subscribe to our Newsletter</h2>
                            <p>
                                Be the first to get exclusive offers ands the latest news
                            </p>
                            <div className="inputCont">
                                <Input placeholder={"Enter Your Email"}/>
                                <button>
                                    <FaPaperPlane/>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <div className="imgCont">
                            <Image
                                src={'/newsletter.png'}
                                fill
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
        //<div className="signup_banner">
        // <div className="content_wrap">
        // <div>
        // <h1 className="text_light text_center">
        // Sign up for the latest updates
        // </h1>
        // </div>
        // <div>
        // <div className="styled_input">
        // <Input placeholder="Enter your email"/>{" "}
        // <StyledButton className="light w_max_content">
        // Subscribe
        // </StyledButton>
        // </div>
        // </div>
        // </div>
        // </div>
    );
};

export default SignupBanner;
