import { IconProps } from "./index.type";

const Check = ({ className }: IconProps) => {
  return (
    <div className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-check"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>{" "}
    </div>
  );
};

export default Check;

