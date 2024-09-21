import React from "react";
import styles from "./Home.module.css";

const Intro = () => {
  return (
    <section className="h-[80vh] text-center  mx-auto flex flex-col justify-center items-center">
      <a className="mb-3" href="/">
        <div
          className={`${styles.anim_fadeup} group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40`}
        >
          <div className="absolute inset-0 block size-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-px [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
          <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
            Introducing Bookmark Feature
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </div>
      </a>
      <p
        className={`text-center tracking-tight font-heading md:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#fff] to-[#AEB4B5] ${styles.anim_fadeup}`}
      >
        Unlock Your Online Potential
      </p>
      <p
        className={`text-4xl md:text-6xl mt-5 font-bold ${styles.anim_fadeup}`}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#fff] to-[#AEB4B5]">
          With{" "}
        </span>

        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#723FCD] to-[#DB9FF5]">
          eHike
        </span>
      </p>
      <p className={`text-[15px] mt-6 text-gray-400 ${styles.anim_fadeup}`}>
        Get Your Bussinss A Online Hike
      </p>
      {/* <button
        className={`${styles.anim_fadeup} m-5 rounded-[100px] bg-white p-3 px-10 text-blue-950 `}
      >
        Get Started
      </button> */}
      <button
        className={`${styles.anim_fadeup} relative mt-6 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-primary-gradient-2 hover:shadow-[0px_4px_30px] hover:shadow-[rgb(247_176_253_/_50%)] transition-shadow duration-300`}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-base font-medium text-white backdrop-blur-3xl">
          Get Started
        </span>
      </button>
    </section>
  );
};

export default Intro;
