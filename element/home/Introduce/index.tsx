import { Image } from "@mantine/core";
import { dataIntro } from "./data";
import style from "./style.module.css";

const Introduce = () => {
  return (
    <div className="mx-auto max-w-[1363px] text-center mb-[-60px] sm:mb-0 p-0">
      <div className="w-fit mx-auto text-center flex items-center sm:mt-20 mt-5 px-10 sm:mb-[-40px] mb-[-60px] p-0">
        <div className="w-[47px] h-[34px] sm:w-[199px] sm:h-[142px]">
          <Image
            src="/images/bong1.png"
            width="100%"
            height="100%"
            alt="banner"
          />
        </div>
        <div className="sm:mx-10 lg:mx-20 mx-5 ">
          <p className="md:Heading-Mobile-Heading1 text-lg font-bold text-ct-secondary-400 w-[187px] sm:w-[280px] sm:h-[44px]">
            LÝ DO NÊN CHỌN
          </p>
          <h2 className="md:Heading-Mobile-Heading1 font-bold text-ct-primary-1000">
            SPEAKWELL
          </h2>
        </div>
        <div className="w-fit min-w-[47px] p-0">
          <div className="w-[19px] h-[19px] sm:w-[98px] sm:h-[98px] mb-5">
            <Image
              src="/images/bong2.png"
              width="100%"
              height="100%"
              alt="banner"
            />
          </div>
          <div className="w-[12px] h-[12px] sm:w-[60px] sm:h-[60px] min-w-[6px] min-h-[6px] mt-4">
            <Image
              src="/images/bong3.png"
              width="100%"
              height="100%"
              alt="banner"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between my-20">
        {" "}
        <div className="w-fit mx-auto">
          <div className="flex flex-wrap items-start justify-center">
            {dataIntro.map((item, index) => {
              return <Item key={index} data={item} />;
            })}
          </div>
        </div>
        <div className="w-fit hidden md:block min-w-[300px] lg:min-w-[454px] lg:min-h-[806px] lg:mr-10">
          <Image
            src="/images/intro-banner.png"
            width="100%"
            height="100%"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};
const Item = (props: any) => {
  const { data } = props;
  return (
    <div>
      <div className="max-w-[319.51px] p-5 sm:max-w-[409px] sm:max-h-[358px] sm:p-10 relative sm:mb-10">
        <div
          className={`${data.colorSecond} w-full h-[109px] flex items-center border-[3px] border-[#3DD1F7] rounded-xl justify-center glow`}
        >
          <div className="relative w-[61px] h-[61px] ml-4">
            <span>
              <Image
                src="/images/tron.png"
                // width="100%"
                // height="100%"
                alt="banner"
              />
            </span>
            <span className="absolute top-[22%] sm:left-[25%] left-[25%] sm:h-[30px] sm:w-[30px] w-[28px] h-[28px]">
              <span>
                <Image
                  src={data.icon}
                  width="100%"
                  height="100%"
                  alt="banner"
                />
              </span>
            </span>
          </div>
          <div className="w-[226px] p-4 text-center font-extrabold sm:text-lg text-base leading-6 text-white">
            {data.title}
          </div>
        </div>
        <div className="absolute top-[118px] sm:top-[135px] ml-4 sm:w-[300px] sm:h-[21px] w-[250px] px-5">
          <Image
            src="/images/group.png"
            width="100%"
            height="100%"
            alt="banner"
          />
        </div>
        <div className="w-full h-[249px] mt-2 sm:Body-Desktop-Medium-Bold Body-Desktop-Medium text-start flex items-center p-4 bg-[#EBFAFE] text-[#0056B8] font-normal border-[3px] border-[#3DD1F7] rounded-lg glow">
          {data.des}
        </div>
      </div>
    </div>
  );
};
export default Introduce;
