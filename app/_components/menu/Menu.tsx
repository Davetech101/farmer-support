"use client";
import { useState } from "react";
import Link from "next/link";
import { FaInfinity } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
import { IoCloudOfflineOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { usePathname } from "next/navigation";
import { MdHistory } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

interface ChildProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<ChildProps> = ({ showMenu, setShowMenu }) => {

  const pathname = usePathname();

  const resQ = [
    "What can I do with cash crops",
    "Best time of the year to plant cassava",
    "Can I plant Cocoa in PH",
    "Vegies vs Legumes",
  ];

  const links = [
    {
      title: "Dashboard",
      href: "/dashboard",
      svg: <MdOutlineDashboard />,
    },
    {
      title: "Product Listings",
      href: "/listing",
      svg: <RiListIndefinite />,
    },
    {
      title: "Offline Mode",
      href: "/offline",
      svg: <IoCloudOfflineOutline />,
    },
    {
      title: "Notification",
      href: "/notification",
      svg: <IoIosNotificationsOutline />,
    },
  ];

  return (
    <div className="lg:hidden w-screen text-secondaryColor">
      <div className={`${showMenu ? "visible translate-x-[0px]" : "-translate-x-[1200px]"} transition-all fixed top-0 left-0 w-[70%] h-screen bg-primaryColor py-10 overflow`}>
        <Link
          href="/"
          className="flex items-center  justify-center text-4xl mb-[50px]"
        >
          <FaInfinity color="#008148" /> Farminsight
        </Link>

        <div className="border-b p-10 pt-0">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              onClick={()=> setShowMenu(false)}
              className={`${
                pathname === link.href && "text-secondaryColor"
              } flex mb-6 items-center gap-[10px] text-3xl text-[#696969d4]`}
            >
              {link.svg}

              {link.title}
            </Link>
          ))}
        </div>

        <div className="p-10">
          <p className="flex items-center gap-[10px] text-2xl sm:text-4xl">
            Recent Questions
            <MdHistory />
          </p>

          <div className="mt-6 bg-black2 p-4 rounded">
            {resQ.map((q, idx) => (
              <p className="text-[10px] sm:text-2xl mb-2" key={idx}>
                {q}
              </p>
            ))}
          </div>
        </div>

        <div className="p-10 bg-black2">
        <button className="text-2xl sm:text-4xl w-full flex items-center justify-between">
        <div className="flex items-center gap-[10px]"><RxAvatar className="text-5xl sm:text-6xl" /> John Doe</div>
          <IoIosLogOut />
        </button>
        </div>
      </div>

      <div className={`${showMenu ? "visible translate-x-[0px]" : "translate-x-[1200px]"} fixed top-0 right-0 h-screen w-[30%] bg-[#696969d4] transition-all`} onClick={()=> setShowMenu(false)}></div>
    </div>
  );
};

export default Menu;
