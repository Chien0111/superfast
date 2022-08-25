import { MantineProvider } from "@mantine/core";
import { useDebouncedValue, useWindowScroll } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { ArrowUp2 } from "iconsax-react";

import DefaultLayout from "../layout/default";
import "../styles/globals.css";

import { NextSeo } from "next-seo";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TrackerProvider from "../Context/trackerContext";
import TrackerLayer from "../layout/Tracker";

dayjs.locale("vi"); // use locale globally
dayjs().locale("vi").format();

const MyApp = ({ Component, pageProps }: any) => {
  const Layout = Component.Layout || DefaultLayout;
  const [scroll, scrollTo] = useWindowScroll();
  const [debounced] = useDebouncedValue(scroll, 50);

  return (
    <MantineProvider>
      <TrackerProvider>
        <NotificationsProvider position="top-right" zIndex={2077}>
          <Layout>
            <NextSeo
              title="Giải pháp học Tiếng Anh trực tuyến hàng đầu Việt Nam"
              description="Giải pháp học Tiếng Anh trực tuyến hàng đầu Việt Nam"
              openGraph={{
                type: "website",
                title: "Giải pháp học Tiếng Anh trực tuyến hàng đầu Việt Nam",
                description:
                  "Giải pháp học Tiếng Anh trực tuyến hàng đầu Việt Nam",
                images: [
                  {
                    url: "https://apikong.hocmaidev.tk/resource/uploads/image/b6fcd8c6-e56a-4317-826b-b5c8b0b7adb8.png",
                    width: 800,
                    height: 600,
                    alt: "Logo SpeakWell Alt",
                  },
                ],
              }}
            />
            <TrackerLayer>
              <Component {...pageProps} />
            </TrackerLayer>
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
