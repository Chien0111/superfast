import Footer from "../../components/Footer";
import Header from "../../components/Header";

const BaseLayout = ({ children }: any) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default BaseLayout;
