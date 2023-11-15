"use client";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { GiAmericanFootballHelmet } from "react-icons/gi";

const Card = () => {

  const data = [{
    nouser: 44,
    noteam: 5,
    nomatch: 3
  }]

  return (
    <div>
      {data.map((value)=>(
      <div className="flex flex-wrap mt-10">

        <div className="flex flex-col justify-center items-center my-2 mx-5 px-10 py-4 border-2 border-orange-500 shadow-md h-40 w-72 rounded">
          <div className="flex justify-center items-center h-16 w-16 p-3">
            <FaRegUser className="h-16 w-16 text-orange-500" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">{value.nouser}</h1>
            <h6 className="text-xs">Number of User</h6>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-2 mx-5 px-10 py-4 border-2 border-[#fa4326] shadow-md h-40 w-72  rounded">
          <div className="flex justify-center items-center h-16 w-16 p-3">
            <LuUsers2 className="h-10 w-10 text-[#fa4326]" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">{value.noteam}</h1>
            <h5 className="text-xs">Number of Team's</h5>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-2 mx-5 px-10 py-4 h-40 w-72 border-2 border-[#f29000] shadow-md rounded">
          <div className="flex justify-center items-center h-16 w-16 p-3">
            <GiAmericanFootballHelmet className="h-14 w-14 text-[#f29000]" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">{value.nomatch}</h1>
            <h5 className="text-xs">Number of Match's</h5>
          </div>
        </div>
      </div>
     ) )}

    </div>
  );
};

export default Card;