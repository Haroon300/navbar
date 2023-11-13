"use client";

import React from "react";
import { ImUsers } from "react-icons/im";
import{RiGroupFill} from "react-icons/ri"
import {GiAmericanFootballHelmet} from "react-icons/gi"

const Card = () => {
  return (
    <div className="flex flex-wrap">

      <div className="flex m-2 p-5 shadow-md rounded">
        <div className="mr-2">
          <h5 className="">NO of User</h5>
          <h1 className="text-3xl">44</h1>
        </div>
        <div className="rounded-full flex justify-center items-center bg-[#0e9570] h-10 w-10 p-3">
          <ImUsers className="h-10 w-10 text-white" />
        </div>
      </div>

      <div className="flex m-2 p-5 shadow-md rounded">
        <div className="mr-2">
          <h5 className="">NO of Team's</h5>
          <h1 className="text-3xl">04</h1>
        </div>
        <div className="rounded-full flex justify-center items-center bg-[#fa4326] h-10 w-10 p-3">
          <RiGroupFill className="h-10 w-10 text-white" />
        </div>
      </div>

      <div className="flex m-2 p-5 shadow-md rounded">
        <div className="mr-2">
          <h5 className="">NO of Match's</h5>
          <h1 className="text-3xl">05</h1>
        </div>
        <div className="rounded-full flex justify-center items-center bg-[#f29000] h-10 w-10 p-3">
          <GiAmericanFootballHelmet className="h-14 w-14 text-white" />
        </div>
      </div>

    </div>
  );
};

export default Card;
