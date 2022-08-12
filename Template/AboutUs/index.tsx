import { ArrowRight2 } from "iconsax-react";
import Subscribe from "../../components/Subscribe";
import Academic from "../../element/aboutUs/Academic";
import Anlysis from "../../element/aboutUs/Analysis";
import GetInTouch from "../../element/aboutUs/GetInTouch";
import Stoty from "../../element/aboutUs/Story";
import Galery from "../../element/home/Galery";

const AboutUsTemplate = () => {
  return (
    <div>
      <div className="text-center text-ct-white bg-pink-500 py-16">
        <h1 className="font-bold text-6xl">About us</h1>
        <p className="flex items-center justify-center m-4">
          <span>Home</span>{" "}
          <span>
            <ArrowRight2 size="14" />
          </span>{" "}
          <span>About us</span>
        </p>
      </div>
      <Stoty />
      <div>
        <Academic />
      </div>
      <Anlysis />
      <Galery />
      <GetInTouch />
      <Subscribe />
    </div>
  );
};

export default AboutUsTemplate;
