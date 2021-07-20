export default function VotesReceived(props) {
  const trustReceived = props.votesReceived;
  return (
    <div className="max-w-6xl mx-auto">
      {trustReceived.map((trust) => (
        <div
          key={trust.createdAt}
          className="mt-2 rounded-lg xl:max-w-screen-xl bg-white border-2 border-trust-blue"
        >
          <div className="h-20 flex flex-row items-center">
            <div className="ml-2 md:mr-2 mr-4 inline-block p-0.5 rounded-full bg-white">
              <img
                className="h-6 w-6 md:h-10 md:w-10 lg:h-16 lg:w-16 rounded-full"
                src={trust.voterProfileUrl}
                alt={trust.voter}
              />
            </div>
            <div className="flex flex-col w-32 md:w-48 lg:w-60 text-trust-blue">
              <div className="font-karla font-normal flex-none text-xs md:text-base">
                @{trust.voter}
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
