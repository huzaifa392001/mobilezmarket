import {getImage} from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const BlogCard = (props) => {
    const {className = "", data = {}} = props;

    return (
        <Link href={{pathname: `/blogs/${data?.slug}`}} className={'blogCard'}>
            <figure>
                <Image
                    fill
                    src={getImage(data?.thumbnail_image)}
                    alt="/pixel-8-pro.webp"
                />
            </figure>
            <div className="content">
                <h2 className={'title'}>{data?.title}</h2>
                <div
                    className="desc"
                    dangerouslySetInnerHTML={{__html: data?.description}}
                />
            </div>
        </Link>
    );
};

BlogCard.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default React.memo(BlogCard);
