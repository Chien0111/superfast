import { Image } from "@mantine/core";

const OurStaff = () => {
  return (
    <div className="flex flex-wrap max-w-[1200px] mx-auto">
      <Teacher />
      <Teacher />
      <Teacher />
      <Teacher />
    </div>
  );
};
const Teacher = () => {
  return (
    <div className="max-w-[400px] grow lg:w-1/4 mx-auto p-4">
      {" "}
      <Image
        className=" rounded-md overflow-hidden"
        alt="teacher"
        src="/images/teacher-01.jpg"
      />
      <p className="mt-6 my-2 font-bold text-center">Trần Văn A</p>
      <p className="text-[14px] font-thin text-center">Giáo viên dạy Văn</p>
    </div>
  );
};
export default OurStaff;
