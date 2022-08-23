import { ArrowCircleRight2 } from "iconsax-react";
import { useState } from "react";
import ModalRegister from "../../../components/ModalRegister";
import { useCountdown } from "../../../hooks/useCoundown";

var today = new Date().getTime();
var countDownDate = new Date(today + 24 * 60 * 60 * 1000);

const Coundown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [days, hours, minutes, seconds] = useCountdown(
    countDownDate.toISOString()
  );
  return (
    <div className="lg:bg-[url(/images/countdown-bg.png)] bg-[url(/images/countdown-bg-mobile.png)] bg-cover pb-24 pt-14 w-full">
      <div className="lg:flex lg:ml-64 w-fit max-w-[1200px]">
        <div className="lg:w-[550px] w-full flex justify-center">
          <div>
            <p className="text-center text-ct-secondary-400 lg:Heading-Desktop-Heading2 Heading-Mobile-Heading6 uppercase">
              Đăng ký ngay
            </p>
            <h2 className="text-center font-bold text-white lg:Heading-Desktop-Heading2 Heading-Mobile-Heading6 uppercase">
              Tham gia trải nghiệm miễn phí Không nên bỏ lỡ
            </h2>
            <div className="flex justify-center lg:pt-8 pt-9">
              <div className="pr-2">
                <div
                  className="px-4 border-2 rounded-[13px] bg-[rgba(255, 255, 255, 0.2)]"
                  style={{ boxShadow: "0px 0px 8px rgba(153, 234, 255, 0.96)" }}
                >
                  <p className="text-center text-[30px] lg:text-[40px] font-bold text-white">
                    {days}
                  </p>
                </div>
                <p className="text-center font-bold text-white">Ngày</p>
              </div>
              <div className="pr-2">
                <div
                  className="px-4 border-2 rounded-[13px] bg-[rgba(255, 255, 255, 0.2)]"
                  style={{ boxShadow: "0px 0px 8px rgba(153, 234, 255, 0.96)" }}
                >
                  <p className="text-center text-[30px] lg:text-[40px] font-bold text-white">
                    {hours}
                  </p>
                </div>
                <p className="text-center font-bold text-white">Giờ</p>
              </div>
              <div className="pr-2">
                <div
                  className="px-4 border-2 rounded-[13px] bg-[rgba(255, 255, 255, 0.2)]"
                  style={{ boxShadow: "0px 0px 8px rgba(153, 234, 255, 0.96)" }}
                >
                  <p className="text-center text-[30px] lg:text-[40px] font-bold text-white">
                    {minutes}
                  </p>
                </div>
                <p className="text-center font-bold text-white">Phút</p>
              </div>
              <div>
                <div
                  className="px-4 border-2 rounded-[13px] bg-[rgba(255, 255, 255, 0.2)]"
                  style={{ boxShadow: "0px 0px 8px rgba(153, 234, 255, 0.96)" }}
                >
                  <p className="text-center text-[30px] lg:text-[40px] font-bold text-white">
                    {seconds}
                  </p>
                </div>
                <p className="text-center font-bold text-white">Giây</p>
              </div>
            </div>
            <div className="flex justify-center lg:pt-6 pt-9">
              <button
                className="bg-ct-tertiary-500 glow lg:w-[308px] w-[232px] lg:h-[60px] h-[47px] rounded-[50px] flex items-center justify-center"
                style={{
                  boxShadow: "0px 0px 15px 3px rgba(255, 255, 255, 0.5)",
                }}
                onClick={() => setIsOpen(true)}
              >
                <p className="text-ct-primary-400 lg:Button-Desktop-Large uppercase text-[18px] font-bold">
                  đăng ký ngay
                </p>
                <img
                  className="lg:w-[35px] w-[25px] pl-1 lg:pl-3"
                  src="/images/icon12.png"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 hidden"></div>
      </div>
      <ModalRegister
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default Coundown;
