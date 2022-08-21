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
    showArrow: true,
    showDots: true,
    styleDot: "",
  };
  return (
    <div className="lg:bg-[url('https://firebasestorage.googleapis.com/v0/b/libhuha-73130.appspot.com/o/images%2F8ed3092a-a181-45fb-8353-2c12d7a93899.png?alt=media&token=a5428ca8-e54a-4773-9745-985281855337')] bg-[url('/images/course-mobile.png')] bg-cover bg-no-repeat w-full lg:h-[828px] py-20 lg:pt-[55px]">
      <div className="w-fit mx-auto text-center lg:mb-[43px] lg:pt-2 lg:pb-2 mb-4">
        <div className="text-[#0056B8] lg:text-[28px] text-[18px] lg:Heading-Desktop-Heading2 font-bold uppercase">Khơi dậy niềm đam mê học tập</div>
        <div className="text-ct-secondary-400 lg:text-[26px] text-[16px] font-bold uppercase lg:Heading-Desktop-Heading2"> cùng các khóa học của SpeakWell</div>
      </div>
      <div className="w-full max-w-[1050px] mx-auto">
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
    <div className='lg:w-[332px] w-[92%] mx-auto h-[auto] border-2 bg-[#EFFCFF] border-[#0056B8] rounded-lg'>

      <div className='flex py-3 justify-end px-5 bg-[#00A9F1]'>
        <img src='/images/topbar.svg' />
      </div>
      <div className='px-5 py-3'>
        <div className='border border-[#0056B8] rounded'>
          <div className=' '>
            <img src='/images/anh11.svg' className="w-full" alt="" />

          </div>
          <div className='py-2 border-t border-[#0056B8] bg-[#3DD1F7]'>
            <p className='text-white text-[22px] font-bold lg:Heading-Desktop-Heading3 text-center uppercase'>
              startup
            </p>
          </div>
        </div>
        <div className='pt-2'>
          <p className='text-[16px] text-[#0056B8] text-justify px-2 lg:h-[160px]'>
            Giúp trẻ có nền móng tiếng Anh vững chắc thông qua việc trải nghiệm hình thức học năng động, sáng tạo, tương tác đa chiều với giáo viên để đạt trình độ Starters của Cambridge.
          </p>
        </div>
        <div className="px-2">
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
