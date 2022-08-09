import { Transition } from "@headlessui/react";
import { Image } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState<string>("");

  const navRoute = [
    {
      name: "Trang chủ",
      href: "/",
    },
    {
      name: "Chương trình học",
      href: "/curriculum",
    },
    {
      name: "Liện hệ",
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
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center w-full">
              <div className="flex items-center w-full my-4">
                <div className="w-[250px] lg:min-w-[400px]">
                  <Image
                    className="mr-8"
                    src="/speak well.png"
                    alt="Speak well"
                    width="100%"
                  />
                </div>
                <div className="hidden md:block w-full">
                  <div className="pl-10 flex w-full justify-between items-center space-x-4">
                    <ul className="list-none flex">
                      {navRoute.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className={`${
                              focus === item.href ? "text-ct-solid-red-03 " : ""
                            }hover:text-ct-solid-red-03`}
                          >
                            <Link href={item.href}>
                              <a className="flex items-center mr-4 px-4 font-bold cursor-pointer">
                                {item.name}
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="lg:block hidden">
                      <p> HỖ TRỢ KHÁCH HÀNG </p>
                      <a
                        href="tel:19009399"
                        className="font-semibold text-ct-solid-red-03"
                      >
                        1900 9399
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-ct-primary-03 inline-flex items-center justify-center p-2 rounded-md text-ct-neutral-01 hover:text-white hover:bg-ct-primary-02 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref}>
                <ul className="list-none text-ct-neutral-01 flex flex-col bg-ct-primary-03">
                  {navRoute.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`${
                          focus === item.href ? "text-ct-solid-red-03 " : ""
                        }hover:text-ct-solid-red-03 my-2`}
                      >
                        <Link href={item.href}>
                          <a className="flex items-center mr-4 px-4 font-bold cursor-pointer">
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                  <li className="py-4">
                    <p className="flex items-center mr-4 px-4 font-bold cursor-pointer">
                      {" "}
                      HỖ TRỢ KHÁCH HÀNG{" "}
                    </p>
                    <a
                      href="tel:19009399"
                      className="font-semibold text-ct-solid-red-03  mr-4 px-4"
                    >
                      1900 9399
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
};

export default Header;
