"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowDownToLine } from "lucide-react";

import ImgLogoWhite from "@/assets/images/logo-white.png";

export const SectionMain = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-black w-full h-full text-white pt-16">
      <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden bg-black/80">
        <video
          src="/assets/videos/humanly-possible.mp4"
          muted
          autoPlay
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/80" />
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}
        className="flex flex-col justify-center items-center z-20"
      >
        <div>
          <Image src={ImgLogoWhite} alt="nxg-white" className="max-w-[80vw]" />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-8 p-4 hover:text-accent duration-150 cursor-pointer">
          <motion.div
            initial={{
              transform: "translate(0, 0)",
              opacity: 0,
            }}
            animate={{
              transform: "translate(0, 10px)",
              opacity: 1,
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-8 h-8" />
          </motion.div>
          <div className="uppercase text-sm font-light tracking-wider">
            Scroll Down
          </div>
        </div>
      </motion.div>
    </div>
  );
};
