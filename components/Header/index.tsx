import { Image } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import HeaderMobile from "../HeaderMobile";

const Header = () => {
  const navigate = useRouter();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState<string>("");

  const navRoute = [
    {
      name: "Trang chủ",
      href: "/",
    },
    {
      name: "Liên hệ",
      href: "/contact-us",
    },
    {
      name: "GIẢI PHÁP HỌC TIẾNG ANH",
      href: "/curriculum",
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
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <nav className="max-w-[1200px] mx-auto">
          <div className="flex items-center p-1 justify-between ">
            <Link href="/">
              <a className="flex">
                <div className="w-[170px] mr-2 sm:pr-2">
                  <Image
                    className="mr-8"
                    src="speak_well.png"
                    alt=""
                    width="100%"
                  />
                </div>
              </a>
            </Link>
            <div className="hidden md:block mx-5">
              <div className="flex items-center">
                <div className="flex items-center justify-center">
                  <div className="w-[25px] h-[25px] mr-2">
                    <Image
                      className="mr-8"
                      src="/images/home.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div>
                    <Link href="/">
                      <a
                        className={`${
                          focus === "/" ? "text-ct-secondary-500 " : ""
                        }hover:text-ct-secondary-600 Heading-Mobile-Heading6 text-ct-primary-1000 cursor-pointer`}
                      >
                        TRANG CHỦ
                      </a>
                    </Link>
                  </div>
                  <div className="mx-10 min-w-[2px]">
                    <Image
                      className=""
                      src="/images/thanh.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-[25px] h-[25px] mr-2">
                    <Image
                      className="mr-8"
                      src="/images/solution.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div>
                    <Link href="/curriculum">
                      <a
                        className={`${
                          focus === "/curriculum"
                            ? "text-ct-secondary-500 "
                            : ""
                        }hover:text-ct-secondary-600 Heading-Mobile-Heading6 text-ct-primary-1000 cursor-pointer`}
                      >
                        GIẢI PHÁP HỌC TIẾNG ANH
                      </a>
                    </Link>
                  </div>
                  <div className="mx-10 min-w-[2px]">
                    <Image
                      className=""
                      src="/images/thanh.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-[25px] h-[25px] mr-2">
                    <Image
                      className="mr-8"
                      src="/images/lienhe.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div>
                    <Link href="/contact-us">
                      <a
                        className={`${
                          focus === "/contact-us"
                            ? "text-ct-secondary-500 "
                            : ""
                        }hover:text-ct-secondary-600 Heading-Mobile-Heading6 text-ct-primary-1000 cursor-pointer`}
                      >
                        LIÊN HỆ
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 mr-2 sm:mr-4">
              <div className="Body-Mobile-9px-Medium text-ct-tertiary-1000 sm:Body-Desktop-Medium text-right">
                Hỗ trợ khách hàng
              </div>
              <div className="text-ct-primary-1000 Body-Mobile-9px-Medium1 font-bold text-right sm:Body-Desktop-Medium-Bold">
                <a href="tel:19009399">1900 9399</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:hidden mx-5">
            <div className="flex items-center sm:px-5 px-2">
              <div className="w-[16px] h-[16px] mr-1">
                <Image
                  className="mr-8"
                  src="/images/home.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div>
                <Link href="/">
                  <a
                    className={`${
                      focus === "/" ? "text-ct-secondary-500 " : ""
                    }hover:text-ct-secondary-600 Heading-Mobile-Heading5 text-ct-primary-1000 min-w-[58px] cursor-pointer`}
                  >
                    TRANG CHỦ
                  </a>
                </Link>
              </div>
            </div>
            <div className="min-w-[1px]">
              <Image className="" src="/images/thanh.png" alt="" width="100%" />
            </div>
            <div className="flex items-center sm:px-5 px-3">
              <div className="w-[16px] h-[16px] mr-1">
                <Image
                  className="mr-8"
                  src="/images/lienhe.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div>
                <Link href="/curriculum">
                  <a
                    className={`${
                      focus === "/curriculum" ? "text-ct-secondary-500 " : ""
                    }hover:text-ct-secondary-600 Heading-Mobile-Heading5 text-ct-primary-1000 min-w-[38px] cursor-pointer`}
                  >
                    GIẢI PHÁP HỌC TIẾNG ANH
                  </a>
                </Link>
              </div>
            </div>
            <div className="min-w-[1px]">
              <Image className="" src="/images/thanh.png" alt="" width="100%" />
            </div>
            <div className="flex items-center sm:px-5 px-3">
              <div className="w-[16px] h-[16px] mr-1">
                <Image
                  className="mr-8"
                  src="/images/lienhe.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div>
                <Link href="/contact-us">
                  <a
                    className={`${
                      focus === "/contact-us" ? "text-ct-secondary-500 " : ""
                    }hover:text-ct-secondary-600 Heading-Mobile-Heading5 text-ct-primary-1000 min-w-[38px] cursor-pointer`}
                  >
                    Liên hệ
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
