import { Image } from "@mantine/core";
import { useState } from "react";
import ModalRegister from "../../../components/ModalRegister";
import SliderComp from "../../../components/Slider";
import style from "./style.module.css";

const Courses = () => {
  const data = [
    {
      img: "/images/Banner 11.jpg",
      title: "Beginners",
      des: `Khoá học khơi gợi hứng thú học tập và khám phá ngôn ngữ của học sinh ở trình độ tiền căn bản, giúp trẻ được tiếp thu Tiếng Anh một cách tự nhiên`,
      price: "--",
      age: "4-6",
      time: "--",
      cap: "--",
    },
    {
      img: "/images/Banner 12.jpg",
      title: "Starters",
      des: `Khóa học giúp cho học sinh có thể nâng cao trình độ tiếng Anh thông qua việc trải nghiệm hình thức học năng động, sáng tạo, tương tác 2 chiều với giáo viên để đạt trình độ Starters`,
      price: "--",
      age: "6-8",
      time: "--",
      cap: "--",
    },
    {
      img: "/images/Banner 10.jpg",
      title: "Movers",
      des: ` Khóa học Movers giúp học sinh có thể sử dụng 4 kỹ năng với những chủ đề quen thuộc trong cuộc sống hàng ngày và định hướng thi được chứng chỉ Movers theo chuẩn Cambridge`,
      price: "--",
      age: "8-10",
      time: "--",
      cap: "--",
    },
    {
      img: "/images/Banner 7.jpg",
      title: "Flyers",
      des: `Khóa học Flyers phù hợp với học sinh muốn nâng cao trình độ tiếng Anh đồng đều 4 kỹ năng Nghe - Nói - Đọc - Viết, tự tin giao tiếp, phát triển đầy đủ kiến thức và kỹ năng để chinh phục bài thi Flyers theo chuẩn Cambridge`,
      price: "--",
      age: "8-10",
      time: "--",
      cap: "--",
    },
  ];
  const settingSlidePC = {
    setting: {
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
  return (
    <div className="bg-[#faf4ea] py-20 pt-16">
      <div className="w-fit mx-auto text-center my-8 ">
        <p className="font-['Dancing_Script'] text-ct-solid-red-03 text-[30px]">
          Khóa học
        </p>
        <h2 className="font-bold text-[40px] mb-4 text-ct-primary-01">
          Khóa học đăng ký nhiều nhất
        </h2>
      </div>
      <div className="w-full max-w-[1200px] mx-auto">
        <SliderComp
          settings={settingSlidePC.setting}
          showArrow={settingSlidePC.showArrow}
          showDots={settingSlidePC.showDots}
          content={data.map((item, index) => {
            return {
              content: <CourseItem data={item} />,
            };
          })}
          styleDot=""
        />
      </div>
    </div>
  );
};
const CourseItem = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`mx-auto bg-ct-neutral-01 max-w-[360px] h-[450px] rounded-md overflow-hidden relative transition-all ${style.dad}`}
    >
      <Image
        className={`rounded-md overflow-hidden transition-all duration-700 ease-in-out ${style.childImg}`}
        src={data.img || "/images/curriculum-02.jpg"}
        width="100%"
        height="auto"
        alt="img"
      />
      <div
        className={`w-full transition-all bg-ct-neutral-01 duration-500 ease-in-out absolute -bottom-12 ${style.childBottom}`}
      >
        <div className="p-5 pt-3 pb-4 relative">
          <p className="text-[24px] font-bold">{data.title}</p>
          <p className="font-normal py-3 pb-4 border-b">{data.des}</p>
          <div
            className={`transition-all w-14 h-14 flex items-center justify-center rounded-full bg-ct-secondary-02 text-ct-neutral-01 absolute right-4 -top-8 ${style.childPrice}`}
          >
            <p>{data.price}</p>
          </div>
        </div>
        <div className="flex mx-4 mb-4">
          <div className="border-r pr-4">
            <p className="text-ct-neutral-03">Tuổi:</p>
            <p>{data.age} tuổi</p>
          </div>
          <div className="border-r px-4">
            <p className="text-ct-neutral-03">Thời gian:</p>
            <p>{data.time}</p>
          </div>
          <div className="px-4">
            <p className="text-ct-neutral-03">Số học sinh:</p>
            <p>{data.cap} em</p>
          </div>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="w-full p-3 text-center bg-ct-secondary-02 text-ct-neutral-01"
        >
          Tham gia lớp học{" "}
        </div>
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
export default Courses;
