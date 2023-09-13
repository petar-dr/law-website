import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";
import BlogPage from "./BlogPage";
import AboutPage from "./AboutPage";
import TeamPage from "./TeamPage";
import ContactPage from "./ContactPage";
import LawyerPage from "./LawyerPage";

function PageContent() {
  return (
    <main className="pageContent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/lawyer" element={<LawyerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default PageContent;
