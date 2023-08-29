import React from "react";
import IntroSection from "../../Sections/IntroSection";
import BlogShort from "./BlogShort";

function BlogPage() {
  const pageTitle = "Blog";
  return (
    <div className="blogPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../../../assets/img/Blog page/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg")}
      />
      <div className="blogPage__mainContent">
        <BlogShort />
        <BlogShort />
      </div>
    </div>
  );
}

export default BlogPage;
