"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ImgNetworkX from "@/assets/images/network-x-grey.png";
import ImgNxd from "@/assets/images/nxd-grey.png";
import ImgMettlestate from "@/assets/images/mettlestate-grey.png";
import ImgLuckyHustle from "@/assets/images/lucky-hustle-grey.png";
import ImgStratFarm from "@/assets/images/strat-farm-grey.png";
import ImgKasiKulcha from "@/assets/images/kasi-kulcha-grey.png";

export const SectionAbout = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-black w-full h-full text-white pt-16">
      <div className="container flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full space-y-8">
            <motion.h1
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
              className="text-6xl text-accent font-bold tracking-wider uppercase"
            >
              NetworkX <br /> Group
            </motion.h1>
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
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold tracking-wider uppercase">
                A family of specialist companies
              </h3>
              <p>
                We work side by side to make sure our clients targets are
                achieved holistically - through experts in different fields.
                From years crossing paths and working together successfully we
                decided to form partnerships with the industry&apos;s strongest.
                We created ways of working which benefit our clients and the
                different needs of each one. Each company has a full inhouse
                team, consisting of the industry&apos;s best in their respective
                fields. We provided multi-layered strategies (From ideas to
                implementation), which have an award-winning proven track record
                of achieving client KPIs.
              </p>
            </motion.div>
          </div>
          <div className="w-full">
            <video src="/assets/videos/humanly-possible.mp4" controls />
          </div>
        </div>
        <div className="flex w-full px-8 py-4 items-center justify-center gap-8 flex-wrap">
          <Image
            src={ImgNetworkX}
            alt="network-x"
            className="max-h-[50px] h-full w-auto"
          />
          <Image
            src={ImgNxd}
            alt="nxd"
            className="max-h-[50px] h-full w-auto"
          />
          <Image
            src={ImgMettlestate}
            alt="mettlestate"
            className="max-h-[50px] h-full w-auto"
          />
          <Image
            src={ImgLuckyHustle}
            alt="lucky-hustle"
            className="max-h-[60px] h-full w-auto"
          />
          <Image
            src={ImgStratFarm}
            alt="the-strat-farm"
            className="max-h-[50px] h-full w-auto"
          />
          <Image
            src={ImgKasiKulcha}
            alt="kasi-kulcha"
            className="max-h-[60px] h-full w-auto"
          />
        </div>
      </div>
    </div>
  );
};
