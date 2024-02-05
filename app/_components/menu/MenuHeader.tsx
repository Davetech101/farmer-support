"use client";

import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";


interface ChildProps {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
const MenuHeader: React.FC<ChildProps> = ({ showMenu, setShowMenu }) => {
  return (
    <header className="bg-primaryColor text-secondaryColor  w-[100vw] flex items-center justify-between p-10 w-[80%]">
    <p className="text-[2rem]">Dashboard</p>

    <div className="flex items-center justify-center gap-10">
      <Link href="/notifications" className="text-[2rem]">
        <IoIosNotificationsOutline />
      </Link>
      <Link href="/notifications" className="text-[2rem]">
        <CiSettings />
      </Link>

      <button className="text-[2rem]" onClick={()=> setShowMenu(true)}>
        <RxHamburgerMenu />
      </button>
    </div>
  </header>
  )
}

export default MenuHeader