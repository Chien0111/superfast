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
    <div className="bg-[url(/images/coundown_bg.jpg)] bg-cover py-20">
      <div className="bg-[url(/images/coundown.png)] bg-no-repeat bg-center py-10">
        <div className="w-fit mx-auto">
          <p className="text-center font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Đăng ký ngay
          </p>
          <h2 className="text-center font-bold text-[40px] mb-4 text-ct-neutral-01">
            Tham gia trải nghiệm miễn phí <br /> Không nên bỏ lỡ
          </h2>
          <div className="flex justify-center">
            <div className="px-4">
              <p className="text-center text-[40px] font-bold text-ct-secondary-02">
                {days}
              </p>
              <p className="text-center font-bold text-ct-neutral-01">Ngày</p>
            </div>
            <div className="px-4">
              <p className="text-center text-[40px] font-bold text-ct-secondary-02">
                {hours}
              </p>
              <p className="text-center font-bold text-ct-neutral-01">Giờ</p>
            </div>
            <div className="px-4">
              <p className="text-center text-[40px] font-bold text-ct-secondary-02">
                {minutes}
              </p>
              <p className="text-center font-bold text-ct-neutral-01">phút</p>
            </div>
            <div className="px-4">
              <p className="text-center text-[40px] font-bold text-ct-secondary-02">
                {seconds}
              </p>
              <p className="text-center font-bold text-ct-neutral-01">giây</p>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="rounded-md p-2 px-4 mt-4 mx-auto w-fit bg-ct-secondary-02 text-ct-neutral-01 cursor-pointer"
          >
            <p className="inline mr-4"> Đăng ký ngay</p>
            <ArrowCircleRight2
              className="inline"
              size="20"
              color="currentColor"
              variant="Bold"
            />
          </div>
        </div>
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
