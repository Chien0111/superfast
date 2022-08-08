import { Image } from "@mantine/core";
import { ArrowCircleRight2 } from "iconsax-react";
import { useState } from "react";
import ModalRegister from "../../../components/ModalRegister";

const RegissTranTion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" w-full  ">
        <div className="max-w-[1200px] m-auto">
          <div className=" flex justify-center">
            <div className="text-center ">
              <h1 className="font-['Dancing_Script'] text-ct-secondary-02 text-[40px] m-4">
                RegissTranTion
              </h1>
              <h2 className=" m-4 font-bold text-[40px] lg:text-[60px] mb-4 text-ct-primary-01 max-w-[1200px] m-auto">
                How to enroll your child to Kindero? Easy!
              </h2>
              <div className="flex justify-center" onClick={() => setIsOpen(true)}>
                <button className="bg-ct-secondary-02 p-4 flex items-center text-ct-white rounded-xl hover:opacity-70">
                  Apply Now{" "}
                  <span className="ml-2">
                    <ArrowCircleRight2 size="16" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image
              src="/images/Banner 6.jpg"
              width="100%"
              height="100%"
              alt="img"
            />
      </div>
      <ModalRegister
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default RegissTranTion;
