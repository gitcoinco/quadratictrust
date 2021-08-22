import { useContext } from "react";
import { UserContext } from "../lib/UserContext";
import Head from "next/head";
import Image from "next/image";
import quadratic from "../public/quadratic.svg";
import people from "../public/people.svg";
import participation from "../public/participation.svg";
import trust from "../public/trust.svg";

export default function About() {
  const [user] = useContext(UserContext);
  return (
    <div className="mt-16 font-karla text-xs sm:text-lg leading-7 text-trust-blue">
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
          <div className="flex mt-4 sm:hidden justify-center">
            Quadratic Trust is a challenge where members of the
          </div>
          <div className="flex sm:hidden justify-center">
            community can vote to support you and your work
          </div>
          <div className="flex sm:hidden justify-center">
            but instead of supporting you with money
          </div>
          <div className="flex sm:hidden justify-center">
            like with Quadratic Funding, they support you
          </div>
          <div className="flex sm:hidden justify-center">
            with their social capital in the community
          </div>
          <div className="hidden sm:flex justify-center">
            Quadratic Trust is a challenge where members of the community
          </div>
          <div className="hidden sm:flex justify-center">
            can vote to support you and your work - but instead of supporting
          </div>
          <div className="hidden sm:flex justify-center">
            you with money, like with Quadratic Funding, they support you
          </div>
          <div className="hidden sm:flex justify-center">
            with their social capital in the community.
          </div>
          <div className="flex mx-auto max-w-max">
            <svg
              className="mt-10 md:h-full md:w-full"
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
          <div className="hidden sm:flex flex-col">
            <div className="justify-center mx-auto">To participate,</div>
            <div className="justify-center mx-auto">share a tweet</div>
            <div className="justify-center mx-auto">about the person</div>
            <div className="justify-center mx-auto">you`re supporting</div>
            <div className="justify-center mx-auto">and why</div>
            <div className="justify-center mx-auto mb-4">
              they get your vote.
            </div>
          </div>
          <div className="flex sm:hidden flex-col">
            <div className="justify-center mx-auto">To participate,</div>
            <div className="justify-center mx-auto">share a tweet</div>
            <div className="justify-center mx-auto">about the person</div>
            <div className="justify-center mx-auto">you`re supporting</div>
            <div className="justify-center mx-auto">and why they get</div>
            <div className="justify-center mx-auto mb-4">your vote.</div>
          </div>
        </div>
        <div className="hidden sm:flex">
          <svg
            width="1"
            height="660"
            viewBox="0 0 1 660"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="660"
              x2="0.500018"
              y2="-2.18557e-08"
              stroke="#0F00B7"
            />
          </svg>
        </div>
        <div className="flex sm:hidden">
          <svg
            width="1"
            height="437"
            viewBox="0 0 1 437"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="437"
              x2="0.500018"
              y2="-2.18557e-08"
              stroke="#0F00B7"
            />
          </svg>
        </div>

        <div className="flex flex-col mt-4">
          <Image src={trust} alt="trust" />
          <div className="hidden sm:flex flex-col">
            <div className="justify-center mx-auto">
              Your follower count on Twitter
            </div>
            <div className="justify-center mx-auto">determines the number</div>
            <div className="justify-center mx-auto">of voting credits</div>
            <div className="justify-center mx-auto">
              you have to distribute{" "}
            </div>
            <div className="justify-center mx-auto">amongst the people</div>
            <div className="justify-center mx-auto mb-4">
              you want to vote for.
            </div>
          </div>
          <div className="flex sm:hidden flex-col">
            <div className="justify-center mx-auto">Your follower count on</div>
            <div className="justify-center mx-auto">Twitter determines the</div>
            <div className="justify-center mx-auto">
              number of voting credits
            </div>
            <div className="justify-center mx-auto">you have to distribute</div>
            <div className="justify-center mx-auto">amongst the people the</div>
            <div className="justify-center mx-auto mb-4">
              people you want to vote for.
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
        lg:-mt-16
        py-12
        px-4
        sm:px-6
        lg:py-16
        lg:px-8
        lg:flex
        md:items-center
        md:justify-between
        space-y-5
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
          <div className="flex sm:hidden justify-center">
            Just like with Quadratic Funding, the number of people
          </div>
          <div className="flex sm:hidden justify-center">
            who give you votes matters more than the number
          </div>
          <div className="flex sm:hidden justify-center">
            of votes they give you.
          </div>
          <div className="hidden sm:flex justify-center">
            Just like with Quadratic Funding, the number of people who give
          </div>
          <div className="hidden sm:flex justify-center">
            you votes matters more than the number of votes they give you.
          </div>
          <svg
            className="hidden md:flex mt-8"
            width="700"
            height="1"
            viewBox="0 0 700 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="700" y2="0.5" stroke="#0F00B7" />
          </svg>
          <div className="hidden sm:flex md:hidden justify-center mt-8">
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
          <div className="flex sm:hidden justify-center mt-8">
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
      <div className="-mt-20 flex flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex md:items-center md:justify-between space-y-5">
        <div>
          <div className="flex sm:hidden justify-center">
            Get started by supporting your favorite people today
          </div>
          <div className="flex sm:hidden justify-center">
            - the winner gets a special NFT!
          </div>
          <div className="hidden sm:flex justify-center">
            Get started by supporting your favorite people today -
          </div>
          <div className="hidden sm:flex justify-center">
            the winner gets a special NFT!
          </div>
        </div>
        {user?.loading ? (
          <></>
        ) : user?.username == null ? (
          <div className="flex justify-center">
            <a
              href="https://quadratictrust.com/api/login"
              className="font-raleway tracking-widest text-xl bg-trust-blue hover:bg-trust-yellow border-2 font-semibold hover:text-trust-blue text-white border-trust-blue px-12 py-4 hover:border-trust-blue rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
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
