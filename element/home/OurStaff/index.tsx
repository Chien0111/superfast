import { Image } from "@mantine/core";

const OurStaff = () => {
  const data = [
    {
      img: "/images/Anh_GV_Loise.png",
      name: "Cô Loise",
      des: "5 năm kinh nghiệm giảng dạy.",
    },
    {
      img: "/images/Anh_GV_Arlo.png",
      name: "Thầy Arlo",
      des: "6 năm kinh nghiệm giảng dạy",
    },
    {
      img: "/images/Anh_GV_Aiza.png",
      name: "Cô Aiza",
      des: "5 năm kinh nghiệm giảng dạy.",
    },
  ];
  return (
    <div className=" max-w-[1200px] mx-auto">
      <div className="w-fit mx-auto">
        <p className="text-center font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
          ĐỘI NGŨ GIÁO VIÊN NƯỚC NGOÀI
        </p>
        <h2 className="text-center font-bold text-[40px] mb-4 text-ct-primary-01">
          Đội ngũ giảng viên giàu kinh nghiệm được rất nhiều học viên yêu quý.
        </h2>
      </div>
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <Teacher data={item} key={index} />
        ))}
      </div>
    </div>
  );
};
const Teacher = ({ data }: any) => {
  return (
    <div className="max-w-[400px] grow lg:w-1/4 mx-auto p-4">
      {" "}
      <Image
        className=" rounded-md overflow-hidden"
        alt="teacher"
        src={data.img || "/images/teacher-01.jpg"}
      />
      <p className="mt-6 my-2 font-bold text-center">{data.name}</p>
      <p className="text-[14px] font-normal text-center">{data.des}</p>
    </div>
  );
};
export default OurStaff;
