import { Image } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { it } from "node:test";
import Block from "../../../components/Icon/Block";

const Querys = () => {
  const data = [
    {
      name: "Beginners",
      href: "/solution/beginners",
    },
    {
      name: "Starters",
      href: "/solution/starters",
    },
    {
      name: "Movers",
      href: "/solution/movers",
    },
    {
      name: "Flyers",
      href: "/solution/flyers",
    },
  ];
  const { type } = useRouter().query;
  const query = type?.toString();
  return (
    <div>
      <div className="max-w-[1200px] m-auto sm:py-10 p-6 sm:mb-8 md:px-16">
        <div className="sm:h-[166px] h-[176px] border-[3px] border-[#3DD1F7] rounded-3xl glowBorder flex flex-wrap">
          <div className="flex justify-center items-center">
            {data.map((item: any) => {
              return (
                <div>
                  <Link href={item.href}>
                    <a
                      className={`sm:w-1/4 w-1/2 relative flex justify-center items-center p-4 cursor-pointer ${
                        query?.toLowerCase() === item.name.toLowerCase()
                          ? "text-ct-secondary-500"
                          : "text-ct-tertiary-500 hover:text-ct-tertiary-600"
                      }`}
                    >
                      <Block className="text-inherit" />
                      <h1 className="sm:Button-Desktop-Large Button-Desktop-Large1 text-ct-primary-100 absolute sm:top-[42px]">
                        {item.name}
                      </h1>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Querys;
