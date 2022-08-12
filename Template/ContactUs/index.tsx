import { ArrowRight2 } from "iconsax-react";
import GetinTouch from "../../element/contactUs/mail";
import Mapcontact from "../../element/contactUs/map";
import Office from "../../element/contactUs/office";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-ct-white bg-pink-500  py-16">
        <h1 className="font-bold text-6xl">Liên hệ</h1>
        <p className="flex items-center justify-center m-4">
          <span>Trang chủ</span>{" "}
          <span className="mx-2">
            <ArrowRight2 size="14" />
          </span>{" "}
          <span>Liên hệ</span>
        </p>
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
