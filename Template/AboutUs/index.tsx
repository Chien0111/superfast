import { ArrowRight2,ArrowCircleRight2 } from "iconsax-react";
import Subscribe from "../../components/Subscribe";
import GetInTouch from "../../element/aboutUs/GetInTouch";
import { Image } from "@mantine/core";
import style from "./style.module.css";

const AboutUsTemplate = () => {
    return (
        <div>
            <div className="text-center text-ct-white bg-pink-500 py-16">
                <h1 className="font-bold text-6xl">About us</h1>
                <p className="flex items-center justify-center m-4"><span>Home</span> <span><ArrowRight2 size="14"/></span> <span>About us</span></p>
            </div>
            <div className="p-10">
                <div className="flex items-center">
                    <div className="w-1/2">
                    <Image
                            classNames={{image:' p-2 hover:opacity-70'}} 
                            radius={15}
                            className={`rounded-md `}
                            src="/images/about-01.jpg"
                            width="full"
                            height="auto"
                            alt="img"
                            />
                    </div>
                    <div className="w-1/2 text-center p-2">
                        <h3 className="text-ct-secondary-02">What we are</h3>
                        <h1 className="text-ct-primary-05 font-bold text-4xl mb-6">Welcome to the best playschool</h1>
                        <p className="text-ct-neutral-04 font-thin">A Pre-School is your child’s first experience away from you. To ensure, that this transition from home to school is a smooth process, we have Buddy, your child’s Fun Partner at EuroKids Pre-School.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    
                    <div className="w-1/2 text-center p-2">
                        <h3 className="text-ct-secondary-02">What we are</h3>
                        <h1 className="text-ct-primary-05 font-bold text-4xl mb-6">Child development & education</h1>
                        <p className="text-ct-neutral-04 font-thin">With years of dedicated research, Kidzee has set unparalleled standards in the CDE (Child Development & Education) space. Having acknowledged the uniqueness of each child and their infinite potential. Kidzee has is its proprietary pedagogy</p>
                    </div>
                    <div className="w-1/2">
                    <Image
                            classNames={{image:' p-2 hover:opacity-70'}} 
                            radius={15}
                            className={`rounded-md `}
                            src="/images/Banner 11.jpg"
                            width="full"
                            height="auto"
                            alt="img"
                            />
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center">
                    <h3 className="text-ct-secondary-02">Why choose us</h3>
                    <h1 className="text-ct-primary-05 font-bold text-4xl mb-6">Academic success</h1>
                </div>
                <div className="flex">
                    <div className="w-1/3 p-5">
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
                    <div className="w-1/3 p-5">
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
                    <div className="w-1/3 p-5">
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
                </div>
            </div>
            <GetInTouch />
            <Subscribe />
        </div>
    );
};

export default AboutUsTemplate;
