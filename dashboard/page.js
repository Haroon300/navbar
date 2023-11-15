"use client";
import React from "react";
import Card from "../component/card";
import { Sidebar } from "../component/sideBar";
import Playerlist from "../component/playerlist";
import TeamList from "../component/teamlist";
import { Chartg } from "../component/chart22";
import Piechart from "../component/piechart";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/12">
        <Sidebar />
      </div>
      <div className="md:w-11/12">
        <div className="flex justify-center items-center">
          <Card />
        </div>
        <div class='flex md:w-4/5 justify-center items-center'  >
          <div className="flex md:w-11/12 justify-center items-center">
            <Chartg />
            <div className="text-orange-600 w-1/3">
              <h1>Team's Points</h1>
              <Piechart />
            </div>
          </div>
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
