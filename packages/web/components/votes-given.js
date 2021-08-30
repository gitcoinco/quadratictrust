import { useEffect, useState } from "react";
import getData from "../../web/lib/utils";

export default function VotesGiven(props) {
  const voter = props.voter;
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [given, setGiven] = useState(null);

  useEffect(() => {
    getData(`https://quadratictrust.com/api/ballots?voter=${voter}`)
      .then((data) => {
        setGiven(data.data.ballots);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="mt-2 font-karla text-trust-blue text-base">
        {error.message}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-row text-trust-blue">
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          <path
            d="M6.59375 12.7125L9.40475 1"
            stroke="#0F00B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M13.1101 10.0434L2.8899 3.66903"
            stroke="#0F00B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M13.8186 5.30299L2.18084 8.40909"
            stroke="#0F00B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>COUNTING VOTES...</span>
      </div>
    );
  }

  if (given.length === 0) {
    return (
      <div className="flex flex-row mt-2 font-karla text-trust-blue">
        <span className="text-base">NO VOTES YET</span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {given.map((trust) => (
        <div
          key={trust.createdAt}
          className="mt-2 rounded-lg xl:max-w-screen-xl bg-white border-2 border-trust-blue"
        >
          <div className="h-20 flex flex-row items-center">
            <div className="ml-2 md:mr-2 mr-4 inline-block p-0.5 rounded-full bg-white">
              <img
                className="h-6 w-6 md:h-10 md:w-10 lg:h-16 lg:w-16 rounded-full"
                src={trust.candidateProfileUrl}
                alt={trust.candidate}
              />
            </div>
            <div className="flex flex-col w-32 md:w-48 lg:w-60 text-trust-blue">
              <div className="font-karla font-normal flex-none text-xs md:text-base">
                @{trust.candidate}
              </div>
            </div>
            <div className="flex flex-grow flex-col w-32 items-end mr-8 md:mr-2 lg:mr-4 text-trust-blue">
              <div className="font-raleway font-semibold sm:text-xl md:text-2xl lg:tex-4xl flex lining-nums">
                {trust.score}
              </div>
              <div className="font-karla flex text-xs">VOTES</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
