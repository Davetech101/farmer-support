import Link from "next/link";
import Image from "next/image";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";

export default function Home() {
  const inputStyle =
    "bg-secondaryColor mb-3 w-full border border-borderColor focus:outline-tetiaryColor outline-none pl-12 p-3 rounded text-2xl";

  const svgStyles = "absolute  text-2xl left-[6px] top-[11px]";

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
          <form action="" className="mb-10">
            <div className="relative">
              <MdOutlineAlternateEmail className={svgStyles} />
              <input
                type="email"
                name=""
                id=""
                className={inputStyle}
                placeholder="Enter your Email address"
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
            <button className="w-full px-10 py-3 bg-gradRed text-secondaryColor rounded text-2xl">Sign up</button>
          </form>
          <p className="text-center text-secondaryColor text-xl">
            Already have an account? <Link href="login" className="text-gradRed text-2xl font-bold inline-flex items-center">Sign In <CiLogin /></Link>
          </p>
        </div>
      </section>
    </>
  );
}
