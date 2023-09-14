import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State untuk mengatur apakah kotak pencarian terbuka
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk mengatur apakah menu mobile terbuka

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle state saat ikon pencarian diklik
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle state saat ikon hamburger diklik
  };

  return (
    <>
      <nav className="bg-custom-purple w-w-navbar h-h-navbar">
        <div className=" mx-auto flex justify-between">
          <div className="text-white text-2xl font-semibold">
            <Link href="/">
              <img
                src="/images/main-logo.png"
                alt="Logo"
                className="w-w-logo h-h-logo flex-shrink border-box py-p-1 pl-p-1 mx-0 my-0"
              />
            </Link>
          </div>
          <div className="pt-p-82 hidden lg:flex">
            <ul
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } lg:flex space-x-6 px-0 mx-1`}
            >
              <li>
                <Link
                  className="text-white hover:text-gray-300 font-poppins text-f-16"
                  href="/"
                >
                  INSTANT BOOK
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-300 font-poppins text-f-16"
                  href="/contact"
                >
                  ALL BALI VILLAS
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-300 font-poppins text-f-16"
                  href="/blog"
                >
                  TOURS AND ACTIVITIES
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-300 font-poppins text-f-16"
                  href="/blog"
                >
                  ENHANCED SERVICES
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-300 font-poppins text-f-16"
                  href="/blog"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="text-white">
                <RxDividerVertical />
              </li>
              <li>
                <BsInstagram className=" text-white w-w-icon px-0" />
              </li>
              <li>
                <FaWhatsapp className=" text-white w-w-icon px-0" />
              </li>
              <li className="text-white">
                <RxDividerVertical />
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-300 font-poppins text-f-16"
                  href="/blog"
                >
                  CONTACT US
                </Link>
              </li>
              <li className="text-white">
                <RxDividerVertical />
              </li>
              <li>
                <span
                  onClick={toggleSearch}
                  className="cursor-pointer text-white hover:text-gray-300"
                >
                  <BiSearch className="w-w-icon-search h-h-icon-search" />
                </span>
                {isSearchOpen && (
                  <div className="absolute top-0 right-0 mt-12">
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-white px-4 py-2 rounded-full"
                    />
                  </div>
                )}
              </li>
              <li className="text-white w-w-hamberger h-h-hamberger mr-1">
                <GiHamburgerMenu />
              </li>
            </ul>
          </div>
          {/* <div className="lg:hidden">
            <span
              onClick={toggleMobileMenu}
              className="cursor-pointer text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
              >
                <rect
                  width="25"
                  height="6"
                  fill="#D9D9D9"
                  fill-opacity="0.38"
                />
                <rect
                  y="8"
                  width="25"
                  height="6"
                  fill="#D9D9D9"
                  fill-opacity="0.38"
                />
                <rect
                  y="16"
                  width="25"
                  height="6"
                  fill="#D9D9D9"
                  fill-opacity="0.38"
                />
              </svg>
            </span>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
