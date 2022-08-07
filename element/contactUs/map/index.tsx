import dynamic from "next/dynamic";
const Map = dynamic(() => import("../../../components/Map"), { ssr: false });

const Mapcontact = () => {
  return (
    <div className="w-full h-[500px] p-10 max-w-[1200px] mx-auto">
      <Map />
    </div>
  );
};

export default Mapcontact;
