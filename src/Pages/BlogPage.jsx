import React from "react";
import IntroSection from "../components/Sections/IntroSection";
import BlogShort from "../components/Pages components/Blog page/BlogShort";

function BlogPage() {
  const pageTitle = "Blog";
  return (
    <div className="blogPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../assets/img/Sections/IntroImg/Blog/blog1300x867.jpg")}
      />
      <div className="blogPage__mainContent">
        <BlogShort />
        <BlogShort />
      </div>
    </div>
  );
}

export default BlogPage;
