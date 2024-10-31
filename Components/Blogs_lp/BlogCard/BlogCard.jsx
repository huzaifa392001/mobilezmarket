import React from 'react'
import './BlogCard.scss'
import Link from 'next/link'
import Image from 'next/image'
import { getImage } from '@/utils/helper'

function BlogCard(props) {
    return (
        <>
            {props?.loading ? (
                <div className={`blogCard loading ${props.className}`}>
                    <figure>
                        <div className="imgCont">

                        </div>
                    </figure>
                    <div className="content">
                        <span className="contentLine" />
                        <span className="contentLine" />
                        <span className="contentLine" />
                        <span className="contentLine" />
                        <span className="contentLine" />
                    </div>
                </div>
            ) : (
                <Link className={`blogCard ${props.className}`} href={{pathname: `/us/blogs/${props?.slug}`}}>
                    <figure>
                        {props?.img ? (
                            <Image src={getImage(props.img) || '/blogs/images/blogimg.jpg'} alt={'Image of ' + props.heading || ''} fill />
                        ) : (
                            <div className="imgCont">

                            </div>
                        )}

                    </figure>
                    <div className="content">
                        {props.mainBlog && (
                            <h1>
                                {props.heading || 'Lorem ipsum dolor sit amet consectetur.'}
                            </h1>
                        )}

                        {!props.mainBlog && (
                            <h3>{props.heading || 'Lorem ipsum dolor sit amet consectetur.'}</h3>
                        )}
                        {props.rating && (
                            <div className="ratingCont">
                                <div
                                    className="rating"
                                    style={{ '--width': `${props.rating * 100}%` }} // Convert 0-1 rating to 0-100%
                                />
                                <span>
                                    {props.rating || ''}
                                </span>
                            </div>
                        )}
                        {props.readMore && props.blogs?.length >= 8 && (
                            <span className="linkBtn">Read More</span>
                        )}
                        {props.minDescription && (
                            <p className={`${props.mainBlog ?? 'mainPara'}`}>
                                {props.minDescription || ""}
                            </p>
                        )}
                    </div>
                </Link>
            )}
        </>
    )
}

export default BlogCard