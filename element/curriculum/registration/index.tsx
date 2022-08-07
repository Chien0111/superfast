import { Image } from "@mantine/core";
import { ArrowCircleRight2 } from "iconsax-react";

const RegissTranTion = () => {
    return (<div>
        <div className="flex w-full items-center ">
        <div className="relative">
            <div>
                <Image
                src='/images/Banner 6.jpg'
                width="100%"
                height="100%"
                alt="img"
                />
            </div>
            <div className="absolute top-2  w-full flex justify-center">
            <div className="text-center w-1/2">
                    <h1 className="font-['Dancing_Script'] text-ct-secondary-02 text-[30px] m-4">RegissTranTion</h1>
                    <h2 className=" m-4 font-bold text-[40px] mb-4 text-ct-primary-01">How to enroll your child to Kindero? Easy!</h2>
                    <div className="flex justify-center">
                    <button className="bg-ct-secondary-02 p-4 flex items-center text-ct-white rounded-xl hover:opacity-70">Apply Now <span className="ml-2"><ArrowCircleRight2 size="16" /></span></button></div>
                    </div>
            </div>
        </div>
    </div>
</div>)
};

export default RegissTranTion;