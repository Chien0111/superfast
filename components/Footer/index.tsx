import { Image } from "@mantine/core";
import style from "./style.module.css";

const Footer = () => {
    return <div>
                <div className="flex px-10 pt-20 pb-5">
                    <div className="w-1/4 px-5">
                        <p className="font-medium">
                            <span>Do you have questions and want to contact us?</span> <br />
                            <span className="text-ct-secondary-02">Call or visit us.</span>
                        </p>
                        <p className="text-ct-solid-red-01 text-2xl font-bold py-3 w-full">+99999999999</p>
                        <p className="text-ct-neutral-04 font-extralight mb-10">56 Glassford Street Glasgow G1 1UL, New York, USA</p>
                    </div>
                    <div className={`w-1/4 px-5 ${style.information}`}>
                        <p className="font-medium">
                            Information
                        </p>
                        <div className="mt-10">
                            <a href="" className={`${style.information} text-ct-neutral-04 font-extralight`}>About us</a> <br />
                            <a href="" className={`${style.information} text-ct-neutral-04 font-extralight`}>Contact us</a> <br />
                            <a href="" className={`${style.information} text-ct-neutral-04 font-extralight`}>Curriculum us</a> <br />
                            <a href="" className={`${style.information} text-ct-neutral-04 font-extralight`}>Privacy policy</a> <br />
                            <a href="" className={`${style.information} text-ct-neutral-04 font-extralight`}>Terms & condition</a>
                        </div>
                    </div>
                    <div className="w-1/4 px-5">
                        <p color="font-medium">
                            Media Gallery
                        </p>
                        <div className="flex">
                            <div className="p-2">
                                <Image
                                classNames={{
                                    image:`${style.image} w-full hover:opacity-70`,
                                    imageWrapper: 'w-full'}} 
                                radius={20}
                                className={` `}
                                src="/images/about-01.jpg"
                                width='80px'
                                height='80px'
                                alt="img"
                                />
                            </div>
                            <div className="p-2">
                                <Image
                                classNames={{
                                    image:`${style.image} w-full hover:opacity-70`,
                                    imageWrapper: 'w-full'}} 
                                radius={20}
                                className={` `}
                                src="/images/about-01.jpg"
                                width='80px'
                                height='80px'
                                alt="img"
                                />
                            </div>
                            <div className="p-2">
                                <Image
                                classNames={{
                                    image:`${style.image} w-full hover:opacity-70`,
                                    imageWrapper: 'w-full'}} 
                                radius={20}
                                className={` `}
                                src="/images/about-01.jpg"
                                width='80px'
                                height='80px'
                                alt="img"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="p-2">
                                <Image
                                classNames={{
                                    image:`${style.image} w-full hover:opacity-70`,
                                    imageWrapper: 'w-full'}} 
                                radius={20}
                                className={` `}
                                src="/images/about-01.jpg"
                                width='80px'
                                height='80px'
                                alt="img"
                                />
                            </div>
                            <div className="p-2">
                                <Image
                                classNames={{
                                    image:`${style.image} w-full hover:opacity-70`,
                                    imageWrapper: 'w-full'}} 
                                radius={20}
                                className={` `}
                                src="/images/about-01.jpg"
                                width='80px'
                                height='80px'
                                alt="img"
                                />
                            </div>
                            <div className="p-2">
                                <Image
                                classNames={{
                                    image:`${style.image} w-full hover:opacity-70`,
                                    imageWrapper: 'w-full'}} 
                                radius={20}
                                className={` `}
                                src="/images/about-01.jpg"
                                width='80px'
                                height='80px'
                                alt="img"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 px-5">
                        <div className="flex">
                            <a href="">
                                <Image
                                classNames={{
                                    image:`${style.image} w-full hover:opacity-70 rounded-full`,
                                    imageWrapper: 'w-full'}} 
                                radius={99999}
                                className={` `}
                                src="https://www.facebook.com/images/fb_icon_325x325.png"
                                width='40px'
                                alt="img"
                                />
                            </a>
                            <a href="">
                                <Image
                                classNames={{
                                    image:`${style.image} w-full hover:opacity-70 rounded-full`,
                                    imageWrapper: 'w-full'}} 
                                radius={99999}
                                className={` `}
                                src="https://www.stampaprint.net/es/blog/wp-content/uploads/2016/07/engage-twitter-nueva-app.png"
                                width='40px'
                                alt="img"
                                />
                            </a>
                            <a href="">
                                <Image
                                classNames={{
                                    image:`${style.image} w-full hover:opacity-70 rounded-full`,
                                    imageWrapper: 'w-full'}} 
                                radius={99999}
                                className={` `}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/640px-Google_%22G%22_Logo.svg.png"
                                width='40px'
                                alt="img"
                                />
                            </a>
                        </div>
                        <div>
                            <p className="text-ct-neutral-04 font-extralight">Monday – Friday:</p>
                            <p className="font-medium"> 09:00 AM – 06:00 PM</p>
                            <p className="text-ct-neutral-04 font-extralight">Saturday:</p>
                            <p className="font-medium"> 10:00 AM – 05:00 PM</p>
                        </div>
                    </div>
                </div>
                 <Image
                classNames={{image:'z-20'}} 
                className={` `}
                src="/images/footer-bg01.png"
                height="auto"
                alt="img"
                />
        </div>
};

export default Footer;
