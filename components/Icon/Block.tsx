import { IconProps } from "./index.type";

const Block = ({ className, width = 206, height = 81 }: IconProps) => {
  return (
    <div className={`${className}`}>
      <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 206 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.3884 1L35.9553 7H9C4.58172 7 1 10.5817 1 15V66C1 70.4183 4.58172 74 9 74H128.625L136.5 80H166.5L174.75 74H197C201.418 74 205 70.4183 205 66V15C205 10.5817 201.418 7 197 7H84.2699L77.1748 1H43.3884Z"
          fill="currentColor"
        />
        <path
          d="M35.9553 7V8H36.3086L36.5835 7.77812L35.9553 7ZM43.3884 1V0H43.0351L42.7602 0.221875L43.3884 1ZM128.625 74L129.231 73.2046L128.963 73H128.625V74ZM136.5 80L135.894 80.7954L136.162 81H136.5V80ZM166.5 80V81H166.825L167.088 80.8087L166.5 80ZM174.75 74V73H174.425L174.162 73.1913L174.75 74ZM84.2699 7L83.6242 7.76358L83.9038 8H84.2699V7ZM77.1748 1L77.8205 0.236423L77.5409 0H77.1748V1ZM36.5835 7.77812L44.0165 1.77812L42.7602 0.221875L35.3272 6.22188L36.5835 7.77812ZM9 8H35.9553V6H9V8ZM2 15C2 11.134 5.13401 8 9 8V6C4.02944 6 0 10.0294 0 15H2ZM2 66V15H0V66H2ZM9 73C5.13401 73 2 69.866 2 66H0C0 70.9706 4.02944 75 9 75V73ZM128.625 73H9V75H128.625V73ZM128.019 74.7954L135.894 80.7954L137.106 79.2046L129.231 73.2046L128.019 74.7954ZM136.5 81H166.5V79H136.5V81ZM167.088 80.8087L175.338 74.8087L174.162 73.1913L165.912 79.1913L167.088 80.8087ZM197 73H174.75V75H197V73ZM204 66C204 69.866 200.866 73 197 73V75C201.971 75 206 70.9706 206 66H204ZM204 15V66H206V15H204ZM197 8C200.866 8 204 11.134 204 15H206C206 10.0294 201.971 6 197 6V8ZM84.2699 8H197V6H84.2699V8ZM76.529 1.76358L83.6242 7.76358L84.9156 6.23642L77.8205 0.236423L76.529 1.76358ZM43.3884 2H77.1748V0H43.3884V2Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Block;
