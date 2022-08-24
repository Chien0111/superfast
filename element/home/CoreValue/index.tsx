import style from "./style.module.css";
import { Image } from "@mantine/core";
const CoreValue = () => {
  const dataCoreValue = [
    {
      icon: "",
      colorMain: "text-ct-primary-03 border-[#fab31c]",
      colorSecond: "bg-[#0056B8]",
      title: "Lớp học trực tuyến tương tác đa chiều",
      des: "SpeakWell sử dụng nền tảng học riêng biệt với các hoạt động tương tác, mô phỏng đồng thời tăng cường trải nghiệm của học viên so với lớp học truyền thống.",
    },
    {
      icon: "",
      colorMain: "text-[#f32c2c] border-[#f32c2c]",
      colorSecond: "bg-[#9CE156]",
      title: "Công nghệ AI độc quyền",
      des: "Sử dụng công cụ Talk to me không chỉ luyện phát âm chuẩn quốc tế mà còn giúp học viên luyện phản xạ, tư duy nghe nói và sử dụng ngôn ngữ Anh.",
    },
    {
      icon: "",
      colorMain: "text-[#df57a8] border-[#df57a8]",
      colorSecond: "bg-[#FFA601]",
      title: "Mô hình học tập 1 - 1",
      des: "Lớp học với chỉ 1 giáo viên - 1 học viên giúp trẻ tập trung hoàn toàn và trọn vẹn thời gian trong lớp tương tác với giáo viên. Giáo viên đồng thời cũng điều chỉnh nội dung, cường độ, lộ trình học tập phù hợp với học viên.",
    },
    {
      icon: "",
      colorMain: "text-[#51c9ee] border-[#51c9ee]",
      colorSecond: "bg-[#df57a8]",
      title: "Ứng dụng Game hóa",
      des: "Các hoạt động luyện tập, rèn luyện, kiểm tra khả năng ngôn ngữ được thiết kế dưới dạng trò chơi tương tác, giúp học viên hứng thú và hoàn toàn chủ động trong lộ trình phát triển bản thân cùng SpeakWell",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-[1200px] my-[60px]">
      {" "}
      <div className="lg:w-[577px] lg:min-w-[577px] w-fit mx-auto lg:mx-0 text-center lg:text-left px-4 lg:px-0 grow">
        <Image
          src="/images/cotloi.png"
          width="100%"
          height="100%"
          alt="banner"
        />
      </div>
      <div className="flex flex-wrap items-start justify-center w-fit">
        {dataCoreValue.map((item, index) => {
          return <Item key={index} index={index} data={item} />;
        })}
      </div>
    </div>
  );
};
const Item = (props: any) => {
  const { data, index } = props;
  return (
    <div className={`sm:max-w-[300px] w-full sm:p-4 px-8 py-4`}>
      <div className="flex justify-center">
        <div
          className={`${data.colorSecond} flex justify-center items-center sm:w-[265px] w-[95%] h-[41px] rounded-t-lg glow border-[2px] border-[#3DD1F7]`}
        >
          <p className={`transition-all font-bold text-white text-sm`}>
            {data.title}
          </p>
        </div>
      </div>
      <div className="bg-[#EBFAFE] p-4 sm:max-w-[364.51px] w-full h-[187.9px] rounded-lg glow border-[2px] border-[#3DD1F7]">
        <p className="font-normal text-ct-neutral-05 Body-Desktop-Medium text-[#0056B8]">
          {data.des}
        </p>
      </div>
    </div>
  );
};
export default CoreValue;
