"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoCloudOfflineOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";

const MenuDxtp = () => {

  const linkStyles =
    "text-3xl mb-10 flex items-center gap-[10px]  p-[10px] rounded-ee-full rounded-se-full";

  const links = [
    {
      title: "Dashboard",
      href: "dashboard",
      icon: <MdDashboard />,
    },
    {
      title: "Product Listing",
      href: "listing",
      icon: <FaProductHunt />,
    },
    {
      title: "Offline Mode",
      href: "Offline",
      icon: <IoCloudOfflineOutline />,
    },
    {
      title: "Notifications",
      href: "notifications",
      icon: <IoIosNotificationsOutline />,
    },
  ];

  return (
    <div className='hidden relative lg:block'>
      <section
        className={`w-screen absolute top-0`}
      >
        <div
          className={`w-[25%] xl:w-[20%] h-screen flex flex-col justify-between bg-tetiaryColor text-secondaryColor p-10 z-10 transition-all duration-1000`}
        >
          <div className="flex flex-col">
            <Link
              href={"/"}
              className="text-3xl mb-10 flex items-center gap-[10px] bg-secondaryColor text-tetiaryColor p-[10px] rounded"
            >
              <MdAddCircle /> New Chat
            </Link>
            {links.map((link, idx) => (
              <Link href={`${link.href}`} className={linkStyles} key={idx}>
                {link.icon} {link.title}
              </Link>
            ))}
          </div>

          <button
            className="flex text-2xl items-center justify-between bg-secondaryColor text-tetiaryColor p-[10px] rounded w-full"
          >
            Log out <IoIosLogOut />
          </button>
        </div>
      </section>
    </div>
  )
}

export default MenuDxtp