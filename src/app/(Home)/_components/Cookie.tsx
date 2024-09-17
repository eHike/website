"use client";
import React, { useEffect, useRef } from "react";
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
      <div className="w-[80vw] min-w-[280px] text-center mx-auto">
        <p className="anim_fadeup text-[30px] font-bold anim_fadeup leading-[50px]">
          Here is a free cookie from me :3
        </p>
        <p className="anim_fadeup max-w-[700px] mx-auto text-[15px] anim_fadeup leading-7 text-gray-400">
          Let's explore the optimal tech stack depending your budget and
          business size with our complimentary consultation service. We will
          assess your needs and recommend a custom solution that maximizes
          efficiency and affordability. Let's discuss your digital strategy
          today for free.
        </p>
      </div>
    </div>
  );
};

export default Cookie;
