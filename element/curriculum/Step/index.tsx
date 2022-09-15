import { useIsMobile } from "../../../hooks/useIsMobile";
import StepDesktop from "../../../modecules/Solution/Step/Desktop";
import StepMobile from "../../../modecules/Solution/Step/Mobile";

const Step = () => {
  const isMobile = useIsMobile();
  return (
    <div className="bg-[url(/images/solution/bg_solution.png)] bg-cover">
      {!isMobile ? <StepDesktop /> : <StepMobile />}
    </div>
  );
};

export default Step;
