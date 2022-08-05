import { Image } from "@mantine/core";
import React from "react";
import SliderComp from "../../../components/Slider";
const cardList = [
    {
        content: (
            <div className="w-full flex justify-between">
                <div>hahahahahaha</div>
                <Image src="/images/home_1.png" width="80%" height="100%" />
            </div>
        ),
    },
    {
        content: (
            <div className="w-full flex justify-between">
                <div>hahahahahaha</div>
                <Image src="/images/home_1.png" width="80%" height="100%" />
            </div>
        ),
    },
    {
        content: (
            <div className="w-full flex justify-between">
                <div>hahahahahaha</div>
                <Image src="/images/home_1.png" width="80%" height="100%" />
            </div>
        ),
    },
    {
        content: (
            <div className="w-full flex justify-between">
                <div>hahahahahaha</div>
                <Image src="/images/home_1.png" width="80%" height="100%" />
            </div>
        ),
    },
    {
        content: (
            <div className="w-full flex justify-between">
                <div>hahahahahaha</div>
                <Image src="/images/home_1.png" width="80%" height="100%" />
            </div>
        ),
    },
    {
        content: (
            <div className="w-full flex justify-between">
                <div>hahahahahaha</div>
                <Image src="/images/home_1.png" width="80%" height="100%" />
            </div>
        ),
    },
];
const Slider = () => {
    const settingSlidePC = {
        setting: {
            slidesToShow: 3.3,
            slidesToScroll: 3,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        swipeToSlide: true,
                    },
                },
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        swipeToSlide: true,
                    },
                },
            ],
        },
        showArrow: true,
        showDots: false,
        styleDot: "",
    };
    return (
        <div className="w-full h-screen">
            <SliderComp
                settings={{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    infinite: false,
                }}
                showArrow={settingSlidePC.showArrow}
                showDots={settingSlidePC.showDots}
                content={cardList}
                styleDot=""
                className="w-full h-full"
            />
        </div>
    );
};

export default Slider;
