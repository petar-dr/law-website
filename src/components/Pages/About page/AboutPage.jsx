import React from "react";
import IntroSection from "../../Sections/IntroSection";
import Organizations from "./Organizations";

function AboutPage() {
  const pageTitle = "About us";
  return (
    <div className="aboutPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../../../assets/img/Sections/IntroImg/About/aboutReSize.jpg")}
      />
      <div className="aboutPage__mainContent">
        <div className="aboutPage__mainContent__text">
          <h2 className="aboutPage__mainContent__text__title">
            Welcome to [Law Firm Name], your trusted legal partner in Belgrade
          </h2>
          <p className="aboutPage__mainContent__text__paraf">
            At [Law Firm Name], we are dedicated to providing exceptional legal
            services to our clients in Belgrade and beyond. With a deep
            understanding of the local legal landscape and a commitment to
            excellence, we offer personalized solutions tailored to meet your
            legal needs.
          </p>
          <p className="aboutPage__mainContent__text__paraf">
            Our team of experienced attorneys brings a wealth of knowledge
            across various legal practice areas. From business and corporate law
            to civil litigation, real estate, and more, we have the expertise to
            navigate even the most complex legal matters.
          </p>
        </div>
        <Organizations/>
      </div>
    </div>
  );
}

export default AboutPage;
