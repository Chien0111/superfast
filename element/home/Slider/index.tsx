import React from "react";
import SliderComp from "../../../components/Slider";
const cardList = [
    {
        content: <p className="w-full bg-red-500">ahahhahaha</p>,
    },
    {
        content: <p className="w-full bg-red-500">ahahhahaha</p>,
    },
    {
        content: <p className="w-full bg-red-500">ahahhahaha</p>,
    },
    {
        content: <p className="w-full bg-red-500">ahahhahaha</p>,
    },
    {
        content: <p className="w-full bg-red-500">ahahhahaha</p>,
    },
    {
        content: <p className="w-full bg-red-500">ahahhahaha</p>,
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
        <div className="w-full mx-auto">
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
            />
        </div>
    );
};

export default Slider;
