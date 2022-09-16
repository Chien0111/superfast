import { Image } from "@mantine/core";
import { Facebook, Youtube } from "iconsax-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="lg:flex  pt-10 pb-5 max-w-[1200px] m-auto">
        <div className="lg:flex lg:w-full">
          <div className="lg:w-1/2 w-full pb-4">
            <div className="w-full text-center">
              <div className=" lg:w-full flex items-center justify-center  mb-6">
                <div className="flex ">
                  <div className="w-[106.45px] h-[18.83px] mr-2 sm:w-[176px] sm:h-[39px] ">
                    <Image
                      className="mr-8"
                      src="logo.png"
                      alt=""
                      width="100%"
                    />
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
              </div>
              <div className="mb-10">
                <p className="font-medium">
                  <span className="font-extrabold lg:text-xl text-ct-primary-1000">
                    CÔNG TY CỔ PHẦN GALAXY EDUCATION
                  </span>{" "}
                  <br />
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex items-center border-r border-ct-primary-1000 px-5">
                  <div className="sm:w-[25px] sm:h-[25px] w-[16px] h-[16px] mr-2">
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
                        href=""
                        className="sm:Heading-Mobile-Heading6 Heading-Mobile-Heading5 cursor-pointer text-ct-primary-1000"
                      >
                        TRANG CHỦ
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center border-r border-ct-primary-1000 px-5">
                  <div className="sm:w-[25px] sm:h-[25px] w-[16px] h-[16px] mr-2">
                    <Image
                      className="mr-8"
                      src="/images/lienhe.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div>
                    <Link href="/contact-us">
                      <a className="cursor-pointer sm:Heading-Mobile-Heading6 Heading-Mobile-Heading5 text-ct-primary-1000">
                        LIÊN HỆ
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center border-r border-ct-primary-1000 px-5 ">
                  <Link href="https://www.youtube.com/c/SpeakWellTi%E1%BA%BFnganhchu%E1%BA%A9nCambridgechotr%E1%BA%BB">
                    <a
                      className="w-fit cursor-pointer text-xl hover:opacity-70"
                      target="_blank"
                    >
                      {" "}
                      <div className="sm:w-[39px] sm:h-[39px] w-[26px] h-[26px]">
                        <Youtube
                          size="100%"
                          className="text-ct-theme-red"
                          variant="Bold"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="flex items-center border-ct-primary-1000  px-5">
                  <Link href="https://www.facebook.com/speakwell.icanconnect.vn">
                    <a
                      className="w-fit cursor-pointer text-xl mr-3 hover:opacity-70"
                      target="_blank"
                    >
                      {" "}
                      <div className="sm:w-[39px] sm:h-[39px] w-[28px] h-[28px] ">
                        <Facebook
                          size="100%"
                          className="text-ct-primary-400 "
                          variant="Bold"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-2 px-5 lg:text-right text-start">
            <div className="w-full mt-2">
              <h1 className="sm:Display-Desktop-Display5 Body-Desktop-Medium-Bold text-ct-primary-1000 mb-4 text">
                <span className="text-ct-tertiary-1000 sm:text-ct-primary-1000">
                  Hotline:
                </span>{" "}
                1900 9399
              </h1>
              <p className="sm:Display-Desktop-Display-footer Body-Mobile-Small-bold mb-4">
                <span className="text-ct-primary-1000 font-bold">
                  Văn phòng Hà Nội:
                </span>{" "}
                Tầng 4, tòa nhà 25T2, Nguyễn Thị Thập, Trung Hòa, Cầu Giấy, Hà
                Nội
              </p>
              <p className="sm:Display-Desktop-Display-footer Body-Mobile-Small-bold">
                <span className="text-ct-primary-1000 font-bold">
                  Văn phòng Hồ Chí Minh:
                </span>{" "}
                59 Xa lộ Hà Nội, phường Thảo Điền, thành phố Thủ Đức, thành phố
                Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
