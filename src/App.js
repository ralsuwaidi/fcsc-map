import React, { useState } from "react";
import Map from "./Map";
import Sidebar from "./components/Sidebar";
import { Button } from 'flowbite-react';
import { BiWorld } from 'react-icons/bi';
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';

const buttonList = [
  'Culture',
  'Religious',
  'Nature',
  'Adventure',
  'Entertainment',
]

const statList = [
  {
    title: 'Population',
    content: '≈ 9.8 million people in 2021'
  },
  {
    title: 'Area',
    content: '71,023.6 km²'
  },
  {
    title: 'Location',
    content: 'The UAE overlooks the Arabian Gulf and borders the Kingdom of Saudi Arabia to the South and West and the Sultanate of Oman to the Southeast.'
  },
  {
    title: 'Population',
    content: 'The UAE time is 4 hours ahead of GMT'
  },
  {
    title: 'Currency',
    content: 'The Emirati Dirham is the official national currency. The US dollar is exchanged for the UAE Dirham at a rate of 3.67, and credit cards are widely accepted'
  },
  {
    title: 'Climate',
    content: 'The UAE has a warm and sunny weather most of the year, recording an ideal temperature from October to May.'
  },
  {
    title: 'Official Language',
    content: 'Arabic is the official language and English is widely spoken in public, markets and restaurants.'
  },
  {
    title: '200 Nationalities',
    content: 'The UAE hosts large foreign communities and all residents enjoy freedom of civil rights and practice of religion'
  },
  {
    title: 'Security and Safety',
    content: 'The UAE was ranked the third safest country in the world in 2020, offering residents and visitors highest levels of safety'
  }
]

function App() {
  const [isSidebarVisible, SidebarVisible] = useState(false);
  const handleButtonClick = () => {
    SidebarVisible(!isSidebarVisible);
  }

  return (
    <div className="h-full w-full">
      <Map />

      <div className='absolute top-0 bg-white w-screen h-12'>
        <form>
          <input type="text" id="first_name" class=" text-gray-900 border-none text-center  w-full p-2.5  dark:text-white" placeholder="Search" rquired />
        </form>
      </div>


      <div className="absolute left-4 top-16 bg-white rounded" >
        <Button className='bg-white' size={'sm'} onClick={handleButtonClick}>
          <BiWorld className=" text-black h-4 w-4" />
        </Button>
        <Button className='bg-white' size={'sm'} onClick={handleButtonClick}>
          <BsFillDoorOpenFill className=" text-black h-4 w-4" />
        </Button>
        <Button className='bg-white' size={'sm'} onClick={handleButtonClick}>
          <FaMoneyBillAlt className=" text-black h-4 w-4" />
        </Button>
      </div>
      {/* 
      <div className="absolute top-16 left-20 rounded p-3 bg-white w-[60vw] max-h-60" >
        <div className="flex justify-between">
          <p className="font-semibold text-lg">Title</p>
        </div>
      </div> */}


      {isSidebarVisible &&
        <div class="absolute top-16 left-20 rounded p-3 bg-white w-[70vw] h-[60vh] overflow-y-auto">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Basic Facts About the UAE</h5>

          <div className="grid-cols-2 grid gap-2">
            {statList.map((stat) => (
              <div className=" w-28 bg-gray-100 rounded-lg">
                <div key={stat.title}>
                  <p className="text-sm font-semibold">{stat.title}</p>
                  <p className="text-xs pt-2">{stat.content}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      }



      <div className="absolute left-4 bottom-4">
        <div className="relative">

          {buttonList.map((button) => (
            <div key={button} >
              <p className="p-1 bg-white text-sm shadow-lg font-semibold mt-2 rounded w-fit">{button}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;