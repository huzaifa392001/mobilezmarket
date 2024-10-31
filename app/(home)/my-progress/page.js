"use client";

import StyledButton from "@/app-ui/StyledButton/StyledButton";
import api from "@/services/api";
import { Progress } from "antd";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [history, setHistory] = useState(null);
    const [isDuplicate, setIsDuplicate] = useState(false);

    const getUserData = async () => {
        try {
            const res = await api.get("/user-data");
            localStorage.setItem("@user", JSON.stringify(res?.data?.data));
            setUser(res?.data?.data);
            console.log("user=> ", res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getHistory = async () => {
        try {
            setLoading(true);
            const res = await api.get("/user-history");
            setHistory(res.data.history);
            console.log("history=> ", res.data.history);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getUserData();
        getHistory();
        const getUser = JSON.parse(localStorage.getItem("@user"));
        const getDuplicate = JSON.parse(localStorage.getItem("duplicate"));
        setUser(getUser);
        setIsDuplicate(getDuplicate && getDuplicate !== 1);
        console.log("getUser=> ", getUser);
    }, []);

    const onParticipate = async () => {
        try {
            const res = await api.get("/participate-again");
            if (res.data.status) {
                getUserData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onClaimReward = async () => {
        try {
            const res = await api.get("/claim-reward");
            console.log("claim res=> ", res?.data);
            if (res.data.status === 201) {
                getUserData();
                localStorage.setItem("duplicate", 0);
                setIsDuplicate(true);
                window.alert("Some duplicate ads found !");
            } else {
                getUserData();
                localStorage.setItem("duplicate", 1);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="progress_wrap">
            <div className="progress_bar_warapper">
                {['Daily Progress', 'Monthly Progress'].map((title, index) => (
                    <div className="progress" key={index}>
                        <h1>{title}</h1>
                        <Progress
                            size={220}
                            strokeColor={"#083b86"}
                            type="circle"
                            percent={
                                title === 'Daily Progress'
                                    ? Math.round(parseFloat(user?.daily_progress))
                                    : Math.round(parseFloat(user?.progress)) >= 99
                                        ? 100
                                        : Math.round(parseFloat(user?.progress))
                            }
                        />
                    </div>
                ))}
            </div>

            {+user?.days_left === 0 && (
                <div className="progress_header">
                    {Math.round(parseFloat(user?.progress)) >= 99 && (
                        <StyledButton onClick={onClaimReward}>
                            Claim your reward
                        </StyledButton>
                    )}
                    <StyledButton onClick={onParticipate}>
                        Participate again
                    </StyledButton>
                </div>
            )}

            <div className="progress_wrapper">
                <h1>Your History</h1>
                <p>Note: History will be updated every 24 hours</p>

                <div className="styled_table">
                    <div className="th">
                        {['#', 'Date', 'Ads posted', 'Progress'].map((header, index) => (
                            <div className="td" key={index}>{header}</div>
                        ))}
                    </div>
                    {loading ? (
                        <div className="tr">
                            <div className="td">Loading...</div>
                        </div>
                    ) : (
                        history?.map((item, index) => (
                            <div className="tr" key={index}>
                                <div className="td">{index + 1}</div>
                                <div className="td">
                                    {moment(item?.date).subtract(1, "days").format("DD MM YYYY")}
                                </div>
                                <div className="td">{item?.ad_count}</div>
                                <div className="td">
                                    <div className="icon_group">
                                        {[...Array(3)].map((_, iconIndex) => {
                                            let src = "/cross.webp";
                                            if (!isDuplicate) {
                                                src = iconIndex < +item?.ad_count ? "/yes.webp" : src;
                                            } else {
                                                src = iconIndex < item.ad_count - item.duplicate_count
                                                    ? "/yes.webp"
                                                    : iconIndex < item.ad_count
                                                        ? "/warning.webp"
                                                        : src;
                                            }
                                            return (
                                                <Image
                                                    key={iconIndex}
                                                    src={src}
                                                    alt="icon"
                                                    width={20}
                                                    height={20}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                    {!history?.length && !loading && (
                        <div className="tr">
                            <div className="td">No history found</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
