import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";


const Menu = () => {
  return (
    <div className='fixed top-0 left-0 w-full left-0'>
      <header className="bg-primaryColor p-10 text-secondaryColor flex w-full justify-between items-center">
        <Link href={"/"} className='text-secondaryColor text-3xl z-0'>Home</Link>

        <button className="text-4xl">
        <RxHamburgerMenu />
      </button>
      </header>

      <section className="w-screen absolute top-0 z-10">
        <div className=""></div>

        <div className="w-9/12 bg-black1 p-10">
          <div className="flex flex-col">
            <Link href={"/dashboard"} className='text-2xl'>Dashboard</Link>
            <Link href={"/listing"}>Product Listing</Link>
          </div>

          <button className="">Log out</button>
        </div>
      </section>
    </div>
  )
}

export default Menu