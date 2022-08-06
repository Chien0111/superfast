import { ArrowCircleRight2} from "iconsax-react";

const Subscribe = () => {
    return <div className="w-full h-auto bg-ct-solid-red-01 p-10">
        <div className="flex items-center justify-between">
            <div className="w-1/3'"><h1 className="text-ct-white font-bold text-4xl">Sign up for newsletter</h1></div>
            <div className="w-2/3">
                <div className="flex p-6 w-full"> 
                    <input type="text" placeholder="Enter your e-mail ..." className="w-full p-6 rounded-l-lg"/>
                    <button className="bg-ct-white p-6 hover:text-ct-secondary-02 font-semibold rounded-r-lg"> Subscribe <span><ArrowCircleRight2 size="32" /></span></button>
                </div>
            </div>
                {/* <img src="http://demo2.themelexus.com/kindero/wp-content/uploads/2019/12/footer-bg2.png" alt="" /> */}
        </div>
    </div>;
};

export default Subscribe;
