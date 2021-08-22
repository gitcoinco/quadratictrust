import { useContext } from "react";
import { UserContext } from "../lib/UserContext";
import { LoggedContext } from "../lib/LoggedContext";
import Head from "next/head";
import Search from "../components/search";
// import LeaderboardTime from "../components/leaderboard-time";
import LeaderboardHeader from "../components/leaderboard-header";
import LeaderboardUser from "../components/leaderboard-user";

export default function Home(data) {
  const [user] = useContext(UserContext);
  const [disabled] = useContext(LoggedContext);
  return (
    <div>
      <Head>
        <title>Quadratic Trust</title>
        <meta
          name="description"
          content="The trust you have earned can support people you trust"
        />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="canonical" href="https://quadratictrust.com" />
      </Head>
      <Search />
      <LeaderboardHeader />
      <LeaderboardUser data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://quadratictrust.com/api/users`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}
