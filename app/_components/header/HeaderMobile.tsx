import React from "react";
import Link from "next/link";
import { FaInfinity } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderMobile = () => {
  return (
    <header className="flex justify-between items-center px-10 py-10 bg-black text-white">
      <Link href="/" className="flex items-center text-4xl">
        <FaInfinity color="#008148" /> Farminsight
      </Link>

      <button className="text-3xl">
        <RxHamburgerMenu />
      </button>

      <main className="fixed w-screen h-screen bottom-0 left-0">
        <div className="w-screen h-screen bottom-0 left-0 bg-black1"></div>
        <div className="absolute bg-black top-0 right-0 w-3/4 h-full p-10">
          
        </div>
      </main>
    </header>
  );
};

export default HeaderMobile;
