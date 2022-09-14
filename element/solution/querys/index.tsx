import { Image } from "@mantine/core";
import { useRouter } from "next/router";

const Querys = () => {
  const { type } = useRouter().query;
  const query = type?.toString()
  return (
    <div>
      <div className="max-w-[1200px] m-auto sm:py-10 p-6 sm:mb-8 md:px-16">
        <div className="sm:h-[166px] h-[176px] border-[3px] border-[#3DD1F7] rounded-3xl glowBorder flex flex-wrap">
          <div
            className={`sm:w-1/4 w-1/2 relative flex justify-center items-center p-4 cursor-pointer`}
          >
            <Image
              src={
                query?.toLowerCase() == "beginners" ? "/images/bg002.png" : "/images/bg004.png"
              }
            />
            <h1 className="sm:Button-Desktop-Large Button-Desktop-Large1 text-ct-primary-100 absolute sm:top-[62px]">
              Beginners
            </h1>
          </div>
          <div
            className={`sm:w-1/4 w-1/2 relative flex justify-center items-center p-4 cursor-pointer`}
          >
            <Image
              src={
                query?.toLowerCase() == "starters" ? "/images/bg002.png" : "/images/bg004.png"
              }
            />
            <h1 className="sm:Button-Desktop-Large Button-Desktop-Large1 text-ct-primary-100 absolute sm:top-[62px]">
              Starters
            </h1>
          </div>
          <div
            className={`sm:w-1/4 w-1/2 relative flex justify-center items-center p-4`}
          >
            <Image
              src={
                query?.toLowerCase() == "movers" ? "/images/bg002.png" : "/images/bg004.png"
              }
            />
            <h1 className="sm:Button-Desktop-Large Button-Desktop-Large1 text-ct-primary-100 absolute sm:top-[62px]">
              Movers
            </h1>
          </div>
          <div
            className={`sm:w-1/4 w-1/2 relative flex justify-center items-center p-4`}
          >
            <Image
              src={
                query?.toLowerCase() == "flyers" ? "/images/bg002.png" : "/images/bg004.png"
              }
            />
            <h1 className="sm:Button-Desktop-Large Button-Desktop-Large1 text-ct-primary-100 absolute sm:top-[62px]">
              Flyers
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Querys;
