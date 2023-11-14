'use client'
import React from 'react'

const TeamList = () => {
    const cricketTeamList = [
        {
          teamName: 'Mumbai Indians',
          town: 'Mumbai',
        },
        {
          teamName: 'Chennai Super Kings',
          town: 'Chennai',
        },
        {
          teamName: 'Royal Challengers Bangalore',
          town: 'Bangalore',
        },
        {
          teamName: 'Kolkata Knight Riders',
          town: 'Kolkata',
        },
        {
          teamName: 'Delhi Capitals',
          town: 'Delhi',
        },
        {
          teamName: 'Sunrisers Hyderabad',
          town: 'Hyderabad',
        },
        {
          teamName: 'Rajasthan Royals',
          town: 'Jaipur',
        },
        {
          teamName: 'Kings XI Punjab',
          town: 'Mohali',
        },
        {
          teamName: 'Rising Pune Supergiant',
          town: 'Pune',
        },
        {
          teamName: 'Gujarat Lions',
          town: 'Rajkot',
        },
        {
          teamName: 'Deccan Gladiators',
          town: 'Visakhapatnam',
        },
        {
          teamName: 'Kochi Tuskers Kerala',
          town: 'Kochi',
        },
        {
          teamName: 'Peshawar Zalmi',
          town: 'Peshawar',
        },
        {
          teamName: 'Quetta Gladiators',
          town: 'Quetta',
        },
        {
          teamName: 'Karachi Kings',
          town: 'Karachi',
        },
        {
          teamName: 'Lahore Qalandars',
          town: 'Lahore',
        },
        {
          teamName: 'Islamabad United',
          town: 'Islamabad',
        },
        {
          teamName: 'Multan Sultans',
          town: 'Multan',
        },
        {
          teamName: 'Dhaka Dynamites',
          town: 'Dhaka',
        },
        {
          teamName: 'Colombo Kings',
          town: 'Colombo',
        },
      ];


    return (
        <div>
            <div class="relative w-full h-64 overflow-scroll overflow-x-auto">
                <table class=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Town
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cricketTeamList.map((data) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-6 py-4">
                                    {/* <Image scr='' heigth='10' wid/> */}
                                    <img src="https://i0.wp.com/www.islam.com.kw/wp-content/uploads/2013/05/mujahid-pic-on-horse.jpg?fit=446%2C592&ssl=1" class='h-10 w-10 rounded'/>
                                </td>
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data.teamName}
                                </td>
                                <td class="px-6 py-4">
                                    {data.town}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};


export default TeamList
