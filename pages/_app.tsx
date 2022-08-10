import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useDebouncedValue, useWindowScroll } from "@mantine/hooks";
import { ArrowUp2 } from "iconsax-react";
import dayjs from "dayjs";
import "dayjs/locale/vi";

import DefaultLayout from "../layout/default";
import "../styles/globals.css";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TrackerProvider, { TrackerContext } from "../Context/trackerContext";
import { useContext, useEffect } from "react";

dayjs.locale("vi"); // use locale globally
dayjs().locale("vi").format();

const MyApp = ({ Component, pageProps }: any) => {
  const Layout = Component.Layout || DefaultLayout;
  const [scroll, scrollTo] = useWindowScroll();
  const [debounced] = useDebouncedValue(scroll, 50);

  const { initTracker, startTracking } = useContext(TrackerContext);

  useEffect(() => {
    initTracker();
    startTracking();
  }, []);

  return (
    <MantineProvider>
      <TrackerProvider>
        <NotificationsProvider position="top-right" zIndex={2077}>
          <Layout>
            <Component {...pageProps} />
            <div
              onClick={() => scrollTo({ y: 0 })}
              className={`transition-all z-50 ${
                debounced.y >= 100 ? "w-12 h-12 opacity-1" : "w-0 h-0 opacity-0"
              } flex justify-center items-center bg-ct-secondary-02 rounded-md fixed bottom-10 right-10`}
            >
              <ArrowUp2 size="24" color="#fff" variant="Outline" />
            </div>
          </Layout>
        </NotificationsProvider>
      </TrackerProvider>
    </MantineProvider>
  );
};
export function getStaticProp() {
  return {
    props: {
      projectKey: process.env.OPENREPLAY_PROJECT_KEY,
    },
  };
}
export default MyApp;
