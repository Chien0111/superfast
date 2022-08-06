import { Image } from "@mantine/core";
import style from "./style.module.css";
import { CallCalling,Location ,MessageNotif} from "iconsax-react";

const Office = () => {
    return <div>
        <div className="md:flex">
            <ContentOffice/>
            <ContentOffice/>
            <ContentOffice/>
        </div>
    </div>;
};

const ContentOffice = () => {
    return (
        <div className={`lg:w-1/3 m-10`}>
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
            <div >
                <div className="">
                    <p className=" border-ct-neutral-03 border-b-2 border-dashed font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
                    Head office
                    </p>
                </div>
                <div className="mt-4 text-ct-neutral-05">
                    <p className="flex mt-2"> <Location size="30" className="mr-2"/>Box 565, Pinney's Beach, Charlestown, Nevis, West Indies, Carib</p>
                    <p className="flex mt-2"><CallCalling size="20" className="mr-2"/>+ 844 123 456 78 90</p>
                    <p className="flex mt-2"><MessageNotif className="mr-2"/>contact@example.com</p>
                </div>
            </div>
        </div>
    )

}
export default Office;

