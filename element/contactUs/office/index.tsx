import { CallCalling, Location } from "iconsax-react";
import Link from "next/link";

const Office = () => {
  const data = [
    {
      img: "/images/Banner 11.jpg",
      title: "Trụ sở chính",
      location:
        "59 Xa lộ Hà Nội, phường Thảo Điền, thành phố Thủ Đức, thành phố Hồ Chí Minh",
      phone: "1900 9399",
      email: "contact@example.com",
    },
    {
      img: "/images/Banner 11.jpg",
      title: "Văn phòng Hà Nội",
      location:
        "Tòa nhà 25T2 Nguyễn Thị Thập, phường Trung Hòa, quận Cầu Giấy, thành phố Hà Nội",
      phone: "1900 9399",
      email: "contact@example.com",
    },
    {
      img: "/images/Banner 11.jpg",
      title: "Văn phòng Hồ Chí Minh",
      location:
        "B002 - B0003, 62 Hoàng Thế Thiện, Khu đô thị Sala, thành phố Thủ Đức, thành phố Hồ Chí Minh",
      phone: "1900 9399",
      email: "contact@example.com",
    },
  ];
  return (
    <div>
      <div className="md:flex max-w-[1200px] m-auto">
        {data.map((item: any, index: number) => {
          return <ContentOffice key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

const ContentOffice = ({ data }: any) => {
  return (
    <div className={`lg:w-1/3 m-10`}>
      {/* <Image
        classNames={{ image: `${style.image} w-full`, imageWrapper: "w-full" }}
        radius={15}
        className={`rounded-md `}
        src={data.img}
        width="full"
        height="auto"
        alt="img"
      /> */}
      <div>
        <div className="lg:mt-0 pt-6">
          <p className=" border-ct-neutral-03 lg:text-left text-center lg:Heading-Desktop-Heading3 text-ct-secondary-500 text-[16px] ">
            {data.title}
          </p>
        </div>
        <div className="mt-4 text-ct-neutral-05">
          <p className="flex mt-2">
            {" "}
            <Location
              size="20"
              className="mr-2 text-ct-tertiary-1000 w-[55px]"
              color="currentColor"
            />
            <span className="text-ct-primary-500 lg:text-[20px] text-justify">
              {data.location}
            </span>
          </p>
          <Link href={`tel:${data.phone}`}>
            <a className="flex mt-2">
              <CallCalling
                size="20"
                className="mr-2 text-ct-tertiary-1000"
                color="currentColor"
              />
              <span className="text-ct-primary-500 lg:text-[20px] text-justify">
                {data.phone}
              </span>
            </a>
          </Link>
          {/* <p className="flex mt-2">
            <MessageNotif className="mr-2" />
            {data.email}
          </p> */}
        </div>
      </div>
    </div>
  );
};
export default Office;
