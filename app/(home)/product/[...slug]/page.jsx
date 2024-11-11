import ProductDetailsLayout from "@/app-ui/ProductDetailsLayout/ProductDetailsLayout";

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
    let getTitle = title.slice(0, title.indexOf('iid')).trim().replace(/-/g, ' ');
    getTitle = getTitle.slice(0, 1).toUpperCase() + getTitle.slice(1);

    const product = await fetch(`https://api.mobilezmarket.com/api/details/${id}/${title}`).then((res) => res.json());

    // Product details
    let productImage = `https://api.mobilezmarket.com/images/${product?.details?.productimages[0].thumbnail_url}`;
    let productTitle = product?.details?.accessories_title ? product?.details?.accessories_title : `${product?.details?.brand} ${product?.details?.model}`;

    let og = {
        title: productTitle,
        description: product?.details?.description,
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

    // Generate JSON-LD schema
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productTitle,
        "image": productImage,
        "description": product?.details?.description,
        "sku": product?.details?.sku || id,
        "brand": {
            "@type": "Brand",
            "name": product?.details?.brand
        },
        "offers": {
            "@type": "Offer",
            "url": `https://www.mobilezmarket.com/${product?.id}/${product?.slug}`,
            "priceCurrency": "PKR",
            "price": product?.details?.price,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
        }
    };

    return {
        title: `${getTitle} | Mobilez Market`,
        description: product?.details?.description,
        openGraph: {
            ...og
        },
        alternates: {
            canonical: `https://www.mobilezmarket.com/${product?.id}/${product?.slug}`,
        },
        additionalMetaTags: [
            {
                tagName: 'script',
                innerHTML: JSON.stringify(schemaData),
                attributes: {
                    type: 'application/ld+json',
                    id:"schema"
                }
            }
        ]
    };
}
