'use client';

import api from "@/services/api";
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import BlogCard from '../BlogCard/BlogCard';


function BlogsFooter() {
    const [blogs, setBlogs] = useState();

    const getBlogs = async () => {
        try {
            let res = await api.get("/blogs").then((res) => {
                setBlogs(res?.data?.blogs?.data)
            });
        }
        catch (error) {
            console.error('Error')
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);
    // Formik hook to manage form state
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            // Handle form submission (e.g., send email or save data)
            console.log('Form submitted with:', values);
            resetForm(); // Reset the form after submission
        },
    });

    return (
        <footer>
            <div className="containerCont">
                <div className="footerRow">
                    <div className="footerCell">
                        <div className="logoCont">
                            <figure className="logo">
                                <Image
                                    src={'/blogs/images/logo.png'}
                                    alt='Website Logo'
                                    width={125}
                                    height={52}
                                />
                            </figure>
                            <p>
                                Mobilez Market is Pakistan's #1 buy-and-sell marketplace for smartphones, tablets, and more.
                            </p>
                            <p>
                                Explore the best devices and deals only with Mobilez Market!
                            </p>
                            <ul className="socialList">
                                <li>
                                    <Link href=''>
                                        <FaFacebookF />
                                    </Link>
                                </li>
                                <li>
                                    <Link href=''>
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link href=''>
                                        <FaLinkedinIn />
                                    </Link>
                                </li>
                                <li>
                                    <Link href=''>
                                        <FaYoutube />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerCell">
                        <div className="listCont">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/blogs">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="/devices">Find My Device</Link>
                                </li>
                                <li>
                                    <Link href="/careers">Careers</Link>
                                </li>
                                <li>
                                    <Link href="/videos">Videos</Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">Privacy</Link>
                                </li>
                                <li>
                                    <Link href="/terms-conditions">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerCell">
                        <div className='listCont'>
                            <h3>
                                Trending Categories
                            </h3>
                            <ul>
                                <li>
                                    <Link href="/devices/cat-mobile">Mobile Phones</Link>
                                </li>
                                <li>
                                    <Link href="/devices/cat-tablet">Tablets</Link>
                                </li>
                                <li>
                                    <Link href="/devices/cat-watch">Smart Watches</Link>
                                </li>
                                <li>
                                    <Link href="/devices/cat-accessories">Mobile Accessories</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerCell">
                        <div className='listCont'>
                            <h3>
                                Trending Categories
                            </h3>
                            <ul className='blogsList'>
                                {blogs ? (
                                    blogs?.slice(0, 4).map((blog, index) => (
                                        <BlogCard
                                            slug={blog?.slug}
                                            key={blog?.id || index}
                                            className={"mini"}
                                            heading={blog?.title ?? 'Lorem Ipsum'}
                                            img={blog?.thumbnail_image}
                                        />
                                    ))
                                ) : (
                                    Array(3).fill().map((_, index) => (
                                        <BlogCard key={index} loading className={'mini'} />
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="footerCell">
                        <div className="listCont">
                            <h3>Subscribe to our Newsletter</h3>
                            <p>Be the first to get exclusive offers and the latest news</p>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="inputCont">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
                                    />
                                    <button type="submit">
                                        <FaPaperPlane />
                                    </button>
                                </div>
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="error-message">{formik.errors.email}</div>
                                ) : null}
                            </form>

                            <h3>Download our App Now</h3>
                            <div className="btnCont">
                                <Link
                                    href={`https://play.google.com/store/apps/details?id=com.wizard.mobilez&pcampaignid=web_share`}
                                    target="_blank" className="downloadBtn google"
                                >
                                    <Image
                                        src="/google-play.svg"
                                        alt="Google Play Store Button"
                                        width={150}
                                        height={50}
                                    />
                                </Link>
                                <Link
                                    href={`https://apps.apple.com/pk/app/mobilez-market/id6450546695`}
                                    target="_blank" className="downloadBtn apple"
                                >
                                    <Image
                                        src="/apple-store.svg"
                                        alt="Apple App Store Button"
                                        width={150}
                                        height={50}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default BlogsFooter;
