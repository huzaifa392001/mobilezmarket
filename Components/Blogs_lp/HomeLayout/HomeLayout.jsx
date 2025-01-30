'use client';

import React, { useEffect, useState } from 'react';
import api from "@/services/api";
import BlogCard from '../BlogCard/BlogCard';
import BlogsSection from '../BlogsSection/BlogsSection';
import { useSelector } from 'react-redux';
import { SET_CATEGORIES } from '@/Redux/Slices/General';
import { store } from '@/Redux/Store';

function HomeLayout() {
    const [mainBlog, setMainBlog] = useState();
    const [blogs, setBlogs] = useState();
    const categories = useSelector((state) => state.general.categories);

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const getBlogs = async () => {
        try {
            const res = await api.get("/us-blogs-category");

            const apiData = res?.data; // Assuming res.data contains the array of categories

            // Check if the response is an array
            if (Array.isArray(apiData)) {
                // Dispatch categories as full objects (instead of just names)
                store.dispatch(SET_CATEGORIES(apiData)); // Push entire category objects

                // Flatten all blogs and set them in the state
                const blogsArray = apiData.flatMap((item) => item.blogs);
                setMainBlog(blogsArray[0]); // First blog as main
                setBlogs(blogsArray); // All blogs in a single array
                console.log('blogs=> ', res)
            } else {
                console.error("Unexpected API response structure", apiData);
            }
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
                            // rating={'0.8'}
                            id={mainBlog?.id}
                            slug={mainBlog?.slug}
                            img={mainBlog?.thumbnail_url}
                        />
                    </div>
                    <div className="blogRow">
                        {blogs ? (
                            blogs.slice(1, 4).map((blog, index) => (
                                <BlogCard
                                    slug={blog?.slug}
                                    key={index}
                                    heading={blog?.title}
                                    id={blog?.id}
                                    img={blog?.thumbnail_url}
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

            {categories?.map((section, index) => (
                <BlogsSection
                    key={index}
                    blogs={section.blogs} // Pass the blogs for this category
                    loading={[1, 2, 3, 4]} // Placeholder loading state
                    mainHeading={section.category} // Use the category as the section heading
                    banner={index === 1 ? '/blogs/images/addBan.webp' : null} // Optional banner for specific sections
                    rowClass={index === 1 && isLargeScreen || index === 3 && isLargeScreen ? 'col4' : ''} // Apply col4 only for the first index
                    cardClass={index === 1 || index === 3 ? 'box' : 'small'} // Apply different styles conditionally
                    className={index === 3 && 'colored'}
                />
            ))}


            {/* <BlogsSection
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
            /> */}
        </>
    );
}

export default HomeLayout;
