import dynamic from "next/dynamic";
import Link from "next/link";

import Subscribe from "../components/Subscribe";
import BaseLayout from "../layout/base";

const Coundown = dynamic(() => import("../element/home/Coundown"), {
  ssr: false,
});

const NotFound = () => {
  return (
    <div>
      <h1 className="text-center my-20 Heading-Desktop-Heading2">
        Không tìm thấy trang
      </h1>
      <Link href={"/"}>
        <a className="rounded-full p-4 px-8 my-10 bg-ct-primary-400 block w-fit mx-auto text-ct-text-white">
          Về trang chủ
        </a>
      </Link>
      <Coundown />
      <Subscribe />
    </div>
  );
};
NotFound.Layout = BaseLayout;
export default NotFound;
