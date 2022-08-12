import { ArrowRight2 } from "iconsax-react";
import Subscribe from "../../components/Subscribe";
import RegissTranTion from "../../element/curriculum/registration";
import Sitecontent from "../../element/curriculum/sitecontent";

const CurriculumTemplate = () => {
  return (
    <div>
      <div className="text-center text-ct-white bg-indigo-900 py-16">
        <h1 className="font-bold text-6xl">Chương trình</h1>
        <p className="flex items-center justify-center m-4">
          <span>Trang chủ</span>{" "}
          <span className="mx-2">
            <ArrowRight2 size="14" />
          </span>{" "}
          <span>Chương trình</span>
        </p>
      </div>
      <Sitecontent />
      <RegissTranTion />
      <Subscribe />
    </div>
  );
};

export default CurriculumTemplate;
