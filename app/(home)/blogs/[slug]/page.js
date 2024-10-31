

import BlogsDetailsLayout from "@/app-ui/BlogsDetailsLayout/BlogsDetailsLayout";
import PageBanner from "@/app-ui/PageBanner/PageBanner";
import AddBanner from "@/app-ui/AddBanner/AddBanner";

const Page = ({ params: { slug } }) => {
  
  return (
    <>
      {/*<PageBanner title="Blog Detail" currentPage="Blog Detail" />*/}
      <div className="blogs_details_wrap">
        <div className="content_wrap">
         <BlogsDetailsLayout slug={slug}/>
          <section className="bannerSec secPadding">
            <div className="content_wrap">
              <AddBanner/>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;


export async function generateMetadata(props) {

  const {
    params: {
      slug
    },
  } = props;

  let getTitle =
  slug.slice(0, 1).toUpperCase() + slug.split("-").join(" ").slice(1);

  return {
    title: `${getTitle} | Mobilez Market`,
  };
}

