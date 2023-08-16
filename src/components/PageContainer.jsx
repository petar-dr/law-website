import React from "react";
import Navbar from "./Header components/Navbar";
import PageContent from "./PageContent";
import Footer from "./Footer components/Footer";

function PageContainer() {
  return (
    <>
      <Navbar />
      <PageContent />
      <Footer />
    </>
  );
}

export default PageContainer;
