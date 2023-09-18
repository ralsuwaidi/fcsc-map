import React, { useState } from "react";
import Map from "./Map";
import { GetSidebar } from "./components/Sidebar";
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



  const handleFilterClick = (category) => {
    // Find the specific category object in buttonList
    const categoryObj = buttonList.find(list => list.category === category);

    // If a category object is found, set the filter to its items
    if (categoryObj) {
      console.log(categoryObj.items);
      setFilter(categoryObj.items);
    }
  };

  return (
    <div className="h-full w-full">
      <Map filter={filter} />

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

      <div className="absolute right-4 bottom-4 z-20 text-right">
        <div className="relative">

          {buttonList
            .filter(filterList => filterList.items.length > 0)
            .map((filterList) => (
              <div key={filterList.category} >
                <button onClick={() => handleFilterClick(filterList.category)}>
                  <p className="p-1 bg-white text-sm shadow-lg font-semibold mt-2 rounded w-fit">{filterList.category}</p>
                </button>
              </div>
            ))}

        </div>
      </div>
    </div>
  );
}


export default App;