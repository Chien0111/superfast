import { Carousel, CarouselProps } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import LeftArrow from "../Icon/LeftArrow";

import RightArrow from "../Icon/RightArrow";

interface HSliderProps {
  content: any;
  styleDot?: string;
  settings?: CarouselProps;
  spaceHeightDot?: number;
  styleControl?: string;
  getItemSelected?: (index: number) => void;
  setItemSelected?: any;
}
const useStyles = createStyles((_theme, _params: any, getRef) => {
  return {
    controls: {
      ref: getRef("controls"),
      transition: "opacity 150ms ease",
      opacity: 0,
    },

    root: {
      "&:hover": {
        [`& .${getRef("controls")}`]: {
          opacity: 1,
        },
      },
      paddingBottom: `${_params.spaceHeightDot}px`,
    },
  };
});

const HSlider = (props: HSliderProps) => {
  const {
    content,
    settings,
    styleDot = "",
    spaceHeightDot = 40,
    styleControl = "",
    getItemSelected,
    setItemSelected,
  } = props;
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { classes } = useStyles({ spaceHeightDot });

  return (
    <Carousel
      getEmblaApi={(embla) => {
        const onSelect = (eventName: any) => {
          getItemSelected && getItemSelected(embla.selectedScrollSnap());
        };
        embla.on("select", onSelect);
        setItemSelected && setItemSelected(embla);
      }}
      classNames={{
        indicator: twMerge(
          `h-2 w-2 border-2 bg-ct-neutral-03 border-ct-neutral-01 rounded-full ${styleDot}`
        ),
        indicators: "bottom-2",
        control: "w-10 h-10 bg-ct-neutral-01 border-none shadow-02 opacity-100",
        ...classes,
      }}
      nextControlIcon={
        <RightArrow
          className={twMerge(
            `p-2 bg-ct-neutral-01 text-ct-neutral-03 rounded-full shadow-02 ${styleControl}`
          )}
        />
      }
      previousControlIcon={
        <LeftArrow
          className={twMerge(
            `p-2 bg-ct-neutral-01 text-ct-neutral-03 rounded-full shadow-02 ${styleControl}`
          )}
        />
      }
      styles={{
        indicator: {
          "&[data-active]": {
            backgroundColor: "#1D96EE",
          },
        },
        control: {
          "&[data-inactive]": {
            opacity: 0,
            cursor: "default",
          },
        },
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      mx="auto"
      {...settings}
    >
      {content.map((item: any, index: number) => (
        <Carousel.Slide key={index}>
          <div className="">{item.content}</div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default HSlider;
