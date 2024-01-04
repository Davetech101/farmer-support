"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch } from "../_redux/hooks";
import { updateNamesAndLocation } from "../_redux/users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineAlternateEmail, MdOutlinePermIdentity } from "react-icons/md";
import { CiLocationOn, CiLock, CiLogin } from "react-icons/ci";

interface InputProps {
  onChange: any;
  type: string;
  name: string;
  id: string;
  className: any;
  placeHolder: string;
}

const Input = ({
  onChange,
  type,
  name,
  id,
  className,
  placeHolder,
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      type={type}
      name={name}
      id={id}
      className={className}
      placeholder={placeHolder}
      required
    />
  );
};

export default function Home() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputStyle =
    "bg-secondaryColor mb-3 w-full border border-borderColor focus:outline-tetiaryColor outline-none pl-12 p-3 rounded text-2xl";

  const svgStyles = "absolute  text-2xl left-[6px] top-[11px] z-10";

  const handleChange = useCallback((e: { target: { id: any; value: any } }) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }, []);

  const handleLogin = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await fetch(
          "https://farminsights-staging.onrender.com/api/v1/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData }),
          }
        );
        const data = await response.json();
        console.log(data);
        console.log(data.status);
        if (data.status === 200) {
          toast.success("User registered successfully!");
          router.push("/dashboard");
          console.log("Login successful!");
        } else if (data.status !== 200) {
          toast.error(`${data.message}`);
        }
      } catch (error: any) {
        toast.error(error.message)
        toast.error("Error signing user in");
      }
      setLoading(false);
    },
    [formData, router]
  );

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
        <div className="bg-gradGreen rounded p-10 lg:w-4/12 w-full max-w-3xl">
          <h2 className="text-secondaryColor text-3xl text-center mb-10">
            Great to see you again!
          </h2>
          <form action="" onSubmit={handleLogin} className="mb-10">
            <div className="relative">
              <MdOutlineAlternateEmail className={svgStyles} />
              <Input
                type={"email"}
                name={"email"}
                id={"email"}
                placeHolder={"email"}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
            <div className="relative">
              <CiLock className={svgStyles} />
              <Input
                type={"password"}
                name={"password"}
                id={"password"}
                placeHolder={"Password"}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
            <button className="w-full px-10 py-3 bg-gradRed text-secondaryColor rounded text-2xl">
            {loading ? "Logging In..." : "Login"}
            </button>
          </form>
          <p className="text-center text-secondaryColor text-xl">
            Don&apos;t have an account?{" "}
            <Link
              href="signup"
              className="text-gradRed text-2xl font-bold inline-flex items-center hover:scale-90"
            >
              Sign Up <CiLogin />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
