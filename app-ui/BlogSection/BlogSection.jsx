import React, {useEffect, useState} from "react";
import api from "@/services/api";
import Image from "next/image";
import {getImage} from "../../utils/helper";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";
import Link from "next/link";

const BlogSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
        try {
            setIsLoading(true);
            const res = await api.get("/blogs");
            const allBlogs = res?.data?.blogs?.data || [];
            const firstThreeBlogs = allBlogs.slice(0, 3);
            setBlogs(firstThreeBlogs);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <>
            {isLoading ? (
                <ProductCardSkeleton className={'three_items'}/>
            ) : (
                <div className="blogRow">
                    {blogs.map((blog, index) => (
                        <Link href={{pathname: `/blogs/${blog?.slug}`}} className={'blogCard'} key={index}>
                            <figure>
                                <Image
                                    fill
                                    src={getImage(blog?.thumbnail_image)}
                                    alt="/pixel-8-pro.webp"
                                />
                            </figure>
                            <div className="content">
                                <h2 className={'title'}>{blog?.title}</h2>
                                <div
                                    className="desc"
                                    dangerouslySetInnerHTML={{__html: blog?.description}}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default BlogSection;
