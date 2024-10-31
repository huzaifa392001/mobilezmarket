import RSS from 'rss';
import axios from "axios";

const fetchData = async () => {
    try {
        const response = await axios.get('https://api.mobilezmarket.com/api/rss-mobiles', {
            timeout: 50000, // 50 seconds
        });
        if (response?.data?.status) {
            return response?.data?.data?.products ?? [];
        }
        return [];
    } catch (error) {
        console.error('Failed to fetch RSS data:', error);
        return [];
    }
};


export async function GET() {
    const feed = new RSS({
        title: 'Mobilez Market',
        description: 'Meet Mobilez Market, the most trusted mobile phone marketplace in Pakistan to buy and sell the latest smartphones, tablets, and much more. Find the best one here for you!',
        site_url: 'https://www.mobilezmarket.com',
        feed_url: 'https://www.mobilezmarket.com/feed.xml',
        copyright: `All rights reserved ${new Date().getFullYear()}, Mobilez Market`,
        language: 'en',
        pubDate: new Date().toUTCString(),
        image_url: 'https://www.mobilezmarket.com/_next/image?url=%2Flogo.webp&w=256&q=75',
        ttl: 60,
    });


    const data = await fetchData();

    data?.forEach(product => {
        feed.item({
            title: product?.title,
            description: product?.description,
            url: `https://www.mobilezmarket.com/product/${product?.id}/${product?.slug}`,
            date: product?.created_at,
            guid: product?.id,
            enclosure: {
                url: product?.image?.thumbnail_url,
                type: 'image/webp'
            }
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}
