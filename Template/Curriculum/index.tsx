import Subscribe from "../../components/Subscribe";
import { ArrowRight2, ArrowCircleRight2} from "iconsax-react";
import { Image } from "@mantine/core";
import Sitecontent from "../../element/curriculum/sitecontent";

const CurriculumTemplate = () => {
    return (
        <div>
            <div className="text-center text-ct-white bg-indigo-900 py-16">
                <h1 className="font-bold text-6xl">Curriculum</h1>
                <p className="flex items-center justify-center m-4"><span>Home</span> <span><ArrowRight2 size="14"/></span> <span>Curriculum</span></p>
            </div>
            <Sitecontent/>
            <div className="w-full ">
                <div className="w-full relativer">
                    <div className="absolute text-center w-full z-0">
                        <h1 className="m-4 text-ct-secondary-02 text-lg">RegissTranTion</h1>
                        <h2 className="font-bold m-4 text-4xl">How to enroll your child to Kindero? Easy!</h2>
                        <div className="flex justify-center"><button className="bg-ct-secondary-02 p-4 flex items-center text-ct-white rounded-xl hover:opacity-70">Apply Now <span className="ml-2"><ArrowCircleRight2 size="16" /></span></button></div>
                    </div>
                    <Image
                    classNames={{image:'z-20'}} 
                    className={`rounded-md `}
                    src="/images/Banner 6.jpg"
                    height="auto"
                    alt="img"
                    />
                    
                </div>
            </div>
            <Subscribe />
        </div>
    );
};

export default CurriculumTemplate;
