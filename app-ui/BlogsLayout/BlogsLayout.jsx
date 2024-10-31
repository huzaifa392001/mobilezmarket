"use client";

import api from "@/services/api";
import {useEffect, useState} from "react";
import BlogCard from "../BlogCard/BlogCard";
import StyledButton from "../StyledButton/StyledButton";

const BlogsLayout = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isloadingMore, setIsLoadingMore] = useState(false);
    const [total, setTotal] = useState(0)

    const getBlogs = async () => {
        let res = await api.get("/blogs");
        setLoading(false);
        setBlogs(res?.data?.blogs?.data);
        setTotal(res?.data?.blogs?.total);
    };

    useEffect(() => {
        getBlogs();
    }, []);

    const onLoadMore = async () => {
        setIsLoadingMore(true);
        let res = await api.get("/blogs", {params: {page: page + 1}});
        setBlogs([...blogs, ...res?.data?.blogs?.data]);
        setPage(page + 1);
        setIsLoadingMore(false);
    }

    return (
        <div className="content_wrap">
            {loading ? (
                <>
                    <div className="blog_skeleton">
                        <div className="image_skeleton"></div>
                        <div className="content_skeleton">
                            <div className="title_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                        </div>
                    </div>
                    <div className="blog_skeleton">
                        <div className="image_skeleton"></div>
                        <div className="content_skeleton">
                            <div className="title_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                        </div>
                    </div>
                    <div className="blog_skeleton">
                        <div className="image_skeleton"></div>
                        <div className="content_skeleton">
                            <div className="title_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                            <div className="desc_skeleton"></div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="blogRow">
                    {blogs?.map((item) => (
                        <BlogCard key={item?.id} data={item}/>
                    ))}
                </div>
            )}
            {

                total > blogs?.length &&
                <div className="pagination_btn_wrapper">
                    <StyledButton loading={isloadingMore} onClick={onLoadMore}>
                        Load More
                    </StyledButton>
                </div>}
        </div>
    );
};

export default BlogsLayout;
