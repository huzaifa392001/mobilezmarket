"use client";

import api from "@/services/api";
import React, { useEffect, useState } from 'react';
import './BlogDeatilLayout.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { FaComment, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import BlogsSection from '../BlogsSection/BlogsSection';
import { getImage } from "@/utils/helper";

function BlogDeatilLayout(props) {
    const [blogs, setBlogs] = useState();
    const [blog, setBlog] = useState();
    const { slug } = props;
    const router = useRouter(); // Initialize useRouter for navigation

    const getBlogs = async () => {
        try {
            let res = await api.get("/blogs").then((res) => {
                setBlogs(res?.data?.blogs?.data);
            });
        }
        catch (error) {
            console.error('Error');

        }
    };

    const getCurrentBlog = async () => {
        try {
            let res = await api.get(`/blogs-description/${slug}`).then((res) => {
                const blogData = res?.data?.details;
                console.log(res?.data?.status)
                if (res?.data?.status === false) {
                    router.push('/404'); // Redirect to 404 if blog not found
                } else {
                    setBlog(blogData);
                }
            });
        } catch (error) {
            console.error('Error');
            router.push('/404'); // Redirect to 404 if there is an error fetching the blog
        }
    };

    useEffect(() => {
        getBlogs();
        getCurrentBlog();
    }, []);

    // Custom date formatting function
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        return `${month} ${day}, ${year}, ${hours}:${minutes} ${ampm}`;
    }

    return (
        <>
            <section className="blogDeatilSec">
                <div className="containerCont">
                    <h1 className="mainHeading">
                        {blog?.title}
                    </h1>
                    <div className="intractiveBar">
                        <div className="user">
                            <h3>Category</h3>
                            <h4>Posted by <span>Peter</span></h4>
                        </div>
                        <div className="intraction">
                            <button>
                                <FaComment />
                                <span>Comments</span>
                            </button>
                            <div className="social">
                                <Link href=''>
                                    <FaFacebookF />
                                </Link>
                                <Link href=''>
                                    <FaInstagram />
                                </Link>
                                <Link href=''>
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="blogCont">
                        <div className="blog">
                            <figure className="mainImg">
                                <Image src={getImage(blog?.thumbnail_image) || '/blogs/images/mainBlog.jpg'} alt={'Image of ' + blog?.title || ''} fill />
                            </figure>
                            <span>
                                Published: {formatDate(blog?.updated_at)}
                            </span>
                            <div
                                className="details"
                                dangerouslySetInnerHTML={{ __html: blog?.description }}
                            >
                            </div>
                        </div>
                        <div className="longAdd"></div>
                    </div>
                </div>
            </section>
            <section className="userPostSec">
                <div className="containerCont">
                    <div className="user">
                        <figure className="userImg">
                            <Image src="/blogs/images/user.png" alt="" fill />
                        </figure>
                        <div className="info">
                            <h3>Peter Kostadinov</h3>
                            <h4>Mobile Tech News and Reviews Journalist</h4>
                            <p>
                                Peter, an experienced tech enthusiast at PhoneArena, is captivated by all things mobile. His impartial reviews and proficiency in Android systems offer readers valuable insights. Off-duty, he delves into the latest cryptocurrency trends and enjoys sci-fi and video games.
                            </p>
                        </div>
                        <ul className="socials">
                            <li>
                                <Link href="">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <FaTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <BlogsSection
                loading={[1, 2, 3, 4]}
                blogs={blogs?.slice(0, 8)}
                mainHeading={"Popular Stories"}
                cardClass='small'
            />
            <BlogsSection
                loading={[1, 2, 3, 4]}
                blogs={blogs?.slice(0, 8)}
                mainHeading={"Latest News"}
                cardClass='small'
            />
        </>
    );
}

export default BlogDeatilLayout;
