"use client";

import LoginWithGoogle from "@/app-ui/LoginWithGoogle/LoginWithGoogle";
import StyledButton from "@/app-ui/StyledButton/StyledButton";
import api from "@/services/api";
import { useAuthCheck } from "@/utils/hooks";
import { emailRule, passwordRule } from "@/utils/rules";
import { Checkbox, Col, Form, Input, Row, notification } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
    const router = useRouter();
    const { authCheck } = useAuthCheck();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (authCheck) {
            router.back();
        }
    }, [authCheck, router]);

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            const res = await api.post("/login", values);

            if (res?.data?.status) {
                localStorage.setItem("@token", res?.data?.token);
                localStorage.setItem("@user", JSON.stringify(res?.data?.user));
                window.location.href = window.location.origin + "/";
            } else {
                setLoading(false);
                notification.error({ message: "Login failed. Please try again." });
            }
        } catch (error) {
            setLoading(false);
            notification.error({
                message: error?.response?.data?.message || "An error occurred. Please try again.",
            });
        }
    };

    return (
        <div className="login_wrap">
            <div className="content_wrap">
                <Row gutter={[16, 16]}>
                    <Col className="hide_image_tab" lg={12} md={12} sm={24} xs={24}>
                        <Image
                            height={572}
                            width={528}
                            loading="lazy"
                            layout="responsive"
                            src="/login.webp"
                            alt="Login Illustration"
                        />
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <div className="login_form">
                            <h2>Login</h2>
                            <p>
                                <span className="welcome_text">Welcome back!</span> Please log in to your <br /> account.
                            </p>
                            <Form onFinish={onSubmit} layout="vertical">
                                <Form.Item
                                    name="email"
                                    rules={emailRule}
                                    label="Email"
                                    className="styled_input"
                                >
                                    <Input placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={passwordRule}
                                    label="Password"
                                    className="styled_input password_style"
                                >
                                    <Input.Password placeholder="Password" />
                                </Form.Item>
                                <Form.Item>
                                    <Checkbox>Keep me logged in</Checkbox>
                                </Form.Item>
                                <StyledButton loading={loading} className="primary w_100" type="submit">
                                    Login
                                </StyledButton>
                                <p className="text_center login_or">or</p>
                                <Row gutter={[16, 16]}>
                                    <Col span={24}>
                                        <div className="social_login">
                                            <LoginWithGoogle />
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Page;
