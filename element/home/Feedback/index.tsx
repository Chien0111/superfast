import SliderComp from "../../../components/Slider";

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
    <div>
      <div className="w-fit mx-auto mt-10">
        <p className="text-center font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
          Meet our staffs
        </p>
        <h2 className="text-center font-bold text-[40px] mb-4 text-ct-primary-01">
          Excellent teacher
        </h2>
      </div>
      <div className="pb-10 bg-[url(/images/feedback_bg.png)] bg-no-repeat bg-center">
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
