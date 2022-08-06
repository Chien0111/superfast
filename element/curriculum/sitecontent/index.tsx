import { ArrowRight2, ArrowCircleRight2} from "iconsax-react";
import { Image } from "@mantine/core";

const Sitecontent = () => {
    return <div>
        <div className=" my-10">
            <div className="lg:flex">
                    <Content/>
                    <Content/>
            </div>
            <div className="lg:flex">
                    <Content/>
                    <Content/>
            </div>
        </div>
    </div>;
};

const Content = () => {
    return <div className="lg:1/2 w-full flex  items-center">
    <div className="w-[280px] items-center p-10 ">
        <div className="relative">
            <div className={`w-[200px] h-[200px]`}>
                <Image
                classNames={{image:' p-2 hover:opacity-70'}} 
                radius={500}
                className={`rounded-md `}
                src="/images/facilities-11.jpg"
                width="100%"
                height="100%"
                alt="img"
                />
            </div>
            <div className="absolute top-0 right-0 w-14 h-14  rounded-full bg-ct-secondary-02 text-center flex items-center text-ct-white">
                <div className="w-full text-xs p-2">
                    <h5>1.8-3</h5> 
                    <span>YEARS</span>
                </div>
            </div>
        </div>
    </div>
    <div className="p-6 flex-wrap">
        <h3 className="text-2xl font-bold">Playgroup</h3> <br />
        <p>By creating a safe, consistent and welcoming environment</p>
    </div>
</div>
}

export default Sitecontent;