import BlogsLayout from "@/app-ui/BlogsLayout/BlogsLayout";
import PageBanner from "@/app-ui/PageBanner/PageBanner";

const Page = () => {
    return (
        <div className="blogs_wrapper">
            <PageBanner title="Tips to Get Best Smartphone in Pakistan" currentPage="Blogs" />
            <BlogsLayout />
        </div>
    );
};

export default Page;

export const metadata = {
    title: "Latest Mobile Phone News & Tips - Mobilez Market",
    description: "Planning to get a new mobile phone or device? Read our news & tips to find the best option for you in the market.",
    alternates: {
        canonical: "https://www.mobilezmarket.com/blogs",
    },
};
