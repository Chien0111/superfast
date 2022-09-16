import { Collapse, Drawer } from "@mantine/core";
import { Add } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { data } from "../../data/data";
import RightArrow from "../Icon/RightArrow";

const HeaderMobile = () => {
  const [openedNav, setOpenedNav] = useState<boolean>(false);
  const [openedCollapse, setOpenedCollapse] = useState<boolean>(false);

  return (
    <>
      <div className="flex w-full px-4 py-5 pb-4 justify-center items-center">
        <Drawer
          opened={openedNav}
          onClose={() => setOpenedNav(false)}
          withCloseButton={false}
          size="md"
          position="left"
          zIndex={9999}
        >
          <div className="mx-auto w-fit py-10">
            <Image
              src="/logo.png"
              width={176}
              height={39}
              quality={100}
              alt="Speakwell logo"
            />
          </div>
          <div>
            <div onClick={() => setOpenedNav(false)}>
              <Link href="/">
                <a className="flex p-5 border-t border-ct-primary-300">
                  <Image
                    src="/images/home.png"
                    width={25}
                    height={25}
                    alt="home"
                  />
                  <p className="Heading-Mobile-Heading4 text-ct-primary-500 ml-3">
                    Trang chủ
                  </p>
                </a>
              </Link>
            </div>
            <div
              className={`flex items-center justify-between border-t border-ct-primary-300 ${
                openedCollapse ? "bg-ct-primary-100" : ""
              }`}
              onClick={() => {
                setOpenedCollapse(!openedCollapse);
              }}
            >
              <div className="flex p-5 pr-0 relative">
                <Image
                  src="/images/giaiphap.png"
                  width={25}
                  height={25}
                  alt="curriculum"
                />
                <p className="Heading-Mobile-Heading4 text-ct-primary-500 ml-3">
                  Giải pháp học tiếng anh
                </p>
              </div>
              <div
                className="transition-all mr-2"
                style={
                  openedCollapse
                    ? { transform: "rotate(90deg)" }
                    : { transform: "rotate(0)" }
                }
              >
                <RightArrow />
              </div>
            </div>
            <Collapse in={openedCollapse}>
              {data.map((_, index) => (
                <div key={index} onClick={() => setOpenedNav(false)}>
                  <Link href={_.link}>
                    <a className="flex p-5 bg-ct-primary-100">
                      <p className="Body-Desktop-Bold capitalize text-ct-primary-500 ml-3">
                        {_.type}
                      </p>
                    </a>
                  </Link>
                </div>
              ))}
            </Collapse>
            <div onClick={() => setOpenedNav(false)}>
              <Link href="/contact-us">
                <a className="flex p-5 border-y border-ct-primary-300">
                  <Image
                    src="/images/lienhe.png"
                    width={25}
                    height={25}
                    alt="contact"
                  />
                  <p className="Heading-Mobile-Heading4 text-ct-primary-500 ml-3">
                    Liên hệ
                  </p>
                </a>
              </Link>
            </div>
            <div className="p-5 w-fit mx-auto mt-10">
              <p className="text-center Heading-Mobile-Heading4 text-ct-tertiary-500 ml-3">
                Hỗ trợ khách hàng
              </p>
              <Link href="tel:+8419009399">
                <a className="block text-center Heading-Mobile-Heading3 text-ct-primary-500">
                  1900 9399
                </a>
              </Link>
            </div>
          </div>
        </Drawer>
        <div
          onClick={() => setOpenedNav(false)}
          className={`transition-[height_width] duration-300 ${
            openedNav ? "w-10 h-10 opacity-100" : "w-0 h-0 opacity-0"
          } fixed top-8 left-[330px] z-[10000] rounded-full bg-ct-secondary-500 text-ct-text-white active:bg-ct-secondary-500 active:text-ct-text-white flex items-center justify-center`}
        >
          <Add className="rotate-45" size={32} color="currentColor" />
        </div>
        <div
          className="absolute left-4"
          onClick={() => setOpenedNav((o) => !o)}
        >
          <Image
            src="/images/burger.png"
            width={24}
            height={22}
            quality={100}
            alt=""
          />
        </div>
        <div className="relative h-min justify-self-center">
          <Image
            src="/logo with mother.png"
            width={182}
            height={21}
            quality={100}
            alt="Speakwell logo"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
