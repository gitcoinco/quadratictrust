import Link from "next/link";
import WhiteLine from "./white-line";
import BlueLine from "./blue-line";

export default function LeaderboardUser(props) {
  const users = props.data.data.users;
  return (
    <div className="max-w-6xl mx-auto sm:px-2 md:px-2">
      {users.map((user) => (
        <div key={user.rank}>
          <div className="mb-2 hidden md:px-1 lg:px-4 sm:block">
            <div
              className={
                user.rank < 4
                  ? "rounded-lg xl:max-w-screen-xl bg-trust-blue"
                  : "rounded-lg xl:max-w-screen-xl bg-white border-2 border-trust-blue"
              }
            >
              <div className="h-20 md:h-24 flex flex-row items-center">
                <div className="-mt-2 md:-mt-3 mr-1.5 -ml-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      user.rank < 4
                        ? "h-24 w-12 md:h-28 md:w-16 lg:h-28 lg:w-16 fill-current text-trust-green"
                        : "h-24 w-12 md:h-28 md:w-16 lg:h-28 lg:w-16 fill-current text-trust-blue"
                    }
                    viewBox="0 0 24 24"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <div
                  className={
                    user.rank < 4
                      ? "flex-none ml-2 mr-4 inline-block p-0.5 rounded-full bg-trust-yellow"
                      : "flex-none ml-2 mr-4 inline-block p-0.5 rounded-full bg-trust-blue"
                  }
                >
                  <img
                    className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full"
                    src={user.profileUrl}
                    alt={user.name}
                  />
                </div>
                <div
                  className={
                    user.rank < 4
                      ? "flex flex-col w-60 md:w-64 lg:w-96 text-white"
                      : "flex flex-col w-60 md:w-64 lg:w-96 text-trust-blue"
                  }
                >
                  <div className="font-karla font-bold sm:text-base md:text-lg lg:text-2xl flex-none truncate">
                    {user.name}
                  </div>
                  <div className="font-karla font-normal flex-none text-xs md:text-base">
                    @{user.username}
                  </div>
                </div>
                <div
                  className={
                    user.rank < 4
                      ? "ml-2 md:ml-8 lg:ml-36 flex flex-col w-32 items-end text-white"
                      : "ml-2 md:ml-8 lg:ml-36 flex flex-col w-32 items-end text-trust-blue"
                  }
                >
                  <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl flex-none lining-nums">
                    {user.credits}
                  </div>
                  <div className="font-karla flex-none text-xs">
                    VOTE CREDITS
                  </div>
                </div>
                <div
                  className={
                    user.rank < 4
                      ? "px-2 md:px-4 lg:px-6 text-white"
                      : "px-2 md:px-4 lg:px-6 text-trust-blue"
                  }
                >
                  <div>
                    {user.rank < 4 && <WhiteLine />}
                    {user.rank > 3 && <BlueLine />}
                  </div>
                </div>
                <div
                  className={
                    user.rank < 4
                      ? "flex flex-col sm:w-16 md:w-16 w-32 items-start mr-8 md:mr-0 lg:mr-2 text-white"
                      : "flex flex-col sm:w-16 md:w-16 w-32 items-start mr-8 md:mr-0 lg:mr-2 text-trust-blue"
                  }
                >
                  <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl flex-none mr-2 md:mr-4 lining-nums">
                    {user.score}
                  </div>
                  <div className="font-karla flex-none text-xs">VOTES</div>
                </div>
                <Link href={`/handles/${user.username}`}>
                  <a className="flex ml-4 md:ml-20 lg:ml-16 mr-2">
                    <button
                      className={
                        user.rank < 4
                          ? "bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded mr-4 items-end text-white border-white"
                          : "bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded mr-4 items-end text-trust-blue border-trust-blue"
                      }
                    >
                      VOTE
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-1 block sm:hidden px-4 py-2">
            <div
              className={
                user.rank < 4
                  ? "rounded-lg max-w-full bg-trust-blue"
                  : "rounded-lg max-w-full bg-white border-2 border-trust-blue"
              }
            >
              <div className="h-20 md:h-24 flex flex-row items-center">
                <div className="flex mt-1 mr-1.5 -ml-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      user.rank < 4
                        ? "h-28 w-16 fill-current text-trust-green"
                        : "h-28 w-16 fill-current text-trust-blue"
                    }
                    viewBox="0 0 24 24"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <div
                  className={
                    user.rank < 4
                      ? "ml-1 mr-8 inline-block p-0.5 mt-2 rounded-full bg-trust-yellow"
                      : "ml-1 mr-8 inline-block p-0.5 mt-2 rounded-full bg-trust-blue"
                  }
                >
                  <img
                    className="h-16 w-16 rounded-full"
                    src={user.profileUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-grow justify-end">
                  <Link href={`/handles/${user.username}`}>
                    <a>
                      <button
                        className={
                          user.rank < 4
                            ? "bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-2 px-8 border hover:border-transparent rounded mt-2 mr-4 lg:mr-8 items-center mx-auto text-white border-white"
                            : "bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-2 px-8 border hover:border-transparent rounded mt-2 mr-4 lg:mr-8 items-center mx-auto text-trust-blue border-trust-blue"
                        }
                      >
                        VOTE
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={
                  user.rank < 4
                    ? "flex flex-row font-karla text-lg justify-center text-white"
                    : "flex flex-row font-karla text-lg justify-center text-trust-blue"
                }
              >
                {user.name}
              </div>
              <div
                className={
                  user.rank < 4
                    ? "flex flex-row font-karla text-base justify-center text-white"
                    : "flex flex-row font-karla text-base justify-center text-trust-blue"
                }
              >
                @{user.username}
              </div>
              <div className="mt-6 flex flex-row justify-center">
                <div
                  className={
                    user.rank < 4
                      ? "flex-grow text-white"
                      : "flex-grow text-trust-blue"
                  }
                >
                  <div className="flex flex-col items-center">
                    <div className="font-raleway font-semibold text-3xl flex-none">
                      {user.credits}
                    </div>
                    <div className="mb-6 font-karla flex-none text-xs">
                      VOTE CREDITS
                    </div>
                  </div>
                </div>
                <div className="ml-4 mr-4"></div>
                <div
                  className={
                    user.rank < 4
                      ? "flex-grow text-white"
                      : "flex-grow text-trust-blue"
                  }
                >
                  <div className="flex flex-col items-center">
                    <div className="font-raleway font-semibold text-3xl flex-none">
                      {user.score}
                    </div>
                    <div className="mb-6 font-karla flex-none text-xs">
                      VOTES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {user.rank > 2 && (
              <div className="w-64 mx-auto border border-solid border-trust-blue mt-6 mb-6"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
