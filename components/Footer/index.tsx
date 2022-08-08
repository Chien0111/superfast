import { Image } from "@mantine/core";
import { CallCalling, Facebook, Youtube } from "iconsax-react";
import Link from "next/link";
import style from "./style.module.css";

const Footer = () => {
  return (
    <div>
      <div className="lg:flex  px-5 pt-20 pb-5 border-b-2 max-w-[1200px] m-auto">
        <div className="md:flex lg:w-1/2">
          <div className=" md:w-1/2  p-5 lg:border-r-2 md:border-r-2 ">
            <div className="w-full">
              <div className="w-1/3 md:w-full">
                <Image
                  classNames={{
                    image: `${style.image} w-full `,
                    imageWrapper: "w-full",
                  }}
                  className={` mb-2`}
                  src="photo_2022.jpg"
                  width="100%"
                  height="auto"
                  alt="img"
                />
              </div>
              <div>
                <p className="font-medium">
                  <span className="font-bold">
                    CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ DỊCH VỤ GIÁO DỤC
                  </span>{" "}
                  <br />
                </p>
                <p className="text-ct-solid-red-01 text-2xl font-bold py-3 w-full flex break-words">
                  <CallCalling
                    size="32"
                    className="text-ct-solid-green-01 mr-2"
                  />{" "}
                  <span className="text-ct-solid-red-01">
                    Hotline: 1900 9399
                  </span>
                </p>
                <p className="text-ms">
                  Địa chỉ: Số 40, phố Nguyên Hồng, Phường Láng Hạ, Quận Đống Đa,
                  Thành phố Hà Nội, Việt Nam{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" md:w-1/2  p-5 lg:border-r-2 md:mt-4">
            <div className="w-full mt-2">
              <h1 className="text-4xl font-normail">Information</h1>
              <p className="my-3">
                <Link href="/">
                  <a className="text-xl cursor-pointer  ">Home</a>
                </Link>
              </p>
              <p className="my-2">
                <Link href="/curriculum">
                  <a className="cursor-pointer text-xl">Curriculum</a>
                </Link>
              </p>
              <p className="my-2">
                <Link href="/contact-us">
                  <a className="cursor-pointer text-xl">Contact Us</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:mt-3 lg:w-1/2">
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
        </div>
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
