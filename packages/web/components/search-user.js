import Link from "next/link";
import Badge from "./badge";
import FirstBadge from "./first-badge";
import SecondBadge from "./second-badge";
import ThirdBadge from "./third-badge";
import WhiteLine from "./white-line";
import BlueLine from "./blue-line";

export default function SearchUser(props) {
  const user = props.user;
  return (
    <div className="max-w-6xl mx-auto sm:px-2 md:px-2 mt-4">
      <div key={user.username}>
        <div className="mb-2 hidden md:px-1 lg:px-4 sm:block">
          <div
            className={
              (user.rank < 4) & (user.rank != null)
                ? "rounded-lg xl:max-w-screen-xl bg-trust-blue"
                : "rounded-lg xl:max-w-screen-xl bg-white border-2 border-trust-blue"
            }
          >
            <div className="h-20 md:h-24 flex flex-row justify-between">
              <div className="flex flex-row items-center">
                <div className="-mt-2 sm:-mt-4 md:-mt-4 mr-1.5 text-white">
                  {user.rank == 1 && <FirstBadge />}
                  {user.rank == 2 && <SecondBadge />}
                  {user.rank == 3 && <ThirdBadge />}
                  {(user.rank > 3 || user.rank === null) && (
                    <div className="relative items-center -mt-1">
                      <Badge />
                      <div className="absolute items-center text-white font-karla font-bold sm:text-md md:text-xl sm:ml-5 sm:-mt-12 md:-mt-14 md:ml-7">
                        <div
                          className={
                            user.rank < 10
                              ? ""
                              : "transform rotate-90 relative -ml-2"
                          }
                        >
                          {user.rank}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={
                    user.rank < 4 && user.rank != null
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
                    user.rank < 4 && user.rank != null
                      ? "flex flex-col w-60 sm:w-44 md:w-64 lg:w-96 text-white"
                      : "flex flex-col w-60 sm:w-44 md:w-64 lg:w-96 text-trust-blue"
                  }
                >
                  <div className="font-karla font-bold sm:text-base md:text-lg lg:text-2xl flex-none truncate">
                    {user.name}
                  </div>
                  <div className="font-karla font-normal flex-none text-xs md:text-base">
                    @{user.username}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div
                  className={
                    user.rank < 4 && user.rank != null
                      ? "ml-2 md:ml-8 lg:ml-30 xl:ml-36 flex flex-col w-32 items-end text-white"
                      : "ml-2 md:ml-8 lg:ml-30 xl:ml-36 flex flex-col w-32 items-end text-trust-blue"
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
                    user.rank < 4 && user.rank != null
                      ? "px-2 md:px-4 lg:px-6"
                      : "px-2 md:px-4 lg:px-6"
                  }
                >
                  <div>
                    {user.rank < 4 && user.rank != null && <WhiteLine />}
                    {user.rank > 3 && user.rank != null && <BlueLine />}
                    {user.rank === null && <BlueLine />}
                  </div>
                </div>
                <div
                  className={
                    user.rank < 4 && user.rank != null
                      ? "flex flex-col sm:w-16 w-32 items-start mr-8 md:mr-0 lg:mr-2 text-white"
                      : "flex flex-col sm:w-16 w-32 items-start mr-8 md:mr-0 lg:mr-2 text-trust-blue"
                  }
                >
                  <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl flex-none mr-2 md:mr-4 lining-nums">
                    {user.score ? user.score : "0"}
                  </div>
                  <div className="font-karla flex-none text-xs">VOTES</div>
                </div>
                <Link href={`/handles/${user.username}`}>
                  <a className="flex sm:-ml-8 md:ml-12 lg:ml-24 mr-2">
                    <button
                      className={
                        user.rank < 4 && user.rank != null
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
        </div>
        <div className="mb-1 block sm:hidden px-4 py-2">
          <div
            className={
              user.rank < 4 && user.rank != null
                ? "rounded-lg max-w-full bg-trust-blue"
                : "rounded-lg max-w-full bg-white border-2 border-trust-blue"
            }
          >
            <div className="h-20 md:h-24 flex flex-row items-center">
              <div className="flex mt-4 mr-1.5 -ml-1 text-white">
                {user.rank == 1 && <FirstBadge />}
                {user.rank == 2 && <SecondBadge />}
                {user.rank == 3 && <ThirdBadge />}
                {(user.rank > 3 || user.rank === null) && (
                  <div className="relative items-center">
                    <svg
                      className="h-24 w-16 sm:h-16 sm:w-12 md:h-20 md:w-16"
                      width="40"
                      height="90"
                      viewBox="0 0 40 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 90V2C0 0.895431 0.895431 0 2 0H38C39.1046 0 40 0.89543 40 2V90L20 78.75L0 90Z"
                        fill="#0F00B7"
                      />
                    </svg>
                    <div className="absolute items-center text-white font-karla font-bold text-xl -mt-16 ml-7">
                      <div
                        className={
                          user.rank < 10
                            ? ""
                            : "transform rotate-90 relative -ml-2"
                        }
                      >
                        {user.rank}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={
                  user.rank < 4 && user.rank != null
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
                        user.rank < 4 && user.rank != null
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
                user.rank < 4 && user.rank != null
                  ? "flex flex-row font-karla text-lg justify-center mt-6 mx-1 text-white"
                  : "flex flex-row font-karla text-lg justify-center mt-6 mx-1 text-trust-blue"
              }
            >
              <div className="truncate">{user.name}</div>
            </div>
            <div
              className={
                user.rank < 4 && user.rank != null
                  ? "flex flex-row font-karla text-base justify-center text-white"
                  : "flex flex-row font-karla text-base justify-center text-trust-blue"
              }
            >
              @{user.username}
            </div>
            <div className="mt-6 flex flex-row justify-center">
              <div
                className={
                  user.rank < 4 && user.rank != null
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
                  user.rank < 4 && user.rank != null
                    ? "flex-grow text-white"
                    : "flex-grow text-trust-blue"
                }
              >
                <div className="flex flex-col items-center">
                  <div className="font-raleway font-semibold text-3xl flex-none">
                    {user.score ? user.score : "0"}
                  </div>
                  <div className="mb-6 font-karla flex-none text-xs">VOTES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
