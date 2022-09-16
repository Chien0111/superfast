import Image from "next/image";
import Link from "next/link";

import { data } from "../../../../data/data";
import style from "./style.module.css";

const StepDesktop = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto py-32 pb-10 flex bg-[url(/images/solution/line_connect.png)] bg-contain bg-no-repeat">
        {data.map((_, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-center ${style.dad}`}
              style={{
                marginTop: `${index * -50 + 50}px`,
              }}
            >
              <Image
                className={`${style.anim}`}
                src={_.image}
                width={300}
                height={300}
                alt={_.type}
                quality={100}
              />
              <div className="h-[200px] -mt-4">
                <div
                  className={`transition-all overflow-hidden h-[140px] ${style.child} border-ct-primary-200 border-[5px] rounded-[25px] bg-[#EFFCFF] p-4 w-[254px]`}
                >
                  <h3 className="text-center Heading-Desktop-Heading5  text-ct-secondary-500">
                    {_.age}
                  </h3>
                  <ul className="list-disc pl-4 text-ct-primary-500 Body-Desktop-Medium1">
                    <li>Đầu ra: {_.output}</li>
                    <li>Đầu vào: {_.input}</li>
                  </ul>
                  <Link href={_.link}>
                    <a>
                      <button
                        className={`w-full rounded-[12px] p-[7px] bg-ct-tertiary-500 text-ct-primary-500 mt-4`}
                      >
                        Xem chi tiết
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StepDesktop;
