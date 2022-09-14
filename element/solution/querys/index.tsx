import { Image } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import Block from "../../../components/Icon/Block";

const Querys = () => {
  const { type } = useRouter().query;
  const query = type?.toString();
  return (
    <div>
      <div className="max-w-[1200px] m-auto sm:py-10 p-6 sm:mb-8 md:px-16">
        <div className="sm:h-[166px] h-[176px] border-[3px] border-[#3DD1F7] rounded-3xl glowBorder flex flex-wrap">
          <Link href="/solution/beginners">
            <a
              className={`sm:w-1/4 w-1/2 relative flex justify-center items-center p-4 cursor-pointer ${
                query?.toLowerCase() === "beginners"
                  ? "text-ct-secondary-500"
                  : "text-ct-tertiary-500 hover:text-ct-tertiary-600"
              }`}
            >
              <Block className="text-inherit" />
              <h1 className="sm:Button-Desktop-Large Button-Desktop-Large1 text-ct-primary-100 absolute sm:top-[62px]">
                Beginners
              </h1>
            </a>
          </Link>
          <Link href="/solution/starters">
            <a
              className={`sm:w-1/4 w-1/2 relative flex justify-center items-center p-4 cursor-pointer ${
                query?.toLowerCase() === "starters"
                  ? "text-ct-secondary-500"
                  : "text-ct-tertiary-500 hover:text-ct-tertiary-600"
              }`}
            >
              <Block className="text-inherit" />
              <h1 className="sm:Button-Desktop-Large Button-Desktop-Large1 text-ct-primary-100 absolute sm:top-[62px]">
                Starters
              </h1>
            </a>
          </Link>
          <Link href="/solution/movers">
            <a
              className={`sm:w-1/4 w-1/2 relative flex justify-center items-center p-4 ${
                query?.toLowerCase() === "movers"
                  ? "text-ct-secondary-500"
                  : "text-ct-tertiary-500 hover:text-ct-tertiary-600"
              }`}
            >
              <Block className="text-inherit" />
              <h1 className="sm:Button-Desktop-Large Button-Desktop-Large1 text-ct-primary-100 absolute sm:top-[62px]">
                Movers
              </h1>
            </a>
          </Link>
          <Link href="/solution/flyers">
            <a
              className={`sm:w-1/4 w-1/2 relative flex justify-center items-center p-4 ${
                query?.toLowerCase() === "flyers"
                  ? "text-ct-secondary-500"
                  : "text-ct-tertiary-500 hover:text-ct-tertiary-600"
              }`}
            >
              <Block className="text-inherit" />
              <h1 className="sm:Button-Desktop-Large Button-Desktop-Large1 text-ct-primary-100 absolute sm:top-[62px]">
                Flyers
              </h1>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Querys;
