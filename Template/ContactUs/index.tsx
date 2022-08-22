import { ArrowRight2 } from "iconsax-react";
import GetinTouch from "../../element/contactUs/mail";
import Mapcontact from "../../element/contactUs/map";
import Office from "../../element/contactUs/office";

const Contact = () => {
  return (
    <div>
      <div className="text-center lg:bg-[url(/images/contact-bg-desktop.png)] bg-[url(/images/contact-bg.png)] text-ct-secondary-500 bg-cover lg:py-10 py-2">
        <h1 className="lg:Heading-Desktop-Heading1 Heading-Mobile-Heading4 uppercase">
          Liên hệ
        </h1>
      </div>
      <div className="max-w-[1200px] m-auto mb-6">
        <Mapcontact />
      </div>
      <Office />
      <GetinTouch />
    </div>
  );
};

export default Contact;
