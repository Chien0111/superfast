import { Image } from "@mantine/core";
import { twMerge } from "tailwind-merge";
import LeftArrow from "../Icon/LeftArrow";
import RightArrow from "../Icon/RightArrow";
import { arrowProps, SliderProps } from "./index.type";
import style from "./style.module.css";

const SliderLib = require("react-slick").default;

const SliderComp = (props: SliderProps) => {
  const {
    content,
    className = "",
    align = "",
    settings,
    styleDot = "",
    showArrow = true,
    showDots = true,
    width = "w-full",
    positionItems = "bottom",
  } = props;
  const styleDots = `dot2 h-5 w-5 border-[3px] border-ct-primary-400 rounded-full mt-4 ${styleDot}`;
  const settingsInit = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,
    dots: showDots,
    arrows: showArrow,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i: number) => (
      <div key={i} className={twMerge(styleDots)}></div>
    ),
    // afterChange: (current) => {
    //   const Slider = document.querySelector(`#${id}`);
    //   const listItem = Slider.children[0].children[1].children;
    //   if (settings.slidesToScroll > 1) {
    //     if (Math.ceil(current) >= listItem.length) {
    //       listItem[listItem.length - 1].classList.add('slick-active');
    //     } else {
    //       listItem[listItem.length - 1].classList.remove('slick-active');
    //     }
    //   }
    //   console.log(Math.ceil(current) / Number(settings.slidesToScroll) >= listItem.length);
    //   console.log('current', current);
    //   console.log('settings.slidesToScroll', settings.slidesToScroll);
    //   console.log('listItem', listItem);
    // },
    ...settings,
  };
  return (
    <div
      className={`${width} ${
        className ? className : ""
      } ${positionItems} ${align}`}
      // id={id}
    >
      <SliderLib className={`${style.wrapper}`} {...settingsInit}>
        {content.map((item, index) => (
          <div key={index} className="">
            {item.content}
          </div>
        ))}
      </SliderLib>
    </div>
  );
};

const SampleNextArrow = (props: arrowProps) => {
  const { className, style, onClick } = props;
  return (
    <span
      className="flex absolute right-4 bg-ct-neutral-01 h-min rounded-full -ml-10 z-50 justify-center items-center"
      onClick={onClick}
    >
      <Image
        src="/images/rightArr.png"
        width="26px"
        height="38px"
        alt="right"
      />
    </span>
  );
};

const SamplePrevArrow = (props: arrowProps) => {
  const { className, style, onClick } = props;
  return (
    <span
      className="flex absolute left-4 h-min rounded-full -mr-10 z-50 justify-center items-center"
      onClick={onClick}
    >
      <Image src="/images/leftArr.png" width="26px" height="38px" alt="right" />{" "}
    </span>
  );
};

export default SliderComp;
