import { Input } from "@mantine/core";
import { ArrowCircleRight2} from "iconsax-react";

const Subscribe = () => {
    return <div className="w-full h-auto bg-ct-solid-red-01 p-10 ">
        <div className="lg:flex flex-wrap text-center items-center justify-between max-w-[1200px] m-auto">
            <div className="lg:w-1/3 w-full'"><h1 className="text-ct-white font-bold text-4xl">Sign up for newsletter</h1></div>
            <div className="lg:w-2/3 w-full">
                <div className="flex p-6 w-full"> 
                    <Input
                    classNames={{
                        input: 'w-full h-full p-6 rounded-l-lg rounded-r-none border-none',
                        wrapper : 'border-none w-full'
                    }}
                    placeholder="Enter your e-mail ..."
                    />
                    {/* <input type="text" placeholder="Enter your e-mail ..." className="w-full p-6 rounded-l-lg"/> */}
                    <button className="bg-ct-white p-6 hover:text-ct-secondary-02 font-semibold rounded-r-lg flex justify-center items-center"> 
                        <span>
                            Subscribe 
                            <div className="flex justify-center">
                            <ArrowCircleRight2 size="32" />
                            </div>
                        </span>
                    </button>
                </div>
            </div>
                {/* <img src="http://demo2.themelexus.com/kindero/wp-content/uploads/2019/12/footer-bg2.png" alt="" /> */}
        </div>
    </div>;
};

export default Subscribe;
