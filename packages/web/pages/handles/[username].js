import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../lib/UserContext";
import { LoggedContext } from "../../lib/LoggedContext";
import { CastContext } from "../../lib/CastContext";
import { TwitterContext } from "../../lib/TwitterContext";
import { Dialog, Transition } from "@headlessui/react";
import Head from "next/head";
import Badge from "../../components/badge";
import FirstBadge from "../../components/first-badge";
import SecondBadge from "../../components/second-badge";
import ThirdBadge from "../../components/third-badge";
import WhiteLine from "../../components/white-line";
import BlueLine from "../../components/blue-line";
import Tabs from "../../components/tabs";

export default function Handle(props) {
  const currentHandle = props.data.user;
  const [enabled] = useContext(LoggedContext);
  const [user, setUser] = useContext(UserContext);
  const [cast, setCast] = useContext(CastContext);
  const [twitterHandle, setTwitterHandle] = useContext(TwitterContext);
  var tweetBlurb = `I just voted for @${currentHandle.username} because their work is amazing! Vote for your favourite people and projects on https://quadratictrust.com #quadratictrust`;
  const [tweet, setTweet] = useState("");
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleUser = async () => {
    const res = await fetch(`https://quadratictrust.com/api/identity`);
    const result = await res.json();
    setUser(result);
  };

  useEffect(() => {
    tweetBlurb = `I just voted for @${currentHandle.username} because their work is amazing! Vote for your favourite people and projects on https://quadratictrust.com #quadratictrust`;
    setTweet(tweetBlurb);
    setCounter(0);
  }, [currentHandle]);

  useEffect(() => {
    handleUser();
  }, [cast]);

  useEffect(() => {
    if (!enabled) {
      window.localStorage.setItem("path", `/handles/${currentHandle.username}`);
    }
    setTwitterHandle(currentHandle.username);
  }, [currentHandle]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleVotes = (e) => {
    if (parseInt(e.target.value) ** 2 < user.credits) {
      setCounter(parseInt(e.target.value));
    } else setCounter(Math.floor(Math.sqrt(user.credits)));
  };

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const checkoutVote = async (e) => {
    e.preventDefault();
    setCast(true);
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
    if (result.data.newScore != 0) {
      currentHandle.score = currentHandle.score + counter;
      setCast(false);
      await trustCheckout();
      setCounter(0);
    }
    closeModal();
  };

  const trustCheckout = async (e) => {
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
        <div className="hidden lg:flex lg:flex-row">
          <div className="hidden lg:block lg:w-7/12 lg:mt-20  lg:px-4">
            <div
              className={
                currentHandle.rank < 4 && currentHandle.rank != null
                  ? "lg:rounded-lg lg:bg-trust-blue"
                  : "lg:rounded-lg lg:bg-white lg:border-2 lg:border-trust-blue"
              }
            >
              <div className="lg:flex lg:flex-col">
                <div className="lg:flex lg:flex-row lg:h-40 lg:items-center">
                  <div className="lg:-mt-2 lg:mr-1.5 lg:-ml-1 lg:text-white lg:-mt-20">
                    {currentHandle.rank == 1 && <FirstBadge />}
                    {currentHandle.rank == 2 && <SecondBadge />}
                    {currentHandle.rank == 3 && <ThirdBadge />}
                    {(currentHandle.rank > 3 || currentHandle.rank == null) && (
                      <div className="lg:relative lg:items-center lg:-mt-1">
                        <Badge />
                        <div className="lg:absolute lg:items-center lg:font-karla lg:font-bold lg:text-white lg:-mt-14 lg:ml-7 lg:text-xl">
                          <div
                            className={
                              currentHandle.rank < 10
                                ? ""
                                : "lg:transform lg:rotate-90 lg:relative lg:-ml-1.5"
                            }
                          >
                            {currentHandle.rank ? currentHandle.rank : "-"}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      className={
                        currentHandle.rank < 4 && currentHandle.rank != null
                          ? "lg:flex-none lg:ml-2 lg:mr-2 lg:inline-block lg:p-0.5 lg:rounded-full lg:bg-trust-yellow"
                          : "lg:flex-none lg:ml-2 lg:mr-2 lg:inline-block lg:p-0.5 lg:rounded-full lg:bg-trust-blue"
                      }
                    >
                      <img
                        className="lg:rounded-full lg:h-24 lg:w-24"
                        src={currentHandle.profileUrl}
                        alt={currentHandle.username}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      currentHandle.rank < 4 && currentHandle.rank != null
                        ? "lg:flex lg:flex-grow lg:flex-col lg:ml-2 lg:mr-1 lg:items-end lg:text-white lg:truncate lg:w-32"
                        : "lg:flex lg:flex-grow lg:flex-col lg:ml-2 lg:mr-1 lg:items-end lg:text-trust-blue lg:truncate lg:w-32"
                    }
                  >
                    <div className="lg:flex-none lg:font-raleway lg:font-semibold lg:text-4xl lg:lining-nums">
                      {currentHandle.credits}
                    </div>
                    <div className="lg:flex-none lg:font-karla lg:text-xs">
                      VOTE CREDITS
                    </div>
                  </div>
                  <div
                    className={
                      currentHandle.rank < 4 && currentHandle.rank != null
                        ? "lg:px-2 lg:text-white lg:px-6"
                        : "lg:px-2 lg:text-trust-blue lg:px-6"
                    }
                  >
                    {currentHandle.rank < 4 && currentHandle.rank != null && (
                      <WhiteLine />
                    )}
                    {currentHandle.rank > 3 && currentHandle.rank != null && (
                      <BlueLine />
                    )}
                    {currentHandle.rank === null && <BlueLine />}
                  </div>
                  <div
                    className={
                      currentHandle.rank < 4 && currentHandle.rank != null
                        ? "lg:flex lg:flex-col lg:w-32 lg:items-start lg:text-white lg:mr-2"
                        : "lg:flex lg:flex-col lg:w-32 lg:items-start lg:text-trust-blue lg:mr-2"
                    }
                  >
                    <div className="lg:flex-none lg:mr-4 lg:font-raleway lg:font-semibold lg:text-4xl lg:lining-nums">
                      {currentHandle.score ? currentHandle.score : "0"}
                    </div>
                    <div className="lg:flex-none lg:font-karla lg:text-xs">
                      VOTES RECEIVED
                    </div>
                  </div>
                </div>
                <div className="lg:h-16 lg:items-center">
                  <div
                    className={
                      currentHandle.rank < 4 && currentHandle.rank != null
                        ? "lg:flex lg:flex-col lg:text-white"
                        : "lg:flex lg:flex-col lg:text-trust-blue"
                    }
                  >
                    <div className="lg:flex-none lg:flex-grow lg:w-auto lg:-mt-4 lg:ml-16 lg:font-karla lg:font-bold lg:text-2xl lg:truncate">
                      {currentHandle.name}
                    </div>
                    <div className="lg:flex-none lg:w-80 lg:ml-16 lg:font-karla lg:font-normal lg:text-base lg:truncate">
                      @{currentHandle.username}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Tabs handle={currentHandle.username} />
          </div>
          <div className="hidden lg:w-5/12 lg:mt-20 lg:px-4 lg:block">
            {user?.loading ? (
              <></>
            ) : user?.username == currentHandle.username ? (
              <div className="lg:bg-white lg:border-2 lg:border-trust-blue lg:rounded-lg">
                <div className="lg:flex lg:flex-row">
                  <div className="lg:p-6 lg:font-karla lg:font-semibold lg:text-lg lg:text-trust-blue lg:tracking-widest">
                    COLLECT PRIZE
                  </div>
                </div>
                <div className="lg:flex lg:flex-col">
                  <div className="lg:flex lg:justify-center lg:mb-4 lg:font-karla lg:font-normal lg:text-base lg:text-trust-blue">
                    CONGRATULATIONS!
                  </div>
                  <div className="lg:flex lg:justify-center lg:font-karla lg:font-normal lg:text-base lg:text-trust-blue">
                    YOU ARE ON YOUR WAY
                  </div>
                  <div className="lg:flex lg:justify-center lg:font-karla lg:font-normal lg:text-base lg:text-trust-blue">
                    TO COLLECT A PRIZE
                  </div>
                  <div className="lg:flex lg:justify-center lg:font-karla lg:font-normal lg:text-base lg:text-trust-blue">
                    KEEP EARNING TRUST
                  </div>
                </div>
                <div className="lg:flex lg:justify-center lg:mt-20 lg:py-4">
                  <button
                    disabled
                    className="lg:items-end lg:bg-transparent lg:py-2 lg:px-4 lg:rounded lg:border-2 lg:font-semibold lg:text-lg lg:text-trust-blue lg:tracking-widest hover:bg-trust-blue hover:border-trust-blue hover:text-white border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
                  >
                    COLLECT PRIZE
                  </button>
                </div>
              </div>
            ) : (
              <div className="lg:bg-trust-blue lg:border-trust-blue lg:rounded-lg">
                <div className="lg:flex lg:flex-row">
                  <div className="lg:p-6 lg:font-karla lg:font-semibold lg:text-lg lg:text-white lg:tracking-widest">
                    VOTE FOR
                  </div>
                  <div className="lg:mt-1 lg:p-6 lg:font-karla lg:font-normal lg:text-base lg:text-white">
                    @{currentHandle.username}
                  </div>
                </div>
                <div className="lg:flex lg:flex-row lg:justify-between">
                  <div className="lg:flex lg:flex-col lg:ml-2">
                    <div className="lg:mb-1.5 lg:mr-10 lg:px-4 lg:py-4">
                      <button
                        disabled={!enabled}
                        onClick={increment}
                        className="lg:items-end lg:bg-transparent lg:py-2 lg:px-6 lg:rounded lg:border-2 lg:border-white lg:font-semibold lg:text-lg lg:text-white lg:tracking-widest hover:bg-trust-yellow hover:text-trust-blue hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
                    <div className="lg:px-4 lg:py-2">
                      <button
                        disabled={!enabled}
                        onClick={decrement}
                        className="lg:items-end lg:bg-transparent lg:py-2 lg:px-6 lg:rounded lg:border-2 lg:border-white lg:font-semibold lg:text-lg lg:text-white lg:tracking-widest hover:bg-trust-yellow hover:text-trust-blue hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
                  <div className="lg:flex lg:flex-col lg:mx-10">
                    <div className="lg:flex lg:self-end lg:font-karla lg:font-normal lg:text-base lg:text-white">
                      VOTES
                    </div>
                    <div className="">
                      <input
                        disabled={!enabled}
                        type="text"
                        className="lg:block lg:flex-shrink lg:w-44 lg:self-end lg:bg-trust-blue lg:mt-16 lg:mb-3 lg:placeholder-white lg:rounded-md lg:border-0 lg:border-b lg:border-trust-yellow lg:font-raleway lg:font-semibold lg:text-white lg:text-4xl lg:lining-nums focus:border-trust-yellow focus:ring-trust-yellow"
                        placeholder="0"
                        onChange={handleVotes}
                        value={counter}
                      />
                    </div>
                    {user?.loading ? (
                      <></>
                    ) : user?.username ? (
                      <>
                        <div className="lg:self-end lg:font-karla lg:font-normal lg:text-base lg:text-white">
                          YOU HAVE{" "}
                          <span className="lg:text-trust-yellow lg:lining-nums">
                            {user.credits - counter * counter}
                          </span>
                        </div>
                        <div className="lg:self-end lg:font-karla lg:font-normal lg:text-base lg:text-white">
                          VOTE CREDITS LEFT
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="lg:self-end lg:font-karla lg:font-normal lg:text-base lg:text-white">
                          YOU HAVE{" "}
                          <span className="lg:text-trust-yellow lg:lining-nums">
                            ZERO
                          </span>
                        </div>
                        <div className="lg:self-end lg:font-karla lg:font-normal lg:text-base lg:text-white">
                          VOTE CREDITS
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="lg:flex lg:mt-20 lg:py-4 lg:justify-center">
                  {user?.loading ? (
                    <></>
                  ) : user?.username ? (
                    <button
                      disabled={!counter}
                      onClick={openModal}
                      className="lg:bg-transparent lg:items-end lg:py-2 lg:px-4 lg:rounded lg:border-2 lg:border-white lg:font-raleway lg:font-semibold lg:text-lg lg:text-white lg:tracking-widest hover:bg-trust-yellow hover:text-trust-blue hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
                    >
                      CHECKOUT VOTE
                    </button>
                  ) : (
                    <a
                      href="https://quadratictrust.com/api/login"
                      className="lg:bg-trust-blue lg:px-12 lg:py-4 lg:rounded lg:border-2 lg:border-white lg:font-raleway lg:font-semibold lg:text-lg lg:text-white lg:tracking-widest hover:bg-trust-yellow hover:text-trust-blue hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
                    >
                      JOIN TO VOTE
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="block max-w-xl mx-auto mt-20 px-4 lg:hidden">
          <div
            className={
              currentHandle.rank < 4 && currentHandle.rank != null
                ? "rounded-lg bg-trust-blue"
                : "rounded-lg bg-white border-2 border-trust-blue"
            }
          >
            <div className="hidden md:flex md:flex-col">
              <div className="md:h-40 md:flex-row md:items-center md:flex">
                <div className="md:-mt-20 md:mr-1.5 md:-ml-1 md:text-white">
                  {currentHandle.rank == 1 && <FirstBadge />}
                  {currentHandle.rank == 2 && <SecondBadge />}
                  {currentHandle.rank == 3 && <ThirdBadge />}
                  {(currentHandle.rank > 3 || currentHandle.rank == null) && (
                    <div className="md:relative md:items-center md:-mt-1">
                      <Badge />
                      <div className="md:absolute md:items-center md:-mt-14 md:ml-7 md:font-karla md:font-bold md:text-xl md:text-white">
                        <div
                          className={
                            currentHandle.rank < 10
                              ? ""
                              : "md:transform md:rotate-90 md:relative md:-ml-1.5"
                          }
                        >
                          {currentHandle.rank ? currentHandle.rank : "-"}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <div
                    className={
                      currentHandle.rank < 4 && currentHandle.rank != null
                        ? "md:flex-none md:inline-block md:bg-trust-yellow md:ml-2 md:mr-2 md:p-0.5 md:rounded-full"
                        : "md:flex-none md:inline-block md:bg-trust-blue md:ml-2 md:mr-2 md:p-0.5 md:rounded-full"
                    }
                  >
                    <img
                      className="md:h-24 md:w-24 md:rounded-full"
                      src={currentHandle.profileUrl}
                      alt={currentHandle.username}
                    />
                  </div>
                </div>
                <div
                  className={
                    currentHandle.rank < 4 && currentHandle.rank != null
                      ? "md:flex md:flex-grow md:flex-col md:w-16 md:items-end md:ml-2 md:mr-2 md:text-white md:truncate"
                      : "md:flex md:flex-grow md:flex-col md:w-16 md:items-end md:ml-2 md:mr-2 md:text-trust-blue md:truncate"
                  }
                >
                  <div className="md:flex-none md:font-raleway md:font-semibold md:text-3xl md:lining-nums">
                    {currentHandle.credits}
                  </div>
                  <div className="md:flex-none md:font-karla md:text-xs">
                    VOTE CREDITS
                  </div>
                </div>
                <div
                  className={
                    currentHandle.rank < 4 && currentHandle.rank != null
                      ? "md:px-2 md:text-white"
                      : "md:px-2 md:text-trust-blue"
                  }
                >
                  {currentHandle.rank < 4 && currentHandle.rank != null && (
                    <WhiteLine />
                  )}
                  {currentHandle.rank > 3 && currentHandle.rank != null && (
                    <BlueLine />
                  )}
                  {currentHandle.rank === null && <BlueLine />}
                </div>
                <div
                  className={
                    currentHandle.rank < 4 && currentHandle.rank != null
                      ? "md:flex md:flex-col md:w-32 md:items-start md:ml-2 md:mr-1 md:text-white"
                      : "md:flex md:flex-col md:w-32 md:items-start md:ml-2 md:mr-1 md:text-trust-blue"
                  }
                >
                  <div className="md:flex-none md:mr-4 md:font-raleway md:font-semibold md:text-3xl md:lining-nums">
                    {currentHandle.score ? currentHandle.score : "0"}
                  </div>
                  <div className="md:flex-none md:font-karla md:text-xs">
                    VOTES RECEIVED
                  </div>
                </div>
              </div>
              <div
                className={
                  currentHandle.rank < 4 && currentHandle.rank != null
                    ? "hidden md:h-16 md:text-white md:w-auto md:flex md:flex-col"
                    : "hidden md:h-16 md:text-trust-blue md:w-auto md:flex md:flex-col"
                }
              >
                <div className="md:flex-none md:ml-16 md:-mt-3 md:font-karla md:font-bold md:text-lg">
                  {currentHandle.name}
                </div>
                <div className="md:flex-none md:ml-16 md:font-karla md:font-normal md:text-base">
                  @{currentHandle.username}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:hidden">
              <div className="flex flex-row items-center h-16 sm:h-20">
                <div className="flex mt-8 sm:-mt-4 sm:mr-1.5 sm:ml-0.5 text-white">
                  {currentHandle.rank == 1 && <FirstBadge />}
                  {currentHandle.rank == 2 && <SecondBadge />}
                  {currentHandle.rank == 3 && <ThirdBadge />}
                  {(currentHandle.rank > 3 || currentHandle.rank == null) && (
                    <div className="relative items-center">
                      <Badge />
                      <div className="absolute items-center -mt-16 ml-7 sm:ml-6 md:ml-7 font-karla font-bold text-xl text-white">
                        <div
                          className={
                            currentHandle.rank < 10
                              ? "ml-0 mt-1 sm:-ml-1 sm:mt-4"
                              : "transform rotate-90 relative -ml-1.5 sm:-ml-3.5 sm:mt-2"
                          }
                        >
                          {currentHandle.rank ? currentHandle.rank : "-"}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={
                    currentHandle.rank < 4 && currentHandle.rank != null
                      ? "mt-8 ml-1 mr-8 inline-block p-0.5 rounded-full bg-trust-yellow sm:mt-16"
                      : "mt-8 ml-1 mr-8 inline-block p-0.5 rounded-full bg-trust-blue sm:mt-16"
                  }
                >
                  <img
                    className="h-16 w-16 rounded-full sm:h-20 sm:w-20"
                    src={currentHandle.profileUrl}
                    alt={currentHandle.username}
                  />
                </div>
              </div>
              <div
                className={
                  currentHandle.rank < 4 && currentHandle.rank != null
                    ? "flex flex-row justify-center mt-4 font-karla text-lg text-white md:hidden"
                    : "flex flex-row justify-center mt-4 font-karla text-lg text-trust-blue md:hidden"
                }
              >
                <div className="mt-1 sm:-mt-2 ml-2 mr-2 font-semibold truncate">
                  {currentHandle.name}
                </div>
              </div>
              <div
                className={
                  currentHandle.rank < 4 && currentHandle.rank != null
                    ? "flex flex-row justify-center mb-4 font-karla text-base text-white"
                    : "flex flex-row justify-center mb-4 font-karla text-base text-trust-blue"
                }
              >
                @{currentHandle.username}
              </div>
              <div className="flex flex-row justify-center mt-6">
                <div className="flex-1">
                  <div
                    className={
                      currentHandle.rank < 4 && currentHandle.rank != null
                        ? "flex-grow text-white"
                        : "flex-grow text-trust-blue"
                    }
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex-none font-raleway font-semibold text-3xl lining-nums">
                        {currentHandle.credits}
                      </div>
                      <div className="flex-none mb-6 font-karla text-xs">
                        VOTE CREDITS
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {currentHandle.rank < 4 && currentHandle.rank != null && (
                    <WhiteLine />
                  )}
                  {currentHandle.rank > 3 && currentHandle.rank != null && (
                    <BlueLine />
                  )}
                  {currentHandle.rank === null && <BlueLine />}
                </div>
                <div className="flex-1">
                  <div
                    className={
                      currentHandle.rank < 4 && currentHandle.rank != null
                        ? "flex-grow text-white"
                        : "flex-grow text-trust-blue"
                    }
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex-none font-raleway font-semibold text-3xl lining-nums">
                        {currentHandle.score ? currentHandle.score : "0"}
                      </div>
                      <div className="flex-none mb-6 font-karla text-xs">
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
            <div className="mt-10 bg-white border-2 border-trust-blue rounded-lg">
              <div className="flex flex-row">
                <div className="p-6 font-karla font-semibold text-lg text-trust-blue tracking-widest">
                  COLLECT PRIZE
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center mb-4 font-karla font-normal text-base text-trust-blue">
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
              <div className="flex justify-center mt-20 py-4">
                <button
                  disabled
                  className="items-end py-1 px-2 bg-transparent border border-trust-blue rounded font-semibold text-lg text-trust-blue tracking-widest hover:bg-trust-blue hover:border-trust-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue md:py-2 md:px-4"
                >
                  COLLECT PRIZE
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="hidden sm:block sm:mt-10 sm:bg-trust-blue sm:border-trust-blue sm:rounded-lg">
                <div className="sm:flex sm:flex-row">
                  <div className="sm:p-6 sm:font-karla sm:font-semibold sm:text-lg sm:text-white sm:tracking-widest">
                    VOTE FOR
                  </div>
                  <div className="sm:mt-1 sm:p-6 sm:font-karla sm:font-normal sm:text-base sm:text-white">
                    @{currentHandle.username}
                  </div>
                </div>
                <div className="sm:flex sm:flex-row">
                  <div className="sm:flex sm:flex-col">
                    <div className="sm:mb-1.5 sm:mr-10 sm:px-6 sm:py-4">
                      <button
                        disabled={!enabled}
                        onClick={increment}
                        className="sm:items-end sm:bg-transparent sm:py-2 sm:px-4 sm:border-2 sm:border-white sm:rounded sm:font-semibold sm:text-lg sm:text-white sm:tracking-widest hover:bg-trust-yellow hover:text-trust-blue hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue md:py-2 md:px-6"
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
                    <div className="sm:px-6 sm:py-2">
                      <button
                        disabled={!enabled}
                        onClick={decrement}
                        className="sm:items-end sm:bg-transparent sm:py-2 sm:px-4 sm:rounded sm:border-2 sm:border-white sm:font-semibold sm:text-lg sm:text-white sm:tracking-widest hover:bg-trust-yellow hover:text-trust-blue hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue md:py-2 md:px-6"
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
                  <div className="sm:flex sm:flex-col sm:ml-32 md:ml-32">
                    <div className="sm:flex sm:font-karla sm:font-normal sm:text-base sm:text-white sm:self-end">
                      VOTES
                    </div>
                    <input
                      disabled={!enabled}
                      type="text"
                      className="sm:w-60 md:w-56 sm:bg-trust-blue sm:mt-16 sm:mb-3 sm:placeholder-white sm:rounded-md sm:border-0 sm:border-b sm:border-trust-yellow sm:font-raleway sm:font-semibold sm:text-4xl sm:text-white sm:lining-nums focus:border-trust-yellow focus:ring-trust-yellow"
                      placeholder="0"
                      onChange={handleVotes}
                      value={counter}
                    />
                    {user?.loading ? (
                      <></>
                    ) : user?.username ? (
                      <>
                        <div className="sm:self-end sm:font-karla sm:font-normal sm:text-base sm:text-white">
                          YOU HAVE{" "}
                          <span className="sm:text-trust-yellow sm:lining-nums">
                            {user.credits - counter * counter}
                          </span>
                        </div>
                        <div className="sm:self-end sm:font-karla sm:font-normal sm:text-base sm:text-white">
                          VOTE CREDITS LEFT
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="sm:self-end sm:font-karla sm:font-normal sm:text-base sm:text-white">
                          YOU HAVE{" "}
                          <span className="sm:text-trust-yellow sm:lining-nums">
                            ZERO
                          </span>
                        </div>
                        <div className="sm:self-end sm:font-karla sm:font-normal sm:text-base sm:text-white">
                          VOTE CREDITS
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="sm:flex sm:justify-center sm:mt-20 sm:py-4">
                  {user?.loading ? (
                    <></>
                  ) : user?.username ? (
                    <button
                      disabled={!counter}
                      onClick={openModal}
                      className="sm:bg-transparent sm:items-end sm:py-1 sm:px-2 sm:rounded sm:border-2 sm:border-white sm:font-raleway sm:font-semibold sm:text-lg sm:text-white sm:tracking-widest hover:bg-trust-yellow hover:text-trust-blue sm:border hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue md:py-2 md:px-4"
                    >
                      CHECKOUT VOTE
                    </button>
                  ) : (
                    <a
                      href="https://quadratictrust.com/api/login"
                      className="sm:bg-trust-blue sm:px-12 sm:py-4 sm:rounded sm:border-2 sm:border-white sm:font-raleway sm:font-semibold sm:text-xl sm:text-white sm:tracking-widest hover:bg-trust-yellow hover:text-trust-blue hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
                    >
                      JOIN TO VOTE
                    </a>
                  )}
                </div>
              </div>
              <div className="sm:hidden mt-10 bg-trust-blue border-trust-blue rounded-lg">
                <div className="flex flex-row">
                  <div className="p-6 mx-auto font-karla font-semibold text-lg text-white tracking-widest">
                    VOTE FOR
                  </div>
                  <div className="mx-auto mt-1 p-6 font-karla font-normal text-base text-white">
                    @{currentHandle.username}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div className="mb-2 mx-auto px-6 py-4">
                      <button
                        disabled={!enabled}
                        onClick={increment}
                        className="items-end bg-transparent py-2 px-4 border-2 border-white rounded font-semibold text-lg text-white tracking-widest hover:bg-trust-yellow hover:text-trust-blue hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
                    <div className="mb-2 mx-auto px-6 py-4">
                      <button
                        disabled={!enabled}
                        onClick={decrement}
                        className="items-end bg-transparent py-2 px-4 rounded border-2 border-white font-semibold text-lg text-white tracking-widest hover:bg-trust-yellow hover:text-trust-blue hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
                  <div className="flex flex-col mx-auto">
                    <div className="flex font-karla font-normal text-base text-white self-end">
                      VOTES
                    </div>
                    <input
                      disabled={!enabled}
                      type="text"
                      className="w-60 bg-trust-blue mt-8 mb-3 placeholder-white rounded border-0 border-b border-trust-yellow font-raleway font-semibold text-white lining-nums focus:border-trust-yellow focus:ring-0 text-3xl"
                      placeholder="0"
                      onChange={handleVotes}
                      value={counter}
                    />
                    {user?.loading ? (
                      <></>
                    ) : user?.username ? (
                      <>
                        <div className="mx-auto font-karla font-normal text-base text-white">
                          YOU HAVE{" "}
                          <span className="text-trust-yellow lining-nums">
                            {user.credits - counter * counter}
                          </span>
                        </div>
                        <div className="mx-auto font-karla font-normal text-base text-white">
                          VOTE CREDITS LEFT
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="self-end font-karla font-normal text-base text-white">
                          YOU HAVE{" "}
                          <span className="text-trust-yellow lining-nums">
                            ZERO
                          </span>
                        </div>
                        <div className="self-end font-karla font-normal text-base text-white">
                          VOTE CREDITS
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-center mt-20 py-4">
                  {user?.loading ? (
                    <></>
                  ) : user?.username ? (
                    <button
                      disabled={!counter}
                      onClick={openModal}
                      className="items-end bg-transparent py-1 px-2 rounded border-2 border-white text-lg font-semibold text-white tracking-widest hover:bg-trust-yellow hover:text-trust-blue border hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
                    >
                      CHECKOUT VOTE
                    </button>
                  ) : (
                    <a
                      href="https://quadratictrust.com/api/login"
                      className="bg-trust-blue px-12 py-4 rounded border-2 border-white font-raleway font-semibold text-xl text-white tracking-widest hover:bg-trust-yellow hover:text-trust-blue hover:border-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
                    >
                      JOIN TO VOTE
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
          <Tabs handle={currentHandle.username} />
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
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
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
                        rows="4"
                        maxLength="280"
                        defaultValue={tweetBlurb}
                        className="max-w-lg shadow-sm block w-full font-karla focus:ring-trust-blue focus:border-trust-blue sm:text-sm border-2 border-trust-blue rounded-md"
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
                    onClick={checkoutVote}
                  >
                    TWEET
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded border-trust-blue border-2 shadow-sm font-karla px-4 py-2 bg-white text-base font-semibold text-trust-blue hover:bg-trust-yellow hover:text-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue sm:mt-0 sm:col-start-1 sm:text-sm tracking-widest"
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
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
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}
