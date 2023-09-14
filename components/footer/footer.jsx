import Image from "next/image";
function Footer() {
  return (
    <div className="bg-[#5F3C90] px-[50px] pt-[40px]">
      <div className="flex md:flex-row flex-col justify-between items-start">
        <div className="bg-[#5F3C90]">
          <Image
            width={330}
            height={213}
            src="/images/main-logo.png"
            alt="Logo"
          />
        </div>
        <div className="flex flex-col">
          <ul className="text-white">
            <p className="font-poppins-medium font-bold text-lg text-2x1 py-4">
              Contact Information
            </p>
            <li>
              <a
                href="#"
                className="items-center text-md font-poppins-regular text-base hover:text-gray-500 cursor-pointer"
              >
                Jl. Sunset Road No.28, Seminyak, Bali
              </a>
            </li>
            <li>
              <a
                href="#"
                className="items-center text-md font-poppins-regular text-base hover:text-gray-500 cursor-pointer"
              >
                +62 819-5711-7788
              </a>
            </li>
            <li className="pb-4">
              <a
                href="#"
                className="items-center text-md font-poppins-regular text-base hover:text-gray-500 cursor-pointer"
              >
                reservation@villabaliparadise.com
              </a>
            </li>
          </ul>
          <ul className="text-white ">
            <p className="font-poppins-medium font-bold text-lg text-3x1 py-4 md:flex-wrap ">
              Follow us
            </p>
            <div className="flex gap-2 pb-6 items-center">
              {/*section for icons*/}
              <a href="#">
                <Image width={20} height={20} src="/icons/instagram.svg" />
              </a>
              <a href="#">
                <Image width={20} height={20} src="/icons/facebook.svg" />
              </a>
              <a href="#">
                <Image width={20} height={20} src="/icons/tiktok.svg" />
              </a>
              <a href="#">
                <Image width={20} height={20} src="/icons/youtube.svg" />
              </a>
              <a href="#">
                <Image width={20} height={20} src="/icons/lingked.svg" />
              </a>
            </div>
          </ul>
        </div>
        <div className="flex flex-col text-white ">
          <h1 className="font-poppins-medium font-bold text-lg text-2x1 py-4">
            Company and Support
          </h1>
          <div className="grid grid-cols-2">
            <div
              href="#"
              className="font-poppins-regular text-base hover:text-gray-500 cursor-pointer "
            >
              About Us
            </div>
            <div
              href="#"
              className="font-poppins-regular text-base hover:text-gray-500 cursor-pointer "
            >
              Instant Book
            </div>
            <div
              href="#"
              className="font-poppins-regular text-base hover:text-gray-500 cursor-pointer "
            >
              Contact Us
            </div>
            <div
              href="#"
              className="font-poppins-regular text-base hover:text-gray-500 cursor-pointer"
            >
              All Bali Villas
            </div>
            <div
              href="#"
              className="font-poppins-regular text-base hover:text-gray-500 cursor-pointer"
            >
              FAQ
            </div>
            <div
              href="#"
              className="font-poppins-regular text-base hover:text-gray-500 cursor-pointer "
            >
              Tours and Activities
            </div>
            <div
              href="#"
              className="font-poppins-regular text-base hover:text-gray-500 cursor-pointer"
            >
              Press
            </div>
            <div
              href="#"
              className="font-poppins-regular text-base hover:text-gray-500 cursor-pointer "
            >
              Enhanced Services
            </div>
            <div
              href="#"
              className="font-poppins-regular text-base hover:text-gray-500 cursor-pointer"
            >
              Blogs
            </div>
          </div>
        </div>
        <ul className="text-white ">
          <p className="font-poppins-medium font-bold text-lg text-2x1 py-4">
            Legal
          </p>
          <li>
            <a
              href="#"
              className="text-md font-poppins-regular text-base hover:text-gray-500 cursor-pointer"
            >
              Terms Of Use
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-md font-poppins-regular text-base hover:text-gray-500 cursor-pointer"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-start items-start text-start mt-6 pb-2 ">
        <h1 className="text-white font-poppins-regular">
          © 2023 Villa Bali Paradise by {""}
          <span className="hover:text-gray-500 font-poppins-regular text-base cursor-pointer ">
            PT Paradise Makmur Abadi
          </span>{" "}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
