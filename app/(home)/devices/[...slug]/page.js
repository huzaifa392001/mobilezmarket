import FiltersLayout from "@/app-ui/FiltersLayout/FiltersLayout";

export default function Page(props) {
    return (
        <div className="find_my_device_wrap">
            <FiltersLayout />
        </div>
    );
}

export async function generateMetadata({ params }) {
    const slugs = params?.slug || [];
    let city, category, brand;

    slugs.forEach((slug) => {
        const cleanSlug = slug.replaceAll("_", " ");
        if (slug.startsWith('c-')) {
            city = cleanSlug.substring(2);
        } else if (slug.startsWith('cat-')) {
            category = cleanSlug.substring(4);
        } else if (slug.startsWith('b-')) {
            brand = cleanSlug.substring(2);
        }
    });

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const formattedCity = city ? capitalize(city) : 'Pakistan';

    const metaTemplates = {
        mobile: {
            title: `Top ${brand ? brand : ''} Mobile Phones For Sale In ${formattedCity} - Mobilez Market`,
            description: "Mobilez Market is a leading platform to find Mobile phones for sale in Pakistan at amazing prices. Check out to get the best mobile phone deals online."
        },
        tablet: {
            title: `Top ${brand ? brand : ''} Tablet Devices For Sale In ${formattedCity} - Mobilez Market`,
            description: "Mobilez Market is a leading platform to find Mobile phones for sale in Pakistan at amazing prices. Check out to get the best mobile phone deals online."
        },
        watch: {
            title: `Top ${brand ? brand : "Smart"} Watches For Sale In ${formattedCity} - Mobilez Market`,
            description: "Mobilez Market is a leading platform to find Mobile phones for sale in Pakistan at amazing prices. Check out to get the best mobile phone deals online."
        },
        accessories: {
            title: `Accessories For Sale In ${formattedCity} - Mobilez Market`,
            description: "Mobilez Market is a leading platform to find Mobile phones for sale in Pakistan at amazing prices. Check out to get the best mobile phone deals online."
        },
        default: {
            title: `Buy ${brand ? capitalize(brand) : 'Latest '} Products In ${formattedCity} - Mobilez Market`,
            description: "Mobilez Market is a leading platform to find Mobile phones for sale in Pakistan at amazing prices. Check out to get the best mobile phone deals online."
        }
    };

    const meta = metaTemplates[category] || metaTemplates.default;

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `https://www.mobilezmarket.com/devices/${slugs.join('/')}`,
        },
    };
}
