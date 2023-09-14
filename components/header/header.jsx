import { Popover } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { SlSocialInstagram } from "react-icons/sl";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { ImMenu, ImWhatsapp } from "react-icons/im";

const Header = () => {
  const [onLangSelect, setOnLangSelect] = useState(false);
  const [lang, setLang] = useState("indo");
  const [onSearch, setOnSearch] = useState(false);

  const setLanguage = (lang) => {
    setLang(lang);
    setOnLangSelect(false);
  };

  return (
    <Popover
      className="mx-auto flex items-center px-5 md:pl-1 md:pr-16 py-2 h-28 bg-[#5F3C90] sticky top-0 z-50"
      onClick={() => setOnLangSelect(false)}
    >
      <img src="/images/main-logo.png" alt="logo" className="w-16 md:w-40" />
      <div className="grow flex flex-col justify-between h-full pb-0 md:pb-5 md:pt-2">
        <div
          className=" hidden sm:flex gap-x-1 items-center justify-end gap-2 md:gap-2 text-gray-50 mr-12 "
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-black text-[16px] font-inter font-light ">
            <select
              className="rounded-full pl-1 pb-1 pt-1 pr-2"
              name="cars"
              id="cars"
            >
              <option value="IDR">IDR</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div
            className="relative rounded-3xl bg-white h-full px-4 py-1 flex gap-2 items-center"
            onClick={() => setOnLangSelect(!onLangSelect)}
          >
            <Image
              src={`/asset/${lang === "indo" ? "indo.svg" : "inggris.png"}`}
              width={24}
              height={12}
              alt="indo"
            />
            <Image src="/asset/down.svg" width={10} height={10} alt="down" />

            <div
              onClick={(e) => e.stopPropagation()}
              className={`absolute left-0 top-10 bg-white w-full py-2 flex flex-col gap-2 shadow-xl ${
                onLangSelect ? "block" : "hidden"
              }`}
            >
              <Image
                src="/asset/indo.svg"
                width={30}
                height={30}
                alt="indo"
                onClick={() => setLanguage("indo")}
              />
              <div className="w-full px-4">
                <Image
                  src="/asset/inggris.png"
                  width={100}
                  height={100}
                  alt="inggris"
                  onClick={() => setLanguage("inggris")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden sm:flex items-center justify-end md:gap-2 text-gray-50 pb-0.1 font-poppins text-[16px] font-medium ">
          <div className="flex space-x-4 font-poppins text-[16px] font-medium items-center">
            <div className="hover:text-[#DA8E63]">
              <Link href="instant-book">INSTANT BOOK</Link>
            </div>
            <div className="hover:text-[#DA8E63]">
              <Link href="villas">ALL BALI VILLAS</Link>
            </div>
            <div className="hover:text-[#DA8E63]">
              <Link href="#">TOURS AND ACTIVITES</Link>
            </div>
            <div className="hover:text-[#DA8E63]">
              <Link href="#">ENHANCED SERVICES</Link>
            </div>
            <div className="hover:text-[#DA8E63]">
              <Link href="about-us">ABOUT US</Link>
            </div>
          </div>
          <Link href="#">|</Link>
          <div className="flex space-x-4 items-center  ">
            <div className="hover:text-[#DA8E63]">
              <SlSocialInstagram size="1.1rem" href="#" />
            </div>
            <div className="hover:text-[#DA8E63]">
              <PiWhatsappLogoLight size="1.4rem" href="#" />
            </div>
          </div>

          <Link href="villa bali">|</Link>
          <div className="hover:text-[#DA8E63]">
            <Link href="#">CONTACT US</Link>
          </div>
          <Link href="villa bali">|</Link>
          <div className="hover:text-[#DA8E63]">
            <GoSearch size="1.1rem" onClick={() => setOnSearch(!onSearch)} />
          </div>
          <ImMenu size="1.1rem" />
        </div>
      </div>

      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button
          className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-50
            hover:bg-transparant hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-50"
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="rounded-lg bg-gray-50 shadow-lg ring-1 ring-white ring-opacity-5 divide-y-2 divide-transparant">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <h1 className="font-bold">Menu</h1>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close Menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-2">
              <div
                className="flex pb-2 items-center justify-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-black text-[16px] font-inter font-light ">
                  <select
                    className="rounded-full pl-1 pb-1 pt-1 pr-2"
                    name="cars"
                    id="cars"
                  >
                    <option value="volvo">IDR</option>
                    <option value="saab">USD</option>
                  </select>
                </div>
                <div
                  className="relative rounded-3xl bg-white h-full px-4 py-2 flex gap-2 items-center"
                  onClick={() => setOnLangSelect(!onLangSelect)}
                >
                  <Image
                    src={`/asset/${
                      lang === "indo" ? "indo.svg" : "inggris.png"
                    }`}
                    width={24}
                    height={12}
                    alt="indo"
                  />
                  <Image
                    src="/asset/down.svg"
                    width={10}
                    height={10}
                    alt="down"
                  />

                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute left-0 top-10 bg-white w-full py-2 flex flex-col gap-2 shadow-xl ${
                      onLangSelect ? "block" : "hidden"
                    }`}
                  >
                    <Image
                      src="/asset/indo.svg"
                      width={30}
                      height={30}
                      alt="indo"
                      onClick={() => setLanguage("indo")}
                    />
                    <div className="w-full px-4">
                      <Image
                        src="/asset/inggris.png"
                        width={100}
                        height={100}
                        alt="indo"
                        onClick={() => setLanguage("inggris")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <nav className=" grid gap-y-3 font-poppins text-[16px] font-medium ">
                <form action="" className="w-full pr-4">
                  <input
                    type="text"
                    name="searc"
                    id="srch"
                    placeholder="search"
                    className="px-3 py-2 rounded-md w-full"
                  />
                  <button type="submit"></button>
                </form>

                <div className="hover:text-[#DA8E63]">
                  <Link
                    className="focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 "
                    href="#"
                  >
                    INSTANT BOOK
                  </Link>
                </div>
                <div className="hover:text-[#DA8E63]">
                  <Link className=" px-2 " href="#">
                    ALL BALI VILLAS
                  </Link>
                </div>
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  href="#"
                >
                  TOURS AND ACTIVITIES
                </Link>
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  href="#"
                >
                  ENHANCED SERVICES
                </Link>
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  href="#"
                >
                  ABOUT US
                </Link>
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  href="#"
                >
                  CONTACT US
                </Link>
                <div className="items-center justify-center">
                  <div className="flex gap-4 w-full justify-center">
                    <SlSocialInstagram size="1.1rem" href="#" />
                    <ImWhatsapp size="1.1rem" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </Popover.Panel>
      <div
        className={`absolute right-8 top-[100%] translate-y-1 bg-white rounded-lg shadow-lg z-20 ${
          onSearch ? "block" : "hidden"
        }`}
      >
        <input
          type="text"
          autoFocus
          name="search"
          id="search"
          placeholder="Search by villa"
          className="outline-none border-2 border-[#4B3057] rounded-lg px-4 py-2 w-[300px]"
        />
      </div>
      <div
        className={`absolute left-0 w-full h-screen top-[100%] ${
          onSearch ? "block" : "hidden"
        }`}
        onClick={() => setOnSearch(false)}
      />
    </Popover>
  );
};

export default Header;
