import Link from "next/link";
import Badge from "./badge";
import FirstBadge from "./first-badge";
import SecondBadge from "./second-badge";
import ThirdBadge from "./third-badge";
import WhiteLine from "./white-line";
import BlueLine from "./blue-line";

export default function UserCard(props) {
  const user = props.user;
  return (
    <div className="max-w-6xl mx-auto mt-4 sm:px-2 md:px-2">
      <div key={user.username}>
        <div className="hidden mb-2 sm:block md:px-1 lg:px-4">
          <div
            className={
              (user.rank < 4) & (user.rank != null)
                ? "rounded-lg bg-trust-blue xl:max-w-screen-xl"
                : "rounded-lg bg-white border-2 border-trust-blue xl:max-w-screen-xl"
            }
          >
            <div className="flex flex-row justify-between h-16 sm:h-20 md:h-24">
              <div className="flex flex-row items-center">
                <div className="-mt-2 mr-1.5 text-white sm:-mt-4 md:-mt-4">
                  {user.rank == 1 && <FirstBadge />}
                  {user.rank == 2 && <SecondBadge />}
                  {user.rank == 3 && <ThirdBadge />}
                  {(user.rank > 3 || user.rank === null) && (
                    <div className="relative items-center -mt-4 sm:-mt-1">
                      <Badge />
                      <div className="absolute items-center font-karla font-bold text-white sm:ml-5 sm:-mt-12 sm:text-md md:-mt-14 md:ml-7 md:text-xl">
                        <div
                          className={
                            user.rank < 10
                              ? ""
                              : "transform rotate-90 relative -ml-1.5"
                          }
                        >
                          {user.rank ? user.rank : "-"}
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
                    className="h-16 w-16 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full"
                    src={user.profileUrl}
                    alt={user.name}
                  />
                </div>
                <div
                  className={
                    user.rank < 4 && user.rank != null
                      ? "flex flex-col w-60 text-white sm:w-50 md:w-60 lg:w-96"
                      : "flex flex-col w-60 text-trust-blue sm:w-50 md:w-60 lg:w-96"
                  }
                >
                  <div className="flex-none font-karla font-bold truncate sm:text-base md:text-lg lg:text-2xl">
                    {user.name}
                  </div>
                  <div className="flex-none font-karla font-normal text-xs md:text-base">
                    @{user.username}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div
                  className={
                    user.rank < 4 && user.rank != null
                      ? "px-2 text-white sm:px-6 md:px-4 lg:px-6"
                      : "px-2 text-trust-blue sm:px-6 md:px-4 lg:px-6"
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
                      ? "flex flex-col w-32 items-start mr-8 text-white sm:w-32 md:w-32 md:mr-0 lg:mr-2"
                      : "flex flex-col w-32 items-start mr-8 text-trust-blue sm:w-32 md:w-32 md:mr-0 lg:mr-2"
                  }
                >
                  <div className="flex-none mr-2 font-raleway font-semibold lining-nums sm:text-xl md:mr-4 md:text-2xl lg:text-4xl">
                    {user.score ? user.score : "0"}
                  </div>
                  <div className="font-karla flex-none text-xs">
                    VOTES RECEIVED
                  </div>
                </div>
                <Link href={`/handles/${user.username}`}>
                  <a className="flex mr-2 sm:-ml-8 md:ml-0 lg:ml-16">
                    <button
                      className={
                        user.rank < 4 && user.rank != null
                          ? "items-end mr-4 py-1 px-2 border-2 border-white rounded bg-transparent font-semibold text-white hover:border-trust-blue hover:bg-trust-yellow hover:text-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue md:py-2 md:px-4"
                          : "items-end mr-4 py-1 px-2 border-2 border-trust-blue rounded bg-transparent font-semibold text-trust-blue hover:border-trust-blue hover:bg-trust-yellow hover:text-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue md:py-2 md:px-4"
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
        <div className="block  mb-1 px-4 py-2 sm:hidden">
          <div
            className={
              user.rank < 4 && user.rank != null
                ? "max-w-full bg-trust-blue rounded-lg"
                : "max-w-full bg-white rounded-lg border-2 border-trust-blue"
            }
          >
            <div className="flex flex-row items-center h-20 md:h-24">
              <div className="flex mt-4 mr-1.5 -ml-1 text-white">
                {user.rank == 1 && <FirstBadge />}
                {user.rank == 2 && <SecondBadge />}
                {user.rank == 3 && <ThirdBadge />}
                {(user.rank > 3 || user.rank === null) && (
                  <div className="relative items-center">
                    <Badge />
                    <div className="absolute items-center -mt-16 ml-7 font-karla font-bold text-xl text-white">
                      <div
                        className={
                          user.rank < 10
                            ? ""
                            : "transform rotate-90 relative -ml-2"
                        }
                      >
                        {user.rank ? user.rank : "-"}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={
                  user.rank < 4 && user.rank != null
                    ? "ml-1 mr-8 mt-2 p-0.5 inline-block rounded-full bg-trust-yellow"
                    : "ml-1 mr-8 mt-2 p-0.5 inline-block rounded-full bg-trust-blue"
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
                          ? "items-center mx-auto mt-2 mr-4 py-2 px-8 border-2 border-white rounded bg-transparent font-semibold text-white hover:bg-trust-yellow hover:border-trust-blue hover:text-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue lg:mr-8"
                          : "items-center mx-auto mt-2 mr-4 py-2 px-8 border-2 border-trust-blue rounded bg-transparent font-semibold text-trust-blue hover:bg-trust-yellow hover:border-trust-blue hover:text-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue lg:mr-8"
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
                  ? "flex flex-row justify-center mt-6 mx-1 font-karla text-lg text-white"
                  : "flex flex-row justify-center mt-6 mx-1 font-karla text-lg text-trust-blue"
              }
            >
              <div className="truncate">{user.name}</div>
            </div>
            <div
              className={
                user.rank < 4 && user.rank != null
                  ? "flex flex-row justify-center font-karla text-base text-white"
                  : "flex flex-row justify-center font-karla text-base text-trust-blue"
              }
            >
              @{user.username}
            </div>
            <div className="flex flex-row justify-center mt-6">
              <div
                className={
                  user.rank < 4 && user.rank != null
                    ? "flex-1 text-white"
                    : "flex-1 text-trust-blue"
                }
              >
                <div className="flex flex-col items-center">
                  <div className="flex-none font-raleway font-semibold text-3xl lining-nums">
                    {user.score ? user.score : "0"}
                  </div>
                  <div className="flex-none  mb-6 font-karla text-xs">
                    VOTES RECEIVED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
