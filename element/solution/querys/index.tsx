import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Block from "../../../components/Icon/Block";
import { useIsMobile } from "../../../hooks/useIsMobile";

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
  const isMobile = useIsMobile();
  const [size, setSize] = useState({
    width: 206,
    height: 81,
  });

  useEffect(() => {
    if (isMobile) {
      setSize({
        width: 140,
        height: 60,
      });
    } else {
      setSize({
        width: 206,
        height: 81,
      });
    }
  }, [isMobile]);

  return (
    <div>
      <div className="max-w-[1200px] m-auto sm:py-10 p-6 sm:mb-8 md:px-16">
        <div className="sm:h-[166px] h-[176px] border-[3px] border-[#3DD1F7] rounded-3xl glowBorder flex justify-center items-center flex-wrap">
          <div className="flex justify-center items-center flex-wrap">
            {data.map((item: any, index) => {
              return (
                <div key={index}>
                  <Link href={item.href}>
                    <a
                      className={`relative flex justify-center items-center pb-0 lg:pb-4 p-4 cursor-pointer ${
                        query?.toLowerCase() === item.name.toLowerCase()
                          ? "text-ct-secondary-500"
                          : "text-ct-tertiary-500 hover:text-ct-tertiary-600"
                      }`}
                    >
                      <Block
                        className="text-inherit"
                        width={size.width}
                        height={size.height}
                      />
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
