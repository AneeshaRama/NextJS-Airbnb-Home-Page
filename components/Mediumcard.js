import React from "react";
import Image from "next/image";

const Mediumcard = ({ item }) => {
  return (
    <>
      <div className="cusror-pointer hover:scale-105 transition transform duration-300 ease-out">
        <div className="relative h-80 w-80">
          <Image className="rounded-xl" src={item.img} layout="fill" />
        </div>
        <h3 className="text-2xl mt-3">{item.title}</h3>
      </div>
    </>
  );
};

export default Mediumcard;
