import { Image } from "@mantine/core";
import SliderComp from "../../../components/Slider";
import style from "./style.module.css";

const Courses = () => {
  const data = [
    {
      img: "/images/Banner 11.jpg",
      title: "Beginners",
      des: `Từ vựng: Hình thành và phát triển vốn từ vựng về nhiều chủ đề gần gũi 
      Cấu trúc: Bước đầu phản xả hỏi đáp thông qua các cấu trúc câu đơn giản
      Kỹ năng: Tạo nền tảng phát âm chuẩn với hệ thống bảng chữ cái tiếng Anh
      Chất lượng: Mang đến tình yêu với môn tiếng Anh ngay từ khi còn nhỏ`,
      price: "--",
      age: "4-6",
      time: "--",
      cap: "--",
    },
    {
      img: "/images/Banner 12.jpg",
      title: "Starters",
      des: `Từ vựng: Nghe hiểu và ghi nhớ từ vựng thuộc các chủ đề gần gũi
      Cấu trúc: Sử dụng ngữ pháp cơ bản để nói câu ngắng
      Kỹ năng: Đọc hiểu sách truyện tiếng Anh cho thiếu nhi và viết câu đơn giản
      Chất lượng: Đạt chuẩn đầu ra bài thi Starters theo Cambridge`,
      price: "--",
      age: "6-8",
      time: "--",
      cap: "--",
    },
    {
      img: "/images/Banner 10.jpg",
      title: "Movers",
      des: `Từ vựng: Quen thuộc từ vựng trình độ A1+, bám sát yêu cầu Cambridge 
      Cấu trúc: Nắm chắc ngữ pháp trình độ A1+, bám sát yêu cầu Cambridge
      Kỹ năng: Hiểu và vận dụng trong hội thoại và đoạn văn tiếng Anh bậc A1+
      Chất lượng: Chinh phục bài thi Movers theo chuẩn đầu ra Cambridge`,
      price: "--",
      age: "8-10",
      time: "--",
      cap: "--",
    },
    {
      img: "/images/Banner 7.jpg",
      title: "Flyers",
      des: `Từ vựng: Nắm chắc từ vựng trình độ A2+, bám sát yêu cầu Cambridge 
      Cấu trúc: Quen thuộc ngữ pháp trình độ A2+, bám sát yêu cầu Cambridge
      Kỹ năng: Giao tiếp trong các tình huống hằng ngày và viết đoạn văn ngắn
      Chất lượng: Phát triển đầy đủ kỹ năng để vượt qua bài thi Cambridge Flyers`,
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
        <div className="w-full p-3 text-center bg-ct-secondary-02 text-ct-neutral-01">
          Tham gia lớp học{" "}
        </div>
      </div>
    </div>
  );
};
export default Courses;
