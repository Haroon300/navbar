"use client";
import React from "react";
import Card from "../component/card";
import { Sidebar } from "../component/sideBar";
import Playerlist from "../component/playerlist";
import TeamList from "../component/teamlist";
import { Chartg } from "../component/chart22";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/5">
        <Sidebar />
      </div>
      <div className="md:w-4/5">
        <div className="flex justify-center items-center">
          <Card />
        </div>
        <div>
          <Chartg/>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div>
            <h1 className="text-orange-600">Team List</h1>
            <TeamList className="m-2" />
          </div>
          <div>
            <h1 className="text-orange-600">Player List</h1>
            <Playerlist className="m-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
