"use client";
import React, { useState } from "react";

import styles from "./Home.module.css";
const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div
        className={`z-40 leading-[70px] border-b-[1px]  border-b-blue-300 border-opacity-20  px-10 fixed w-full ${styles.header} `}
      >
        <img
          src="/menuicon.png"
          alt=""
          className="w-7 h-7  inline md:hidden "
          onClick={() => {
            console.log(menu);
            setMenu((menu) => !menu);
          }}
        />

        <div
          className={`md:inline leading-[40px] md:h-auto overflow-hidden transition-all visible ${
            menu == true ? "h-[200px]" : "h-0"
          }`}
        >
          <p className="md:inline text-lg font-bold md:inline">Company</p>
          <a href="" className="md:pl-10 block md:inline">
            link1
          </a>
          <a href="" className="md:pl-7 block md:inline">
            link1
          </a>
          <a href="" className="md:pl-7 block  md:inline">
            link1
          </a>
          <a href="" className="md:pl-7 block md:inline">
            link1
          </a>
        </div>
      </div>
      <div
        className={` ${
          menu ? "h-[270px]" : "h-[70px]"
        }  w-[100vw] backdrop-blur-md fixed top-0 z-30`}
      ></div>
    </div>
  );
};

export default Header;
