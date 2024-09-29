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
      <p className={`text-4xl md:text-6xl  font-bold ${styles.anim_fadeup}`}>
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
      <a
        id="transform-anim"
        className={`${styles.anim_fadeup} anim_fadeup opacity-1 transform-none font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary-gradient rounded-full bg-gradient-to-r from-[#713ECC] to-[#C68CED] hover:bg-primary-gradient-2 hover:shadow-[0px_4px_30px] hover:shadow-[rgb(247_176_253_/_50%)] transition-shadow duration-300 [&amp;_.highlight]:ml-2 group mt-8 flex h-12 items-center justify-center space-x-5 overflow-hidden p-[.25rem_.5rem_.25rem_1.3rem] text-base`}
        href="/"
      >
        <span className="text-white">Get started </span>
        <span className="right-0  inline-block translate-x-0 rounded-full bg-white/50 p-2 transition-all duration-300  group-hover:translate-x-2">
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
            className="lucide lucide-chevron-right size-6 text-black/60 "
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </a>
    </section>
  );
};

export default Intro;
