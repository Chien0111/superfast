import { Image } from "@mantine/core";
import { type } from "os";
import { useState } from "react";
import { string } from "yup";
import ModalRegisterTime from "../../../components/ModalRegisterTime";
import SliderComp from "../../../components/Slider";
import style from "./style.module.css";
type Information = {
  data?: string;
};
const Information = ({ data }: Information) => {
  return (
    <div className="">
      <div className="lg:bg-[url(/images/slide-bg.png)] bg-[url('/images/course-mobile.png')] lg:py-16 lg:pb-[220px] overflow-x-hidden bg-cover bg-center py-5 sm:pb-20 m-auto relative top-0 ">
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
            src="/images/iconactive10.png"
            width="50px"
            height="52px"
            className="lg:hidden absolute top-[25px] left-[0px]"
          />
          <Image
            src="/images/iconactive6.png"
            width="58px"
            height="65px"
            className="lg:hidden absolute top-[15px] right-[10px] rotate-[40.51deg]"
          />
          <div className="text-[#0056B8] text-[18px] lg:Heading-Desktop-Heading2 p-6 text-2xl font-black uppercase lg:pt-2 lg:mt-2 ">
            thông tin tổng quan
          </div>
        </div>
        <div className="w-full max-w-[1200px] lg:w-[1165px] lg:h-[620px] lg:pt-2 mx-auto px-6">
          <CourseItem data={data} />
        </div>
      </div>
    </div>
  );
};
type CourseItem = {
  data?: string;
};
const CourseItem = ({ data }: any) => {
  return (
    <div>
      <div className="lg:my-10  Body-Desktop-Large">{data}</div>
      <div className="lg:flex sm:justify-around justify-center items-center mt-4">
        <div className="sm:w-[493px] sm:h-[493px] w-full h-full p-6 sm:p-0 m-auto sm:mb-6">
          <Image className="" src="/images/information1.png" alt="icon" />
        </div>
        <div >
          <div className="flex justify-center px-6 sm:p-0">
            <div className="w-[234px] sm:h-[234px] mb-6 mr-6">
              <Image
                className="p-0 m-0"
                src="/images/information2.png"
                alt="icon"
              />
            </div>
            <div className="w-[234px] sm:h-[234px] mb-6">
              <Image
                className="p-0 m-0"
                src="/images/infomation3.png"
                alt="icon"
              />
            </div>
          </div>
          <div className="flex justify-center px-6 sm:p-0">
            <div className="w-[234px] sm:h-[234px] sm:mt-6 mr-6">
              <Image
                className="p-0 m-0"
                src="/images/infomation4.png"
                alt="icon"
              />
            </div>
            <div className="w-[234px] sm:h-[234px] sm:mt-6">
              <Image
                className="p-0 m-0"
                src="/images/infomation5.png"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Information;
