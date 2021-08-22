import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../lib/UserContext";
import { LoggedContext } from "../lib/LoggedContext";
import { CheckoutContext } from "../lib/CheckoutContext";
import Layout from "../components/layout";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState();
  const [disabled, setDisabled] = useState();
  const [checkout, setCheckout] = useState(false);
  const handleUser = async () => {
    const res = await fetch(`https://quadratictrust.com/api/identity`);
    const result = await res.json();
    setUser(result);
    if (user == { username: null }) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  useEffect(() => {
    setUser({ loading: true });
    handleUser();
    if (user == { username: null }) {
      Router.push("/");
    }
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
        <LoggedContext.Provider value={[disabled, setDisabled]}>
          <CheckoutContext.Provider value={[checkout, setCheckout]}>
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
          </CheckoutContext.Provider>
        </LoggedContext.Provider>
      </UserContext.Provider>
    </>
  );
}
