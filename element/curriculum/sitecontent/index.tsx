import { Image } from "@mantine/core";

const Sitecontent = () => {
  const data = [
    {
      img: "/images/beginner thumbnails.jpeg",
      name: "Beginners",
      year: "4-6",
      input: "Học sinh bắt đầu tiếp cận Tiếng Anh",
      output: "Beginners",
    },
    {
      img: "images/Starters - thumbnails.jpeg",
      name: "Starters",
      year: "6-8",
      input: "Beginners/học xong khóa Beginners",
      output: "Pre-A1",
    },
    {
      img: "/images/movers-thumbnails.png",
      name: "Movers",
      year: "8-10",
      input: "Pre-A1/ học xong khóa Starters",
      output: "CEFR A1",
    },
    {
      img: "/images/flyers-thumbnails.jpeg",
      name: "Flyers",
      year: "8-10",
      input: "A1/ học xong khóa Movers",
      output: "CEFR A2",
    },
  ];
  return (
    <div>
      <div className=" my-10 max-w-[1200px] m-auto">
        <div className="lg:flex ">
          {/* {data.map((item:any) => {
                    return <Content data={item}/>
                })} */}
          <Content data={data[0]} />
          <Content data={data[1]} />
        </div>
        <div className="lg:flex ">
          {/* {data.map((item:any) => {
                    return <Content data={item}/>
                })} */}
          <Content data={data[2]} />
          <Content data={data[3]} />
        </div>
      </div>
    </div>
  );
};

const Content = ({ data }: any) => {
  return (
    <div className="lg:1/2 ">
      <div className="w-full flex items-center ">
        <div className="w-[280px] items-center p-10 ">
          <div className="relative">
            <div className={`min-w-[200px] w-[200px] min-h-[200px] h-[200px]`}>
              <Image
                classNames={{ image: " hover:opacity-70" }}
                radius={9999}
                src={data.img}
                width="100%"
                height="100%"
                alt="img"
              />
            </div>
            <div className="absolute top-0 right-0 w-14 h-14  rounded-full bg-ct-secondary-02 text-center flex items-center text-ct-white">
              <div className="w-full text-xs p-2">
                <h5>{data.year}</h5>
                <span>Tuổi</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 ">
          <h3 className="text-2xl font-bold">{data.name}</h3> <br />
          <p>Đầu vào: {data.input}</p>
          <p>Đầu ra: {data.output}</p>
        </div>
      </div>
    </div>
  );
};

export default Sitecontent;
