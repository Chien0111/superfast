import { Image } from "@mantine/core";
import style from "./style.module.css";

const Introduce = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto max-w-[1200px] my-10">
      {" "}
      <Image
        className="w-full"
        src="/images/intro-banner.png"
        width={512}
        height={447}
        alt="banner"
      />
      <div className="w-fit">
        <div>
          <p className="font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Who are we
          </p>
          <h2 className="font-bold text-[40px] mb-4 text-ct-primary-01">
            The best background for kid
          </h2>
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
    <div className={`max-w-[300px] ${style.dad}`}>
      <div
        className={`transition-all duration-500 w-20 h-20 flex items-center justify-center rounded-2xl bg-ct-secondary-02 overflow-hidden ${style.childNumber}`}
      >
        <p className="text-ct-secondary-01 text-[40px]">01</p>
      </div>
      <p className="font-bold my-4">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="font-thin">
        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
        consectetur.
      </p>
    </div>
  );
};
export default Introduce;
