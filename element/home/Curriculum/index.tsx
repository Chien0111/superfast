import { Image } from "@mantine/core";
import { ArrowRight } from "iconsax-react";
import style from "./style.module.css";

const Curriculum = () => {
  return (
    <div className="bg-[#faf4ea] w-full py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-fit mx-auto">
          <p className="text-center font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Curriculum
          </p>
          <h2 className="text-center font-bold text-[40px] mb-4 text-ct-primary-01">
            Our programs
          </h2>
        </div>
        <div className="flex flex-wrap">
          <CurriculumItem />
          <CurriculumItem />
          <CurriculumItem />
          <CurriculumItem />
        </div>
      </div>
    </div>
  );
};

const CurriculumItem = () => {
  return (
    <div
      className={`w-[280px] mx-auto m-4 rounded-md overflow-hidden ${style.dad}`}
    >
      <div className="relative overflow-hidden">
        <div className={`w-[300px] h-[200px]`}>
          <Image
            className={`transition-all duration-500 ${style.child}`}
            src="/images/curriculum-02.jpg"
            width="100%"
            height="100%"
            alt="curriculum"
          />
        </div>
        <div className="absolute -bottom-16 right-1/2 translate-x-1/2 w-32 h-32 pt-4 rounded-full bg-ct-solid-blue-02 flex items-center flex-col justify-start">
          <p className="text-[16px] font-bold">1.3 - 2</p>
          <p className="text-[14px] font-bold">năm</p>
        </div>
      </div>
      <div className="text-center">
        <p className="font-bold mt-4">Playgroup</p>
        <p className=" font-thin my-4">
          By creating a safe, consistent and welcoming environment
        </p>
        <div className="mx-auto flex items-center justify-center w-10 h-10 rounded-full text-ct-primary-01 bg-ct-neutral-01 hover:bg-ct-primary-01 hover:text-ct-neutral-01">
          <ArrowRight size="16" color="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
