import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import logo from "../assets/Ellipse 303.png";
import brand from "../assets/OSTELLO.png";
import Courses from "./Courses/Courses";
import { Transition } from "@headlessui/react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="max-w-8xl mx-auto bg-white">
        <div className="flex pt-4">
          <div className="flex align-center justify-center sm: pl-5">
            <img className="w-104" src={logo} alt="" />
          </div>
          <div className="flex align-center justify-center">
            <img className="w-104 h-5 pl-2 mt-3" src={brand} alt="" />
          </div>
        </div>
        <div className="-mr-2 md:hidden flex absolute right-5 top-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-white inline-flex items-center justify-center p-1 rounded-xl text-brand-1 transition duration-300 ease-in-out hover:text-white border-2 border-white hover:bg-brand-1 focus:outline-none mt-2 "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
			<div className="hidden md:block md:min-h-screen md:w-80 xl:w-96">
                <Sidebar></Sidebar>
              </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden " id="mobile-menu">
              <div ref={ref} className="md:min-h-screen md:w-80 xl:w-96">
                <Sidebar></Sidebar>
              </div>
            </div>
          )}
        </Transition>
        <div className="flex flex-col">
          <Courses />
        </div>
      </div>
    </>
  );
};

export default Home;
