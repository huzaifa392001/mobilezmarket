'use client'
import React, { useEffect } from 'react'
import BlogCard from '../BlogCard/BlogCard'
import Link from 'next/link'

function BlogsSection(props) {
    useEffect(() => {
        console.log("blog Section props=> ", props?.blogs)
    }, [])
    return (
        <section className={`blogsSec ${props?.className || ''}`}>
            <div className="containerCont">
                <h2 className="secHeading">
                    {props.mainHeading || 'Section Title'}
                </h2>
                {props.banner && (
                    <div className="banner">
                        <figure>
                            <img src={props?.banner} alt="" />
                        </figure>
                    </div>
                )}
                <div className={`blogsRow ${props?.rowClass || 'grid-cols-2'}`}>
                    {props?.blogs ? (
                        props?.blogs?.map((blog, index) => (
                            <BlogCard
                                slug={blog?.slug}
                                key={blog?.id || index} // Use a unique key, such as blog id or fallback to index
                                heading={blog?.title}
                                img={blog?.thumbnail_url}
                                id={blog?.id}
                                readMore
                                className={props?.cardClass}
                            />
                        ))
                    ) : (
                        props?.loading?.map((_, index) => (
                            <BlogCard
                                loading
                                key={`loading-${index}`} // Unique key for each loading card
                                className={props?.cardClass}
                            />
                        ))
                    )}
                </div>
                {props.banner2nd && (
                    <div className="banner">
                        <figure>
                            <img src={props?.banner2nd} alt="" />
                        </figure>
                    </div>
                )}
                {!props?.noReadMore && props.blogs?.length >= 8 && (
                    <Link className='themeBtn lg' href=''>
                        See More
                    </Link>
                )}
            </div>
        </section>
    )
}

export default BlogsSection
