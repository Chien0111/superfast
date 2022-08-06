import { Image } from "@mantine/core";
import style from "./style.module.css";
import { CallCalling,Location ,MessageNotif} from "iconsax-react";

const Office = () => {
    const data = [
        {
            img: '/images/Banner 11.jpg',
            title: 'Head office',
            location: 'Box 565, Pinneys Beach, Charlestown, Nevis, West Indies, Carib',
            phone: '+ 844 123 456 78 90',
            email: 'contact@example.com'
        },
        {
            img: '/images/Banner 11.jpg',
            title: 'Brand office',
            location: 'Box 565, Pinneys Beach, Charlestown, Nevis, West Indies, Carib',
            phone: '+ 844 123 456 78 90',
            email: 'contact@example.com'
        },
        {
            img: '/images/Banner 11.jpg',
            title: 'Brand office',
            location: 'Box 565, Pinneys Beach, Charlestown, Nevis, West Indies, Carib',
            phone: '+ 844 123 456 78 90',
            email: 'contact@example.com'
        },
    ]
    return <div>
        <div className="md:flex max-w-[1200px] m-auto">
            {data.map((item: any) => {
                return <ContentOffice data={item}/>
            })}
        </div>
    </div>;
};

const ContentOffice = ({ data }: any) => {
    return (
        <div className={`lg:w-1/3 m-10`}>
            <Image
            classNames={{image:`${style.image} w-full`,
            imageWrapper: 'w-full'}} 
            radius={15}
            className={`rounded-md `}
            src={data.img}
            width="full"
            height="auto"
            alt="img"
            />
            <div >
                <div className="">
                    <p className=" border-ct-neutral-03 border-b-2 border-dashed font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
                    {data.title}
                    </p>
                </div>
                <div className="mt-4 text-ct-neutral-05">
                    <p className="flex mt-2"> <Location size="30" className="mr-2"/>{data.location}</p>
                    <p className="flex mt-2"><CallCalling size="20" className="mr-2"/>{data.phone}</p>
                    <p className="flex mt-2"><MessageNotif className="mr-2"/>{data.email}</p>
                </div>
            </div>
        </div>
    )

}
export default Office;

