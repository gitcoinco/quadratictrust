import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../lib/UserContext";
import { LoggedContext } from "../lib/LoggedContext";
import { CastContext } from "../lib/CastContext";
import { TwitterContext } from "../lib/TwitterContext";
import Layout from "../components/layout";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState();
  const [enabled, setEnabled] = useState();
  const [cast, setCast] = useState();
  const [twitterHandle, setTwitterHandle] = useState();
  const handleUser = async () => {
    const res = await fetch(`https://quadratictrust.com/api/identity`);
    const result = await res.json();
    setUser(result);
    if (result.username != null) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  useEffect(() => {
    setUser({ loading: true });
    handleUser();
    const handleRouteChange = (url) => {
      window.gtag("config", "G-EYNMLSETH4", { page_path: url });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <LoggedContext.Provider value={[enabled, setEnabled]}>
          <CastContext.Provider value={[cast, setCast]}>
            <TwitterContext.Provider value={[twitterHandle, setTwitterHandle]}>
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
            </TwitterContext.Provider>
          </CastContext.Provider>
        </LoggedContext.Provider>
      </UserContext.Provider>
    </>
  );
}
