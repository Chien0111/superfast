import style from "./style.module.css";

const CoreValue = () => {
  const dataCoreValue = [
    {
      icon: "",
      colorMain: "text-ct-primary-03 border-[#fab31c]",
      colorSecond: "bg-[#feefcf]",
      title: "Lớp học trực tuyến tương tác",
      des: "Chương trình học được tổ chức trên nền tảng trực tuyến classin với các hoạt động được thiết kế chuyên biệt hóa, mô phỏng đồng thời tăng cường trải nghiệm của học viên so với lớp học truyền thống ",
    },
    {
      icon: "",
      colorMain: "text-[#f32c2c] border-[#f32c2c]",
      colorSecond: "bg-[#fdd5d5]",
      title: "Công nghệ AI độc quyền",
      des: "Công cụ Talk to me ứng dụng công nghệ AI tiên tiến, không chỉ luyện phát âm chuẩn quốc tế mà còn giúp học viên luyện phản xạ, tư duy nghe nói và sử dụng ngôn ngữ Anh",
    },
    {
      icon: "",
      colorMain: "text-[#df57a8] border-[#df57a8]",
      colorSecond: "bg-[#f9ddee]",
      title: "Mô hình học tập 1 - 1",
      des: "Lớp học với chỉ 1 giáo viên - 1 học viên giúp trẻ tập trung hoàn toàn và trọn vẹn thời gian trong lớp tương tác với giáo viên. Giáo viên đồng thời cũng điều chỉnh nội dung, cường độ, lộ trình học tập phù hợp với học viên",
    },
    {
      icon: "",
      colorMain: "text-[#51c9ee] border-[#51c9ee]",
      colorSecond: "bg-[#dcf4fc]",
      title: "Ứng dụng Game hóa",
      des: "Các hoạt động luyện tập, rèn luyện, kiểm tra khả năng ngôn ngữ được thiết kế dưới dạng trò chơi tương tác, giúp học viên hứng thú và hoàn toàn chủ động trong lộ trình phát triển bản thân cùng SpeakWell",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto max-w-[1200px] my-32">
      {" "}
      <div className="max-w-[500px] mr-10">
        <p className="font-['Dancing_Script'] text-ct-solid-red-03 text-[30px]">
          Giá trị cốt lõi
        </p>
        <h2 className="font-bold text-[40px] mb-4 text-ct-primary-01">
          Giải pháp học tập trực tuyến với tính tương tác cao nhất
        </h2>
      </div>
      <div className="w-fit">
        <div className="flex flex-wrap">
          {dataCoreValue.map((item, index) => {
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
        className={`transition-all duration-700 border-[2px] border-dashed border-transparent w-20 h-20 flex items-center justify-center rounded-2xl ${data.colorSecond} overflow-hidden ${data.color} ${style.childNumber}`}
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
export default CoreValue;
