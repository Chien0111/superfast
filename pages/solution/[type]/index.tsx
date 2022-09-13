import { ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/router";
import React from "react";
import Subscribe from "../../../components/Subscribe";
import Coundown from "../../../element/home/Coundown";
import Infomation from "../../../element/solution/information";
import Reason from "../../../element/solution/reason";
import BaseLayout from "../../../layout/base";
import style from "./style.module.css";

const ChildrenSolution = () => {
  const { type } = useRouter().query;
  console.log(type);
  return (
    <div>
      <div>
        <div className="text-center lg:bg-[url(/images/contact-bg-desktop.png)] bg-[url(/images/contact-bg.png)] text-ct-secondary-500 bg-cover lg:py-10 py-2">
          <h1
            className={`lg:Heading-Desktop-Heading1 Heading-Mobile-Heading4 uppercase ${style.borderwhite}`}
          >
            {type}
          </h1>
          <h2 className="flex items-center justify-center lg:text-base text-ct2-neutral-01 font-semibold">
            Giải phát học tiếng anh <ArrowRight2 size="16" /> {type}
          </h2>
        </div>
        <div>
          <Infomation />
        </div>
        <div>
          <Reason />
        </div>
        <div>
          <Coundown />
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

ChildrenSolution.Layout = BaseLayout;

export default ChildrenSolution;
