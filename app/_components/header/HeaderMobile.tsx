"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaInfinity } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";

const HeaderMobile = () => {
  const [showNav, setShowNav] = useState(false);

  const links = [
    {
      name: "Explore AI Guidance",
      href: "",
    },
    {
      name: "Read Knowledge Updates",
      href: "",
    },
    {
      name: "Join Community",
      href: "",
    },
  ];

  return (
    <header className="flex justify-between items-center px-10 py-10 bg-black text-white">
      <Link href="/" className="flex items-center text-4xl">
        <FaInfinity color="#008148" /> Farminsight
      </Link>

      <button className="text-3xl" onClick={() => setShowNav(true)}>
        <RxHamburgerMenu />
      </button>

      <main
        className={`fixed w-screen h-screen bottom-0 left-0 ${
          showNav ? `opacity-100 visible` : `opacity-0 invisible`
        }`}
      >
        <div
          className={`w-screen h-screen bottom-0 left-0 bg-black1`}
          onClick={() => setShowNav(false)}
        ></div>
        <div
          className={`absolute bg-black top-0 right-0 w-4/4 h-2/4 py-20 px-14 rounded-es-3xl transition-all ${
            showNav
              ? `translate-y-0 translate-x-0`
              : `-translate-y-96 translate-x-96`
          }`}
        >
          <ul className="flex flex-col gap-14">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-2xl p-3 font-extralight border border-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="text-3xl absolute bottom-10 right-10"
            onClick={() => setShowNav(false)}
          >
            <GrFormClose />
          </button>
        </div>
      </main>
    </header>
  );
};

export default HeaderMobile;
