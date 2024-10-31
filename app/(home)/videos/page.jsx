import PageBanner from "@/app-ui/PageBanner/PageBanner";
import VideosLayout from "@/app-ui/VideosLayout/VideosLayout";
import AddBanner from "@/app-ui/AddBanner/AddBanner";
import React from "react";

const Page = () => {
    return (
        <div className="videos_wrapper">
            <PageBanner title="Videos"/>
            <VideosLayout/>
            <section className="bannerSec secPadding">
                <div className="content_wrap">
                    <AddBanner/>
                </div>
            </section>
        </div>
    );
};

export default Page;

export const metadata = {
    title: "Vidoes Mobilez Market - Best Mobile Phone Marketplace in Pakistan",
    description: "Generated by create next app",
    alternates: {
        canonical: "https://www.mobilezmarket.com/videos",
    },
};