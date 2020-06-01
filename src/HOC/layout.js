import React from "react";
import Header from "../components/Header_Footer/header";
import Footer from "../components/Header_Footer/footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
