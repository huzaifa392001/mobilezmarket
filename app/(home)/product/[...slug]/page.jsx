import { notFound } from 'next/navigation';
import ProductDetailsLayout from "@/app-ui/ProductDetailsLayout/ProductDetailsLayout";
import axios from 'axios';

const Page = ({ params: { slug } }) => {
    return (
        <>
            <section className="product_details">
                <ProductDetailsLayout slug={slug} />
            </section>
        </>
    );
};

export default Page;

export async function generateMetadata(props) {
    const {
        params: {
            slug: [id, title],
        },
    } = props;

    // Modify title
    let getTitle = '';


    console.log('title=> ', getTitle)
    let product;
    try {
        const response = await fetch(`https://api.mobilezmarket.com/api/details/${id}/${title}`);

        if (!response.ok) {
            // Trigger a 404 page if product data is not found
            return notFound();
        }

        // If response is OK, parse JSON data
        product = await response.json();
        product = product.details;
        getTitle = `${product?.product_type.toLowerCase() === 'used' ? product?.product_type + " " : ""} ${product?.accessories_title ? product?.accessories_title : ""} ${product?.brand ? product?.brand : ""} ${product?.model ? product?.model : ""} in ${product?.user?.city ? product?.user?.city : ''}`;
        console.log("getTitle from inside try=> ", product)
    } catch (error) {
        console.error("Error fetching product data:", error);
        return notFound(); // Redirect to 404 on fetch error
    }

    // Product details
    let productImage = `https://api.mobilezmarket.com/images/${product?.productimages[0].thumbnail_url}`;
    let productTitle = product?.accessories_title ? product?.accessories_title : `${product?.brand} ${product?.model}`;

    let og = {
        title: productTitle,
        description: product?.description,
        images: [
            {
                url: productImage,
                width: 240,
                height: 240,
                alt: "Mobilez Market",
            },
        ],
        site_name: "Mobilez Market",
    };

    return {
        title: `${getTitle} | Mobilez Market`,
        description: product?.description,
        openGraph: {
            ...og
        },
        alternates: {
            canonical: `https://www.mobilezmarket.com/${product?.id}/${product?.slug}`,
        }
    };
}
