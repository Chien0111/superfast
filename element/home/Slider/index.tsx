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
        // <div className="w-full lg:bg-[url('/images/banner-bg.png')] bg-[url('/images/bg-banner-mobile.png')] bg-cover bg-no-repeat lg:h-[970px] h-[300px]">
        <div className="lg:w-full w-[98%] max-w-[1200px] mx-auto flex items-start justify-center lg:justify-between">
          <div className="ml-0 lg:ml-12 w-[34%] ">
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
            <div className="flex justify-center lg:mt-[-60px] mt-[-20px]">
              <button
                className="bg-ct-tertiary-500 glow lg:w-[308px] w-[138px] lg:h-[60px] h-[27px] rounded-[50px] flex items-center justify-center"
                style={{ boxShadow: "0px 0px 13px 6px #FFFFFF" }}
                onClick={() => setIsOpen(true)}
              >
                <p className="text-ct-primary-400 lg:Button-Desktop-Large uppercase text-[12px] font-bold">
                  đăng ký ngay
                </p>
                <img
                  className="lg:w-[35px] w-[20px] pl-1 lg:pl-3"
                  src="/images/icon12.png"
                />
              </button>
            </div>
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
        // </div>
      ),
    },
    {
      content: (
        // <div className="w-full lg:bg-[url('/images/banner-bg.png')] bg-[url('/images/bg-banner-mobile.png')] bg-cover bg-no-repeat lg:h-[970px] h-[300px]">
        <div className="lg:w-full w-[98%] max-w-[1200px] mx-auto flex items-start justify-center lg:justify-between">
          <div className="ml-0 lg:ml-12 w-[34%] ">
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
            <div className="flex justify-center lg:mt-[-60px] mt-[-20px]">
              <button
                className="bg-ct-tertiary-500 glow lg:w-[308px] w-[138px] lg:h-[60px] h-[27px] rounded-[50px] flex items-center justify-center"
                style={{ boxShadow: "0px 0px 13px 6px #FFFFFF" }}
                onClick={() => setIsOpen(true)}
              >
                <p className="text-ct-primary-400 lg:Button-Desktop-Large uppercase text-[12px] font-bold">
                  đăng ký ngay
                </p>
                <img
                  className="lg:w-[35px] w-[20px] pl-1 lg:pl-3"
                  src="/images/icon12.png"
                />
              </button>
            </div>
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
        // </div>
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
    <>
      <div className="w-full lg:bg-[url('/images/banner-bg.png')] bg-[url('/images/bg-banner-mobile.png')] bg-cover bg-no-repeat lg:h-[970px] h-[300px]">
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
          styleDot=""
          className=""
        />
      </div>
      <ModalRegister
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};

export default Slider;
