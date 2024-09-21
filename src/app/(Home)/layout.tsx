import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="h-[70px]"></div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
