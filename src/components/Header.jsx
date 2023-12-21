import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";

const Header = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelection = () => {
    setIsSelected(!isSelected);
    console.log(isSelected);
  };

  return (
    <header>
      <nav className="bg-primary-color border-gray-200 px-4 lg:px-6 py-2.5 h-[77px] flex flex-col justify-center relative">
        <div className="flex items-center justify-between lg:mx-14 md:mx-9 sm:mx-4">
          <a className="flex items-center">
            <img
              src={Logo}
              classNameName="mr-3 w-[238.89px] bg-green-500"
              alt=""
            />
          </a>
          <div className="flex items-center justify-end w-full md:order-2 md:w-0">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={handleSelection}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                width="31"
                height="25"
                viewBox="0 0 31 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="31" height="4" rx="2" fill="white" />
                <rect y="10.5" width="31" height="4" rx="2" fill="white" />
                <rect y="20.5" width="31" height="4" rx="2" fill="white" />
              </svg>
            </button>
          </div>
          <div className="md:w-full md:flex md:justify-end">
            <div
              className={
                "items-center justify-between w-full md:flex md:w-auto md:order-1 absolute md:static z-50 bg-primary-color top-full right-0 left-0 " +
                (isSelected ? "block" : "hidden")
              }
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white border-gray-100 bg-primary-700 md:border-0 border-y md:bg-transparent md:text-primary-700 md:p-0"
                    aria-current="page"
                  >
                    SERVICES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 md:border-0 md:hover:text-primary-700 md:p-0"
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 md:border-0 md:hover:text-primary-700 md:p-0"
                  >
                    CONTACT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 md:border-0 md:hover:text-primary-700 md:p-0"
                  >
                    CAREERS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
