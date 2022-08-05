import { Image } from "@mantine/core";
import SliderComp from "../../../components/Slider";
import style from "./style.module.css";

const Courses = () => {
    const settingSlidePC = {
        setting: {
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
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
        showArrow: false,
        showDots: true,
        styleDot: "",
    };
    return (
        <div className="bg-[#faf4ea] py-10">
            <SliderComp
                settings={settingSlidePC.setting}
                showArrow={settingSlidePC.showArrow}
                showDots={settingSlidePC.showDots}
                content={[
                    { content: <CourseItem /> },
                    { content: <CourseItem /> },
                    { content: <CourseItem /> },
                    { content: <CourseItem /> },
                    { content: <CourseItem /> },
                ]}
                styleDot=""
            />
        </div>
    );
};
const CourseItem = () => {
    return (
        <div
            className={`mx-auto bg-ct-neutral-01 max-w-[360px] h-[450px] rounded-md overflow-hidden relative transition-all ${style.dad}`}
        >
            <Image
                className={`rounded-md overflow-hidden transition-all duration-700 ease-in-out ${style.childImg}`}
                src="/images/curriculum-02.jpg"
                width="100%"
                height="auto"
                alt="img"
            />
            <div
                className={`w-full transition-all bg-ct-neutral-01 duration-500 ease-in-out absolute -bottom-12 ${style.childBottom}`}
            >
                <div className="p-5 pt-3 pb-4 relative">
                    <p className="text-[24px] font-bold">
                        Alphabet Matching Class
                    </p>
                    <p className="font-light py-3 pb-4 border-b">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quia, quidem?
                    </p>
                    <div
                        className={`transition-all w-14 h-14 flex items-center justify-center rounded-full bg-ct-secondary-02 text-ct-neutral-01 absolute right-4 -top-8 ${style.childPrice}`}
                    >
                        <p>170$</p>
                    </div>
                </div>
                <div className="flex mx-4 mb-4">
                    <div className="border-r pr-4">
                        <p className="text-ct-neutral-03">Age:</p>
                        <p>3-5 year</p>
                    </div>
                    <div className="border-r px-4">
                        <p className="text-ct-neutral-03">Time:</p>
                        <p>8-10 PM</p>
                    </div>
                    <div className="px-4">
                        <p className="text-ct-neutral-03">Capacity:</p>
                        <p>30 kids</p>
                    </div>
                </div>
                <div className="w-full p-3 text-center bg-ct-secondary-02 text-ct-neutral-01">
                    Join this class{" "}
                </div>
            </div>
        </div>
    );
};
export default Courses;
