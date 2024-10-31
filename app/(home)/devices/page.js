import FiltersLayout from "@/app-ui/FiltersLayout/FiltersLayout";
import AddBanner from "@/app-ui/AddBanner/AddBanner";

export default function Page(props) {
    const search = props?.searchParams?.search;
    return (
        <>
            <div className="find_my_device_wrap">
                <FiltersLayout searchProp={search} />
            </div>
        </>
    );
}

export async function generateMetadata(props) {
    const search = props?.searchParams?.search
    return {
        title: search ? `Buy ${search} in Pakistan | Sell ${search} in Pakistan` : 'Buy & Sell Latest Mobile Devices in Pakistan - Mobilez Market',
        description: "Looking to purchase new or used mobile phones & tablets? Or want to sell one, Mobilez Market is here for you with thousands of latest Mobile devices options near you.",
        alternates: {
            canonical: "https://www.mobilezmarket.com/devices",
        },
    };
}