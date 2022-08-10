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
    showArrow: true,
    showDots: false,
    styleDot: "",
  };
  const cardList = [
    {
      content: (
        <div className="w-full max-w-[1200px] mx-auto flex items-start justify-center lg:justify-between">
          <div className="ml-0 lg:ml-12 max-w-[500px] flex flex-col items-center">
            {/* <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
              Công nghệ H5P
            </p>
            <p className="text-left font-bold text-[50px] mb-4 text-ct-neutral-01">
              Mang tính tương tác cao, khơi gợi hứng thú học tập
            </p> */}
            <div className="w-[250px] lg:w-[500px]">
              <Image src="/banner/banner 1.png" width="100%" height="100%" />
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="capitalize w-fit px-8 py-4 my-8 lg:mt-2 rounded-md bg-ct-solid-red-03 text-sm text-ct-neutral-01"
            >
              <span>Đăng ký ngay</span>{" "}
              <ArrowRight
                className="inline ml-4"
                color="currentColor"
                size="16"
              />
            </button>
          </div>
          <Image
            className="hidden lg:block"
            src="/banner/1200_ICAN.png"
            width="660px"
            height="100%"
          />
        </div>
      ),
    },
    {
      content: (
        <div className="w-full max-w-[1200px] mx-auto flex items-start justify-center lg:justify-between">
          <div className="ml-0 lg:ml-12 max-w-[500px] flex flex-col items-center">
            {/* <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
              Mô hình học 1-1
            </p>
            <p className="text-left font-bold text-[50px] mb-4 text-ct-neutral-01">
              Tạo không gian gắn kết, tập trung hoàn toàn với giáo viên
            </p> */}
            <div className="w-[250px] lg:w-[500px]">
              <Image src="/banner/banner 2.png" width="100%" height="100%" />
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="capitalize w-fit px-8 py-4 my-8 lg:mt-2 rounded-md bg-ct-solid-red-03 text-sm text-ct-neutral-01"
            >
              <span>Đăng ký ngay</span>{" "}
              <ArrowRight
                className="inline ml-4"
                color="currentColor"
                size="16"
              />
            </button>
          </div>
          <Image
            className="hidden lg:block"
            src="/images/banner2.png"
            width="660px"
            height="100%"
          />
        </div>
      ),
    },
    {
      content: (
        <div className="w-full max-w-[1200px] mx-auto flex items-start justify-center lg:justify-between">
          <div className="ml-0 lg:ml-12 max-w-[500px] flex flex-col items-center">
            {/* <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
              Talk to me ứng dụng AI
            </p>
            <p className="text-left font-bold text-[50px] mb-4 text-ct-neutral-01">
              Giúp luyện phát âm như người bản xứ và nâng cao năng lực phản xạ
              ngôn ngữ
            </p> */}
            <div className="w-[250px] lg:w-[500px]">
              <Image src="/banner/banner 3.png" width="100%" height="100%" />
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="capitalize w-fit px-8 py-4 my-8 lg:mt-2 rounded-md bg-ct-solid-red-03 text-sm text-ct-neutral-01"
            >
              <span>Đăng ký ngay</span>{" "}
              <ArrowRight
                className="inline ml-4"
                color="currentColor"
                size="16"
              />
            </button>
          </div>
          <Image
            className="hidden lg:block"
            src="/images/banner3.png"
            width="660px"
            height="100%"
          />
        </div>
      ),
    },
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
    <div className="">
      <div className="opacity-0 lg:opacity-100 hidden lg:block">
        <svg
          className="editorial translate-y-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0
                58-12 88-12s
                58 12 88 12 
                58-12 88-12 
                58 12 88 12
                v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="50" y="0" fill="#ED2490" />
            <use xlinkHref="#gentle-wave" x="50" y="3" fill="#8CC63F" />
            <use xlinkHref="#gentle-wave" x="50" y="6" fill="#0057A5" />
          </g>
        </svg>
      </div>
      <div className="w-full mt-2 bg-[#0057A5]">
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
    </div>
  );
};

export default Slider;
