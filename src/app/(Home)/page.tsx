import React from "react";
import styles from "./components/Home.module.css";
import Intro from "./components/Intro";
import IntroImage from "./components/IntroImage";
import Projects from "./components/Projects";
import Stories from "./components/Stories";
import Features from "./components/Features";
import Cookie from "./components/Cookie";
// import { CardAnimated } from './_components/CardAnimated'
const page = () => {
  return (
    <div className={` ${styles.main} `}>
      {" "}
      <div className={`${styles.mainin}`}>
        <div className="mx-5">
          <Intro />
          <IntroImage />
          <Projects />
          <Stories />
          <Features />
          <Cookie />
        </div>
      </div>
    </div>
  );
};

export default page;
