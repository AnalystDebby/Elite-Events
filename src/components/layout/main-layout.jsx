import React from "react";
import { Nav } from "../nav";
import { Footer } from "../footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
