import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="flex items-end w-full bg-white">
        <footer className="w-full text-gray-700 bg-gray-100 body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <Link
                to="/"
                className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
              >
                <img className="h-10 w-10" src="/alpha.png" alt="Alpha" />
              </Link>
              <p className="mt-2 text-sm text-gray-500">Coffee and Code!!</p>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <Link
                    to="https://github.com/sanyamk0"
                    className="text-gray-500 cursor-pointer hover:text-gray-700"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/sanyamkumar002/"
                    className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  About
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Alpha
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Careers
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Blog
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Support
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Contact Support
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Help Resources
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Release Updates
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Platform
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Terms &amp; Privacy
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Pricing
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      FAQ
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Contact
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Send a Message
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Request a Quote
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                      +123-456-7890
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm text-gray-700 capitalize xl:text-center">
                © 2023 All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
