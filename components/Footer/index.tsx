import { Image } from "@mantine/core";
import style from "./style.module.css";

const Footer = () => {
    return <div>
                <div className="lg:flex px-5 pt-20 pb-5  border-b-2">
                    
                    <div className=" lg:w-1/3  p-5 lg:border-r-2 md:border-r-2">
                        <div className="w-full">
                        <Image
                        classNames={{
                            image:`${style.image} w-full hover:opacity-70 mb-4`,
                            imageWrapper: 'w-full'}} 
                        className={` `}
                        src="photo_2022.jpg"
                        width='300px'
                        height='auto'
                        alt="img"
                        />
                        <div>
                        <p className="font-medium">
                            <span className="font-bold">CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ DỊCH VỤ GIÁO DỤC</span> <br />
                        </p>
                        <p className="text-ct-solid-red-01 text-2xl font-bold py-3 w-full">MST: 0102183602</p>
                        <p className="text-ms">Địa chỉ: Số 40, phố Nguyên Hồng, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam </p>
                        </div>
                        </div>
                    </div>
                    <div className=" p-5 lg:border-r-2 md:border-r-2">
                            <div className="w-full">
                            <div className="flex items-center">
                                <Image
                                radius={9999}
                                classNames={{
                                    image:``,
                                    imageWrapper: 'w-full'}} 
                                className={`m-4 `}
                                src="images/Facebook_f_logo_(2019).svg.webp"
                                width='100px'
                                height='auto'
                                alt="img"
                                />
                                <p>Facebook: https://www.facebook.com/speakwell.icanconnect.vn</p>
                            </div>
                            <div className="flex items-center">
                                <Image
                                radius={9999}
                                classNames={{
                                    image:``,
                                    imageWrapper: 'w-full'}} 
                                className={` `}
                                src="images/youtube.png"
                                width='130px'
                                height='auto'
                                alt="img"
                                />
                                <p>Facebook: https://www.facebook.com/speakwell.icanconnect.vn</p>
                            </div>
                            </div>
                    </div>
                    <div className=" lg:w-1/3 p-5 lg:border-r-2 md:border-r-2">
                        <div className="p-5">
                        <p className="text-4xl font-bold py-3 w-full">HỖ TRỢ KHÁCH HÀNG</p>
                        <p className="text-ct-solid-red-01 text-2xl font-bold py-12 w-full">Hotline: 1900 9399</p>
                        </div>
                    </div>
                </div>
                 <Image
                classNames={{image:'z-20'}} 
                src="/images/footer-bg01.png"
                height="auto"
                alt="img"
                />
        </div>
};

export default Footer;
