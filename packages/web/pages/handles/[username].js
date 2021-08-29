import { Fragment, useRef, useState, useContext } from "react";
import { UserContext } from "../../lib/UserContext";
import { LoggedContext } from "../../lib/LoggedContext";
import { Dialog, Transition } from "@headlessui/react";
import Head from "next/head";
import VotesReceived from "../../components/votes-received";
import Badge from "../../components/badge";
import FirstBadge from "../../components/first-badge";
import SecondBadge from "../../components/second-badge";
import ThirdBadge from "../../components/third-badge";

export default function Handle(props) {
  const [enabled] = useContext(LoggedContext);
  const [user] = useContext(UserContext);
  const [tweet, setTweet] = useState("");
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const currentHandle = props.data.user;
  const trustReceived = props.dataCandidate.data.ballots;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleVotes = (e) => {
    if (parseInt(e.target.value) ** 2 < user.credits) {
      setCounter(parseInt(e.target.value));
    } else setCounter(0);
  };

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const trustCheckout = async (e) => {
    e.preventDefault();
    const res = await fetch("https://quadratictrust.com/api/tweet", {
      body: JSON.stringify({
        message: tweet,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    if (result.success === true) {
      await checkoutVote();
      setCounter(0);
    }
    closeModal();
  };

  const checkoutVote = async (e) => {
    const res = await fetch("https://quadratictrust.com/api/vote", {
      body: JSON.stringify({
        candidate: currentHandle.username,
        score: counter,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    currentHandle.score = currentHandle.score + counter;
    currentHandle.credits = currentHandle.credits - counter * counter;
  };

  const increment = () => {
    if (isNaN(parseInt(counter))) {
      setCounter(0);
    } else if ((counter + 1) ** 2 > user.credits) {
      setCounter(counter);
    } else setCounter(counter + 1);
  };

  const decrement = () => {
    if (isNaN(parseInt(counter))) {
      setCounter(0);
    } else if (parseInt(counter) > 0) {
      setCounter(parseInt(counter) - 1);
    } else setCounter(0);
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
              <div className="flex flex-col">
                <div className="h-40 flex flex-row items-center">
                  <div className="-mt-2 md:-mt-20 mr-1.5 -ml-1 text-white">
                    {currentHandle.rank == 1 && <FirstBadge />}
                    {currentHandle.rank == 2 && <SecondBadge />}
                    {currentHandle.rank == 3 && <ThirdBadge />}
                    {(currentHandle.rank > 3 || currentHandle.rank == null) && (
                      <div className="relative items-center -mt-4 sm:-mt-1">
                        <Badge />
                        <div className="absolute items-center text-white font-karla font-bold sm:text-md md:text-xl sm:ml-5 sm:-mt-12 md:-mt-14 md:ml-7">
                          <div
                            className={
                              currentHandle.rank < 10
                                ? ""
                                : "transform rotate-90 relative -ml-1"
                            }
                          >
                            {currentHandle.rank}
                          </div>
                        </div>
                      </div>
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
                        alt={currentHandle.username}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      currentHandle.rank < 4 && currentHandle.rank != null
                        ? "ml-2 mr-1 flex flex-grow flex-col w-16 lg:w-32 items-end text-white truncate"
                        : "ml-2 mr-1 flex flex-grow flex-col w-16 lg:w-32 items-end text-trust-blue truncate"
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
                <div className="h-16 items-center">
                  <div
                    className={
                      currentHandle.rank < 4 && currentHandle.rank != null
                        ? "flex flex-col text-white"
                        : "flex flex-col text-trust-blue"
                    }
                  >
                    <div className="-mt-4 ml-16 font-karla font-bold flex-grow lg:w-auto sm:text-base md:text-lg lg:text-2xl flex-none truncate">
                      {currentHandle.name}
                    </div>
                    <div className="ml-16 font-karla font-normal flex-none lg:w-80 text-xs md:text-base truncate">
                      @{currentHandle.username}
                    </div>
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
                    disabled="true"
                    className="bg-transparent hover:bg-trust-blue font-semibold hover:text-white py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded items-end text-trust-blue border-trust-blue tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
                  <div className="font-karla font-normal text-base text-white p-6 mt-1">
                    @{currentHandle.username}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <div className="px-6 py-4 mr-10 mb-1.5">
                      <button
                        disabled={!enabled}
                        onClick={increment}
                        className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-6 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
                        disabled={!enabled}
                        onClick={decrement}
                        className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-6 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
                      disabled={!enabled}
                      type="text"
                      className="mt-16 w-56 block border-0 border-b border-trust-yellow mb-3 font-raleway font-semibold sm:text-xl md:text-2xl lg:text-4xl bg-trust-blue text-white lining-nums placeholder-white focus:border-trust-yellow focus:ring-0"
                      placeholder="0"
                      onChange={handleVotes}
                      value={counter}
                    />
                    {user?.loading ? (
                      <></>
                    ) : user?.username ? (
                      <>
                        <div className="font-karla font-normal text-base text-white self-end">
                          YOU HAVE{" "}
                          <span className="text-trust-yellow lining-nums">
                            {user.credits - counter * counter}
                          </span>
                        </div>
                        <div className="font-karla font-normal text-base text-white self-end">
                          VOTE CREDITS LEFT
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="flex mt-20 py-4 justify-center">
                  {user?.loading ? (
                    <></>
                  ) : user?.username ? (
                    <button
                      disabled={!counter}
                      onClick={openModal}
                      className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
                    >
                      CHECKOUT VOTE
                    </button>
                  ) : (
                    <a
                      href="https://quadratictrust.com/api/login"
                      className="font-raleway tracking-widest text-lg bg-trust-blue hover:bg-trust-yellow border font-semibold hover:text-trust-blue text-white border-white px-12 py-4 hover:border-trust-blue rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
                    >
                      JOIN TO VOTE
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
            <div className="flex flex-col">
              <div className="hidden h-40 md:flex flex-row items-center">
                <div className="-mt-40 md:-mt-20 mr-1.5 -ml-1 text-white">
                  {currentHandle.rank == 1 && <FirstBadge />}
                  {currentHandle.rank == 2 && <SecondBadge />}
                  {currentHandle.rank == 3 && <ThirdBadge />}
                  {(currentHandle.rank > 3 || currentHandle.rank == null) && (
                    <div className="relative items-center -mt-4 sm:-mt-1">
                      <Badge />
                      <div className="absolute items-center text-white font-karla font-bold sm:text-md md:text-xl sm:ml-5 sm:-mt-12 md:-mt-14 md:ml-7">
                        <div
                          className={
                            currentHandle.rank < 10
                              ? ""
                              : "transform rotate-90 relative -ml-1"
                          }
                        >
                          {currentHandle.rank}
                        </div>
                      </div>
                    </div>
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
                      className="h-12 w-12 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full"
                      src={currentHandle.profileUrl}
                      alt={currentHandle.username}
                    />
                  </div>
                </div>
                <div
                  className={
                    currentHandle.rank < 4 && currentHandle.rank != null
                      ? "ml-2 mr-2 flex flex-grow flex-col w-16 lg:w-32 items-end text-white truncate"
                      : "ml-2 mr-2 flex flex-grow flex-col w-16 lg:w-32 items-end text-trust-blue truncate"
                  }
                >
                  <div className="font-raleway font-semibold sm:text-xl md:text-3xl lg:text-4xl flex-none lining-nums">
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
              <div
                className={
                  currentHandle.rank < 4 && currentHandle.rank != null
                    ? "h-16 hidden md:flex flex-col sm:w-32 md:w-auto text-white"
                    : "h-16 hidden md:flex flex-col sm:w-32 md:w-auto text-trust-blue"
                }
              >
                <div className="ml-16 font-karla font-bold sm:text-base md:text-xl lg:text-2xl flex-none">
                  {currentHandle.name}
                </div>
                <div className="ml-16 font-karla font-normal flex-none text-xs md:text-base">
                  @{currentHandle.username}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-24 sm:h-24 md:hidden flex flex-row items-center">
                <div className="flex -mt-8 mr-1.5 -ml-1 text-white">
                  {currentHandle.rank == 1 && <FirstBadge />}
                  {currentHandle.rank == 2 && <SecondBadge />}
                  {currentHandle.rank == 3 && <ThirdBadge />}
                  {(currentHandle.rank > 3 || currentHandle.rank == null) && (
                    <Badge />
                  )}
                </div>
                <div
                  className={
                    currentHandle.rank < 4 && currentHandle.rank != null
                      ? "ml-1 mr-8 inline-block p-0.5 mt-2 rounded-full bg-trust-yellow"
                      : "ml-1 mr-8 inline-block p-0.5 mt-2 rounded-full bg-trust-blue"
                  }
                >
                  <img
                    className="h-20 w-20 sm:h-20 sm:w-20 rounded-full"
                    src={currentHandle.profileUrl}
                    alt={currentHandle.username}
                  />
                </div>
              </div>
              <div
                className={
                  currentHandle.rank < 4 && currentHandle.rank != null
                    ? "flex flex-row md:hidden font-karla text-lg justify-center text-white mt-4"
                    : "flex flex-row md:hidden font-karla text-lg justify-center text-trust-blue mt-4"
                }
              >
                <div className="ml-2 mr-2 truncate">{currentHandle.name}</div>
              </div>
              <div
                className={
                  currentHandle.rank < 4
                    ? "flex flex-row md:hidden font-karla text-base justify-center text-white"
                    : "flex flex-row md:hidden font-karla text-base justify-center text-trust-blue"
                }
              >
                @{currentHandle.username}
              </div>
              <div className="mt-6 flex flex-row md:hidden justify-center">
                <div
                  className={
                    currentHandle.rank < 4 && currentHandle.rank != null
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
                      {currentHandle.score ? currentHandle.score : "0"}
                    </div>
                    <div className="mb-6 font-karla flex-none text-xs">
                      VOTES RECEIVED
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
                  disabled="true"
                  className="bg-transparent hover:bg-trust-blue font-semibold hover:text-white py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded items-end text-trust-blue border-trust-blue tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
                    <button
                      disabled={!enabled}
                      className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-6 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
                      disabled={!enabled}
                      className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-6 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
                  <button className="bg-transparent hover:bg-trust-yellow font-semibold hover:text-trust-blue py-1 px-2 md:py-2 md:px-4 border hover:border-trust-blue rounded items-end text-white border-white tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue">
                    CHECKOUT VOTE
                  </button>
                ) : (
                  <a
                    href="https://quadratictrust.com/api/login"
                    className="font-raleway tracking-widest text-xl bg-trust-blue hover:bg-trust-yellow border-2 font-semibold hover:text-trust-blue text-white border-white px-12 py-4 hover:border-trust-blue rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
                  >
                    JOIN TO VOTE
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
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
          initialFocus={cancelButtonRef}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <form className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-raleway font-bold text-trust-blue"
                    >
                      CONFIRM YOUR TRUST BY TWEETING
                    </Dialog.Title>
                    <div className="mt-2">
                      <textarea
                        id="checkout"
                        onChange={handleChange}
                        name="checkout"
                        rows="3"
                        maxLength="280"
                        className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                        required
                      ></textarea>
                      <p className="mt-2 font-karla text-xs sm:text-lg leading-7 text-trust-blue">
                        Share a tweet about the person or project you are
                        supporting and why they get your vote.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="py-1 px-2 md:py-2 md:px-4 w-full inline-flex justify-center rounded border hover:border-trust-blue hover:border-2 font-karla font-semibold shadow-sm px-4 py-2 bg-trust-blue text-lg text-white hover:bg-trust-yellow hover:text-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue sm:col-start-2 sm:text-sm tracking-widest"
                    onClick={trustCheckout}
                  >
                    TWEET
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded border border-trust-blue border-2 shadow-sm font-karla px-4 py-2 bg-white text-base font-semibold text-trust-blue hover:bg-trust-yellow hover:text-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue sm:mt-0 sm:col-start-1 sm:text-sm tracking-widest"
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
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
