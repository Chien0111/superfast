import { Image } from "@mantine/core";
import { dataIntro } from "./data";
import style from "./style.module.css";

const Introduce = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-[1200px] my-20">
      {" "}
      <div className="w-fit mr-10 min-w-[300px] lg:min-w-[512px] lg:min-h-[447px] ">
        <Image
          src="/images/intro-banner.png"
          width="100%"
          height="100%"
          alt="banner"
        />
      </div>
      <div className="w-fit mx-auto">
        <div className="w-fit mx-auto lg:mx-0 text-center lg:text-left">
          <p className="font-['Dancing_Script'] text-ct-solid-red-03 text-[30px]">
            Ưu điểm khoá học
          </p>
          <h2 className="font-bold text-[40px] mb-4 text-ct-primary-01">
            Kiến thức tốt nhất
          </h2>
        </div>
        <div className="flex flex-wrap items-start justify-center">
          {dataIntro.map((item, index) => {
            return <Item key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
const Item = (props: any) => {
  const { data } = props;
  return (
    <div className={`max-w-[300px] p-2 ${data.colorMain} ${style.dad}`}>
      <div
        className={`transition-all duration-700 w-20 h-20 flex items-center justify-center rounded-2xl border-[2px] border-dashed border-transparent ${data.colorSecond} overflow-hidden ${data.color} ${style.childNumber}`}
      >
        <div className={`${data.colorMain} text-[40px] w-10 h-10`}>
          <div dangerouslySetInnerHTML={{ __html: `${data.icon}` }}></div>
        </div>
      </div>
      <p className={`transition-all font-bold my-4 ${style.childtext}`}>
        {data.title}
      </p>
      <p className="font-normal text-ct-neutral-05">{data.des}</p>
    </div>
  );
};
export default Introduce;
