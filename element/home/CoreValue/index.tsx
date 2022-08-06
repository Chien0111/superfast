import style from "./style.module.css";

const CoreValue = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto max-w-[1200px] my-32">
      {" "}
      <div>
        <p className="font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
          Our core value
        </p>
        <h2 className="font-bold text-[40px] mb-4 text-ct-primary-01">
          We’re redefining early child care education
        </h2>
      </div>
      <div className="w-fit">
        <div className="flex flex-wrap">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};
const Item = () => {
  return (
    <div
      className={`w-full max-w-[400px] mx-auto lg:w-1/2 px-4 my-5 flex items-center ${style.dad}`}
    >
      <div
        className={`transition-all duration-500 min-w-[80px] w-[80px] min-h-[80px] h-[80px] flex items-center justify-center rounded-2xl bg-ct-secondary-02 overflow-hidden ${style.childNumber}`}
      >
        <p className="text-ct-secondary-01 text-[40px]">01</p>
      </div>
      <div className="w-fit ml-4">
        <p className="font-bold mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="font-thin">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur.
        </p>
      </div>
    </div>
  );
};
export default CoreValue;
