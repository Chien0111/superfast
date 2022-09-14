import Image from "next/image";
import Link from "next/link";

import { data } from "../data";

const StepDesktop = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto py-16 flex">
        {data.map((_, index) => {
          return (
            <div key={index} className="flex flex-col items-center even:mt-32">
              <Image src={_.image} width={300} height={300} alt={_.type} />
              <div className="h-[200px] -mt-6">
                <div
                  className={`transition-all overflow-hidden h-[140px] hover:h-[200px] border-ct-primary-200 border-[5px] rounded-[25px] bg-[#EFFCFF] p-4 w-[254px]`}
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
