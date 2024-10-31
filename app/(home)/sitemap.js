import axios from 'axios';

const fetchSitemapData = async () => {
    try {
        const response = await axios.get('https://api.mobilezmarket.com/api/sitemap-data');
        if (response.data.status) {
            return response.data.data; // Return the entire data object containing products, blogs, brands, and cities
        }
        return {};
    } catch (error) {
        console.error('Failed to fetch sitemap data:', error);
        return {};
    }
};

const getStaticSitemapEntries = () => {
    const lastModified = "2024-01-25T02:18:28+00:00";
    return [
        {url: 'https://www.mobilezmarket.com/', lastModified, changeFrequency: 'Daily', priority: 1.00},
        {url: 'https://www.mobilezmarket.com/devices', lastModified, changeFrequency: 'Daily', priority: 1},
        {url: 'https://www.mobilezmarket.com/devices/cat-mobile', lastModified, changeFrequency: 'Daily', priority: 1},
        {url: 'https://www.mobilezmarket.com/devices/cat-tablet', lastModified, changeFrequency: 'Daily', priority: 1},
        {url: 'https://www.mobilezmarket.com/devices/cat-watch', lastModified, changeFrequency: 'Daily', priority: 1},
        {url: 'https://www.mobilezmarket.com/devices/cat-accessories', lastModified, changeFrequency: 'Daily', priority: 1},
        {url: 'https://www.mobilezmarket.com/about', lastModified, changeFrequency: 'Monthly', priority: 0.80},
        {url: 'https://www.mobilezmarket.com/blogs', lastModified, changeFrequency: 'Monthly', priority: 0.80},
        {url: 'https://www.mobilezmarket.com/videos', lastModified, changeFrequency: 'Monthly', priority: 0.80},
        {url: 'https://www.mobilezmarket.com/contact', lastModified, changeFrequency: 'Monthly', priority: 0.80},
        {url: 'https://www.mobilezmarket.com/careers', lastModified, changeFrequency: 'Monthly', priority: 0.80},
        {url: 'https://www.mobilezmarket.com/privacy-policy', lastModified, changeFrequency: 'Monthly', priority: 0.80},
        {url: 'https://www.mobilezmarket.com/terms-conditions', lastModified, changeFrequency: 'Monthly', priority: 0.80}
    ];
};

const createSitemapEntries = (items, baseUrl, changeFrequency, priority) => {
    return items.map(item => ({
        url: `${baseUrl}${item.url ? item.url : item.city_name ? item.city_name : item.brand_name ? item.brand_name : ''}`,
        lastModified: new Date(item.updated_at).toISOString(),
        changeFrequency, // Use the provided value
        priority // Use the provided value
    }));
};

const sitemap = async () => {
    const data = await fetchSitemapData();
    const staticEntries = getStaticSitemapEntries();

    const productsEntries = createSitemapEntries(data.products || [], 'https://www.mobilezmarket.com/', 'Weekly', 0.9);
    const blogsEntries = createSitemapEntries(data.blogs || [], 'https://www.mobilezmarket.com/', 'Monthly', 0.9);
    const brandsEntries = createSitemapEntries(data.brands || [], 'https://www.mobilezmarket.com/', 'Daily', 1);
    const citiesEntries = createSitemapEntries(data.cities || [], 'https://www.mobilezmarket.com/', 'Daily', 1);

    const allEntries = [
        ...staticEntries,
        ...productsEntries,
        ...blogsEntries,
        ...brandsEntries,
        ...citiesEntries,
    ];

    return allEntries;
};

export default sitemap;
