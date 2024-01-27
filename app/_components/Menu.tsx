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

const Menu = () => {
  const [showNav, setShowNav] = useState(false);

  const router = useRouter();

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

  const handleLogout = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="fixed top-0 left-0 w-full left-0 z-10">
      <header className="bg-primaryColor p-10 text-secondaryColor flex w-full justify-between items-center">
        <Link href={"/"} className="text-secondaryColor text-3xl z-0">
          Home
        </Link>

        <button className="text-4xl" onClick={() => setShowNav(true)}>
          <RxHamburgerMenu />
        </button>
      </header>

      <section
        className={`w-screen absolute top-0 ${
          showNav ? `visible` : `invisible`
        }`}
      >
        <div
          className={`fixed z-0 right-0 top-0 h-screen w-[25%] bg-primaryGrey duration-1000 ${
            showNav ? `translate-x-0` : `translate-x-full`
          }`}
          onClick={() => setShowNav(false)}
        ></div>

        <div
          className={`w-[75%] h-screen flex flex-col justify-between bg-tetiaryColor text-secondaryColor p-10 z-10 transition-all duration-1000  ${
            showNav ? `translate-x-0` : `-translate-x-full`
          }`}
        >
          <div className="flex flex-col">
            <Link
              href={"/"}
              className="text-3xl mb-10 flex items-center gap-[10px] bg-secondaryColor text-tetiaryColor p-[10px] rounded"
            >
              <MdAddCircle /> New Chat
            </Link>
            {links.map((link, idx) => (
              <Link href={`${link.href}`} className={linkStyles} key={idx} onClick={() => setShowNav(false)}>
                {link.icon} {link.title}
              </Link>
            ))}
          </div>

          <button
            className="flex text-2xl items-center justify-between bg-secondaryColor text-tetiaryColor p-[10px] rounded w-full"
            onClick={handleLogout}
          >
            Log out <IoIosLogOut />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Menu;
