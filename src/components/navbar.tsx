"use client";

import Image from "next/image";

import ImgIconWhite from "@/assets/images/icon-white.png";
import { useNavStore } from "./store";

const Navbar = () => {
  const { setPageIndex } = useNavStore();

  return (
    <div className="w-full z-50 fixed px-8 py-4">
      <div className="flex flex-row w-full h-full">
        <div className="flex relative">
          <Image
            src={ImgIconWhite}
            alt="nxg-icon"
            className="object-contain max-w-full h-auto"
            height={50}
          />
        </div>

        <div className="flex w-full items-center gap-4 justify-end">
          <div
            className="cursor-pointer hover:text-accent"
            onClick={() => setPageIndex(0)}
          >
            Home
          </div>
          <div
            className="cursor-pointer hover:text-accent"
            onClick={() => setPageIndex(1)}
          >
            About Us
          </div>
          <div
            className="cursor-pointer hover:text-accent"
            onClick={() => setPageIndex(2)}
          >
            Our Companies
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
