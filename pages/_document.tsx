import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/logo_square.png" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>Giải pháp học Tiếng Anh trực tuyến hàng đầu Việt Nam</title>
          <NextSeo
            openGraph={{
              type: "website",
              title: "Giải pháp học Tiếng Anh trực tuyến hàng đầu Việt Nam",
              description:
                "Giải pháp học Tiếng Anh trực tuyến hàng đầu Việt Nam",
              images: [
                {
                  url: "/logo_square.png",
                  width: 800,
                  height: 600,
                  alt: "Logo SpeakWell Alt",
                },
              ],
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
