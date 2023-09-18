import React, { useState } from "react";
import Map from "./Map";
import Sidebar, { GetSidebar } from "./components/Sidebar";
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

function App() {
  const [isSidebarVisible, SidebarVisible] = useState(false);
  const [tabNumber, setTabNumber] = useState(0);
  const handleButtonClick1 = () => {
    SidebarVisible(!isSidebarVisible);
    setTabNumber(0)
  }

  const handleButtonClick2 = () => {
    SidebarVisible(!isSidebarVisible);
    setTabNumber(1)
  }

  const handleButtonClick3 = () => {
    SidebarVisible(!isSidebarVisible);
    setTabNumber(2)
  }

  return (
    <div className="h-full w-full">
      <Map />

      <div className='absolute top-0 bg-white w-screen h-12'>
        <form>
          <input type="text" id="first_name" class=" text-gray-900 border-none text-center  w-full p-2.5  dark:text-white" placeholder="Search" rquired />
        </form>
      </div>

      <div className="absolute left-4 top-16 bg-white rounded shadow-lg" >
        <Button className='bg-white' size={'sm'} onClick={handleButtonClick1}>
          <BiWorld className=" text-black h-4 w-4" />
        </Button>
        <Button className='bg-white' size={'sm'} onClick={handleButtonClick2}>
          <BsFillDoorOpenFill className=" text-black h-4 w-4" />
        </Button>
        <Button className='bg-white' size={'sm'} onClick={handleButtonClick3}>
          <FaMoneyBillAlt className=" text-black h-4 w-4" />
        </Button>
      </div>


      {isSidebarVisible &&
        GetSidebar(tabNumber)
      }

      <div className="absolute left-4 bottom-4 z-20">
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