import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}
