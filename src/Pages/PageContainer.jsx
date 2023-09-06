import React from "react";
import Header from "../components/Header components/Header";
import PageContent from "./PageContent";
import Footer from "../components/Footer components/Footer";

function PageContainer() {
  return (
    <div className="fontGilroy">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default PageContainer;
