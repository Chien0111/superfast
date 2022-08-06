import style from "./style.module.css";

const CoreValue = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto max-w-[1200px] my-10">
      {" "}
      <div>somt thing here</div>
      <div className="w-fit">
        <div>
          <p>Chungs tooi laf ai</p>
          <h2>The best background for kid</h2>
        </div>
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
    <div className={`w-full max-w-[450px] px-4 my-5 flex ${style.dad}`}>
      <div
        className={`transition-all duration-500 min-w-[80px] w-[80px] min-h-[80px] h-[80px] flex items-center justify-center rounded-2xl bg-ct-secondary-02 overflow-hidden ${style.childNumber}`}
      >
        <p className="text-ct-secondary-01 text-[40px]">01</p>
      </div>
      <div className="w-fit">
        <p className="font-bold my-4">
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
