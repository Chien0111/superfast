import { MantineProvider } from "@mantine/core";
import DefaultLayout from "../layout/default";
import "../styles/globals.css";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const MyApp = ({ Component, pageProps }: any) => {
    const Layout = Component.Layout || DefaultLayout;

    return (
        <MantineProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MantineProvider>
    );
};
export default MyApp;
