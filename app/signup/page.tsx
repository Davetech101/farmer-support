"use client"

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineAlternateEmail, MdOutlinePermIdentity } from "react-icons/md";
import { CiLocationOn, CiLock, CiLogin } from "react-icons/ci";
import { LocationSearchInput } from './Location';

interface InputProps {
  onChange: any,
  type: string,
  name: string,
  id: string,
  className: any,
  placeHolder: string
}

const Input = ({
  onChange,
  type,
  name,
  id,
  className,
  placeHolder,
}: InputProps) =>  {
  return <input
  onChange={onChange}
  type={type}
  name={name}
  id={id}
  className={className}
  placeholder={placeHolder}
/>
}

export default function Home() {

  const router = useRouter()
  
  const [latLng, setLatLng] = useState<{lat: number, lng: number} | null>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const inputStyle =
    "bg-secondaryColor mb-3 w-full border border-borderColor focus:outline-tetiaryColor outline-none pl-12 p-3 rounded text-2xl";

  const svgStyles = "absolute  text-2xl left-[6px] top-[11px] z-10";
  

  const handleChange = useCallback(
    (e: { target: { id: any; value: any; }; }) => {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      console.log(formData);
    },
    [formData]
  );

  const handleSignUp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://farminsights-staging.onrender.com/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData, latitude: latLng?.lat, longitude: latLng?.lng }),
      });
      const data = await response.json()
      console.log(data, "here")

      if (response.ok) {
        toast.success('User registered successfully!')
        router.push("/dashboard")
      } else {
        const data = await response.json();
        toast.error(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      toast.error('Error registering user');
    }
  };

  return (
    <>
      <section className="bg-tetiaryColor w-screen h-screen p-10 flex items-center justify-center lg:gap-24">
      <ToastContainer />
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
              <Input type={'name'} name={'firstName'} id={'firstName'} placeHolder={'First Name'} onChange={handleChange} className={inputStyle}/>
            </div>
            <div className="relative">
              <MdOutlinePermIdentity className={svgStyles} />
              <Input type={'name'} name={'lastName'} id={'lastName'} placeHolder={'Last Name'} onChange={handleChange} className={inputStyle}/>
            </div>
          </div>
            <div className="relative">
              <MdOutlineAlternateEmail className={svgStyles} />
              <Input type={'email'} name={'email'} id={'email'} placeHolder={'email'} onChange={handleChange} className={inputStyle}/>
            </div>
            <div className="relative">
              <CiLock className={svgStyles} />
              <Input type={'password'} name={'password'} id={'password'} placeHolder={'Password'} onChange={handleChange} className={inputStyle}/>
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
