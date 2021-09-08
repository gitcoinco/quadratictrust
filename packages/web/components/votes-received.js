import { useContext, useEffect, useState } from "react";
import { CastContext } from "../lib/CastContext";
import { TwitterContext } from "../lib/TwitterContext";
import QuadraticReceived from "../components/quadratic-received";
import getData from "../../web/lib/utils";

export default function VotesReceived(props) {
  const candidate = props.candidate;
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [received, setReceived] = useState(null);
  const [cast] = useContext(CastContext);
  const [twitterHandle] = useContext(TwitterContext);

  useEffect(() => {
    getData(`https://quadratictrust.com/api/ballots?candidate=${candidate}`)
      .then((data) => {
        setReceived(data.data.ballots);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [candidate, cast, twitterHandle]);

  if (error) {
    return (
      <div className="mt-2 font-karla text-trust-blue text-base">
        {error.message}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-row mt-2 font-karla text-trust-blue">
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
        <span className="text-base">COUNTING VOTES...</span>
      </div>
    );
  }

  if (received.length === 0) {
    return (
      <div className="flex flex-row mt-2 font-karla text-trust-blue">
        <span className="text-base">NO VOTES YET</span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {received.length != 0 && <QuadraticReceived votes={received} />}
    </div>
  );
}
