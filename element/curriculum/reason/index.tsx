import React from "react";
import { dataReason } from "./data";
import { Image } from "@mantine/core";
import { type } from "os";
const Reason = () => {
  return (
    <div>
      <div className="max-w-[1200px] m-auto pt-8">
        <div className="flex flex-wrap justify-center sm:relative">
          {dataReason.map((item, index) => {
            return <Item key={index} data={item} />;
          })}
          <div className="w-[189px] h-[339px] absolute left-[-120px] hidden lg:block ">
            <Image className="p-0 m-0" src="/images/universe1.png" alt="icon" />
          </div>
          <div className="w-[222px] h-[289px] absolute bottom-0 right-[-160px] hidden lg:block">
            <Image className="p-0 m-0" src="/images/universe.png" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = (props: any) => {
  const { data } = props;
  return (
    <div>
      <div className="sm:p-10 mb-6 sm:m-0 relative sm:w-[580px] w-[321px]">
        <div
          className={`${data.colorSecond} w-full sm:h-[139.61px] h-[76.91px] flex items-center border-[3px] border-[#3DD1F7] rounded-xl justify-evenly glow mb-[20px]`}
        >
          <div className="sm:w-[86px] sm:h-[86px] w-[49px] sm:border-[2px] border-[1px] border-white rounded-full p-1 ml-4 flex justify-center items-center">
            <Image
              className="p-0 m-0 w-full"
              src={data.icon}
              alt="icon"
            />
          </div>
          <div
            className={`p-4 text-center font-extrabold sm:text-2xl text-base leading-6 text-white uppercase ${data?.textColor}`}
          >
            {data.title}
          </div>
        </div>
        <div className="absolute lg:top-[158px] top-[68px] sm:top-[155px] ml-4 sm:w-[463.72px] sm:h-[72.65px] px-5">
          <Image
            src="/images/Group 28.png"
            width="100%"
            height="100%"
            alt="tag"
          />
        </div>
        <div className="w-full sm:h-[354.72px] sm:mt-2 Body-Desktop-Medium text-start flex items-start sm:pt-10 px-8 p-4 bg-[#EBFAFE] text-[#0056B8] border-[3px] border-[#3DD1F7] rounded-lg glow">
          {data.des}
        </div>
      </div>
    </div>
  );
};

export default Reason;
