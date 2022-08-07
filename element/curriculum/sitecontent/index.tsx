import { ArrowRight2, ArrowCircleRight2} from "iconsax-react";
import { Image } from "@mantine/core";

const Sitecontent = () => {
    const data = [
        {
            img: '/images/blog-1.jpg',
            name: 'Junior',
            year: '3.5-5',
            text: 'This program is available for all children enrolled in elementary'
        },
        {
            img: 'images/blog-1.jpg',
            name: 'Chien',
            year: '3.5-5',
            text: 'This program is available for all children enrolled in elementary'
        },
        {
            img: '/images/blog-1.jpg',
            name: 'Hung',
            year: '3.5-5',
            text: 'This program is available for all children enrolled in elementary'
        },
        {
            img: '/images/blog-1.jpg',
            name: 'Junior',
            year: '3.5-5',
            text: 'This program is available for all children enrolled in elementary'
        },
    ]
    return <div>
        <div className=" my-10 max-w-[1200px] m-auto">
            <div className="lg:flex ">
                {/* {data.map((item:any) => {
                    return <Content data={item}/>
                })} */}
                <Content data={data[0]}/>
                <Content data={data[1]}/>
            </div>
            <div className="lg:flex ">
                {/* {data.map((item:any) => {
                    return <Content data={item}/>
                })} */}
                <Content data={data[2]}/>
                <Content data={data[3]}/>
            </div>
        </div>
    </div>;
};

const Content = ({data}:any) => {
    return <div className="lg:1/2 ">
    <div className="w-full flex items-center ">
    <div className="w-[280px] items-center p-10 ">
        <div className="relative ">
            <div className={`w-[200px] h-[200px]`}>
                <Image
                classNames={{image:' hover:opacity-70'}} 
                radius={9999}
                src={data.img}
                width="100%"
                height="100%"
                alt="img"
                />
            </div>
            <div className="absolute top-0 right-0 w-14 h-14  rounded-full bg-ct-secondary-02 text-center flex items-center text-ct-white">
                <div className="w-full text-xs p-2">
                    <h5>{data.years}</h5> 
                    <span>YEARS</span>
                </div>
            </div>
        </div>
    </div>
    <div className="p-6 ">
        <h3 className="text-2xl font-bold">{data.name}</h3> <br />
        <p>{data.text}</p>
    </div>
    </div>
</div>
}

export default Sitecontent;