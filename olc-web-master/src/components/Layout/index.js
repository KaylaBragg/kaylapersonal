import { Box } from "@mui/material";
import React from "react";

// Header
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, startFree }) => {
  return (
    <>
      <Header startFree={startFree} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
