import { useIsMobile } from "../../../hooks/useIsMobile";
import StepDesktop from "../../../modecules/Solution/Step/Desktop";
import StepMobile from "../../../modecules/Solution/Step/Mobile";

const Step = () => {
  const isMobile = useIsMobile();
  console.log(isMobile);
  return (
    <div className="bg-[url(/images/solution/bg_solution.png)] bg-cover">
      {isMobile ? <StepMobile /> : <StepDesktop />}
    </div>
  );
};

export default Step;
