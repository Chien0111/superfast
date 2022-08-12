import BaseLayout from "../layout/base";
import HomeTemplate from "../Template/Home";

const Home = () => {
  return (
    <div>
      <HomeTemplate />
    </div>
  );
};
Home.Layout = BaseLayout;

export default Home;

