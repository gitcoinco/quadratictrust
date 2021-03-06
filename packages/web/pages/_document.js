import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta content="" name="yandex-verification" />
          <meta content="" name="google-site-verification" />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          <link href="favicons/site.webmanifest" rel="manifest" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://pbs.twimg.com" crossOrigin="" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600&family=Karla:wght@400;700&display=swap"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600&family=Karla:wght@400;700&display=swap"
            rel="stylesheet"
            media="print"
            onLoad="this.media='all'"
          />
          <link
            href="/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#5fffff"
            href="/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-EYNMLSETH4`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EYNMLSETH4', {
              page_path: window.location.pathname,
            });
          `,
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

export default MyDocument;
