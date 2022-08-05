import { Image } from "@mantine/core";
const Galery = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-wrap">
      <div className="w-1/2 grow p-4">
        <Image
          className="rounded-sm overflow-hidden"
          src="/images/gallery1.jpg"
          width="100%"
          height="100%"
          alt="galery"
        />
      </div>
      <div className="min-w-[450px] grow w-1/2 flex flex-wrap justify-between">
        <div className="p-4 w-1/2 h-1/2 ">
          <Image
            className="w-full h-full rounded-sm overflow-hidden"
            src="/images/gallery1.jpg"
            width="100%"
            height="100%"
            alt="galery"
          />
        </div>
        <div className="p-4 w-1/2 h-1/2 ">
          <Image
            className="w-full h-full rounded-sm overflow-hidden"
            src="/images/gallery1.jpg"
            width="100%"
            height="100%"
            alt="galery"
          />
        </div>
        <div className="p-4 w-1/2 h-1/2 ">
          <Image
            className="w-full h-full rounded-sm overflow-hidden"
            src="/images/gallery1.jpg"
            width="100%"
            height="100%"
            alt="galery"
          />
        </div>
        <div className="p-4 w-1/2 h-1/2 ">
          <Image
            className="w-full h-full rounded-sm overflow-hidden"
            src="/images/gallery1.jpg"
            width="100%"
            height="100%"
            alt="galery"
          />
        </div>
      </div>
    </div>
  );
};

export default Galery;
