"use client";

import React, {useState} from "react";
import {GoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import {useRouter} from "next/navigation";
import api from "@/services/api";

const LoginWithGoogle = () => {
    const router = useRouter();
    const [socialLoginLoading, setSocialLoginLoading] = useState(false);

    const getUserData = async () => {
        try {
            let res = await api.get("/profile");
            if (res?.data?.status) {
                setSocialLoginLoading(false);
                localStorage.setItem("@user", JSON.stringify(res?.data?.profile));
                window.location.href = window.location.origin + "/";
            }
        } catch (error) {
            setSocialLoginLoading(false);
            notification.error({message: error?.response?.data?.message});
        }
    };

    const onGoogleLogin = async (res) => {
        const resDecode = jwtDecode(res?.credential);
        let payload = {
            name: resDecode?.name,
            id: resDecode?.jti,
            email: resDecode?.email,
            avatar: resDecode?.picture,
        };
        try {
            setSocialLoginLoading(true);
            let res = await api.post("/google-login", payload);
            if (res?.data?.status) {
                localStorage.setItem("@token", res?.data?.token);
                getUserData();
            } else {
                setSocialLoginLoading(false);
            }
        } catch (error) {
            console.log("google error", error);
            setSocialLoginLoading(false);
        }
    };

    return (
        <div
            className={`google_login_wrapper ${socialLoginLoading ? "loading" : ""}`}
        >
            <GoogleLogin
                useOneTap={false}
                theme="outline"
                onSuccess={onGoogleLogin}
                onError={() => {
                }}
            />
        </div>
    );
};

export default LoginWithGoogle;
