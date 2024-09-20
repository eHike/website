import React from "react";
import styles from "./Home.module.css";

const Intro = () => {
  return (
    <section className="text-center max-w-[600px] mx-auto ">
      <p
        className={`text-[40px] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#fff] to-[#AEB4B5] ${styles.anim_fadeup}`}
      >
        Unlock Your Digital Potential
      </p>
      <p className={`text-[40px] font-bold ${styles.anim_fadeup}`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#fff] to-[#AEB4B5]">
          With{" "}
        </span>

        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#723FCD] to-[#DB9FF5]">
          eHike
        </span>
      </p>
      <p className={`text-[15px]  text-gray-400 ${styles.anim_fadeup}`}>
        Get Your Bussinss A Online Hike
      </p>
      {/* <button
        className={`${styles.anim_fadeup} m-5 rounded-[100px] bg-white p-3 px-10 text-blue-950 `}
      >
        Get Started
      </button> */}
      <button className="relative mt-6 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-base font-medium text-white backdrop-blur-3xl">
          Border Magic
        </span>
      </button>
    </section>
  );
};

export default Intro;
