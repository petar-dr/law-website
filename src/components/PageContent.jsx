import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home page/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import BlogPage from "./Pages/Blog page/BlogPage";
import AboutPage from "./Pages/About page/AboutPage";
import TeamPage from "./Pages/Team page/TeamPage";
import ContactPage from "./Pages/Contact page/ContactPage";

function PageContent() {
  return (
    <main className="pageContent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default PageContent;
