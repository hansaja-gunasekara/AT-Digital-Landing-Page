import React from "react";
import Logo from "../Assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-color">
      <div className="p-4 py-6 lg:py-8 lg:mx-14 md:mx-9 sm:mx-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div>
              <img src={Logo} className="w-[238.89px] me-3" alt="" />
              <p className="mt-5 lg:w-[413px] md:w-[438px] sm:max-w-[413px] text-white text-sm">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 mt-9 md:mt-0">
            <div>
              <h2 className="mb-6 text-[21px] text-white normal-case">
                Our Technologies
              </h2>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="https://react.dev/" className="hover:underline">
                    ReactJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Gatsby
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    NextJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    NodeJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    GraphQL
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Laravel
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[21px] text-white normal-case">
                Our Services
              </h2>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Web & Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Data & Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Google Marketing Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Search Engine Optimization
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="sm:w-[630px]">
            <hr className="my-6 border-white sm:mx-auto lg:my-8" />
            <div className="flex mt-4 text-sm sm:justify-center sm:mt-0">
              <div className="text-center">
                <a href="#" className="text-white">
                  Privacy Policy
                </a>
              </div>
              {/* <div className="flex-grow border-b border-red-800"></div> */}
              <div className="mx-4 text-white">|</div>
              <div className="text-center">
                <a href="#" className="text-white">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
