import Image from "next/image";
import Link from "next/link";
import React from "react";

import style from "./style.module.css";

const Step = () => {
  const data = [{}];
  return (
    <div className="bg-[url(/images/solution/bg_solution.png)] bg-cover">
      <div className="max-w-[1200px] mx-auto py-16 flex">
        <div className="flex flex-col items-center">
          <Image
            src="/images/solution/beginner planet.png"
            width={300}
            height={300}
            alt="beginner"
          />
          <div className="h-[200px] -mt-6">
            <div
              className={`transition-all overflow-hidden h-[140px] hover:h-[200px] border-ct-primary-200 border-[5px] rounded-[25px] bg-[#EFFCFF] p-4 w-[254px]`}
            >
              <h3 className="text-center Heading-Desktop-Heading5  text-ct-secondary-500">
                4 - 6 tuổi
              </h3>
              <ul className="list-disc pl-4 text-ct-primary-500 Body-Desktop-Medium1">
                <li>Đầu ra: Beginners</li>
                <li>Đầu vào: học sinh bắt đầu tiếp cận Tiếng Anh</li>
              </ul>
              <Link href="/solution/beginners">
                <a>
                  <button
                    className={`w-full rounded-[12px] p-[7px] bg-ct-tertiary-500 text-ct-primary-500 mt-4 ${style.child}`}
                  >
                    Xem chi tiết
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-32">
          <Image
            src="/images/solution/srarters planet.png"
            width={300}
            height={300}
            alt="srarters"
          />
          <div className="h-[200px] -mt-6">
            <div
              className={`transition-all overflow-hidden h-[140px] hover:h-[200px] border-ct-primary-200 border-[5px] rounded-[25px] bg-[#EFFCFF] p-4 w-[254px]`}
            >
              {" "}
              <h3 className="text-center Heading-Desktop-Heading5  text-ct-secondary-500">
                6-8 tuổi
              </h3>
              <ul className="list-disc pl-4 text-ct-primary-500 Body-Desktop-Medium1">
                <li>Đầu ra: Pre-A1</li>
                <li>Đầu vào: Beginners/ học xong khóa Beginners</li>
              </ul>
              <Link href="/solution/srarters">
                <a>
                  <button
                    className={`w-full rounded-[12px] p-[7px] bg-ct-tertiary-500 text-ct-primary-500 mt-4 ${style.child}`}
                  >
                    Xem chi tiết
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/solution/movers planet.png"
            width={300}
            height={300}
            alt="movers"
          />
          <div className="h-[200px] -mt-6">
            <div
              className={`transition-all overflow-hidden h-[140px] hover:h-[200px] border-ct-primary-200 border-[5px] rounded-[25px] bg-[#EFFCFF] p-4 w-[254px]`}
            >
              {" "}
              <h3 className="text-center Heading-Desktop-Heading5  text-ct-secondary-500">
                8 - 10 tuổi
              </h3>
              <ul className="list-disc pl-4 text-ct-primary-500 Body-Desktop-Medium1">
                <li>Đầu ra: CEFR A1</li>
                <li>Đầu vào: Pre-A1/ học xong khóa Starters</li>
              </ul>
              <Link href="/solution/movers">
                <a>
                  <button
                    className={`w-full rounded-[12px] p-[7px] bg-ct-tertiary-500 text-ct-primary-500 mt-4 ${style.child}`}
                  >
                    Xem chi tiết
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-32">
          <Image
            src="/images/solution/flyers planet.png"
            width={300}
            height={300}
            alt="flyers"
          />
          <div className="h-[200px] -mt-6">
            <div
              className={`transition-all overflow-hidden h-[140px] hover:h-[200px] border-ct-primary-200 border-[5px] rounded-[25px] bg-[#EFFCFF] p-4 w-[254px]`}
            >
              {" "}
              <h3 className="text-center Heading-Desktop-Heading5  text-ct-secondary-500">
                8 - 10 tuổi
              </h3>
              <ul className="list-disc pl-4 text-ct-primary-500 Body-Desktop-Medium1">
                <li>Đầu ra: CEFR A2</li>
                <li>Đầu vào: A1/ học xong khóa Movers</li>
              </ul>
              <Link href="/solution/flyers">
                <a>
                  <button
                    className={`w-full rounded-[12px] p-[7px] bg-ct-tertiary-500 text-ct-primary-500 mt-4 ${style.child}`}
                  >
                    Xem chi tiết
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
