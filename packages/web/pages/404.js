import Link from "next/link";
import Image from "next/image";
import sparks from "../public/trusty404.svg";
export default function Custom404() {
  return (
    <div className="max-w-7xl mx-auto -mt-20 px-4 py-16 font-raleway text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
      <p className="mb-2 text-base font-semibold text-trust-blue uppercase tracking-wide lining-nums">
        404 error
      </p>
      <h1 className="mt-2 mb-4 text-4xl font-extrabold text-trust-blue tracking-tight uppercase sm:text-5xl">
        Uh oh! Don&apos;t lose your trust.
      </h1>
      <Image src={sparks} alt="Trust Sparks" />
      <p className="mt-2 text-lg font-medium text-trust-blue">
        It looks like the page you’re looking for doesn&apos;t exist.
      </p>
      <div className="mt-6">
        <Link href="/">
          <a className="inline-flex items-center px-4 py-2 border-2 border-trust-blue rounded text-lg font-semibold text-trust-blue bg-white uppercase hover:bg-trust-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue">
            Go back home
          </a>
        </Link>
      </div>
    </div>
  );
}
