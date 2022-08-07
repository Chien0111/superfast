import Subscribe from "../../components/Subscribe";
import { ArrowRight2, ArrowCircleRight2} from "iconsax-react";
import { Image } from "@mantine/core";
import Sitecontent from "../../element/curriculum/sitecontent";
import RegissTranTion from "../../element/curriculum/registration";

const CurriculumTemplate = () => {
    return (
        <div>
            <div className="text-center text-ct-white bg-indigo-900 py-16">
                <h1 className="font-bold text-6xl">Curriculum</h1>
                <p className="flex items-center justify-center m-4"><span>Home</span> <span><ArrowRight2 size="14"/></span> <span>Curriculum</span></p>
            </div>
            <Sitecontent/>
            <RegissTranTion/>
            <Subscribe />
        </div>
    );
};

export default CurriculumTemplate;
