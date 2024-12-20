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

    return {
        title: `${getTitle} | Mobilez Market`,
        description: product?.details?.description,
        openGraph: {
            ...og
        },
        alternates: {
            canonical: `https://www.mobilezmarket.com/${product?.id}/${product?.slug}`,
        }
    };
}
