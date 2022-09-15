import React from "react";
import dynamic from "next/dynamic";

import Subscribe from "../../components/Subscribe";
import Step from "../../element/solution/Step";
const Coundown = dynamic(() => import("../../element/home/Coundown"), {
  ssr: false,
});

const SolutionTemplate = () => {
  return (
    <>
      <div className="text-center lg:bg-[url(/images/contact-bg-desktop.png)] bg-[url(/images/contact-bg.png)] text-ct-secondary-500 bg-cover lg:py-10 py-2">
        <h1 className="lg:Heading-Desktop-Heading1 Heading-Mobile-Heading4 uppercase">
          GIẢI PHÁP HỌC TIẾNG ANH
        </h1>
      </div>
      <Step />
      <Coundown />
      <Subscribe />
    </>
  );
};

export default SolutionTemplate;
