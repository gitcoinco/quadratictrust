import Head from "next/head";
import Search from "../components/search";
// import LeaderboardTime from "../components/leaderboard-time";
import LeaderboardHeader from "../components/leaderboard-header";
import LeaderboardUser from "../components/leaderboard-user";

export default function Home(data) {
  return (
    <div>
      <Search />
      <LeaderboardHeader />
      <LeaderboardUser data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://quadratictrust.com/api/users`);
  const data = await res.json();
  // const users = data.users;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
