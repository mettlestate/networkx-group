"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ImgMettlestate from "@/assets/images/mettlestate.png";
import { ArrowUpRight, Mail } from "lucide-react";

import ImgBgMettlestate from "@/assets/images/mettlestate-bg.webp";

export const SectionMettlestate = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center bg-[#111] w-full h-full pt-16"
      style={{
        backgroundImage: `url("${ImgBgMettlestate.src}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/80" />
      <div className="container flex flex-col gap-16 z-20">
        <div className="flex w-full flex-col gap-8 p-8 justify-center items-center">
          <motion.div
            initial={{
              opacity: 0,
              translateY: "-100px",
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="award-item-logo"
          >
            <Image
              src={ImgMettlestate}
              alt="mettlestate"
              className=" w-auto h-16"
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              translateY: "100px",
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="flex w-full flex-col gap-8 p-8 justify-center items-center"
          >
            <div className="text-2xl font-bold">Esports and Gaming</div>
            <div className="text-white/75 text-center max-w-lg text-lg">
              The heart of African gaming as the largest esports platform on the
              continent, who work hand in hand with their dedicated community of
              over 300 000 subscribed players
            </div>
            <div className="flex flex-col md:flex-row gap-4 text-white text-lg">
              <a
                href={`mailto:info@mettlestate.com`}
                className="inline-flex items-center"
                target="_blank"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@mettlestate.com
              </a>
              <a
                href="https://mettlestate.com"
                className="inline-flex items-center"
                target="_blank"
              >
                <ArrowUpRight className="w-4 h-4 mr-2" />
                mettlestate.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
