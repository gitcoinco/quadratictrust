import VotesReceived from "../../components/votes-received";
import Head from "next/head";
import { useState, useContext } from "react";
import { UserContext } from "../../lib/UserContext";

export default function Handle(props) {
  const [user] = useContext(UserContext);
  console.log(user);
  const [counter, setCounter] = useState(0);
  const currentHandle = props.data.user;
  const trustReceived = props.dataCandidate.data.ballots;
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <Head>
        <title>{currentHandle.username} | Quadratic Trust</title>
        <meta
          name="description"
          content="Sharing the trust you have got with people you trust"
        />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <div className="max-w-6xl mx-auto sm:px-2 md:px-2">
        <div className="flex flex-row">
          <div className="mt-20 hidden lg:px-4 lg:block w-7/12">
            <div
              className={
                currentHandle.rank < 4 && currentHandle.rank != null
                  ? "rounded-lg xl:max-w-screen-xl bg-trust-blue"
                  : "rounded-lg xl:max-w-screen-xl bg-white border-2 border-trust-blue"
              }
            >
              <div className="h-56 flex flex-row items-center">
                <div className="-mt-2 md:-mt-36 mr-1.5 -ml-1 text-white">
                  {currentHandle.rank == 1 && (
                    <svg
                      className="h-10 w-12 sm:h-16 sm:w-12 md:h-20 md:w-16"
                      width="40"
                      height="90"
                      viewBox="0 0 40 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 90V2C0 0.895431 0.895431 0 2 0H38C39.1046 0 40 0.89543 40 2V90L20 78.75L0 90Z"
                        fill="#218449"
                      />
                      <path
                        d="M17.2658 35C18.2658 34.8533 19.1458 34.5 19.9058 33.94H21.6858V47H19.3258V36.76C18.6458 37.0933 17.9591 37.26 17.2658 37.26V35Z"
                        fill="#FEC833"
                      />
                      <line
                        x1="5"
                        y1="59.5"
                        x2="35"
                        y2="59.5"
                        stroke="url(#paint0_linear)"
                      />
                      <line
                        x1="5"
                        y1="62.5"
                        x2="35"
                        y2="62.5"
                        stroke="url(#paint1_linear)"
                      />
                      <line
                        x1="5"
                        y1="65.5"
                        x2="35"
                        y2="65.5"
                        stroke="url(#paint2_linear)"
                      />
                      <path
                        d="M14 14L17 17.2L20 14L23 17.2L26 14V22H14V14Z"
                        fill="#FEC833"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="5"
                          y1="60"
                          x2="35"
                          y2="60"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FEC833" stopOpacity="0" />
                          <stop offset="0.51875" stopColor="#FEC833" />
                          <stop
                            offset="1"
                            stopColor="#FEC833"
                            stopOpacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="5"
                          y1="63"
                          x2="35"
                          y2="63"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FEC833" stopOpacity="0" />
                          <stop offset="0.51875" stopColor="#FEC833" />
                          <stop
                            offset="1"
                            stopColor="#FEC833"
                            stopOpacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear"
                          x1="5"
                          y1="66"
                          x2="35"
                          y2="66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FEC833" stopOpacity="0" />
                          <stop offset="0.51875" stopColor="#FEC833" />
                          <stop
                            offset="1"
                            stopColor="#FEC833"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                  {currentHandle.rank == 2 && (
                    <svg
                      className="h-24 w-16"
                      width="40"
                      height="90"
                      viewBox="0 0 40 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 90V2C0 0.895431 0.895431 0 2 0H38C39.1046 0 40 0.89543 40 2V90L20 78.75L0 90Z"
                        fill="#1E914C"
                      />
                      <path
                        d="M17.5053 44.84H24.9253V47H15.1453V44.78C15.1453 43.22 15.6986 42.0867 16.8053 41.38C17.1786 41.14 17.612 40.9267 18.1053 40.74L20.7653 39.72C21.352 39.4933 21.7786 39.2133 22.0453 38.88C22.3253 38.5333 22.4653 38.1067 22.4653 37.6C22.4653 37.0933 22.2853 36.6733 21.9253 36.34C21.5653 35.9933 21.052 35.82 20.3853 35.82C19.7186 35.82 19.1653 35.98 18.7253 36.3C18.2986 36.62 18.052 37.0933 17.9853 37.72H15.3653C15.392 36.4533 15.8786 35.46 16.8253 34.74C17.692 34.0867 18.8586 33.76 20.3253 33.76C21.672 33.76 22.7853 34.12 23.6653 34.84C24.5586 35.5867 25.0053 36.5 25.0053 37.58C25.0053 38.66 24.732 39.5267 24.1853 40.18C23.652 40.82 22.8186 41.36 21.6853 41.8L18.9853 42.84C18.4653 43.04 18.0853 43.2667 17.8453 43.52C17.6186 43.76 17.5053 44.0733 17.5053 44.46V44.84Z"
                        fill="#FEC833"
                      />
                      <line
                        x1="5"
                        y1="59.5"
                        x2="35"
                        y2="59.5"
                        stroke="url(#paint0_linear)"
                      />
                      <line
                        x1="5"
                        y1="62.5"
                        x2="35"
                        y2="62.5"
                        stroke="url(#paint1_linear)"
                      />
                      <line
                        x1="5"
                        y1="19.5"
                        x2="35"
                        y2="19.5"
                        stroke="url(#paint2_linear)"
                      />
                      <line
                        x1="5"
                        y1="16.5"
                        x2="35"
                        y2="16.5"
                        stroke="url(#paint3_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="5"
                          y1="60"
                          x2="35"
                          y2="60"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FEC833" stopOpacity="0" />
                          <stop offset="0.51875" stopColor="#FEC833" />
                          <stop
                            offset="1"
                            stopColor="#FEC833"
                            stopOpacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="5"
                          y1="63"
                          x2="35"
                          y2="63"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FEC833" stopOpacity="0" />
                          <stop offset="0.51875" stopColor="#FEC833" />
                          <stop
                            offset="1"
                            stopColor="#FEC833"
                            stopOpacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear"
                          x1="5"
                          y1="20"
                          x2="35"
                          y2="20"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FEC833" stopOpacity="0" />
                          <stop offset="0.51875" stopColor="#FEC833" />
                          <stop
                            offset="1"
                            stopColor="#FEC833"
                            stopOpacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear"
                          x1="5"
                          y1="17"
                          x2="35"
                          y2="17"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FEC833" stopOpacity="0" />
                          <stop offset="0.51875" stopColor="#FEC833" />
                          <stop
                            offset="1"
                            stopColor="#FEC833"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                  {currentHandle.rank == 3 && (
                    <svg
                      className="h-24 w-16"
                      width="40"
                      height="90"
                      viewBox="0 0 40 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 90V2C0 0.895431 0.895431 0 2 0H38C39.1046 0 40 0.89543 40 2V90L20 78.75L0 90Z"
                        fill="#1D904B"
                      />
                      <path
                        d="M19.9593 35.9C18.506 35.9 17.6593 36.4533 17.4193 37.56H14.9393C15.0726 36.28 15.5926 35.3133 16.4993 34.66C17.3526 34.06 18.4726 33.76 19.8593 33.76C21.286 33.76 22.446 34.0933 23.3393 34.76C24.2726 35.44 24.7393 36.3133 24.7393 37.38C24.7393 38.0467 24.5593 38.6267 24.1993 39.12C23.8393 39.6 23.306 39.96 22.5993 40.2C23.386 40.4667 24.0126 40.8667 24.4793 41.4C24.9593 41.92 25.1993 42.52 25.1993 43.2C25.1993 43.88 25.0726 44.46 24.8193 44.94C24.5793 45.42 24.2326 45.8333 23.7793 46.18C22.8193 46.9133 21.5726 47.28 20.0393 47.28C18.5726 47.28 17.3393 46.9067 16.3393 46.16C15.2193 45.3467 14.6593 44.2667 14.6593 42.92H17.1793C17.2193 43.6 17.4926 44.1333 17.9993 44.52C18.5193 44.9067 19.1926 45.1 20.0193 45.1C20.846 45.1 21.486 44.92 21.9393 44.56C22.406 44.1867 22.6393 43.72 22.6393 43.16C22.6393 42.5867 22.426 42.14 21.9993 41.82C21.586 41.5 20.926 41.34 20.0193 41.34H18.2993V39.48H19.7793C20.5393 39.48 21.1326 39.32 21.5593 39C21.986 38.6667 22.1993 38.2333 22.1993 37.7C22.1993 37.1667 22.0126 36.7333 21.6393 36.4C21.2793 36.0667 20.7193 35.9 19.9593 35.9Z"
                        fill="#FEC833"
                      />
                      <line
                        x1="5"
                        y1="59.5"
                        x2="35"
                        y2="59.5"
                        stroke="url(#paint0_linear)"
                      />
                      <line
                        x1="5"
                        y1="19.5"
                        x2="35"
                        y2="19.5"
                        stroke="url(#paint1_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="5"
                          y1="60"
                          x2="35"
                          y2="60"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FEC833" stopOpacity="0" />
                          <stop offset="0.51875" stopColor="#FEC833" />
                          <stop
                            offset="1"
                            stopColor="#FEC833"
                            stopOpacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="5"
                          y1="20"
                          x2="35"
                          y2="20"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FEC833" stopOpacity="0" />
                          <stop offset="0.51875" stopColor="#FEC833" />
                          <stop
                            offset="1"
                            stopColor="#FEC833"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                  {(currentHandle.rank > 3 || currentHandle.rank == null) && (
                    <svg
                      className="h-10 w-12 sm:h-16 sm:w-12 md:h-20 md:w-16"
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
                  )}
                </div>
                <div>
                  <div
                    className={
                      currentHandle.rank < 4 && currentHandle.rank != null
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
                      currentHandle.rank < 4 && currentHandle.rank != null
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
                    currentHandle.rank < 4 && currentHandle.rank != null
                      ? "ml-2 mr-1 flex flex-grow flex-col w-16 lg:w-32 items-end text-white"
                      : "ml-2 mr-1 flex flex-grow flex-col w-16 lg:w-32 items-end text-trust-blue"
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
                    currentHandle.rank < 4 && currentHandle.rank != null
                      ? "px-2 lg:px-6 text-white"
                      : "px-2 lg:px-6 text-trust-blue"
                  }
                >
                  |
                </div>
                <div
                  className={
                    currentHandle.rank < 4 && currentHandle.rank != null
                      ? "flex flex-col w-32 items-start mr-2 md:mr-1 lg:mr-2 text-white"
                      : "flex flex-col w-32 items-start mr-2 md:mr-1 lg:mr-2 text-trust-blue"
                  }
                >
                  <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl flex-none mr-2 md:mr-4 lining-nums">
                    {currentHandle.score ? currentHandle.score : "0"}
                  </div>
                  <div className="font-karla flex-none text-xs">
                    VOTES RECEIVED
                  </div>
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
                VOTES GIVEN
              </span>
            </div>
            <VotesReceived votesReceived={trustReceived} />
          </div>
          <div className="mt-20 hidden lg:px-4 lg:block w-5/12">
            {user?.loading ? (
              <></>
            ) : user?.username == currentHandle.username ? (
              <div className="rounded-lg bg-white border-2 border-trust-blue">
                <div className="flex flex-row">
                  <div className="font-karla text-lg font-semibold text-trust-blue tracking-widest p-6">
                    COLLECT PRIZE
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-center font-karla font-normal text-base text-trust-blue mb-4">
                    CONGRATULATIONS!
                  </div>
                  <div className="flex justify-center font-karla font-normal text-base text-trust-blue">
                    YOU ARE ON YOUR WAY
                  </div>
                  <div className="flex justify-center font-karla font-normal text-base text-trust-blue">
                    TO COLLECT A PRIZE
                  </div>
                  <div className="flex justify-center font-karla font-normal text-base text-trust-blue">
                    KEEP EARNING TRUST
                  </div>
                </div>
                <div className="flex mt-20 py-4 justify-center">
                  <button
                    disabled={true}
                    className="bg-transparent hover:bg-trust-blue font-semibold hover:text-trust-white py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded items-end text-trust-blue border-trust-blue tracking-widest text-lg"
                  >
                    COLLECT PRIZE
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-lg bg-trust-blue border-trust-blue">
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
                    <div className="px-6 py-4 mr-10 mb-1.5">
                      <button
                        onClick={increment}
                        className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-6 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg"
                      >
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
                      <button
                        onClick={decrement}
                        className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-6 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg"
                      >
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
                    <div className="flex font-karla font-normal text-base text-white">
                      VOTES
                    </div>
                    <input
                      type="text"
                      className="mt-16 w-56 block border-0 border-b border-trust-yellow mb-3 font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl bg-trust-blue text-white lining-nums placeholder-white focus:border-trust-yellow focus:ring-0"
                      placeholder="0"
                      onChange={(e) => setCounter(e.target.value)}
                      value={counter}
                    />
                    {typeof user === "undefined" ? (
                      <div></div>
                    ) : (
                      <>
                        <div className="font-karla font-normal text-base text-white self-end">
                          YOU HAVE{" "}
                          <span className="text-trust-yellow lining-nums">
                            {user.credits - counter}
                          </span>
                        </div>
                      </>
                    )}
                    <div className="font-karla font-normal text-base text-white self-end">
                      VOTE CREDITS LEFT
                    </div>
                  </div>
                </div>
                <div className="flex mt-20 py-4 justify-center">
                  {user?.loading ? (
                    <></>
                  ) : user?.username ? (
                    <button className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg">
                      CHECKOUT VOTE
                    </button>
                  ) : (
                    <a
                      href="https://quadratictrust.com/api/login"
                      className="font-raleway tracking-widest text-lg bg-trust-blue hover:bg-trust-yellow border font-semibold hover:text-trust-blue text-white border-white px-12 py-4 hover:border-trust-blue rounded-md"
                    >
                      CHECKOUT VOTE
                    </a>
                  )}
                </div>
              </div>
            )}
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
                <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl flex-none lining-nums">
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
                <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl flex-none mr-2 md:mr-4 lining-nums">
                  {currentHandle.score}
                </div>
                <div className="font-karla flex-none text-xs">
                  VOTES RECEIVED
                </div>
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
                      <div className="font-raleway font-semibold text-3xl flex-none lining-nums">
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
                        VOTES RECEIVED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {user?.loading ? (
            <></>
          ) : user?.username == currentHandle.username ? (
            <div className="rounded-lg xl:max-w-screen-xl mt-10 bg-white border-trust-blue border-2">
              <div className="flex flex-row">
                <div className="font-karla text-lg font-semibold text-trust-blue tracking-widest p-6">
                  COLLECT PRIZE
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center font-karla font-normal text-base text-trust-blue mb-4">
                  CONGRATULATIONS!
                </div>
                <div className="flex justify-center font-karla font-normal text-base text-trust-blue">
                  YOU ARE ON YOUR WAY
                </div>
                <div className="flex justify-center font-karla font-normal text-base text-trust-blue">
                  TO COLLECT A PRIZE
                </div>
                <div className="flex justify-center font-karla font-normal text-base text-trust-blue">
                  KEEP EARNING TRUST
                </div>
              </div>
              <div className="flex mt-20 py-4 justify-center">
                <button
                  disabled={true}
                  className="bg-transparent hover:bg-trust-blue font-semibold hover:text-white py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded items-end text-trust-blue border-trust-blue tracking-widest text-lg"
                >
                  COLLECT PRIZE
                </button>
              </div>
            </div>
          ) : (
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
                    0
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
                    {typeof user === "undefined" ? (
                      <div>?</div>
                    ) : (
                      <span className="text-trust-yellow lining-nums">
                        {typeof user === "undefined"
                          ? 0
                          : user.credits - counter}
                      </span>
                    )}
                  </div>
                  <div className="font-karla font-normal text-base text-white self-end">
                    VOTE CREDITS LEFT
                  </div>
                </div>
              </div>
              <div className="flex mt-20 py-4 justify-center">
                {user?.loading ? (
                  <></>
                ) : user?.username ? (
                  <button className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg">
                    CHECKOUT VOTE
                  </button>
                ) : (
                  <a
                    href="https://quadratictrust.com/api/login"
                    className="font-raleway tracking-widest text-xl bg-trust-blue hover:bg-trust-yellow border-2 font-semibold hover:text-trust-blue text-white border-white px-12 py-4 hover:border-trust-blue rounded-md"
                  >
                    CHECKOUT VOTE
                  </a>
                )}
              </div>
            </div>
          )}
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
              VOTES GIVEN
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
