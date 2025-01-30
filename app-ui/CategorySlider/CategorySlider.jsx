'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./CategorySlider.scss"

function CategorySlider() {
    const [data] = useState([
        {
            name: "Phones",
            img: '/categories/phone.webp', // Replace with actual image paths
            link: '/categories/phones', // Replace with actual links
        },
        {
            name: "Tablets",
            img: '/categories/tablet.webp',
            link: '/categories/tablets',
        },
        {
            name: "Watches",
            img: '/categories/watch.webp',
            link: '/categories/watches',
        },
        {
            name: "Accessories",
            img: '/categories/accessories.webp',
            link: '/categories/accessories',
        },
        {
            name: "Approved",
            img: '/categories/approved.webp',
            link: '/categories/approved',
        },
        {
            name: "Not-Approved",
            img: '/categories/not-approved.webp',
            link: '/categories/not-approved',
        },
    ]);

    return (
        <div className="row categoryRow">
            {data.map((category, index) => (
                <div className="column" key={index}>
                    <Link href={category.link}>
                        <figure className="imgCont">
                            <Image
                                src={category.img}
                                alt={category.name}
                                width={80}
                                height={80}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </figure>
                        <div className="content">
                            <h3>{category.name}</h3>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default React.memo(CategorySlider);
