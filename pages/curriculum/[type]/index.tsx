import { ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";

import Subscribe from "../../../components/Subscribe";
import Coundown from "../../../element/home/Coundown";
import Infomation from "../../../element/curriculum/information";
import Querys from "../../../element/curriculum/querys";
import Reason from "../../../element/curriculum/reason";
import BaseLayout from "../../../layout/base";
import style from "./style.module.css";

const ChildrenSolution = () => {
  const [detailData, setDetailData] = useState<any>();
  const navigate = useRouter();
  const { type } = useRouter().query;
  const data = [
    {
      name: "beginners",
      content:
        "Khóa học dành cho trẻ từ 4-6 tuổi. Thông qua hình thức truyền tải bằng các bài hát, câu chuyện, trò chơi được biên soạn hình ảnh một cách sinh động, vui nhộn, các bé sẽ được hình thành nên phản xạ tự nhiên nhất với tiếng Anh và phát triển nền tảng từ vựng một cách vững chắc.",
    },
    {
      name: "STARTERS",
      content:
        "Khóa học dành cho trẻ từ 6-8 tuổi. Kích thích sự sáng tạo, trí tò mò, khả năng ngôn ngữ của trẻ, tạo động lực thúc đẩy trẻ chủ động học tiếng Anh và trau dồi đầy đủ kỹ năng, kiến thức để có thể làm được bài thi Starters theo chuẩn Cambridge.",
    },
    {
      name: "MOVERS",
      content:
        "Khóa học dành cho trẻ từ 8-10 tuổi. Giúp trẻ mở rộng kiến thức về khoa học và xã hội, khuyến khích trẻ dùng tiếng Anh để tìm hiểu bài học. Trẻ được trau dồi đầy đủ kỹ năng và kiến thức để có thể làm được bài thi Movers theo chuẩn Cambridge.",
    },
    {
      name: "flyers",
      content:
        "Khóa học dành cho trẻ từ 10-12 tuổi. Giúp trẻ mở rộng kiến thức về khoa học và xã hội. Các em có thể giao tiếp được với người bản xứ. Trong cả khóa học, trẻ được trau dồi đầy đủ kỹ năng và kiến thức để có thể làm được bài thi Flyers theo chuẩn Cambridge.",
    },
  ];
  useLayoutEffect(() => {
    if (type) {
      const matching = data.findIndex(
        (item, index) =>
          item.name.toLowerCase() === type.toString().toLowerCase()
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
            Giải phát học tiếng anh <ArrowRight2 size="16" /> {detailData?.name}
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
