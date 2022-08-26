import { useState } from "react";
import ModalRegister from "../../../components/ModalRegister";
import SliderComp from "../../../components/Slider";
import style from "./style.module.css";

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
    styleDot: "h-[14px] w-[14px] mt-5 lg:h-5 lg:w-5 lg:mt-2 bg-ct-neutral-100",
  };
  const cardList = [
    {
      content: (
        <div
          className={`w-full lg:bg-[url('/banner/desktop3.png')] bg-[url('/banner/mobile3.png')] relative bg-cover bg-center bg-no-repeat lg:h-screen h-[310px] ${style.roundClip}`}
        >
          <div className="w-fit mx-auto mb-8 absolute -bottom-4 lg:bottom-4 left-1/2 -translate-x-1/2">
            <button
              className="bg-ct-tertiary-500 glow px-8 py-2 lg:px-16 lg:py-3 rounded-[50px] flex items-center justify-center"
              style={{
                boxShadow: "0px 0px 15px 3px rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => setIsOpen(true)}
            >
              <p className="text-ct-primary-400 lg:Button-Desktop-Large uppercase text-[14px] lg:text-[18px] font-bold">
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
        <div
          className={`w-full lg:bg-[url('/banner/desktop2.png')] bg-[url('/banner/mobile2.png')] relative bg-cover lg:bg-cover bg-no-repeat lg:h-screen h-[310px] ${style.roundClip}`}
        >
          <div className="w-fit mx-auto mb-8 absolute -bottom-4 lg:bottom-4 left-1/2 -translate-x-1/2">
            <button
              className="bg-ct-tertiary-500 glow px-8 py-2 lg:px-16 lg:py-3 rounded-[50px] flex items-center justify-center"
              style={{
                boxShadow: "0px 0px 15px 3px rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => setIsOpen(true)}
            >
              <p className="text-ct-primary-400 lg:Button-Desktop-Large uppercase text-[14px] lg:text-[18px] font-bold">
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
        <div
          className={`relative w-full lg:bg-[url('/banner/desktop1.png')] bg-[url('/banner/mobile1.png')] bg-cover lg:bg-center bg-top bg-no-repeat lg:h-screen h-[300px] ${style.roundClip}`}
        >
          <div className="w-fit mx-auto mb-8 absolute -bottom-4 lg:bottom-4 left-1/2 -translate-x-1/2">
            <button
              className="bg-ct-tertiary-500 glow px-8 py-2 lg:px-16 lg:py-3 rounded-[50px] flex items-center justify-center"
              style={{
                boxShadow: "0px 0px 15px 3px rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => setIsOpen(true)}
            >
              <p className="text-ct-primary-400 lg:Button-Desktop-Large uppercase text-[14px] lg:text-[18px] font-bold">
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
  ];
  return (
    <div className="lg:h-screen h-[300px]">
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
        styleDot={settingSlidePC.styleDot}
        className="pb-4"
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
