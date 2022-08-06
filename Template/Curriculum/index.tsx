import Subscribe from "../../components/Subscribe";
import { ArrowRight2, ArrowCircleRight2} from "iconsax-react";
import { Image } from "@mantine/core";

const CurriculumTemplate = () => {
    return (
        <div>
            <div className="text-center text-ct-white bg-indigo-900 py-16">
                <h1 className="font-bold text-6xl">Curriculum</h1>
                <p className="flex items-center justify-center m-4"><span>Home</span> <span><ArrowRight2 size="14"/></span> <span>Curriculum</span></p>
            </div>
            <div className="p-10 my-10">
                <div className="flex">
                <div className="w-1/2 flex items-center">
                <div className="relative">
                        <Image
                        classNames={{image:' p-2 hover:opacity-70'}} 
                        radius={500}
                        className={`rounded-md `}
                        src="/images/facilities-11.jpg"
                        width="300px"
                        height="auto"
                        alt="img"
                        />
                        <div className="absolute top-0 right-0 w-14 h-14  rounded-full bg-ct-secondary-02 text-center flex items-center text-ct-white">
                            <div className="w-full text-xs p-2">
                                <h5>1.8-3</h5> 
                                <span>YEARS</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-medium">Playgroup</h3>
                        <p>By creating a safe, consistent and welcoming environment</p>
                    </div>
                </div>
                <div className="w-1/2 flex items-center">
                    <div className="relative">
                        <Image
                        classNames={{image:' p-2 hover:opacity-70'}} 
                        radius={500}
                        className={`rounded-md `}
                        src="/images/facilities-11.jpg"
                        width="300px"
                        height="auto"
                        alt="img"
                        />
                        <div className="absolute top-0 right-0 w-14 h-14  rounded-full bg-ct-secondary-02 text-center flex items-center text-ct-white">
                            <div className="w-full text-xs p-2">
                                <h5>1.8-3</h5> 
                                <span>YEARS</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-medium">Playgroup</h3>
                        <p>By creating a safe, consistent and welcoming environment</p>
                    </div>
                </div>
                </div>
                <div className="flex mt-10">
                <div className="w-1/2 flex items-center">
                <div className="relative">
                        <Image
                        classNames={{image:' p-2 hover:opacity-70'}} 
                        radius={500}
                        className={`rounded-md `}
                        src="/images/facilities-11.jpg"
                        width="300px"
                        height="auto"
                        alt="img"
                        />
                        <div className="absolute top-0 right-0 w-14 h-14  rounded-full bg-ct-secondary-02 text-center flex items-center text-ct-white">
                            <div className="w-full text-xs p-2">
                                <h5>1.8-3</h5> 
                                <span>YEARS</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-medium">Playgroup</h3>
                        <p>By creating a safe, consistent and welcoming environment</p>
                    </div>
                </div>
                <div className="w-1/2 flex items-center">
                    <div className="relative">
                        <Image
                        classNames={{image:' p-2 hover:opacity-70'}} 
                        radius={500}
                        className={`rounded-md `}
                        src="/images/facilities-11.jpg"
                        width="300px"
                        height="auto"
                        alt="img"
                        />
                        <div className="absolute top-0 right-0 w-14 h-14  rounded-full bg-ct-secondary-02 text-center flex items-center text-ct-white">
                            <div className="w-full text-xs p-2">
                                <h5>1.8-3</h5> 
                                <span>YEARS</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-medium">Playgroup</h3>
                        <p>By creating a safe, consistent and welcoming environment</p>
                    </div>
                </div>
                </div>
            </div>
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
