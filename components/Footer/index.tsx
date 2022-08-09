import { Image } from "@mantine/core";
import { CallCalling, Facebook, Youtube } from "iconsax-react";
import Link from "next/link";
import style from "./style.module.css";

const Footer = () => {
  return (
    <div>
      <div className="lg:flex  px-5 lg:pt-20 pt-10 pb-5 border-b lg:max-w-[1000px] max-w-[1200px] m-auto">
        <div className="lg:flex lg:w-full">
          <div className=" lg:w-2/3 w-full lg:border-r border-b lg:border-b-0 pb-4">
            <div className="w-full">
              <div className=" lg:w-full flex items-center justify-start  mb-6">
                <Image
                  src="speak well.png"
                  alt="Random unsplash image"
                  width={400}
                />
              </div>
              <div className="">
                <p className="font-medium">
                  <span className="font-bold lg:text-xl ">
                    CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ DỊCH VỤ GIÁO DỤC
                  </span>{" "}
                  <br />
                </p>
                <p className="text-ct-solid-red-01 lg:text-2xl font-bold py-3 w-full flex break-words items-center">
                  <CallCalling
                    size="26"
                    className="text-ct-solid-green-01 mr-2"
                  />{" "}
                  <span className="text-ct-solid-red-01">
                    Hotline: 1900 9399
                  </span>
                </p>
                <p className="text-ms mb-2">
                  <span className="font-medium text-lg ">
                    Văn phòng Hà Nội:
                  </span>{" "}
                  Tầng 4, tòa nhà 25T2, Nguyễn Thị Thập, Trung Hòa, Cầu Giấy, Hà
                  Nội
                </p>
                <p className="text-ms">
                  <span className="font-medium text-lg ">
                    Văn phòng Hồ Chí Minh:
                  </span>{" "}
                  59 Xa lộ Hà Nội, thành phố Thủ Đức, thành phố Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/3 mt-2 lg:px-5">
            <div className="w-full mt-2">
              <h1 className="text-3xl font-normail text-ct-primary-01 mb-6">
                THÔNG TIN
              </h1>
              <p className="my-2">
                <Link href="/">
                  <a className="text-xl cursor-pointer  ">Trang chủ</a>
                </Link>
              </p>
              <p className="my-2">
                <Link href="/curriculum">
                  <a className="cursor-pointer text-xl">Chương trình</a>
                </Link>
              </p>
              <p className="my-2 mb-4">
                <Link href="/contact-us">
                  <a className="cursor-pointer text-xl">Liên hệ</a>
                </Link>
              </p>
              <div className=" flex items-center">
                <Link href="https://www.facebook.com/speakwell.icanconnect.vn">
                  <a
                    className="cursor-pointer text-xl mr-3 hover:opacity-70"
                    target="_blank"
                  >
                    {" "}
                    <Facebook
                      size="42"
                      className="text-ct-primary-03 w-full "
                      variant="Bold"
                    />
                  </a>
                </Link>
                <Link href="https://www.youtube.com/c/SpeakWellTi%E1%BA%BFnganhchu%E1%BA%A9nCambridgechotr%E1%BA%BB">
                  <a
                    className="cursor-pointer text-xl hover:opacity-70"
                    target="_blank"
                  >
                    {" "}
                    <Youtube
                      size="49"
                      className="text-ct-solid-red-01"
                      variant="Bold"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="md:flex md:mt-3 lg:w-1/2">
          <div className="  md:w-1/2 md:border-r-2 p-5 lg:border-r-2 ">
            <div className="w-full mt-2">
              <h1 className="text-4xl font-normail">Media Gallery</h1>
              <div className="max-w-[300px]  md:w-full">
                <div className="flex mt-4">
                  <Image
                    classNames={{
                      image: `${style.image} w-full hover:opacity-70 mb-4`,
                      imageWrapper: "w-full",
                    }}
                    radius={20}
                    className={`mr-4 `}
                    src="images/facilities-11.jpg"
                    width="100%"
                    height="auto"
                    alt="img"
                  />
                  <Image
                    classNames={{
                      image: `${style.image} w-full hover:opacity-70 mb-4`,
                      imageWrapper: "w-full",
                    }}
                    radius={20}
                    className={` mr-4`}
                    src="images/facilities-11.jpg"
                    width="100%"
                    height="auto"
                    alt="img"
                  />
                  <Image
                    classNames={{
                      image: `${style.image} w-full hover:opacity-70 mb-4`,
                      imageWrapper: "w-full",
                    }}
                    radius={20}
                    className={` `}
                    src="images/facilities-11.jpg"
                    width="100%"
                    height="auto"
                    alt="img"
                  />
                </div>
                <div className="flex mt-2">
                  <Image
                    classNames={{
                      image: `${style.image} w-full hover:opacity-70 mb-4`,
                      imageWrapper: "w-full",
                    }}
                    radius={20}
                    className={`mr-4 `}
                    src="images/facilities-11.jpg"
                    width="100%"
                    height="auto"
                    alt="img"
                  />
                  <Image
                    classNames={{
                      image: `${style.image} w-full hover:opacity-70 mb-4`,
                      imageWrapper: "w-full",
                    }}
                    radius={20}
                    className={` mr-4`}
                    src="images/facilities-11.jpg"
                    width="100%"
                    height="auto"
                    alt="img"
                  />
                  <Image
                    classNames={{
                      image: `${style.image} w-full hover:opacity-70 mb-4`,
                      imageWrapper: "w-full",
                    }}
                    radius={20}
                    className={` `}
                    src="images/facilities-11.jpg"
                    width="100%"
                    height="auto"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 md:w-1/2 ">
            <div className="w-full mt-2">
              <div className=" flex items-center">
                <Link href="https://www.facebook.com/speakwell.icanconnect.vn">
                  <a className="cursor-pointer text-xl mr-3" target="_blank">
                    {" "}
                    <Facebook size="42" className="text-ct-primary-03" />
                  </a>
                </Link>
                <Link href="https://www.youtube.com/c/SpeakWellTi%E1%BA%BFnganhchu%E1%BA%A9nCambridgechotr%E1%BA%BB">
                  <a className="cursor-pointer text-xl" target="_blank">
                    {" "}
                    <Youtube size="49" className="text-ct-solid-red-01" />
                  </a>
                </Link>
              </div>
              <div>
                <p>Monday – Friday:</p>
                <p className="font-bold">09:00 AM – 06:00 PM</p>
              </div>
              <div>
                <p>Saturday:</p>
                <p className="font-bold">10:00 AM – 05:00 PM</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Image
        classNames={{ image: "z-20" }}
        src="/images/footer.jpg"
        height="auto"
        alt="img"
      />
    </div>
  );
};

export default Footer;
