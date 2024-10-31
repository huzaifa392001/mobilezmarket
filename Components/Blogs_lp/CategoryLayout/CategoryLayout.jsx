'use client';

import api from "@/services/api";
import React, { useEffect, useState } from 'react';
import BlogsSection from '@/Components/Blogs_lp/BlogsSection/BlogsSection';

function CategoryLayout() {
    const [blogs, setBlogs] = useState();
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const getBlogs = async () => {
        try {
            const res = await api.get("/blogs");
            setBlogs(res?.data?.blogs?.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <BlogsSection
            blogs={blogs} // 24 blog items
            mainHeading={"Phone Reviews"}
            cardClass="small"
            noReadMore
        />
    );
}

export default CategoryLayout;
