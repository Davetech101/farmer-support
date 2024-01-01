"use client"

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { MdOutlineAlternateEmail, MdOutlinePermIdentity } from "react-icons/md";
import { CiLocationOn, CiLock, CiLogin } from "react-icons/ci";
import { LocationSearchInput } from './Location';

export default function Home() {
  const inputStyle =
    "bg-secondaryColor mb-3 w-full border border-borderColor focus:outline-tetiaryColor outline-none pl-12 p-3 rounded text-2xl";

  const svgStyles = "absolute  text-2xl left-[6px] top-[11px] z-10";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [latLng, setLatLng] = useState<{lat: number, lng: number} | null>();


  const handleSignUp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('https://farminsights-staging.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert('User registered successfully');
      } else {
        const data = await response.json();
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };


  return (
    <>
      <section className="bg-tetiaryColor w-screen h-screen p-10 flex items-center justify-center lg:gap-24">
        <div className="hidden lg:block">
        <Image
          src="/_assets/signup-img.webp"
          alt="vector"
          width={500}
          height={500}
        />
        </div>
        <div className="bg-gradGreen rounded p-10 lg:w-4/12">
          <h2 className="text-secondaryColor text-3xl text-center mb-10">
            Create your account for personalized farming insights
          </h2>
          <form action="" onSubmit={handleSignUp} className="mb-10">
          <div className="flex gap-3">
            <div className="relative">
              <MdOutlinePermIdentity className={svgStyles} />
              <input
                type="name"
                name=""
                id=""
                className={inputStyle}
                placeholder="First Name"
              />
            </div>
            <div className="relative">
              <MdOutlinePermIdentity className={svgStyles} />
              <input
                type="name"
                name=""
                id=""
                className={inputStyle}
                placeholder="Last Name"
              />
            </div>
          </div>
            <div className="relative">
              <MdOutlineAlternateEmail className={svgStyles} />
              <input
                type="email"
                name=""
                id=""
                className={inputStyle}
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <CiLock className={svgStyles} />
              <input
                type="password"
                name=""
                id=""
                className={inputStyle}
                placeholder="Password"
              />
            </div>

            <div className="relative">
              <CiLocationOn className={svgStyles} />
              <LocationSearchInput updateLatLng={(latlng: typeof latLng) => setLatLng(latlng)} hasError={false}/>
            </div>
            <button className="w-full px-10 py-3 bg-gradRed text-secondaryColor rounded text-2xl">Sign up</button>
          </form>
          <p className="text-center text-secondaryColor text-xl">
            Already have an account? <Link href="login" className="text-gradRed text-2xl font-bold inline-flex items-center hover:scale-90">Sign In <CiLogin /></Link>
          </p>
        </div>
      </section>
    </>
  );
}
