import { Image } from "@mantine/core";
import { ArrowRight } from "iconsax-react";
import { useState } from "react";
import ModalRegister from "../../../components/ModalRegister";
import SliderComp from "../../../components/Slider";

const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settingSlidePC = {
    setting: {
      slidesToShow: 3.3,
      slidesToScroll: 3,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            swipeToSlide: true,
          },
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
          },
        },
      ],
    },
    showArrow: false,
    showDots: true,
    styleDot: "",
  };
  const cardList = [
    {
      content: (
        <div className="relative w-full lg:bg-[url('/images/banner-bg.png')] bg-[url('/images/bg-banner-mobile.png')] bg-cover bg-center bg-no-repeat lg:h-[970px] h-[300px]">
          <div className="lg:w-full w-[98%] max-w-[1200px] mx-auto flex items-start justify-center lg:justify-start">
            <div className="ml-0 w-[34%] ">
              <div className=" lg:w-[350px]">
                <img
                  src="/images/ufo.png"
                  className=" rotate-[3.54deg] w-[60px] lg:w-[189px] lg:mt-[295px] lg:ml-[165px] mt-[50px] ml-[20px]"
                />
                <img
                  src="/images/img1-banner.png"
                  className="lg:w-full w-full lg:ml-[75px] lg:mt-[40px] mt-[20px]"
                />
              </div>
            </div>
            <div className="lg:mt-8  w-[32%] ">
              <img
                className="lg:w-full w-full lg:mt-[105px] mt-[40px]"
                src="/images/img-banner.png"
              />
            </div>
            <div className=" lg:w-[350px] w-[34%]">
              <div className="lg:pt-[340px] pt-[60px]">
                <img
                  src="/images/img3-banner.png"
                  className="lg:w-full w-[128px]"
                />
                <img
                  src="/images/img4-banner.png"
                  className="lg:w-full w-[154px] lg:mt-[55px]"
                />
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start lg:pl-8 justify-center lg:pt-6 pt-9 absolute lg:left-[40%] lg:bottom-[80px] left-[20%] bottom-0">
            <button
              className="bg-ct-tertiary-500 glow lg:w-[308px] w-[232px] lg:h-[60px] h-[47px] rounded-[50px] flex items-center justify-center"
              style={{
                boxShadow: "0px 0px 15px 3px rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => setIsOpen(true)}
            >
              <p className="text-ct-primary-400 lg:Button-Desktop-Large uppercase text-[18px] font-bold">
                Đăng ký ngay
              </p>
              <img
                className="lg:w-[35px] w-[25px] pl-1 lg:pl-3"
                src="/images/icon12.png"
              />
            </button>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="w-full lg:bg-[url('/images/slide-bg-desktop.png')] bg-[url('/images/slide-bg2.png')] relative bg-cover bg-center bg-no-repeat lg:h-[970px] h-[310px]">
          <div className="lg:w-full w-[98%] max-w-[1200px] mx-auto ">
            <img
              src="/images/book1.png"
              className="lg:w-[132px] w-[25px] h-[28px] lg:h-[149px] absolute lg:top-[448px] top-[113px] lg:left-[335px] left-[39px]"
              alt=""
            />{" "}
            <div className="hidden lg:block">
              <img
                src="/images/ufo.png"
                alt=""
                className="lg:absolute lg:top-[448px] lg:right-[197px] lg:w-[123px] lg:h-[215px]"
              />
            </div>
            <div className="lg:pt-[147px] pt-4 justify-center flex lg:flex-none lg:justify-start">
              <img
                src="/images/title.png"
                className="lg:w-[659px] lg:h-[191px] w-[229px] h-[46px] "
                alt=""
              />
            </div>
            <div className="flex w-full lg:flex-row flex-col">
              <div>
                <img
                  src="/images/bg3-if.png"
                  className="lg:w-[460px] w-[86px] lg:h-[600px] h-[112px] lg:pt-[74px] pt-4 lg:mt-0 mt-3 lg:ml-0 ml-10"
                  alt=""
                />
              </div>
              <div className="lg:pt-[74px] pt-0 w-full">
                <img
                  src="/images/chu-a.png"
                  className="absolute lg:top-[437px] top-[113px] lg:left-[837px] left-[152px] w-[23px] h-[29px] lg:w-[84px] lg:h-[105px]"
                />
                <img
                  src="/images/chu-b.png"
                  className="absolute lg:top-[415px] top-[97px] lg:left-[960px] left-[187px] w-9 h-8 lg:w-[129px] lg:h-[115px]"
                />
                <img
                  src="/images/chu-d.png"
                  alt=""
                  className="absolute lg:top-[530px] lg:left-[944px] lg:w-[114px] lg:h-[114px] top-[144px] left-[180px] w-[31px] h-[31px]"
                />
                <img
                  src="/images/bg-teacher.png"
                  alt=""
                  className="absolute lg:top-[0px] top-12 lg:left-[1093px] lg:w-[455px] lg:h-[585px] w-[106px] h-[136px] right-6"
                />
                <div className="lg:mt-[240px] flex lg:justify-start justify-center">
                  <div className="lg:bg-[url(/images/bg001.png)] bg-[url(/images/bg002.png)]  lg:py-10 py-2 justify-center items-center flex lg:w-[267px] w-[111px] px-4">
                    <div className="lg:w-[51px] w-[45px] lg:text-[17px] text-[8px] text-white uppercase font-medium">
                      Công nghệ
                    </div>
                    <div className="lg:text-[52px] text-[24px] text-white font-bold">
                      H5P
                    </div>
                  </div>
                  <div className="lg:bg-[url(/images/bg001.png)] bg-[url(/images/bg002.png)] lg:w-[267px] w-[111px] lg:py-10 py-3 text-center ">
                    <div className=" lg:text-[17px] text-[8px] text-white uppercase font-medium">
                      mô hình học
                    </div>
                    <div className="lg:text-[43px] text-[22px] text-white font-bold">
                      1-1
                    </div>
                  </div>
                  <div className="lg:bg-[url(/images/bg001.png)] bg-[url(/images/bg002.png)] lg:text-[16px] text-[6.5px] lg:py-10 lg:w-[267px] w-[111px] py-4 text-white lg:px-[34px] px-4">
                    Ứng dụng AI luyện phát âm như người bản xứ, nâng cao năng
                    lực phản xạ
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start lg:pl-8 justify-center lg:pt-6 pt-9 absolute lg:left-[40%] lg:bottom-[80px] left-[20%] bottom-0">
            <button
              className="bg-ct-tertiary-500 glow lg:w-[308px] w-[232px] lg:h-[60px] h-[47px] rounded-[50px] flex items-center justify-center"
              style={{
                boxShadow: "0px 0px 15px 3px rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => setIsOpen(true)}
            >
              <p className="text-ct-primary-400 lg:Button-Desktop-Large uppercase text-[18px] font-bold">
                Đăng ký ngay
              </p>
              <img
                className="lg:w-[35px] w-[25px] pl-1 lg:pl-3"
                src="/images/icon12.png"
              />
            </button>
          </div>
        </div>
      ),
    },
    // {
    //   content: (
    //     <div className="w-full max-w-[1200px] mx-auto flex items-start justify-center lg:justify-between">
    //       <div className="ml-0 lg:ml-12 max-w-[500px] flex flex-col items-center">
    //         {/* <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
    //           Mô hình học 1-1
    //         </p>
    //         <p className="text-left font-bold text-[50px] mb-4 text-ct-neutral-01">
    //           Tạo không gian gắn kết, tập trung hoàn toàn với giáo viên
    //         </p> */}
    //         <div className="w-[250px] lg:w-[500px]">
    //           <Image src="/banner/banner 2.png" width="100%" height="100%" />
    //         </div>

    //         <button
    //           onClick={() => setIsOpen(true)}
    //           className="capitalize w-fit px-8 py-4 my-8 lg:mt-2 rounded-md bg-ct-solid-red-03 text-sm text-ct-neutral-01"
    //         >
    //           <span>Đăng ký ngay</span>{" "}
    //           <ArrowRight
    //             className="inline ml-4"
    //             color="currentColor"
    //             size="16"
    //           />
    //         </button>
    //       </div>
    //       <Image
    //         className="hidden lg:block"
    //         src="/images/banner2.png"
    //         width="660px"
    //         height="100%"
    //       />
    //     </div>
    //   ),
    // },
    // {
    //   content: (
    //     <div className="w-full max-w-[1200px] mx-auto flex items-start justify-center lg:justify-between">
    //       <div className="ml-0 lg:ml-12 max-w-[500px] flex flex-col items-center">
    //         {/* <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
    //           Talk to me ứng dụng AI
    //         </p>
    //         <p className="text-left font-bold text-[50px] mb-4 text-ct-neutral-01">
    //           Giúp luyện phát âm như người bản xứ và nâng cao năng lực phản xạ
    //           ngôn ngữ
    //         </p> */}
    //         <div className="w-[250px] lg:w-[500px]">
    //           <Image src="/banner/banner 3.png" width="100%" height="100%" />
    //         </div>

    //         <button
    //           onClick={() => setIsOpen(true)}
    //           className="capitalize w-fit px-8 py-4 my-8 lg:mt-2 rounded-md bg-ct-solid-red-03 text-sm text-ct-neutral-01"
    //         >
    //           <span>Đăng ký ngay</span>{" "}
    //           <ArrowRight
    //             className="inline ml-4"
    //             color="currentColor"
    //             size="16"
    //           />
    //         </button>
    //       </div>
    //       <Image
    //         className="hidden lg:block"
    //         src="/images/banner3.png"
    //         width="660px"
    //         height="100%"
    //       />
    //     </div>
    //   ),
    // },
    // {
    //   content: (
    //     <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
    //       <div className="ml-12  max-w-[500px]">
    //         <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
    //           Định hướng thi chứng chỉ YLE của Cambridge
    //         </p>
    //         <p className="text-left font-bold text-[50px] mb-4 text-ct-neutral-01">
    //           Chương trình giảng dạy bám sát đề thi YLE, đáp ứng 100% kiến thức
    //           tiêu chuẩn
    //         </p>
    //         <button
    //           onClick={() => setIsOpen(true)}
    //           className="capitalize px-8 py-4 mt-8 rounded-md bg-ct-solid-red-03 text-sm text-ct-neutral-01"
    //         >
    //           <span>Đăng ký ngay</span>{" "}
    //           <ArrowRight
    //             className="inline ml-4"
    //             color="currentColor"
    //             size="16"
    //           />
    //         </button>
    //       </div>
    //       <Image src="/images/banner4.png" width="660px" height="100%" />
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className=" lg:h-[970px] h-[300px]">
      <SliderComp
        settings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          infinite: true,
        }}
        showArrow={settingSlidePC.showArrow}
        showDots={settingSlidePC.showDots}
        content={cardList}
        styleDot="-mt-8 bg-ct-neutral-100"
        className=""
      />
      <ModalRegister
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default Slider;
