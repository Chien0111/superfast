import BaseLayout from "../layout/base";
import HomeTeplate from "../Template/Home";

const Home = () => {
    return (
        <div>
            <HomeTeplate />
        </div>
    );
};
Home.Layout = BaseLayout;

export default Home;
