import { Image } from "@mantine/core";
import { useState } from "react";
import ModalRegisterTime from "../../../components/ModalRegisterTime";
import SliderComp from "../../../components/Slider";
import style from "./style.module.css";

const Information = () => {
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
            src="/images/slide-bg.png"
          />
          <div className="text-[#0056B8] text-[18px] lg:Heading-Desktop-Heading2 font-bold uppercase lg:pt-0 pt-12">
            Thông tin tổng quát
          </div>
        </div>
        <div className="w-full max-w-[1200px] lg: pt-2 mx-auto">
          <div>
            <p>
              Khóa học dành cho trẻ từ 4-6 tuổi. Thông qua hình thức truyền tải
              bằng các bài hát, câu chuyện, trò chơi được biên soạn hình ảnh một
              cách sinh động, vui nhộn, các bé sẽ được hình thành nên phản xạ tự
              nhiên nhất với tiếng Anh và phát triển nền tảng từ vựng một cách
              vững chắc.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Information;
