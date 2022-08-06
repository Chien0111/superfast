import { ArrowCircleRight2 } from "iconsax-react";
import { useCountdown } from "../../../hooks/useCoundown";

var today = new Date().getTime();
var countDownDate = new Date(today + 30 * 24 * 60 * 60 * 1000);

const Coundown = () => {
  const [days, hours, minutes, seconds] = useCountdown(
    countDownDate.toISOString()
  );
  return (
    <div className="bg-[url(/images/coundown_bg.jpg)] bg-cover py-20">
      <div className="bg-[url(/images/coundown.png)] bg-no-repeat bg-center py-10">
        <div className="w-fit mx-auto">
          <p className="text-center font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
            Registration
          </p>
          <h2 className="text-center font-bold text-[40px] mb-4 text-ct-neutral-01">
            Join to experience <br /> free right now
          </h2>
          <div className="flex justify-center">
            <div className="px-4">
              <p className="text-center text-[40px] font-bold text-ct-secondary-02">
                {days}
              </p>
              <p className="text-center font-bold text-ct-neutral-01">Days</p>
            </div>
            <div className="px-4">
              <p className="text-center text-[40px] font-bold text-ct-secondary-02">
                {hours}
              </p>
              <p className="text-center font-bold text-ct-neutral-01">Hours</p>
            </div>
            <div className="px-4">
              <p className="text-center text-[40px] font-bold text-ct-secondary-02">
                {minutes}
              </p>
              <p className="text-center font-bold text-ct-neutral-01">
                minutes
              </p>
            </div>
            <div className="px-4">
              <p className="text-center text-[40px] font-bold text-ct-secondary-02">
                {seconds}
              </p>
              <p className="text-center font-bold text-ct-neutral-01">
                seconds
              </p>
            </div>
          </div>
          <div className="rounded-md p-2 px-4 mt-4 mx-auto w-fit bg-ct-secondary-02 text-ct-neutral-01">
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
    </div>
  );
};

export default Coundown;
