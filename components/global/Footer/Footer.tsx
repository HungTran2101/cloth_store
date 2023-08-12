import { FooterData } from "@/utils/StaticData";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-[500px]">
      <div className="bg-secondary py-14">
        <div className="container">
          <div className="grid grid-cols-3 items-center">
            <div className="ml-1 flex flex-col gap-3">
              <div className="font-bold uppercase">
                {FooterData.top.socials.title}
              </div>
              <div className="flex gap-6">
                {FooterData.top.socials.items.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    className="text-3xl text-quaternary transition-transform hover:scale-110"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
            <Image
              className="w-24 justify-self-center"
              src={logo}
              alt="logo"
              priority
            />
            <div className="flex flex-col gap-2 justify-self-end">
              <div className="font-bold uppercase text-quaternary">
                Newsletter
              </div>
              <form className="flex gap-2">
                <input className="px-2" placeholder="youremail@domain.com" />
                <button className="p-2 text-quaternary transition-all hover:bg-secondary hover:text-black">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-quaternary pb-5">
        <div className="container flex flex-col items-center gap-5 py-14">
          <div className="flex">
            {FooterData.bottom.map((item, index) => (
              <div key={index} className="flex w-1/4 flex-col pr-10">
                <div className="text-[14px] uppercase text-tertiary">
                  {item.title}
                </div>
                <div className="font-title text-2xl text-secondary break-words">
                  {item.content}
                </div>
                {item.urlLabel ? (
                  <Link
                    href={item.url}
                    className="relative mt-auto block w-fit text-[14px] uppercase text-tertiary opacity-60 transition-opacity hover:opacity-100"
                  >
                    {item.urlLabel}{" "}
                    <div className="mt-2 h-[1px] w-full bg-tertiary"></div>
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-[1px] border-t-tertiary pt-5 text-center text-sm text-secondary">
          Copyright © 2023. All rights are reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
