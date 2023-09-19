import React, { useState } from "react";
import Map from "./Map";
import { GetSidebar } from "./components/Tab";
import { Button } from 'flowbite-react';
import { BiWorld } from 'react-icons/bi';
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';

const buttonList = [
  {
    category: 'Culture',
    items: [
    ]
  },
  {
    category: 'Religious',
    items: [
      'Religious Facilities',
    ]
  },
  {
    category: 'Nature',
    items: [
      'Heritage sites'
    ]
  },
  {
    category: 'Adventure',
    items: [
    ]
  },
  {
    category: 'Entertainment',
    items: [
      'Cinema',
      'Hotel'
    ]
  },

]

function App() {
  const [isSidebarVisible, SidebarVisible] = useState(false);
  const [tabNumber, setTabNumber] = useState(0);
  const [filter, setFilter] = useState(null);


  const handleButtonClick1 = () => {
    SidebarVisible(true);
    setTabNumber(0)
  }

  const handleButtonClick2 = () => {
    SidebarVisible(true);
    setTabNumber(1)
  }

  const handleButtonClick3 = () => {
    SidebarVisible(true);
    setTabNumber(2)
  }


  const handleFilterClick = (items) => {
    // If a category object is found, set the filter to its items
    if (items != filter) {
      console.log(items);
      setFilter(items);
    } else {
      setFilter(null)
    }
  };

  return (
    <div className="h-full w-full">
      <Map filter={filter} />

      {/* <div className='absolute top-0 bg-white w-screen h-12'>
        <form>
          <input type="text" id="first_name" class=" text-gray-900 border-none text-center  w-full p-2.5  dark:text-white" placeholder="Search" rquired />
        </form>
      </div> */}

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
        GetSidebar(tabNumber, SidebarVisible)
      }

      <div className="absolute right-4 bottom-4 z-10 text-right">
        <div className="relative">

          {buttonList
            .filter(filterList => filterList.items.length > 0)
            .map((filterList) => {
              // Create a boolean check to see if the filterList matches the current filter
              const isActive = filter && JSON.stringify(filterList.items.sort()) === JSON.stringify(filter.sort());

              return (
                <div key={filterList.category} >
                  <button onClick={() => handleFilterClick(filterList.items)}>
                    <p className={`
                      p-1 
                      text-sm 
                      shadow-lg 
                      font-semibold 
                      mt-2 
                      rounded 
                      w-fit 
                      ${isActive ? 'bg-orange-400 text-white' : 'bg-white text-black'}
                    `}>
                      {filterList.category}
                    </p>
                  </button>
                </div>
              )
            })}

        </div>
      </div>
    </div>
  );
}


export default App;