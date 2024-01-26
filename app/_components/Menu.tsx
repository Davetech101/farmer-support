import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoCloudOfflineOutline } from "react-icons/io5"
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";

const Menu = () => {

  const linkStyles = "text-3xl mb-10 flex items-center gap-[10px]  p-[10px] rounded-ee-full rounded-se-full"

  return (
    <div className='fixed top-0 left-0 w-full left-0 z-10'>
      <header className="bg-primaryColor p-10 text-secondaryColor flex w-full justify-between items-center">
        <Link href={"/"} className='text-secondaryColor text-3xl z-0'>Home</Link>

        <button className="text-4xl">
        <RxHamburgerMenu />
      </button>
      </header>

      <section className="w-screen absolute top-0 z-10">
        <div className=""></div>

        <div className="w-9/12 h-screen flex flex-col justify-between bg-tetiaryColor text-secondaryColor p-10">
          <div className="flex flex-col">
            <Link href={"/"} className='text-3xl mb-10 flex items-center gap-[10px] bg-secondaryColor text-tetiaryColor p-[10px] rounded'><MdAddCircle /> New Chat</Link>
            <Link href={"/dashboard"} className={linkStyles}><MdDashboard/> Dashboard</Link>
            <Link href={"/listing"} className={linkStyles}><FaProductHunt/> Product Listing</Link>
            <Link href={"/listing"} className={linkStyles}><IoCloudOfflineOutline /> Offline Mode</Link>
            <Link href={"/listing"} className={linkStyles}><IoIosNotificationsOutline /> Notifications</Link>
          </div>

          <button className="flex text-2xl items-center justify-between bg-secondaryColor text-tetiaryColor p-[10px] rounded w-full">Log out <IoIosLogOut /></button>
        </div>
      </section>
    </div>
  )
}

export default Menu