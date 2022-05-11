import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <>
      <header className="stick top-0 z-50 grid grid-cols-2 lg:grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* logo */}
        <div className="relative flex items-center h-10 my-auto cursor-pointer">
          <Image
            src={"https://links.papareact.com/qd3"}
            layout="fill"
            objectFit="contain"
            objectPosition={"left"}
          />
        </div>

        {/* search box */}
        <div className="hidden lg:inline-flex items-center lg:border-2 rounded-full lg:shadow-sm">
          <input
            className="hidden lg:inline-flex flex-grow outline-none pl-5 bg-transparent text-sm text-gray-600 placeholder-gray-400"
            type="text"
            placeholder="Where are you going?"
          />
          <SearchIcon className=" h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer lg:mx-2" />
        </div>

        {/* right section */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <SearchIcon className="lg:hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer lg:mx-2" />
          <p className="hidden lg:inline-flex cursor-pointer">Become host</p>
          <GlobeAltIcon className="hidden sm:inline-flex h-6 cursor-pointer" />
          <div className="flex items-center space-x-3 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
