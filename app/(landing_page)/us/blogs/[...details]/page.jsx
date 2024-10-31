import BlogDeatilLayout from '@/Components/Blogs_lp/BlogDeatilLayout/BlogDeatilLayout'
import React from 'react'

function page(params) {
  return (
    <BlogDeatilLayout slug={params.params.details[0]} />
  )
}

export default page

export async function generateMetadata(props) {

  const {
    params: {
      slug
    },
  } = props;

  // let getTitle =
  // slug.slice(0, 1).toUpperCase() + slug.split("-").join(" ").slice(1);

  // return {
  //   title: `${getTitle} | Mobilez Market`,
  // };
}
