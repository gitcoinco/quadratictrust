import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import VotesReceived from "./votes-received";
import VotesGiven from "./votes-given";

export default function Tabs(props) {
  const username = props.handle;
  return (
    <div className="mt-8 mb-4">
      <Tab.Group>
        <Tab.List>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-trust-background mr-8 font-karla text-xl font-bold text-trust-blue"
                    : "bg-trust-background mr-8 font-karla text-xl text-trust-blue"
                }
              >
                VOTES RECEIVED
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-trust-background font-karla text-xl font-bold text-trust-blue"
                    : "bg-trust-background font-karla text-xl text-trust-blue"
                }
              >
                VOTES GIVEN
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <VotesReceived candidate={username} />
          </Tab.Panel>
          <Tab.Panel>
            <VotesGiven voter={username} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
