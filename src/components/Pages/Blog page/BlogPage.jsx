import React from "react";
import IntroSection from "../../Sections/IntroSection";
import Blog from "./Blog";

function BlogPage() {
  const pageTitle = "Blog";
  return (
    <div className="blogPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../../../assets/img/Blog page/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg")}
      />
      <Blog />
      <Blog />
    </div>
  );
}

export default BlogPage;
