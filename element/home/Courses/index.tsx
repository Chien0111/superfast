import { Image } from "@mantine/core";
import { useState } from "react";
import ModalRegisterTime from "../../../components/ModalRegisterTime";
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
      bgColor: "bg-[#FFA601]",
    },
    {
      img: "/images/Banner 12.jpg",
      title: "Starters",
      des: `Khóa học giúp cho học sinh có thể nâng cao trình độ tiếng Anh thông qua việc trải nghiệm hình thức học năng động, sáng tạo, tương tác 2 chiều với giáo viên để đạt trình độ Starters`,
      price: "--",
      age: "6-8",
      time: "--",
      cap: "--",
      bgColor: "bg-[#3DD1F7]",
    },
    {
      img: "/images/Banner 10.jpg",
      title: "Movers",
      des: ` Khóa học Movers giúp học sinh có thể sử dụng 4 kỹ năng với những chủ đề quen thuộc trong cuộc sống hàng ngày và định hướng thi được chứng chỉ Movers theo chuẩn Cambridge`,
      price: "--",
      age: "8-10",
      time: "--",
      cap: "--",
      bgColor: "bg-[#9CE156]",
    },
    {
      img: "/images/Banner 7.jpg",
      title: "Flyers",
      des: `Khóa học Flyers phù hợp với học sinh muốn nâng cao trình độ tiếng Anh đồng đều 4 kỹ năng Nghe - Nói - Đọc - Viết, tự tin giao tiếp, phát triển đầy đủ kiến thức và kỹ năng để chinh phục bài thi Flyers theo chuẩn Cambridge`,
      price: "--",
      age: "8-10",
      time: "--",
      cap: "--",
      bgColor: "bg-[#FF7ECB]",
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
    showArrow: true,
    showDots: true,
    styleDot: "",
  };
  return (
    <div className="">
      <div className="lg:bg-[url(/images/slide-bg.png)] bg-[url('/images/course-mobile.png')] lg:py-16 lg:pb-[220px] overflow-x-hidden bg-cover bg-center py-5 pb-20 m-auto relative top-0">
        <div className="w-fit mx-auto text-center lg:mb-[43px] lg:pt-6 lg:pb-2 mb-4">
          <div className="relative hidden sm:block">
            <div className="">
              <Image
                src="/images/iconactive1.png"
                width="91px"
                height="133px"
                className="absolute top-[30px] left-[-480px]"
              />
              <Image
                src="/images/iconactive8.png"
                width="146px"
                height="150px"
                className="absolute top-[30px] right-[-570px]"
              />
              <Image
                src="/images/iconactive5.png"
                width="166px"
                height="110px"
                className="absolute top-[715px] left-[-510px]"
              />
              <Image
                src="/images/iconactive6.png"
                width="194px"
                height="218px"
                className="absolute top-[640px] right-[-545px]"
              />
              <Image
                src="/images/iconactive7.png"
                width="79px"
                height="127px"
                className="absolute top-[725px] right-[-570px]"
              />
            </div>
          </div>
          <Image
            src="/images/iconactive10.png"
            width="50px"
            height="52px"
            className="lg:hidden absolute top-[25px] left-[0px]"
          />
          <Image
            src="/images/iconactive6.png"
            width="58px"
            height="65px"
            className="lg:hidden absolute top-[15px] right-[10px] rotate-[40.51deg]"
          />
          <div className="text-[#0056B8] text-[18px] lg:Heading-Desktop-Heading2 font-bold uppercase lg:pt-0 pt-12">
            Khơi dậy niềm đam mê học tập
          </div>
          <div className="text-ct-secondary-400 lg:text-[26px] text-[16px] font-bold uppercase lg:Heading-Desktop-Heading2">
            {" "}
            cùng các khóa học của SpeakWell
          </div>
        </div>
        <div className="w-full max-w-[1200px] lg: pt-2 mx-auto">
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
    </div>
  );
};
const CourseItem = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`lg:w-[332px] w-[92%] overflow-hidden mx-auto h-[auto] border-2 bg-[#EFFCFF] border-[#0056B8] rounded-lg relative ${style.dad}`}
    >
      <div className="flex py-3 justify-end px-5 bg-[#00A9F1]">
        <img src="/images/topbar.png" />
      </div>
      <div className="px-5 py-3">
        <div className="border border-[#0056B8] rounded">
          <div className=" ">
            <img src={data.img} className="w-[286px] h-[161px]" alt="" />
          </div>
          <div className={`py-2 border-t border-[#0056B8] ${data.bgColor}`}>
            <p className="text-white text-[22px] font-bold lg:Heading-Desktop-Heading3 text-center uppercase">
              {data.title}
            </p>
          </div>
        </div>
        <div className="pt-2">
          <p className="Body-Desktop-Medium text-[#0056B8] text-justify px-2 lg:h-[160px]">
            {data.des}
          </p>
        </div>
        <div className={`px-2 overflow-hidden`}>
          <div className="border-t border-ct-primary-400"></div>
          <div className="flex mb-4 justify-between mt-4">
            <div className="border-r border-ct-primary-400 pr-2">
              <p className="text-ct-secondary-500">Tuổi:</p>
              <p className="text-ct-primary-500">{data.age} tuổi</p>
            </div>
            <div className="border-r border-ct-primary-400 px-2">
              <p className="text-ct-secondary-500">Thời gian:</p>
              <p className="text-ct-primary-500">{data.time}</p>
            </div>
            <div className="px-2">
              <p className="text-ct-secondary-500">Số học sinh:</p>
              <p className="text-ct-primary-500">{data.cap} em</p>
            </div>
          </div>
          <div
            className={` w-full transition-all -bottom-[200px] left-0 absolute p-4 bg-white ${style.childBottom}`}
          >
            <div
              onClick={() => setIsOpen(true)}
              className={`w-full p-3 text-center text-white rounded-lg border overflow-hidden bg-ct-primary-1000 text-ct-neutral-01 cursor-pointer`}
            >
              Tham gia lớp học{" "}
            </div>
          </div>
        </div>
      </div>

      <ModalRegisterTime
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};
export default Courses;
