import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home page/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import BlogPage from "./Pages/Blog page/BlogPage";


function PageContent() {

  return (
    <main className="pageContent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default PageContent;
