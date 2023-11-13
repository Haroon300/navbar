'use client'
import React from "react";
import { Sidebar } from "../component/sidebar";
import Card from "../component/card";


const Dashborad = () => {
  return (
    <div>
      <div className="">
        <div>
          <Sidebar />
        </div>
        <div className="flex justify-center items-center">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashborad;
