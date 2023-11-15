"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react";

import ImgNetworkX from "@/assets/images/network-x.png";
import ImgNxd from "@/assets/images/nxd.png";
import ImgMettlestate from "@/assets/images/mettlestate.png";
import ImgLuckyHustle from "@/assets/images/lucky-hustle.png";
import ImgStratFarm from "@/assets/images/strat-farm.png";
import ImgKasiKulcha from "@/assets/images/kasi-kulcha.png";

import ImgBgWaves1 from "@/assets/images/bg-waves-1.png";
import ImgBgWaves2 from "@/assets/images/bg-waves-2.png";

export const SectionCompanies1 = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center bg-black w-full h-full text-white overflow-hidden pt-16"
      style={{
        // backgroundImage: `url("${ImgBgWaves1.src}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex items-center w-full justify-center">
        <div className="z-0">
          {/* <motion.div
            initial={{
              translateX: "-100%",
            }}
            whileInView={{
              translateX: "-50%",
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="absolute top-1/2 left-0 -translate-x-1/2 rounded-full bg-red-900 w-[10vw] h-[10vw]"
          ></motion.div>
          <motion.div
            initial={{
              translateY: "75%",
              translateX: "100%",
            }}
            whileInView={{
              translateY: "75%",
              translateX: "25%",
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="absolute bottom-0 right-0 rounded-full bg-gray-900 w-[30vw] h-[30vw]"
          ></motion.div> */}
        </div>
        <div className="container space-y-8 z-20">
          {/* <div className="absolute top-1/4 left-8 text-white/80">4</div> */}
          <motion.div
            initial={{
              opacity: "0",
              translateY: "-100%",
            }}
            whileInView={{
              opacity: "1",
              translateY: "0%",
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="flex items-center gap-8 justify-between"
          >
            <h2 className="text-6xl font-bold text-accent mb-5 mb-md-0">
              Our Companies
            </h2>
            <div className="">
              <h3 className="text-4xl">Part 1</h3>
            </div>
          </motion.div>
          <div className="flex items-center gap-4">
            <CompanyBlock
              image={ImgNetworkX}
              title="Esports And Gaming Agency"
              description="The heart of African gaming as the largest esports platform on
              the continent, who work hand in hand with their dedicated
              community of over 300 000 subscribed players"
              email="info@mettlestat.com"
              link="mettlestate.com"
              delay={0.5}
            />
            <CompanyBlock
              image={ImgNxd}
              title="Esports And Gaming Agency"
              description="The heart of African gaming as the largest esports platform on
              the continent, who work hand in hand with their dedicated
              community of over 300 000 subscribed players"
              email="info@mettlestat.com"
              link="mettlestate.com"
              delay={0.75}
            />
            <CompanyBlock
              image={ImgMettlestate}
              title="Esports And Gaming Agency"
              description="The heart of African gaming as the largest esports platform on
              the continent, who work hand in hand with their dedicated
              community of over 300 000 subscribed players"
              email="info@mettlestat.com"
              link="mettlestate.com"
              delay={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionCompanies2 = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center bg-black w-full h-full text-white overflow-hidden pt-16"
      style={{
        backgroundImage: `url("${ImgBgWaves2.src}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex items-center w-full justify-center">
        <div className="z-0">
          <motion.div
            initial={{
              translateX: "100%",
            }}
            whileInView={{
              translateX: "50%",
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="absolute top-1/4 right-0 rounded-full bg-red-900 w-[10vw] h-[10vw]"
          ></motion.div>
          <motion.div
            initial={{
              translateY: "25%",
              translateX: "-100%",
            }}
            whileInView={{
              translateY: "25%",
              translateX: "-25%",
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="absolute bottom-0 left-0 rounded-full bg-gray-900 w-[30vw] h-[30vw]"
          ></motion.div>
        </div>
        <div className="container space-y-8 z-20">
          {/* <div className="absolute top-1/4 left-8 text-white/80">4</div> */}
          <motion.div
            initial={{
              opacity: "0",
              translateY: "-100%",
            }}
            whileInView={{
              opacity: "1",
              translateY: "0%",
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="flex items-center gap-8 justify-between"
          >
            <h2 className="text-6xl font-bold text-accent mb-5 mb-md-0">
              Our Companies
            </h2>
            <div className="">
              <h3 className="text-4xl">Part 2</h3>
            </div>
          </motion.div>
          <div className="flex items-center gap-4">
            <CompanyBlock
              image={ImgNetworkX}
              title="Esports And Gaming Agency"
              description="The heart of African gaming as the largest esports platform on
              the continent, who work hand in hand with their dedicated
              community of over 300 000 subscribed players"
              email="info@mettlestat.com"
              link="mettlestate.com"
              delay={0.5}
            />
            <CompanyBlock
              image={ImgNxd}
              title="Esports And Gaming Agency"
              description="The heart of African gaming as the largest esports platform on
              the continent, who work hand in hand with their dedicated
              community of over 300 000 subscribed players"
              email="info@mettlestat.com"
              link="mettlestate.com"
              delay={0.75}
            />
            <CompanyBlock
              image={ImgMettlestate}
              title="Esports And Gaming Agency"
              description="The heart of African gaming as the largest esports platform on
              the continent, who work hand in hand with their dedicated
              community of over 300 000 subscribed players"
              email="info@mettlestat.com"
              link="mettlestate.com"
              delay={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ICompanyBlock {
  image: StaticImageData;
  title: string;
  description: string;
  email: string;
  link: string;
  delay?: number;
}

const CompanyBlock = ({
  image,
  title,
  description,
  email,
  link,
  delay = 0.5,
}: ICompanyBlock) => {
  return (
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
        delay,
      }}
      className="flex w-full bg-zinc-900 rounded-2xl rounded-br-[3rem] flex-col gap-8 p-8 flex-shrink"
    >
      <div className="award-item-logo">
        <Image src={image} alt="mettlestate-grey" className=" w-auto h-16" />
      </div>
      <div className="text-lg font-bold">{title}</div>
      <div className="text-white/75">{description}</div>
      <div className="flex flex-col gap-4 text-accent">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center"
          target="_blank"
        >
          <Mail className="w-4 h-4 mr-2" />
          {email}
        </a>
        <a
          href={`https://${email}`}
          className="inline-flex items-center"
          target="_blank"
        >
          <ArrowUpRight className="w-4 h-4 mr-2" />
          {link}
        </a>
      </div>
    </motion.div>
  );
};
