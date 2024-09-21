"use client";
import React, { useEffect } from "react";
import { easeIn, stagger, useAnimate, useInView } from "framer-motion";

import { WobbleCard } from "./WobbleCard";
const Projects = () => {
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
    <div>
      <div ref={scope} className="text-center mt-5 h-[100vh]">
        <div className=" flex flex-col justify-center items-center">
          <p className="anim_fadeup text-[30px] font-bold anim_fadeup leading-[50px] text-3xl md:text-5xl ">
            Tech that{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#FB913D] to-[#FB7284]">
              impact
            </span>
          </p>

          <p className="mt-10 text-[15px] max-w-4xl anim_fadeup leading-7 text-gray-400">
            Elevate your online presence with bespoke websites tailored to your
            needs.From sleek design to seamless functionality, we blend
            innovation with ease to craft digital solutions that captivate and
            convert. Let&apos;s create something extraordinary together! We
            offer two tiers of website solutions to suit your unique needs.
          </p>
        </div>
        <br />

        <div className="flex justify-around flex-wrap mt-10">
          <div className="anim_fadeup  max-w-[450px] min-w-[280px] ">
            <WobbleCard containerClassName="relative" className="relative ">
              <div className="space-y-5 px-6 pt-2">
                <h3 className="text-center font-heading text-2xl  leading-normal tracking-tight text-foreground lg:text-3xl">
                  Simple Website
                </h3>
                <p className="lg:text-md text-center text-foreground">
                  Our Simple Website package offers a straightforward solution
                  for establishing your online presence. Perfect for startups
                  and small businesses, it delivers clean design and intuitive
                  navigation without overwhelming complexity.
                </p>
              </div>
            </WobbleCard>
          </div>

          <div className="anim_fadeup max-w-[450px] min-w-[280px]">
            <WobbleCard containerClassName="relative" className="relative ">
              <div className="space-y-5 px-6 pt-2">
                <h3 className="text-center font-heading text-2xl  leading-normal tracking-tight text-foreground lg:text-3xl">
                  Advance Website
                </h3>
                <p className="lg:text-md text-center text-foreground">
                  Elevate your digital presence with our Advanced Website
                  package. Packed with dynamic features and advanced
                  functionality, it empowers businesses to engage their audience
                  and drive conversions with confidence.
                </p>
              </div>
            </WobbleCard>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Projects;
