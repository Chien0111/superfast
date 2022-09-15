import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import HSlider from "../../../../components/HSlider";
import { data } from "../data";

const StepMobile = () => {
  const [selected, setSelected] = useState(0);
  const [embla, setEmbla] = useState<any>();
  const ListStepImg = [
    "/images/solution/beginner small planet.png",
    "/images/solution/starters small planet.png",
    "/images/solution/movers small planet.png",
    "/images/solution/flyers small planet.png",
  ];
  const specialPointRender = data.map((_, index) => {
    return {
      content: (
        <div className="mx-auto w-fit">
          <Image
            className="absolute z-[9]"
            src={_.image}
            width={300}
            height={300}
            alt={_.type}
          />
        </div>
      ),
    };
  });

  const ListStep = ListStepImg.map((_, index) => (
    <div
      className="w-[66px] h-[66px] flex items-center justify-center"
      key={index}
      onClick={() => {
        setSelected(index);
        embla.scrollTo(index);
      }}
    >
      <div
        className={`w-[60px] h-[60px] border-[2px] ${
          selected === index ? "border-[#C8FCFF]" : "border-transparent"
        }  rounded-full flex items-center justify-center relative z-[10]`}
      >
        <Image
          src={_}
          width={64}
          height={64}
          alt=""
          className="center-absolute"
        />
        {selected === index ? (
          <div className="w-[60px] h-[60px] border-[4px] border-[#5EDEFF] rounded-full blur-sm absolute z-[9]"></div>
        ) : null}
      </div>
    </div>
  ));

  const getItemSelected = (index: number) => {
    setSelected(index);
  };

  const setItemSelected = (cb: any) => {
    setEmbla(cb);
  };

  return (
    <div className="p-4">
      <div className="w-[347px] h-[422px] p-[11px] mx-auto bg-[url(/images/solution/bg_slide_mobile.png)]">
        <div className="rounded-[48px] overflow-hidden relative z-[10]">
          <HSlider
            content={specialPointRender}
            settings={{
              withIndicators: false,
              withControls: true,
              slideSize: "90%",
            }}
            styleControl="text-ct-text-white"
            setItemSelected={setItemSelected}
            getItemSelected={getItemSelected}
          />
        </div>
        <div className="flex justify-center -mt-8">{ListStep}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-[200px]">
          <div
            className={`transition-all w-[325px] overflow-hidden h-[200px] border-ct-primary-200 border-[5px] rounded-[25px] bg-[#EFFCFF] p-4`}
          >
            <h3 className="text-center Heading-Desktop-Heading5  text-ct-secondary-500">
              {data[selected].age}
            </h3>
            <ul className="list-disc pl-4 text-ct-primary-500 Body-Desktop-Medium1">
              <li>Đầu ra: {data[selected].output}</li>
              <li>Đầu vào: {data[selected].input}</li>
            </ul>
            <Link href={data[selected].link}>
              <a>
                <button
                  className={`w-full rounded-[12px] p-[7px] bg-ct-tertiary-500 text-ct-primary-500 mt-4`}
                >
                  Xem chi tiết
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepMobile;
