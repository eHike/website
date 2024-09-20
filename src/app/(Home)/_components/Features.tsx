"use client";
import React, { useEffect } from "react";
import { easeIn, stagger, useAnimate, useInView } from "framer-motion";
// import { tr } from "framer-motion/client";

const Features = () => {
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
      <p className="text-[30px] font-bold anim_fadeup leading-[50px] text-center mt-32">
        Features
      </p>
      <br />
      <div className="flex flex-wrap justify-center gap-x-5">
        <div
          className="anim_fadeup w-[450px] max-w-[450px] mx-4 my-4 min-w-[280px] h-[300px] border-[1px] border-blue-300 border-opacity-40 rounded-lg"
          style={{ backgroundColor: "rgb(2, 2, 24)" }}
        >
          {" "}
          <div className="w-auto h-auto max-w-[300px]  text-center relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {" "}
            <p className="text-3xl font-bold">Feature1</p> <br />{" "}
            <p>
              {" "}
              From portfolio websites to comprehensive brand platforms, we offer
              end-to-end solutions tailored to your requirements.
            </p>{" "}
          </div>{" "}
        </div>
        <div
          className="anim_fadeup w-[450px] max-w-[450px] mx-4 my-4 min-w-[280px] h-[300px] border-[1px] border-blue-300 border-opacity-40 rounded-lg"
          style={{ backgroundColor: "rgb(2, 2, 24)" }}
        >
          <div className="w-auto h-auto max-w-[300px]  text-center relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {" "}
            <p className="text-3xl font-bold">Feature1</p> <br />{" "}
            <p>
              {" "}
              From portfolio websites to comprehensive brand platforms, we offer
              end-to-end solutions tailored to your requirements.
            </p>{" "}
          </div>{" "}
        </div>
        <div
          className="anim_fadeup w-[450px] max-w-[450px] mx-4 my-4 min-w-[280px] h-[300px] border-[1px] border-blue-300 border-opacity-40 rounded-lg"
          style={{ backgroundColor: "rgb(2, 2, 24)" }}
        >
          <div className="w-auto h-auto max-w-[300px]  text-center relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {" "}
            <p className="text-3xl font-bold">Feature1</p> <br />{" "}
            <p>
              {" "}
              From portfolio websites to comprehensive brand platforms, we offer
              end-to-end solutions tailored to your requirements.
            </p>{" "}
          </div>{" "}
        </div>
        <div
          className="anim_fadeup w-[450px] max-w-[450px] mx-4 my-4 min-w-[280px] h-[300px] border-[1px] border-blue-300 border-opacity-40 rounded-lg"
          style={{ backgroundColor: "rgb(2, 2, 24)" }}
        >
          <div className="w-auto h-auto max-w-[300px]  text-center relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {" "}
            <p className="text-3xl font-bold">Feature1</p> <br />{" "}
            <p>
              {" "}
              From portfolio websites to comprehensive brand platforms, we offer
              end-to-end solutions tailored to your requirements.
            </p>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Features;
