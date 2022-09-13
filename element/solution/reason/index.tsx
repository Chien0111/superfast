import React from "react";
import { dataReason } from "./data";
import { Image } from "@mantine/core";

const Reason = () => {
  return (
    <div>
      Reason
      <div className="max-w-[1200px] m-auto">
        <div className="flex flex-wrap justify-center relative">
          {dataReason.map((item, index) => {
            return <Item key={index} data={item} />;
          })}
          <div className="w-[189px] h-[339px] absolute left-[-120px]">
            <Image className="p-0 m-0" src="/images/universe1.png" alt="icon" />
          </div>
          <div className="w-[222px] h-[289px] absolute bottom-0 right-[-160px]">
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
      <div className="sm:p-10 relative sm:mb-10 sm:w-[580px]">
        <div
          className={`${data.colorSecond} w-full h-[139.61px] flex items-center border-[3px] border-[#3DD1F7] rounded-xl justify-evenly glow mb-[20px]`}
        >
          <div className="w-[86px] h-[86px] border-[2px] border-white rounded-full p-1 ml-4 flex justify-center items-center">
            <Image
              className="p-0 m-0"
              src={data.icon}
              width={data.size.width}
              height={data.size.height}
              alt="icon"
            />
          </div>
          <div
            className={` p-4 text-center font-extrabold sm:text-2xl text-base leading-6 text-white uppercase ${data?.textColor}`}
          >
            {data.title}
          </div>
        </div>
        <div className="absolute top-[108px] sm:top-[155px] ml-4 sm:w-[463.72px] sm:h-[72.65px] w-[250px] px-5">
          <Image
            src="/images/Group 28.png"
            width="100%"
            height="100%"
            alt="tag"
          />
        </div>
        <div className="w-full sm:h-[354.72px] mt-2 Body-Desktop-Medium text-start flex items-start pt-10 px-8 p-4 bg-[#EBFAFE] text-[#0056B8] border-[3px] border-[#3DD1F7] rounded-lg glow">
          {data.des}
        </div>
      </div>
    </div>
  );
};

export default Reason;
