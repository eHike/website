"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { useInView } from "framer-motion";
// import { div, view } from 'framer-motion/client'
import { BorderBeam } from "../../Components/magicui/BorderBeam";
import Image from "next/image";
import tempImage from "@/app/favicon.ico";

const IntroImage = () => {
  const ref = useRef(null);
  const View = useInView(ref, { once: true });
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (View) {
      setInView(true);
    }
  }, [View]);
  return (
    <div className="overflow-hidden h-[70vh]">
      <div
        className={`w-[90vw] text-center mx-auto h-96 ${
          styles.introimage
        } border-[1px] border-blue-300 border-opacity-20 rounded-md ${
          inView && styles.animateimage
        }`}
      >
        <Image
          src={tempImage}
          width={100}
          height={100}
          alt="andlns"
          className=""
        />

        {/* <div className="w-[90%] min-w-[280px] mx-auto mt-20">
          <p className="text-[30px] font-bold anim_fadeup leading-[50px]">
            Tech That Impact
          </p>
          <p
            ref={ref}
            className="text-[15px] anim_fadeup leading-7 text-gray-400"
          >
            Elevate your online presence with bespoke websites tailored to your
            needs.From sleek design to seamless functionality, we blend
            innovation with ease to craft digital solutions that captivate and
            convert. Let&apos;s create something extraordinary together! We
            offer two tiers of website solutions to suit your unique needs.
          </p>
        </div> */}
        <br />
        {inView && <BorderBeam size={250} duration={12} delay={9} />}
      </div>
    </div>
  );
};

export default IntroImage;
