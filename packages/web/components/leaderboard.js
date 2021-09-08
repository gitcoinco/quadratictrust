import { useMemo, useState } from "react";
import UserCard from "../components/user-card";
import Pagination from "./pagination";

export default function Leaderboard(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const allData = props.data.data.users;
  let PageSize = 10;
  const users = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
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
      <Pagination
        currentPage={currentPage}
        totalCount={allData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
