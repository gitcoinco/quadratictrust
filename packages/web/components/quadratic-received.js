import { useMemo, useState } from "react";
import Link from "next/link";
import Pagination from "./pagination";

export default function QuadraticReceived(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const allData = props.votes;
  let PageSize = 10;
  const trustReceived = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allData]);

  return (
    <div>
      {trustReceived.map((trust) => (
        <div
          key={trust.createdAt}
          className="mt-2 rounded-lg xl:max-w-screen-xl bg-white border-2 border-trust-blue"
        >
          <Link href={`/handles/${trust.voter}`}>
            <a>
              <div className="h-20 flex flex-row items-center">
                <div className="ml-2 md:mr-2 mr-4 inline-block p-0.5 rounded-full bg-white">
                  <img
                    className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full"
                    src={trust.voterProfileUrl}
                    alt={trust.voter}
                  />
                </div>
                <div className="flex flex-col w-32 md:w-48 lg:w-60 text-trust-blue">
                  <div className="font-karla font-normal flex-none text-sm sm:text-base md:text-md lg:text-lg">
                    @{trust.voter}
                  </div>
                </div>
                <div className="flex flex-grow flex-col w-32 items-end mr-8 md:mr-2 lg:mr-4 text-trust-blue">
                  <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:tex-4xl flex lining-nums">
                    {trust.score}
                  </div>
                  <div className="font-karla flex text-xs">VOTES</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalCount={allData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
