import Image from "next/image";

import ImgIconWhite from "@/assets/images/icon-white.png";

const Navbar = () => {
  return (
    <div className="w-full border-b border-white/50 z-50 fixed px-8 py-4">
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
          <div>Home</div>
          <div>About Us</div>
          <div>Our Companies</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
