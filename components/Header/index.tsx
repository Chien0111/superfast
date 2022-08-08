import { ArrowCircleDown, ArrowDown2, HambergerMenu } from "iconsax-react";
import { Image } from "@mantine/core";
import React from "react";
import style from "./style.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className={`w-full flex justify-between items-center p-7 `}>
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="Random unsplash image" width={200} />
          <div className="mx-26 md:block hidden">
            <nav className={`${style.nav}`}>
              <ul className="list-none">
                <li className={`${style.dropdown} `}>
                  <Link href="/">
                    <a className="flex items-center mr-4 px-4 font-bold cursor-pointer">
                      Trang chủ
                    </a>
                  </Link>
                  {/* <ul className={`${style.dropdownnav}`}>
                  <li>
                    <ArrowCircleDown
                      size="12"
                      className={`${style.icon} mr-2 hidden`}
                    />
                    Home1
                  </li>
                  <li>
                    <ArrowCircleDown
                      size="12"
                      className={`${style.icon} mr-2 hidden`}
                    />
                    Home2
                  </li>
                  <li>
                    <ArrowCircleDown
                      size="12"
                      className={`${style.icon} mr-2 hidden`}
                    />
                    Home3
                  </li>
                </ul> */}
                </li>
                <li className={`${style.dropdown} `}>
                  <Link href="/curriculum">
                    <a className="flex items-center mr-4 px-4 font-bold cursor-pointer">
                      Chương trình
                    </a>
                  </Link>
                </li>
                <li className={`${style.dropdown} `}>
                  <Link href="/contact-us">
                    <a className="flex items-center mr-4 px-4 font-bold cursor-pointer">
                      Liên hệ
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <div>
            <div className="lg:block hidden">
              <p> HỖ TRỢ KHÁCH HÀNG </p>
              <p className="font-semibold text-ct-secondary-02"> 1900 9399 </p>
            </div>
            <div className="md:hidden block">
              <HambergerMenu size="32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
