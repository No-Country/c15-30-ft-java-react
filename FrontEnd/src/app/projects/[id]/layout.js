import Footer from "@/components/layout/Footer";
import React from "react";

const layout = ({ children }) => {
  return <main className="max-w-screen">{children}
        <Footer /></main>;
};

export default layout;
