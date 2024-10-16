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
          <p className="md:inline text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#6A3BBF] to-[#FF99D7] ">
            eHike
          </p>
          <a href="#" className="md:ml-10 block md:inline">
            link1
          </a>
          <a href="" className="md:ml-7 block md:inline">
            link1
          </a>
          <a href="" className="md:ml-7 block  md:inline">
            link1
          </a>
          <a href="" className="md:ml-7 block md:inline">
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
