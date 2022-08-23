import dynamic from "next/dynamic";
import Subscribe from "../../components/Subscribe";
import CoreValue from "../../element/home/CoreValue";
import Courses from "../../element/home/Courses";
import Introduce from "../../element/home/Introduce";
import OurStaff from "../../element/home/OurStaff";
import Slider from "../../element/home/Slider";
const Coundown = dynamic(() => import("../../element/home/Coundown"), {
  ssr: false,
});
const HomeTemplate = () => {
  return (
    <div>
      <Slider />
      <Introduce />
      <Courses />
      <CoreValue />
      <OurStaff />
      {/* <Feedback /> */}
      {/* <Curriculum /> */}
      {/* <Contact /> */}
      {/* <Galery /> */}
      <Coundown />
      {/* <Blog /> */}
      <Subscribe />
    </div>
  );
};

export default HomeTemplate;
