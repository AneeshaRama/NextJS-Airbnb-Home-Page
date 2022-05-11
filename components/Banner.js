import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] xl:[600px] 2xl:h-[700px]">
        <Image
          src="https://links.papareact.com/0fm"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[39%] w-full text-center text-gray-800 text-lg sm:text-xl font-semibold tracking-wide">
          <p>Not sure where to go? Perfect</p>
          <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-semibold sm:mt-4 mt-2 hover:shadow-xl active:scale-110 transition transform ease-in-out duration-200">
            I'm flexible
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
