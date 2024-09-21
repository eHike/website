import React from "react";

const Footer = () => {
  return (
    <div className="px-10 border-t-[1px] border-t-blue-300 border-opacity-20 ">
      <section className="leading-[70px] font-bold text-2xl"> Company</section>
      <section className="leading-[70px]"> Iconsss</section>

      <div className="grid md:grid-cols-4  grid-cols-2">
        <div className="leading-10">feature1</div>
        <div className="leading-10">feature1</div>
        <div className="leading-10">feature1</div>
        <div className="leading-10">feature1</div>
        <div className="leading-10 text-gray-600">feature1</div>
        <div className="leading-10 text-gray-600">feature1</div>
        <div className="leading-10 text-gray-600">feature1</div>
        <div className="leading-10 text-gray-600">feature1</div>
      </div>
      <br />
      <br />
      <br />
      <hr className="h-2 w-full border-blue-300 border-opacity-20" />
      <div className="leading-[80px] text-sm">
        © 2024 eHike | <a href="mailto:admin@ehike.in">admin@ehike.in</a>
      </div>
    </div>
  );
};

export default Footer;
