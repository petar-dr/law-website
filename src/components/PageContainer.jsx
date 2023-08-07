import React from "react";
import Navbar from "./Navbar components/Navbar";
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
