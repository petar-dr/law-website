import React from "react";
import Header from "./Header components/Header";
import PageContent from "./PageContent";
import Footer from "./Footer components/Footer";

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
