import { Input, Image } from "@mantine/core";
import { ArrowCircleRight2 } from "iconsax-react";

const Subscribe = () => {
  return (
    <div className="w-full h-auto bg-ct-solid-red-01 sm:block hidden">
      <div className="flex relative flex-wrap text-center items-center justify-between m-auto">
        <h1 className="text-ct-white font-bold text-4xl lg:ml-20 w-1/3 ">
          Sign up for newsletter
        </h1>
        <Image
        className=""
          src="images/footer-bg2.png"
          width={300}
          height="auto"
          alt="img"
        />
        <div className="flex absolute right-0 p-6 w-3/5">
          <Input
            classNames={{
              input:
                "w-full h-full p-6 rounded-l-lg rounded-r-none border-none",
              wrapper: "border-none w-full",
            }}
            placeholder="Enter your e-mail ..."
          />
          <button className="bg-ct-white p-6 hover:text-ct-secondary-02 font-semibold rounded-r-lg flex justify-center items-center">
            <span>
              Subscribe
              <div className="flex justify-center">
                <ArrowCircleRight2 size="32" />
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
