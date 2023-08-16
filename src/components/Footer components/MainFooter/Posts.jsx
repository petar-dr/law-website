import React from "react";
import BlogMini from "./BlogMini";

function Posts() {
  return (
    <div className="posts col-12 col-sm-6 col-lg-3">
      <h3 className="posts__title">LAST POSTS</h3>
      <BlogMini />
      <BlogMini />
      <BlogMini />
    </div>
  );
}

export default Posts;
