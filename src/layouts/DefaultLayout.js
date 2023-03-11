import React from "react";
import SEO from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.scss";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <SEO title="Reddit Gallery" />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
