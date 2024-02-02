import React from "react";
import Menu from "./Menu";
import MenuDxtp from "./MenuDxtp";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Layout = () => {
  return (
    <div className="bg-primaryColor text-secondaryColor">
      <header className="flex items-center justify-between p-10">
        <p className="text-[2rem]">Dashboard</p>

        <div className="flex items-center justify-center gap-10">
          <Link href="/notifications" className="text-[2rem]">
            <IoIosNotificationsOutline />
          </Link>
          <Link href="/notifications" className="text-[2rem]">
            <CiSettings />
          </Link>

          <button className="text-[2rem]">
            <RxHamburgerMenu />
          </button>
        </div>
      </header>
      <Menu />
      <MenuDxtp />
    </div>
  );
};

export default Layout;
