import { Image } from "@mantine/core";
import SliderComp from "../../../components/Slider";

const OurStaff = () => {
  const data = [
    {
      img: "/images/co-vera.png",
      name: "Cô Vera",
      des: "Phương pháp độc đáo khơi gợi niềm hứng thú cho học viên",
    },
    {
      img: "/images/teacher14.png",
      name: "Cô Yhen",
      des: "Một trong những giáo viên được yêu thích nhất tại SpeakWell",
    },
    {
      img: "/images/teacher13.png",
      name: "Cô Everleigh",
      des: "Có hơn 7 năm kinh nghiệm giảng dạy trẻ em",
    },
    {
      img: "/images/teacher11.png",
      name: "Cô Lilac",
      des: "Đạt chứng chỉ 120 Hrs TESOL",
    },
    {
      img: "/images/teacher12.png",
      name: "Cô Glazee",
      des: "6 năm kinh nghiệm giảng dạy",
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
    <div className="lg:bg-[url(/images/teacher-bg.png)] bg-[url(/images/teacher-bg-mobile.png)] bg-cover p-[64px] relative m-auto">
      <div className=" max-w-[1200px] mx-auto mb-10">
        <div className="w-fit mx-auto">
          <p className="text-center lg:Heading-Desktop-Heading2 Heading-Mobile-Heading6 text-ct-secondary-500">
            Đội ngũ giáo viên nước ngoài
          </p>
          <h2 className="text-center font-bold lg:Heading-Desktop-Heading2 Heading-Mobile-Heading6 mb-4 text-ct-primary-400">
            Đội ngũ giảng viên giàu kinh nghiệm <br /> được rất nhiều học viên
            yêu quý
          </h2>
        </div>
        <div className=" pt-9">
          <SliderComp
            settings={settingSlidePC.setting}
            showArrow={settingSlidePC.showArrow}
            showDots={settingSlidePC.showDots}
            content={data.map((item, index) => {
              return {
                content: <Teacher data={item} />,
              };
            })}
            styleDot=""
          />
        </div>
      </div>
    </div>
  );
};
const Teacher = ({ data }: any) => {
  return (
    <div className="lg:w-[326px] w-[92%] mx-auto">
      {" "}
      <Image
        className=" rounded-md overflow-hidden"
        alt="teacher"
        src={data.img || "/images/teacher-01.jpg"}
      />
      <div className="bg-[url(/images/teacher-info.png)] bg-cover py-8 h-[120px]">
        <p className=" font-bold text-center text-[22px] leading-6 text-ct-primary-400 pt-1">
          {data.name}
        </p>
        <div className="flex justify-center">
          <p className="w-[220px] text-ct-primary-400 font-bold text-center text-[14px] leading-4">
            {data.des}
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurStaff;
