import { HeaderData } from "@/utils/StaticData";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { FaOpencart } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full border-b-[0.5px] border-gray-500 py-5">
      <div className="container grid grid-cols-3 items-center !overflow-visible">
        <div className="flex items-center gap-8 justify-self-start text-secondary">
          {HeaderData.navItems.map((item, index) => (
            <a
              key={index}
              className="group relative py-2 font-semibold uppercase text-primary transition-transform hover:translate-y-[-2px]"
            >
              {item}{" "}
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-50 transform transition-transform group-hover:scale-100 group-hover:bg-primary"></span>
            </a>
          ))}
        </div>
        <Image
          className="mb-[-30px] w-32 justify-self-center skew-y-3"
          src={logo}
          alt="logo"
          priority
        />
        <Link href="/cart" className="relative flex justify-self-end">
          <span className="mx-[-5px] h-fit rounded-full bg-primary px-[5px] font-sans text-[12px] font-semibold text-quaternary">
            99
          </span>
          <FaOpencart size={35} className="text-primary" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
