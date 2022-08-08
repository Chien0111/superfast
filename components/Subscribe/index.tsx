import { Input, Image } from "@mantine/core";
import { ArrowCircleRight2 } from "iconsax-react";

const Subscribe = () => {
  return (
    <div className="w-full h-auto bg-ct-solid-red-01 ">
      <div className="md:flex relative flex-wrap text-center items-center justify-between m-auto p-10 md:p-0">
        <div className="text-ct-white font-bold text-4xl lg:ml-20 md:w-1/3 flex justify-center">
          <h1>Sign up for newsletter</h1>
        </div>
        <Image
        className="hidden md:block"
          src="images/footer-bg2.png"
          width={300}
          height="auto"
          alt="img"
        />
        <div className="flex md:absolute md:right-0 p-6 md:w-3/5 w-full">
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
