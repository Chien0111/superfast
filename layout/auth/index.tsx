import { Image } from "@mantine/core";
import React from "react";

const AuthLayout = ({ children }: any) => {
  return (
    <div className=" bg-[url(/AuthModules/bg-mobile.png)] lg:bg-[url(/AuthModules/bg.png)] bg-bottom bg-no-repeat bg-contain h-screen pt-20">
      <div className="max-w-[1200px] mx-auto flex items-start justify-center h-full">
        <div className="grow">{children}</div>
        <div className="h-full ml-auto mt-auto">
          <Image
            classNames={{
              figure: "h-full",
              imageWrapper: "h-full",
            }}
            src="/AuthModules/char.png"
            alt=""
            // width={687}
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
