import { ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";

import Link from "next/link";
import Subscribe from "../../../components/Subscribe";
import { data } from "../../../data/data";
import Infomation from "../../../element/curriculum/information";
import Querys from "../../../element/curriculum/querys";
import Reason from "../../../element/curriculum/reason";
import Coundown from "../../../element/home/Coundown";
import BaseLayout from "../../../layout/base";
import style from "./style.module.css";

const ChildrenSolution = () => {
  const [detailData, setDetailData] = useState<any>();
  const navigate = useRouter();
  const { type } = useRouter().query;

  useLayoutEffect(() => {
    if (type) {
      const matching = data.findIndex(
        (item, index) =>
          item.type.toLowerCase() === type.toString().toLowerCase()
      );
      if (matching === -1) {
        navigate.push("/404");
      } else {
        setDetailData(data[matching]);
      }
    }
  }, [type]);

  return (
    <div>
      <div>
        <div className="text-center lg:bg-[url(/images/contact-bg-desktop.png)] bg-[url(/images/contact-bg.png)] bg-center text-ct-secondary-500 bg-cover lg:py-10 py-2">
          <h1
            className={`lg:Heading-Desktop-Heading1 Heading-Mobile-Heading4 uppercase ${style.borderwhite}`}
          >
            {detailData?.name}
          </h1>
          <h2 className="flex items-center justify-center lg:text-base text-ct2-neutral-01 font-semibold">
            <Link href="/curriculum">
              <a className="underline">Giải phát học tiếng anh</a>
            </Link>{" "}
            <ArrowRight2 size="16" />{" "}
            <span className="capitalize">{detailData?.type}</span>
          </h2>
        </div>
        <div>
          <Infomation data={detailData?.content} />
        </div>
        <div>
          <Reason />
          <Querys />
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
