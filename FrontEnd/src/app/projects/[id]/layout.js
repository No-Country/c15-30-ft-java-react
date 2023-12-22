import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <main className="max-w-screen relaltive">
      <NavBar className={"hidden md:block"}/>
      {children}
      <Footer />
    </main>
  );
};

export default layout;
