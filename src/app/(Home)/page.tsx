import React from "react";
import styles from "./_components/Home.module.css";
import Intro from "./_components/Intro";
import IntroImage from "./_components/IntroImage";
import Projects from "./_components/Projects";
import Stories from "./_components/Stories";
import Features from "./_components/Features";
import Cookie from "./_components/Cookie";
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
