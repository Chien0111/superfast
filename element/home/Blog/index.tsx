import { Image } from "@mantine/core";
import style from "./style.module.css";

const Blog = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <div className="w-fit mx-auto">
        <p className="text-center font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
          From our blog
        </p>
        <h2 className="text-center font-bold text-[40px] mb-4 text-ct-primary-01">
          Recent post
        </h2>
      </div>
      <div className="flex flex-wrap">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
};

const BlogItem = () => {
  return (
    <div
      className={`w-full mx-auto max-w-[400px] m-4 lg:w-[calc(33%_-_32px)] rounded-md relative text-ct-neutral-01 overflow-hidden ${style.dad}`}
    >
      <Image src="/images/blog-1.jpg" width="100%" height="400" alt="blog" />
      <div
        className={`transition-all duration-500 ease-in-out absolute flex flex-col justify-end p-6 w-full h-full top-0 bg-gradient-to-b from-transparent to-[#000000de] ${style.child}`}
      >
        <p className="bg-ct-secondary-02 rounded-lg p-1 px-3 w-fit">Blog</p>
        <p className="text-2xl my-4">Lorem ipsum dolor sit amet, consect</p>
        <p className="text-sm font-thin">12 tháng 6, 2022 • ADMIN</p>
      </div>
    </div>
  );
};

export default Blog;
