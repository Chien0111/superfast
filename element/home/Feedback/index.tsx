import SliderComp from "../../../components/Slider";
import { Image } from "@mantine/core";

const Feedback = () => {
  const settingSlidePC = {
    setting: {
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    },
    showArrow: false,
    showDots: true,
    styleDot: "",
  };
  return (
    <div className="bg-[#faf4ea] py-10 bg-[url(/images/feedback_bg.png)] bg-no-repeat bg-center">
      <SliderComp
        settings={settingSlidePC.setting}
        showArrow={settingSlidePC.showArrow}
        showDots={settingSlidePC.showDots}
        content={[
          { content: <FeedbackItem /> },
          { content: <FeedbackItem /> },
          { content: <FeedbackItem /> },
          { content: <FeedbackItem /> },
          { content: <FeedbackItem /> },
        ]}
        styleDot=""
      />
    </div>
  );
};
const FeedbackItem = () => {
  return (
    <div className=" max-w-[700px] mx-auto my-8">
      <p className="text-center font-thin text-[22px] leading-8">
        &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        iste, ullam ratione sunt nostrum veniam vero corrupti tempore laudantium
        quaerat! &quot;
      </p>
      <p className="text-center mt-8 ">Nguyenx Van A</p>
      <p className="text-center mt-4 font-thin">Parent</p>
    </div>
  );
};
export default Feedback;
