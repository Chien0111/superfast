import { Image } from "@mantine/core";
import { ArrowRight } from "iconsax-react";
import SliderComp from "../../../components/Slider";
const cardList = [
  {
    content: (
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="ml-12 max-w-[700px]">
          <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Công nghệ H5P
          </p>
          <p className="text-left font-bold text-[50px] mb-4 text-ct-neutral-01">
            Mang tính tương tác cao, khơi gợi hứng thú học tập
          </p>
          <button className="capitalize px-8 py-4 mt-8 rounded-md bg-ct-secondary-01 text-sm text-ct-neutral-01">
            <span>Đăng ký ngay</span>{" "}
            <ArrowRight
              className="inline ml-4"
              color="currentColor"
              size="16"
            />
          </button>
        </div>
        <Image src="/images/banner1.png" width="100%" height="100%" />
      </div>
    ),
  },
  {
    content: (
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="ml-12 max-w-[700px]">
          <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Mô hình học 1-1
          </p>
          <p className="text-left font-bold text-[50px] mb-4 text-ct-neutral-01">
            Tạo không gian gắn kết, tập trung hoàn toàn với giáo viên.
          </p>
          <button className="capitalize px-8 py-4 mt-8 rounded-md bg-ct-secondary-01 text-sm text-ct-neutral-01">
            <span>Đăng ký ngay</span>{" "}
            <ArrowRight
              className="inline ml-4"
              color="currentColor"
              size="16"
            />
          </button>
        </div>
        <Image src="/images/banner2.png" width="100%" height="100%" />
      </div>
    ),
  },
  {
    content: (
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="ml-12 max-w-[700px]">
          <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Talk to me ứng dụng AI
          </p>
          <p className="text-left font-bold text-[50px] mb-4 text-ct-neutral-01">
            Giúp luyện phát âm như người bản xứ và nâng cao năng lực phản xạ
            ngôn ngữ.
          </p>
          <button className="capitalize px-8 py-4 mt-8 rounded-md bg-ct-secondary-01 text-sm text-ct-neutral-01">
            <span>Đăng ký ngay</span>{" "}
            <ArrowRight
              className="inline ml-4"
              color="currentColor"
              size="16"
            />
          </button>
        </div>
        <Image src="/images/banner3.png" width="100%" height="100%" />
      </div>
    ),
  },
  {
    content: (
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="ml-12 max-w-[700px]">
          <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Định hướng thi chứng chỉ YLE của Cambridge
          </p>
          <p className="text-left font-bold text-[50px] mb-4 text-ct-neutral-01">
            Chương trình giảng dạy bám sát đề thi YLE, đáp ứng 100% kiến thức
            tiêu chuẩn.
          </p>
          <button className="capitalize px-8 py-4 mt-8 rounded-md bg-ct-secondary-01 text-sm text-ct-neutral-01">
            <span>Đăng ký ngay</span>{" "}
            <ArrowRight
              className="inline ml-4"
              color="currentColor"
              size="16"
            />
          </button>
        </div>
        <Image src="/images/banner4.png" width="100%" height="100%" />
      </div>
    ),
  },
];
const Slider = () => {
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
  return (
    <div className="relative">
      <svg
        className="editorial"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="50" y="0" fill="#605ea6" />
          <use xlinkHref="#gentle-wave" x="50" y="3" fill="#2e2c74" />
          <use xlinkHref="#gentle-wave" x="50" y="6" fill="#23215b" />
        </g>
      </svg>
      <div className="w-full h-fit bg-[#23215b]">
        <SliderComp
          settings={{
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            infinite: false,
          }}
          showArrow={settingSlidePC.showArrow}
          showDots={settingSlidePC.showDots}
          content={cardList}
          styleDot=""
        />
      </div>
    </div>
  );
};

export default Slider;
