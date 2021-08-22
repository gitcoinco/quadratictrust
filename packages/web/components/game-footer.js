import { useContext } from "react";
import { UserContext } from "../lib/UserContext";
import Letterhead from "./letterhead";
import Link from "next/link";

export default function GameFooter() {
  const [user] = useContext(UserContext);
  return (
    <div>
      <footer className="font-raleway uppercase">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <Letterhead />
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {user?.loading ? (
              <></>
            ) : user?.username ? (
              <>
                <div className="px-5 py-2">
                  <a
                    href="https://quadratictrust.com/api/optout"
                    className="text-base text-trust-blue hover:text-trust-blue"
                  >
                    Opt-out
                  </a>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="px-5 py-2">
              <Link href="/about">
                <a className="text-base text-trust-blue hover:text-trust-blue">
                  About
                </a>
              </Link>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://gitcoin.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-trust-blue hover:text-trust-blue"
              >
                Gitcoin
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://moonshotcollective.space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-trust-blue hover:text-trust-blue"
              >
                Moonshot Collective
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-trust-blue hover:text-trust-blue"
              >
                License
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="mailto:quadratictrust@gitcoin.co"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Email</span>
              <svg
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="#0F00B7"
                aria-hidden="true"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a
              href="https://github.com/gitcoinco/quadratictrust"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="#0F00B7"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
