import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useDebouncedValue, useWindowScroll } from "@mantine/hooks";
import { ArrowUp2 } from "iconsax-react";
import DefaultLayout from "../layout/default";
import "../styles/globals.css";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const MyApp = ({ Component, pageProps }: any) => {
  const Layout = Component.Layout || DefaultLayout;
  const [scroll, scrollTo] = useWindowScroll();
  const [debounced] = useDebouncedValue(scroll, 50);

  return (
    <MantineProvider>
      <NotificationsProvider position="top-right" zIndex={2077}>
        <Layout>
          <Component {...pageProps} />
          <div
            onClick={() => scrollTo({ y: 0 })}
            className={`transition-all ${
              debounced.y >= 100 ? "w-12 h-12 opacity-1" : "w-0 h-0 opacity-0"
            } flex justify-center items-center bg-ct-secondary-02 rounded-md fixed bottom-10 right-10`}
          >
            <ArrowUp2 size="24" color="#fff" variant="Outline" />
          </div>
        </Layout>
      </NotificationsProvider>
    </MantineProvider>
  );
};
export default MyApp;
