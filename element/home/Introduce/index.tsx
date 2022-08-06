import { Image } from "@mantine/core";
import style from "./style.module.css";

const Introduce = () => {
  const dataIntro = [
    {
      icon: "",
      colorMain: "text-[#fab31c] border-[#fab31c]",
      colorSecond: "bg-[#feefcf]",
      title: "Nâng cao Phản Xạ Nghe - Nói",
      des: "Với hình thức học trực tuyến 1 kèm 1, giáo viên luôn hỗ trợ giúp bám sát lộ trình kết hợp cùng công cụ Talk to me ứng dụng công nghệ trí tuệ nhân tạo (AI) giúp trẻ luyện phát âm chuẩn quốc tế, đồng thời nâng cao năng lực phản xạ ngôn ngữ.",
    },
    {
      icon: "",
      colorMain: "text-[#f32c2c] border-[#f32c2c]",
      colorSecond: "bg-[#fdd5d5]",
      title: "Môi Trường Học 100% Tiếng Anh",
      des: "Hiệu quả học tăng X2 so với việc học đại trà, học ở các lớp học đông đúc. Giáo trình đúng năng lực, môi trường rèn luyện 100% tiếng Anh với giáo viên quốc tế.",
    },
    {
      icon: "",
      colorMain: "text-[#df57a8] border-[#df57a8]",
      colorSecond: "bg-[#f9ddee]",
      title: "Chủ Động Thời Gian Học",
      des: "Học viên có thể học ngay tại nhà bằng cách gọi video call với giáo viên, thời gian học được xếp theo thời gian rảnh của học viên cùng chính sách bảo lưu giờ học khi bận.",
    },
    {
      icon: "",
      colorMain: "text-[#51c9ee] border-[#51c9ee]",
      colorSecond: "bg-[#dcf4fc]",
      title: " Tiết Kiệm Chi Phí",
      des: "Chi phí chỉ bằng một nửa so với việc thuê gia sư kèm riêng tại nhà. Bằng một phần tư so với học tại trung tâm với người nước ngoài. Bạn có thể theo học tại SpeakWell mà không phải quá lo lắng về học phí.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto max-w-[1200px] my-20">
      {" "}
      <Image
        className="w-full"
        src="/images/intro-banner.png"
        width={512}
        height={447}
        alt="banner"
      />
      <div className="w-fit">
        <div>
          <p className="font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Ưu điểm khoá học
          </p>
          <h2 className="font-bold text-[40px] mb-4 text-ct-primary-01">
            Kiến thức tốt nhất
          </h2>
        </div>
        <div className="flex flex-wrap">
          {dataIntro.map((item, index) => {
            return <Item key={index} index={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
const Item = (props: any) => {
  const { data, index } = props;
  return (
    <div className={`max-w-[300px] p-2 ${data.colorMain} ${style.dad}`}>
      <div
        className={`transition-all duration-500 w-20 h-20 flex items-center justify-center rounded-2xl ${data.colorSecond} overflow-hidden ${data.color} ${style.childNumber}`}
      >
        <p className={`${data.colorMain} text-[40px]`}>0{index + 1}</p>
      </div>
      <p className={`transition-all font-bold my-4 ${style.childtext}`}>
        {data.title}
      </p>
      <p className="font-normal text-ct-neutral-05">{data.des}</p>
    </div>
  );
};
export default Introduce;
