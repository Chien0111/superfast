import { Transition } from "@headlessui/react";
import { Image } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState<string>("");

  const navRoute = [
    {
      name: "Trang chủ",
      href: "/",
    },
    // {
    //   name: "Chương trình học",
    //   href: "/curriculum",
    // },
    {
      name: "Liên hệ",
      href: "/contact-us",
    },
  ];

  useEffect(() => {
    Array.from({ length: navRoute.length }).forEach((_, i) => {
      if (navigate.pathname.includes(navRoute[i].href)) {
        setFocus(navRoute[i].href);
      }
    });
  }, [navigate.route]);

  return (
    <header>
      <nav className="max-w-[1200px] mx-auto">
        <div className="flex items-center p-5 justify-between">
          <div className="flex ">
            <div className="w-[106.45px] h-[18.83px] mr-2 sm:w-[176px] sm:h-[39px] sm:border-r sm:pr-2 border-ct-primary-1000">
              <Image className="mr-8" src="logo.png" alt="" width="100%" />
            </div>
            <div className="mt-[-10px]">
              <div>
                <span className="text-ct-primary-1000 font-medium text-[8px] sm:text-[10px]">
                  Được phát triển độc quyền bởi
                </span>
              </div>
              <div className="w-[101.31px] h-[11.98px] mt-[-5px] sm:w-[137px] sm:h-[22px]">
                <Image
                  className="mr-8"
                  src="Rectangle.png"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div className="hidden sm:block ">
            <div className="flex">
              <div className="flex items-center border-r border-ct-primary-1000 pl-5 pr-10">
                <div className="w-[25px] h-[25px] mr-2">
                  <Image
                    className="mr-8"
                    src="/images/home.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div>
                  <p className="Heading-Mobile-Heading6 text-ct-primary-1000">
                    TRANG CHỦ
                  </p>
                </div>
              </div>
              <div className="flex items-center border-r border-ct-primary-1000 pl-5 pr-10">
                <div className="w-[25px] h-[25px] mr-2">
                  <Image
                    className="mr-8"
                    src="/images/lienhe.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div>
                  <p className="Heading-Mobile-Heading6 text-ct-primary-1000">
                    LIÊN HỆ
                  </p>
                </div>
              </div>
              <div className="flex items-center pl-5 pr-5">
                <div className="w-[25px] h-[25px] mr-2">
                  <Image
                    className="mr-8"
                    src="/images/giaiphap.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div>
                  <p className="Heading-Mobile-Heading6 text-ct-primary-1000">
                    GIẢI PHÁP HỌC TIẾNG ANH
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="Body-Mobile-9px-Medium text-ct-tertiary-1000 sm:Body-Desktop-Medium text-right">
              Hỗ trợ khách hàng
            </div>
            <div className="text-ct-primary-1000 font-bold text-right sm:Body-Desktop-Medium-Bold">
              1900 9399
            </div>
          </div>
        </div>
        <div className="flex justify-between sm:hidden">
          <div className="flex items-center border-r border-ct-primary-1000 pl-5 pr-10">
            <div className="w-[16px] h-[16px] mr-1">
              <Image
                className="mr-8"
                src="/images/home.png"
                alt=""
                width="100%"
              />
            </div>
            <div>
              <p className="Heading-Mobile-Heading5 text-ct-primary-1000">
                TRANG CHỦ
              </p>
            </div>
          </div>
          <div className="flex items-center border-r border-ct-primary-1000 pl-5 pr-10">
            <div className="w-[16px] h-[16px] mr-1">
              <Image
                className="mr-8"
                src="/images/lienhe.png"
                alt=""
                width="100%"
              />
            </div>
            <div>
              <p className="Heading-Mobile-Heading5 text-ct-primary-1000">
                Liên hệ
              </p>
            </div>
          </div>
          <div className="flex items-center pl-5 pr-5">
            <div className="w-[16px] h-[16px] mr-1">
              <Image
                className="mr-8"
                src="/images/giaiphap.png"
                alt=""
                width="100%"
              />
            </div>
            <div>
              <p className="Heading-Mobile-Heading5 text-ct-primary-1000">
                GIẢI PHÁP HỌC TIẾNG ANH
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
