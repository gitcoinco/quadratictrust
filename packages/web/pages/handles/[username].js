import VotesReceived from "../../components/votes-received";
export default function Handle(props) {
  const currentHandle = props.data.user;
  const trustReceived = props.dataCandidate.data.ballots;
  return (
    <>
      <div className="max-w-6xl mx-auto sm:px-2 md:px-2">
        <div className="flex flex-row">
          <div className="mt-20 hidden lg:px-4 lg:block w-7/12">
            <div
              className={
                currentHandle.rank < 4
                  ? "rounded-lg xl:max-w-screen-xl bg-trust-blue"
                  : "rounded-lg xl:max-w-screen-xl bg-white border-2 border-trust-blue"
              }
            >
              <div className="h-56 flex flex-row items-center">
                <div className="-mt-2 md:-mt-36 mr-1.5 -ml-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      currentHandle.rank < 4
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
                <div>
                  <div
                    className={
                      currentHandle.rank < 4
                        ? "flex-none ml-2 mr-2 inline-block p-0.5 rounded-full bg-trust-yellow"
                        : "flex-none ml-2 mr-2 inline-block p-0.5 rounded-full bg-trust-blue"
                    }
                  >
                    <img
                      className="h-12 w-12 md:h-14 md:w-14 lg:h-24 lg:w-24 rounded-full"
                      src={currentHandle.profileUrl}
                      alt=""
                    />
                  </div>
                  <div
                    className={
                      currentHandle.rank < 4
                        ? "flex flex-col w-32 lg:w-60 text-white"
                        : "flex flex-col w-32 lg:w-60 text-trust-blue"
                    }
                  >
                    <div className="font-karla font-bold sm:text-base md:text-lg lg:text-2xl flex-none truncate">
                      {currentHandle.name}
                    </div>
                    <div className="font-karla font-normal flex-none text-xs md:text-base">
                      @{currentHandle.username}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    currentHandle.rank < 4
                      ? "ml-2 mr-2 flex flex-grow flex-col w-16 lg:w-32 items-end text-white"
                      : "ml-2 mr-2 flex flex-grow flex-col w-16 lg:w-32 items-end text-trust-blue"
                  }
                >
                  <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl flex-none lining-nums">
                    {currentHandle.credits}
                  </div>
                  <div className="font-karla flex-none text-xs">
                    VOTE CREDITS
                  </div>
                </div>
                <div
                  className={
                    currentHandle.rank < 4
                      ? "px-2 lg:px-6 text-white"
                      : "px-2 lg:px-6 text-trust-blue"
                  }
                >
                  |
                </div>
                <div
                  className={
                    currentHandle.rank < 4
                      ? "flex flex-col w-32 items-start mr-2 md:mr-1 lg:mr-2 text-white"
                      : "flex flex-col w-32 items-start mr-2 md:mr-1 lg:mr-2 text-trust-blue"
                  }
                >
                  <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl flex-none mr-2 md:mr-4 lining-nums">
                    {currentHandle.score}
                  </div>
                  <div className="font-karla flex-none text-xs">VOTES</div>
                </div>
              </div>
            </div>
            <div className="mt-20 mb-10 flex flex-row">
              <span className="font-karla text-2xl font-bold text-trust-blue">
                VOTES RECEIVED
              </span>
              <svg
                className="items-start -mt-1 ml-2 mr-2"
                width="1"
                height="40"
                viewBox="0 0 1 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2="40"
                  stroke="#0F00B7"
                />
              </svg>
              <span className="font-karla font-normal text-2xl text-trust-blue">
                VOTES DELEGATED
              </span>
            </div>

            <VotesReceived votesReceived={trustReceived} />
          </div>
          <div className="mt-20 hidden lg:px-4 lg:block w-5/12">
            <div className="rounded-lg xl:max-w-screen-xl bg-trust-blue border-trust-blue">
              <div className="flex flex-row">
                <div className="font-karla text-lg font-semibold text-white tracking-widest p-6">
                  VOTE FOR
                </div>
                <div className="font-karla font-normal text-base text-white p-6">
                  @{currentHandle.username}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <div className="px-6 py-4 mr-10">
                    <button className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-6 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#ffffff"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="px-6 py-2">
                    <button className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-6 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#ffffff"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 13H5v-2h14v2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex font-karla font-normal text-base text-white self-end">
                    VOTES
                  </div>
                  <div className="mt-12 mb-3 flex font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl text-white self-center flex-grow items-center lining-nums">
                    0123456789
                  </div>
                  <svg
                    className="mb-3"
                    width="220"
                    height="1"
                    viewBox="0 0 220 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="-0.5"
                      x2="220"
                      y2="-0.5"
                      transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 0)"
                      stroke="#FEC833"
                    />
                  </svg>
                  <div className="font-karla font-normal text-base text-white self-end">
                    YOU HAVE{" "}
                    <span className="text-trust-yellow">
                      {currentHandle.credits}
                    </span>
                  </div>
                  <div className="font-karla font-normal text-base text-white self-end">
                    VOTE CREDITS LEFT
                  </div>
                </div>
              </div>
              <div className="flex mt-20 py-4 justify-center">
                <button className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg">
                  CHECKOUT VOTE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden max-w-xl mx-auto mt-20 px-4">
          <div
            className={
              currentHandle.rank < 4
                ? "rounded-lg xl:max-w-screen-xl bg-trust-blue"
                : "rounded-lg xl:max-w-screen-xl bg-white border-2 border-trust-blue"
            }
          >
            <div className="hidden h-56 md:flex flex-row items-center">
              <div className="-mt-40 md:-mt-36 mr-1.5 -ml-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    currentHandle.rank < 4
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
              <div>
                <div
                  className={
                    currentHandle.rank < 4
                      ? "flex-none ml-2 mr-2 inline-block p-0.5 rounded-full bg-trust-yellow"
                      : "flex-none ml-2 mr-2 inline-block p-0.5 rounded-full bg-trust-blue"
                  }
                >
                  <img
                    className="h-12 w-12 md:h-16 md:w-16 rounded-full"
                    src={currentHandle.profileUrl}
                    alt={currentHandle.username}
                  />
                </div>
                <div
                  className={
                    currentHandle.rank < 4
                      ? "flex flex-col sm:w-32 md:w-40 text-white"
                      : "flex flex-col sm:w-32 md:w-40 text-trust-blue"
                  }
                >
                  <div className="font-karla font-bold sm:text-base md:text-lg lg:text-2xl flex-none truncate">
                    {currentHandle.name}
                  </div>
                  <div className="font-karla font-normal flex-none text-xs md:text-base">
                    @{currentHandle.username}
                  </div>
                </div>
              </div>
              <div
                className={
                  currentHandle.rank < 4
                    ? "ml-2 mr-2 flex flex-grow flex-col w-16 lg:w-32 items-end text-white"
                    : "ml-2 mr-2 flex flex-grow flex-col w-16 lg:w-32 items-end text-trust-blue"
                }
              >
                <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl flex-none">
                  {currentHandle.credits}
                </div>
                <div className="font-karla flex-none text-xs">VOTE CREDITS</div>
              </div>
              <div
                className={
                  currentHandle.rank < 4
                    ? "px-2 lg:px-6 text-white"
                    : "px-2 lg:px-6 text-trust-blue"
                }
              >
                |
              </div>
              <div
                className={
                  currentHandle.rank < 4
                    ? "flex flex-col w-32 items-start mr-2 md:mr-1 lg:mr-2 text-white"
                    : "flex flex-col w-32 items-start mr-2 md:mr-1 lg:mr-2 text-trust-blue"
                }
              >
                <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl flex-none mr-2 md:mr-4">
                  {currentHandle.score}
                </div>
                <div className="font-karla flex-none text-xs">VOTES</div>
              </div>
            </div>
            <div className="h-56 md:hidden flex-row items-center">
              <div
                className={
                  currentHandle.rank < 4
                    ? "rounded-lg max-w-full bg-trust-blue"
                    : "rounded-lg max-w-full bg-white border-2 border-trust-blue"
                }
              >
                <div className="h-20 md:h-24 flex flex-row items-center">
                  <div className="flex mt-1 mr-1.5 -ml-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        currentHandle.rank < 4
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
                      currentHandle.rank < 4
                        ? "ml-1 mr-8 inline-block p-0.5 mt-2 rounded-full bg-trust-yellow"
                        : "ml-1 mr-8 inline-block p-0.5 mt-2 rounded-full bg-trust-blue"
                    }
                  >
                    <img
                      className="h-16 w-16 rounded-full"
                      src={currentHandle.profileUrl}
                      alt={currentHandle.username}
                    />
                  </div>
                </div>
                <div
                  className={
                    currentHandle.rank < 4
                      ? "flex flex-row font-karla text-lg justify-center text-white"
                      : "flex flex-row font-karla text-lg justify-center text-trust-blue"
                  }
                >
                  {currentHandle.name}
                </div>
                <div
                  className={
                    currentHandle.rank < 4
                      ? "flex flex-row font-karla text-base justify-center text-white"
                      : "flex flex-row font-karla text-base justify-center text-trust-blue"
                  }
                >
                  @{currentHandle.username}
                </div>
                <div className="mt-6 flex flex-row justify-center">
                  <div
                    className={
                      currentHandle.rank < 4
                        ? "flex-grow text-white"
                        : "flex-grow text-trust-blue"
                    }
                  >
                    <div className="flex flex-col items-center">
                      <div className="font-raleway font-semibold text-3xl flex-none">
                        {currentHandle.credits}
                      </div>
                      <div className="mb-6 font-karla flex-none text-xs">
                        VOTE CREDITS
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 mr-4"></div>
                  <div
                    className={
                      currentHandle.rank < 4
                        ? "flex-grow text-white"
                        : "flex-grow text-trust-blue"
                    }
                  >
                    <div className="flex flex-col items-center">
                      <div className="font-raleway font-semibold text-3xl flex-none">
                        {currentHandle.score}
                      </div>
                      <div className="mb-6 font-karla flex-none text-xs">
                        VOTES
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg xl:max-w-screen-xl mt-10 bg-trust-blue border-trust-blue">
            <div className="flex flex-row">
              <div className="font-karla text-lg font-semibold text-white tracking-widest p-6">
                VOTE FOR
              </div>
              <div className="font-karla font-normal text-base text-white p-6">
                @{currentHandle.username}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="px-6 py-4">
                  <button className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-6 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#ffffff"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                  </button>
                </div>
                <div className="px-6 py-2">
                  <button className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-6 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#ffffff"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 13H5v-2h14v2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:ml-48 md:ml-40 justify-between mx-auto">
                <div className="font-karla font-normal text-base text-white self-end">
                  VOTES
                </div>
                <div className="mt-12 mb-3 flex font-raleway font-semibold text-xl md:text-2xl lg:text-4xl text-white self-center flex-grow items-center">
                  0123456789
                </div>
                <svg
                  className="mb-3"
                  width="220"
                  height="1"
                  viewBox="0 0 220 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="220"
                    y2="-0.5"
                    transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 0)"
                    stroke="#FEC833"
                  />
                </svg>
                <div className="font-karla font-normal text-base text-white self-end">
                  YOU HAVE{" "}
                  <span className="text-trust-yellow">
                    {currentHandle.credits}
                  </span>
                </div>
                <div className="font-karla font-normal text-base text-white self-end">
                  VOTE CREDITS LEFT
                </div>
              </div>
            </div>
            <div className="flex mt-20 py-4 justify-center">
              <button className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg">
                CHECKOUT VOTE
              </button>
            </div>
          </div>
          <div className="mt-20 mb-10 flex flex-row">
            <span className="font-karla text-base sm:text-xl md:text-2xl font-bold text-trust-blue">
              VOTES RECEIVED
            </span>
            <svg
              className="items-start -mt-1 ml-2 mr-2"
              width="1"
              height="40"
              viewBox="0 0 1 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499998"
                y2="40"
                stroke="#0F00B7"
              />
            </svg>
            <span className="font-karla font-normal text-base sm:text-xl md:text-2xl text-trust-blue">
              VOTES DELEGATED
            </span>
          </div>
          <VotesReceived votesReceived={trustReceived} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { username } = context.query;
  const res = await fetch(`https://quadratictrust.com/api/users/${username}`);
  const data = await res.json();
  const resVoter = await fetch(
    `https://quadratictrust.com/api/ballots?voter=${username}`
  );
  const dataVoter = await resVoter.json();
  const resCandidate = await fetch(
    `https://quadratictrust.com/api/ballots?candidate=${username}`
  );
  const dataCandidate = await resCandidate.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  if (!dataVoter) {
    return {
      notFound: true,
    };
  }
  if (!dataCandidate) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data, dataVoter, dataCandidate },
  };
}
