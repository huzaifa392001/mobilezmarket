'use client';

import React, { useEffect, useState } from 'react';
import api from "@/services/api";
import BlogCard from '../BlogCard/BlogCard';
import BlogsSection from '../BlogsSection/BlogsSection';

function HomeLayout() {
    const [mainBlog, setMainBlog] = useState();
    const [blogs, setBlogs] = useState();
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const getBlogs = async () => {
        try {
            const res = await api.get("/blogs");
            setMainBlog(res?.data?.blogs?.data[1]);
            setBlogs(res?.data?.blogs?.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsLargeScreen(window.innerWidth > 767);
            }
        };

        handleResize(); // Set initial screen size on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <>
            <section className="mainBanner">
                <div className="containerCont">
                    <div className="mainBlog">
                        <BlogCard
                            className={'main'}
                            mainBlog
                            heading={mainBlog?.title}
                            rating={'0.8'}
                            img={mainBlog?.thumbnail_image}
                        />
                    </div>
                    <div className="blogRow">
                        {blogs ? (
                            blogs.slice(0, 3).map((blog, index) => (
                                <BlogCard
                                    slug={blog?.slug}
                                    key={index}
                                    heading={blog?.title}
                                    img={blog?.thumbnail_image}
                                />
                            ))
                        ) : (
                            Array(3).fill().map((_, index) => (
                                <BlogCard key={index} loading className={'homeBannerCard'} />
                            ))
                        )}
                    </div>
                </div>
            </section>
            <BlogsSection
                blogs={blogs}
                loading={[1, 2, 3, 4]}
                mainHeading={"Phone Reviews"}
                cardClass='small'
            />
            <BlogsSection
                loading={[1, 2, 3, 4]}
                blogs={blogs?.slice(0, 4)}
                mainHeading={"Upcoming Phones"}
                banner={'/blogs/images/addBan.webp'}
                rowClass={isLargeScreen ? 'col4' : ''}
                cardClass={'box'}
            />
            <BlogsSection
                loading={[1, 2, 3, 4]}
                blogs={blogs?.slice(0, 4)}
                mainHeading={"Top 10 List"}
                cardClass='small'
            />
            <BlogsSection
                loading={[1, 2, 3, 4]}
                blogs={blogs?.slice(0, 4)}
                mainHeading={"Top 5 List"}
                cardClass='small'
            />
            <BlogsSection
                loading={[1, 2, 3, 4]}
                blogs={blogs?.slice(0, 4)}
                mainHeading={"Top 5 List"}
                cardClass='small'
            />
            <BlogsSection
                loading={[1, 2, 3, 4]}
                blogs={blogs?.slice(0, 4)}
                mainHeading={"Phone News"}
                banner={'/blogs/images/addBan.webp'}
                rowClass={isLargeScreen ? 'col4' : ''}
                cardClass={'box'}
                banner2nd={'/blogs/images/addBan.webp'}
                className={'colored orange'}
            />
            <BlogsSection
                loading={[1, 2, 3, 4]}
                blogs={blogs?.slice(0, 4)}
                mainHeading={"News"}
                rowClass={isLargeScreen ? 'col4' : ''}
                cardClass={'box'}
            />
            <BlogsSection
                loading={[1, 2, 3, 4]}
                blogs={blogs}
                mainHeading={"Brands"}
                rowClass={isLargeScreen ? 'col4' : ''}
                cardClass={'box'}
                className={'colored '}
            />
        </>
    );
}

export default HomeLayout;
