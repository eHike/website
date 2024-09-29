"use client";
import React, { useEffect } from "react";
import { easeIn, stagger, useAnimate, useInView } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/Components/ui/animated-modal";

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
      <div className="w-[80vw] min-w-[280px] h-[80vh] text-center mx-auto flex flex-col justify-center items-center">
        <p className="anim_fadeup text-[40px] font-bold anim_fadeup leading-[50px] text-3xl md:text-5xl ">
          Here is a free{" "}
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
        <Modal>
          <ModalTrigger className=" flex justify-center group/modal-btn">
            <a
              className={`anim_fadeup relative mt-6 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 `}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-base font-medium text-white backdrop-blur-3xl">
                Get Started
              </span>
            </a>
          </ModalTrigger>
          <ModalBody className="">
            <ModalContent className="">
              <h4 className="text-lg md:text-2xl text-neutral-600 font-bold text-center mb-8">
                Book your trip to{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  Bali
                </span>{" "}
                now! ✈️
              </h4>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                {/* form */}
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Cancel
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Book Now
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default Cookie;
