import { Image } from "@mantine/core";
import style from "./style.module.css";

const Office = () => {
    return <div>
        <div className="lg:flex p-10 ">
            <ContentOffice/>
            <p>fsdfsd</p>
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
            
        </div>
    )

}
export default Office;

