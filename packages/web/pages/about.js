import { useContext, useEffect } from "react";
import { UserContext } from "../lib/UserContext";
import { LoggedContext } from "../lib/LoggedContext";
import Head from "next/head";
import Image from "next/image";
import quadratic from "../public/quadratic.svg";
import people from "../public/people.svg";
import participation from "../public/participation.svg";
import trust from "../public/trust.svg";

export default function About() {
  const [user] = useContext(UserContext);
  const [enabled] = useContext(LoggedContext);
  useEffect(() => {
    if (!enabled) {
      window.localStorage.setItem("path", "/about");
    }
  }, []);
  return (
    <div className="mt-16 font-karla text-xs leading-7 text-trust-blue sm:text-lg">
      <Head>
        <title>About | Quadratic Trust</title>
        <meta
          name="description"
          content="Use the trust you have built to support people you trust"
        />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="canonical" href="https://quadratictrust.com/about" />
      </Head>
      <div className="flex flex-col max-w-4xl mx-auto justify-center px-4">
        <Image src={quadratic} alt="Quadratic" />
        <div>
          <div className="hidden justify-center sm:flex">
            Quadratic Trust is a challenge where members of the community
          </div>
          <div className="hidden justify-center sm:flex">
            can vote to support you and your work - but instead of supporting
          </div>
          <div className="hidden justify-center sm:flex">
            you with money, like with Quadratic Funding, they support you
          </div>
          <div className="hidden justify-center sm:flex">
            with their social capital in the community.
          </div>
          <div className="flex justify-center mt-4 sm:hidden">
            Quadratic Trust is a challenge where members of the
          </div>
          <div className="flex justify-center sm:hidden">
            community can vote to support you and your work
          </div>
          <div className="flex justify-center sm:hidden">
            but instead of supporting you with money
          </div>
          <div className="flex justify-center sm:hidden">
            like with Quadratic Funding, they support you
          </div>
          <div className="flex justify-center sm:hidden">
            with their social capital in the community
          </div>
          <div className="flex justify-center mt-6 -mb-1">
            <a
              href="https://anneconnelly.medium.com/quadratic-trust-339e3569475d"
              className="font-raleway tracking-widest text-lg md:text-xl bg-trust-blue hover:bg-trust-yellow border-2 font-semibold hover:text-trust-blue text-white border-trust-blue px-12 py-4 hover:border-trust-blue rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
            >
              READ THE BLOG
            </a>
          </div>
          <div className="flex max-w-max mx-auto">
            <svg
              className="md:h-full md:w-full mt-10"
              width="700"
              height="1"
              viewBox="0 0 700 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="700" y2="0.5" stroke="#0F00B7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row max-w-4xl mx-auto justify-center space-x-4 px-4">
        <div className="flex flex-col mt-4">
          <Image className="flex-1" src={participation} alt="Participation" />
          <div className="hidden sm:flex sm:flex-col">
            <div className="justify-center mx-auto">
              The number of people who
            </div>
            <div className="mx-auto justify-center">
              follow you on Twitter is
            </div>
            <div className="mx-auto justify-center">
              used as a proxy for the
            </div>
            <div className="mx-auto justify-center">trust you have earned</div>
            <div className="mx-auto justify-center">in the community.</div>
            <div className="mx-auto justify-center">Your follower count is</div>
            <div className="mx-auto justify-center">the number of voting</div>
            <div className="mx-auto justify-center mb-4">
              credits you receive.
            </div>
          </div>
          <div className="flex flex-col sm:hidden">
            <div className="mx-auto justify-center">
              The number of people who
            </div>
            <div className="mx-auto justify-center">follow you on Twitter </div>
            <div className="mx-auto justify-center">is used as a proxy for</div>
            <div className="mx-auto justify-center">
              the trust you have earned
            </div>
            <div className="mx-auto justify-center">in the community.</div>
            <div className="mx-auto justify-center">
              Your follower count is the
            </div>
            <div className="mx-auto justify-center">
              number of voting credits
            </div>
            <div className="mx-auto justify-center mb-4">you receive.</div>
          </div>
        </div>
        <div className="hidden sm:flex">
          <svg
            width="1"
            height="710"
            viewBox="0 0 1 710"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="710"
              x2="0.500018"
              y2="-2.18557e-08"
              stroke="#0F00B7"
            />
          </svg>
        </div>
        <div className="flex sm:hidden">
          <svg
            width="1"
            height="535"
            viewBox="0 0 1 535"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="535"
              x2="0.500018"
              y2="-2.18557e-08"
              stroke="#0F00B7"
            />
          </svg>
        </div>
        <div className="flex flex-col mt-4">
          <Image src={trust} alt="Trust" />
          <div className="hidden sm:flex sm:flex-col">
            <div className="mx-auto justify-center">
              To participate, select the
            </div>
            <div className="mx-auto justify-center">number of vote credits</div>
            <div className="mx-auto justify-center">you want to give to</div>
            <div className="mx-auto justify-center">
              a particular twitter account.
            </div>
            <div className="mx-auto justify-center">
              Share a tweet about the
            </div>
            <div className="mx-auto justify-center">
              person or project you are
            </div>
            <div className="mx-auto justify-center">supporting and why</div>
            <div className="mx-auto justify-center mb-4">
              they get your vote.
            </div>
          </div>
          <div className="flex flex-col sm:hidden">
            <div className="mx-auto justify-center">
              To participate, select the
            </div>
            <div className="mx-auto justify-center">number of vote credits</div>
            <div className="mx-auto justify-center">you want to give to a</div>
            <div className="mx-auto justify-center">
              particular twitter account.
            </div>
            <div className="mx-auto justify-center">
              Share a tweet about the
            </div>
            <div className="mx-auto justify-center">
              person or project you are
            </div>
            <div className="mx-auto justify-center">supporting and why</div>
            <div className="mx-auto justify-center mb-4">
              they get your vote.
            </div>
          </div>
        </div>
      </div>
      <div
        className="
        flex flex-col
        max-w-3xl
        mx-auto
        -mt-12
        space-y-5
        py-12
        px-4
        sm:px-6
        md:items-center
        md:justify-between
        lg:py-16
        lg:px-8
        lg:-mt-16
        lg:flex 
      "
      >
        <svg
          className="h-full w-full mb-6"
          width="700"
          height="1"
          viewBox="0 0 700 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="700" y2="0.5" stroke="#0F00B7" />
        </svg>
        <Image src={people} alt="People" />
        <div>
          <div className="flex justify-center sm:hidden">
            Just like with Quadratic Funding, the number of people
          </div>
          <div className="flex justify-center sm:hidden">
            who give you votes matters more than the number
          </div>
          <div className="flex justify-center sm:hidden">
            of votes they give you.
          </div>
          <div className="hidden justify-center sm:flex">
            Just like with Quadratic Funding, the number of people who give
          </div>
          <div className="hidden justify-center sm:flex">
            you votes matters more than the number of votes they give you.
          </div>
          <svg
            className="hidden mt-8 md:flex"
            width="700"
            height="1"
            viewBox="0 0 700 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="700" y2="0.5" stroke="#0F00B7" />
          </svg>
          <div className="hidden justify-center mt-8 sm:flex md:hidden">
            <svg
              width="600"
              height="1"
              viewBox="0 0 700 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="700" y2="0.5" stroke="#0F00B7" />
            </svg>
          </div>
          <div className="flex justify-center mt-8 sm:hidden">
            <svg
              className="w-screen"
              height="1"
              viewBox="0 0 700 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="700" y2="0.5" stroke="#0F00B7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-7xl mx-auto -mt-20 py-12 px-4 space-y-5 sm:px-6 md:items-center md:justify-between lg:py-16 lg:px-8 lg:flex">
        <div>
          <div className="flex justify-center sm:hidden">Some rules:</div>
          <div className="flex justify-center sm:hidden">
            - You can&apos;t vote yourself
          </div>
          <div className="flex justify-center sm:hidden">
            - You can only submit votes for someone once
          </div>
          <div className="flex justify-center sm:hidden">
            - Once your votes are submitted, you can&apos;t get them back
          </div>
          <div className="flex justify-center mt-8 sm:hidden">
            Get started by supporting your favorite people today
          </div>
          <div className="flex justify-center sm:hidden">
            - the winner gets a special NFT!
          </div>
          <div className="hidden sm:flex justify-center">Some rules:</div>
          <div className="hidden sm:flex justify-center">
            - You can&apos;t vote yourself
          </div>
          <div className="hidden justify-center sm:flex">
            - You can only submit votes for someone once
          </div>
          <div className="hidden justify-center sm:flex">
            - Once your votes are submitted, you can&apos;t get them back
          </div>
          <div className="hidden justify-center mt-8 sm:flex">
            Get started by supporting your favorite people today -
          </div>
          <div className="hidden justify-center sm:flex">
            the winner gets a special NFT!
          </div>
        </div>
        {user?.loading ? (
          <></>
        ) : user?.username == null ? (
          <div className="flex justify-center">
            <a
              href="https://quadratictrust.com/api/login"
              className="font-raleway tracking-widest text-lg md:text-xl bg-trust-blue hover:bg-trust-yellow border-2 font-semibold hover:text-trust-blue text-white border-trust-blue px-12 py-4 hover:border-trust-blue rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
            >
              JOIN
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
