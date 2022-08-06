import { Image } from "@mantine/core";
import { ArrowRight } from "iconsax-react";
import SliderComp from "../../../components/Slider";
const cardList = [
  {
    content: (
      <div className="w-full flex items-center justify-between px-10">
        <div className="ml-12 max-w-[700px]">
          <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Công nghệ H5P
          </p>
          <p className="text-left font-bold text-[50px] mb-4 text-ct-primary-01">
            Mang tính tương tác cao, <br /> khơi gợi hứng thú học tập
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
        <Image src="/images/home_1.png" width="80%" height="100%" />
      </div>
    ),
  },
  {
    content: (
      <div className="w-full flex items-center justify-between px-10">
        <div className="ml-12 max-w-[700px]">
          <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Mô hình học 1-1
          </p>
          <p className="text-left font-bold text-[50px] mb-4 text-ct-primary-01">
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
        <Image src="/images/home_1.png" width="80%" height="100%" />
      </div>
    ),
  },
  {
    content: (
      <div className="w-full flex items-center justify-between px-10">
        <div className="ml-12 max-w-[700px]">
          <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Talk to me ứng dụng AI
          </p>
          <p className="text-left font-bold text-[50px] mb-4 text-ct-primary-01">
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
        <Image src="/images/home_1.png" width="80%" height="100%" />
      </div>
    ),
  },
  {
    content: (
      <div className="w-full flex items-center justify-between px-10">
        <div className="ml-12 max-w-[700px]">
          <p className="text-left font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Định hướng thi chứng chỉ YLE của Cambridge
          </p>
          <p className="text-left font-bold text-[50px] mb-4 text-ct-primary-01">
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
        <Image src="/images/home_1.png" width="80%" height="100%" />
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
    <div className="w-full h-screen">
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
        className="w-full h-full"
      />
    </div>
  );
};

export default Slider;
