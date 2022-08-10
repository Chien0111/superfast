import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
