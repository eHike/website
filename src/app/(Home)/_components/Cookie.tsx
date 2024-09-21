"use client";
import React, { useEffect } from "react";
import { easeIn, stagger, useAnimate, useInView } from "framer-motion";

const Cookie = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });
  useEffect(() => {
    if (inView) {
      animate(
        ".anim_fadeup",
        { opacity: [0, 1], y: [20, 0] },
        {
          duration: 0.5,
          ease: easeIn,
          delay: stagger(0.3),
        }
      );
    }
  }, [inView]);
  return (
    <div ref={scope}>
      <div className="w-[80vw] min-w-[280px] min-h-[60vh] text-center mx-auto flex flex-col justify-center items-center">
        <p className="anim_fadeup text-[30px] font-bold anim_fadeup leading-[50px] text-3xl md:text-5xl ">
          Here is a free <br className="sm:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#F6A8D7] to-[#828CF8]">
            cookie :3
          </span>
        </p>
        <p className="mt-5 md:mt-10 anim_fadeup max-w-[700px] mx-auto text-[15px] anim_fadeup leading-7 text-gray-400">
          Let&apos;s explore the optimal tech stack depending your budget and
          business size with our complimentary consultation service. We will
          assess your needs and recommend a custom solution that maximizes
          efficiency and affordability. Let&apos;s discuss your digital strategy
          today for free.
        </p>
        <a
          id="transform-anim"
          className="anim_fadeup opacity-1 transform-none font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary-gradient rounded-full bg-gradient-to-r from-[#713ECC] to-[#EED0FB] hover:bg-primary-gradient-2 hover:shadow-[0px_4px_30px] hover:shadow-[rgb(247_176_253_/_50%)] transition-shadow duration-300 [&amp;_.highlight]:ml-2 group mt-8 flex h-12 items-center justify-center space-x-5 overflow-hidden p-[.25rem_.5rem_.25rem_1.3rem] text-base"
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
      </div>
    </div>
  );
};

export default Cookie;
