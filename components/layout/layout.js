import React from "react";

import ImageSlider from "../slide/slide";
import What from "../what/what";
import Header from "../header/header";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <What />
      {children}
    </div>
  );
};

export default Layout;
