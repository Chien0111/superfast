import { Image } from "@mantine/core";
import style from "./style.module.css";
import { ArrowRight2,ArrowCircleRight2 } from "iconsax-react";

const Academic = () => {
    return <div>
        <div className="w-fit mx-auto">
        <p className="text-center font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
        Why choose us
        </p>
        <h2 className="text-center font-bold text-[40px] mb-4 text-ct-primary-01">
        Academic success
        </h2>
      </div>
        <div className="lg:flex">
            <ContentAcademic/>
            <ContentAcademic/>
            <ContentAcademic/>
        </div>
    </div>;
};

const ContentAcademic = () => {
    return (
        <div className=" p-5">
            <div className={`${style.imgwrapper} `}>
                <Image
                classNames={{image:`${style.image} w-full`,
                imageWrapper: 'w-full'}} 
                radius={15}
                className={`rounded-md `}
                src="/images/Banner 11.jpg"
                width="full"
                height="auto"
                alt="img"
                />
            </div>
            <p className="text-ct-primary-05 font-bold text-mb my-6">Academic success</p>
            <p className="text-ct-neutral-04 font-thin">In our decade-long legacy of nurturing the ‘unique potential’ of every child, we have shaped, in metros and suburbs alike, a new cult of schooling for toddlers</p>
            <button className="bg-ct-primary-05 text-white flex items-center rounded-lg px-3 py-1 mt-5 hover:opacity-70">
                Find Out More <span className="ml-2"><ArrowCircleRight2 size="18" variant="Bold"/></span>
            </button>
        </div>
    )
}

export default Academic;
