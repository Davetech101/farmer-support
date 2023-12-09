import Link from "next/link";
import { FaInfinity } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const links = [
    {
      name: "Explore AI Guidance",
      href: "",
    },
    {
      name: "Read Knowledge Updates",
      href: "",
    },
    {
      name: "Join Community",
      href: "",
    },
  ];

  return (
    <main className="fixed top-0 left-0 right-0">
      <header className="flex justify-between items-center px-24 py-10 bg-black text-white hidden md:flex">
        <Link href="/" className="flex items-center text-4xl">
          <FaInfinity color="#008148" /> Farminsight
        </Link>

        <ul className="flex gap-10 lg:gap-3">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-2xl p-3 font-extralight border-b border-r border-black hover:border-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items center gap-10 text-2xl font-extralight">
          <Link href="" className="border-b hover:border-tetiaryColor">
            Login to start
          </Link>
        </div>
      </header>
      <div className="md:hidden block">
        <HeaderMobile />
      </div>
    </main>
  );
};

export default Header;
