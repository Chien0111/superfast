import React from "react";
import Subscribe from "../../components/Subscribe";
import Blog from "../../element/home/Blog";
import CoreValue from "../../element/home/CoreValue";
import Coundown from "../../element/home/Coundown";
import Courses from "../../element/home/Courses";
import Curriculum from "../../element/home/Curriculum";
import Feedback from "../../element/home/Feedback";
import Galery from "../../element/home/Galery";
import Introduce from "../../element/home/Introduce";
import OurStaff from "../../element/home/OurStaff";
import Slider from "../../element/home/Slider";

const HomeTemplate = () => {
    return (
        <div>
            <Slider />
            <Introduce />
            <Courses />
            <CoreValue />
            <OurStaff />
            <Feedback />
            <Curriculum />
            <Galery />
            <Coundown />
            <Blog />
            <Subscribe />
        </div>
    );
};

export default HomeTemplate;
