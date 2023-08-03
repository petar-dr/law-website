import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import NotFoundPage from "./NotFoundPage";

function PageContent() {
  return (
    <div className="pageContent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default PageContent;
