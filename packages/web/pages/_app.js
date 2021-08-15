import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import { UserContext } from "../lib/UserContext";
import Layout from "../components/layout";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  const handleUser = async () => {
    const res = await fetch(`https://quadratictrust.com/api/identity`);
    const result = await res.json();
    setUser(result);
  };
  useEffect(() => {
    setUser({ loading: true });
    handleUser();
    if (user == { username: null }) {
      Router.push("/");
    }
  }, []);
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Layout>
          <Head>
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
          </Head>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </>
  );
}
