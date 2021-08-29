import UserCard from "../components/user-card";

export default function Leaderboard(props) {
  const users = props.data.data.users;
  return (
    <>
      {users.map((user) => (
        <div key={user.username}>
          <UserCard user={user} />
          <div>
            {user.rank > 2 && user.rank < 4 && (
              <div className="w-64 mx-auto mt-6 mb-6 border border-solid border-trust-blue"></div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
