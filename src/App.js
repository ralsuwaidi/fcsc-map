import React, { useState } from "react";
import Map from "./Map";
import { GetSidebar } from "./components/Tab";
import { Button } from 'flowbite-react';
import { BiWorld } from 'react-icons/bi';
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';
import DrawerContent from "./components/DrawerContent";
import SwipeableEdgeDrawer from "./SwipableEdgeDrawer";

const buttonList = [
  {
    category: 'Culture',
    items: [
      'Heritage sites',
      'Library',
    ]
  },
  {
    category: 'Lifestyle',
    items: [
      'Sport Facilities'
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
      'Valley',
      'Campsite',
      'Mangrove',
      'Mountains',
      'Park',
      'Dams',
      'Islands',
      'Protected Area',
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
      'Museums',
      'Performing Art',
      'Theaters',
      'Hotels',
      'Shopping Facilities',
    ]
  },

]

function App() {
  const [isSidebarVisible, SidebarVisible] = useState(false);
  const [tabNumber, setTabNumber] = useState(0);
  const [filter, setFilter] = useState(null);
  const [isVisible, setIsVisible] = React.useState(true);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const onClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);


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

      {/* import the map */}
      <Map filter={filter} />

      {/* add pages on the top left  */}
      <div className="absolute left-4 top-8 bg-white rounded shadow-lg" >
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


      {/* when pages are clicked show  */}
      {isSidebarVisible &&
        GetSidebar(tabNumber, SidebarVisible)
      }

      {/* show filters  */}
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
                      ${isActive ? 'bg-black text-white' : 'bg-white text-black'}
                    `}>
                      {filterList.category}
                    </p>
                  </button>
                </div>
              )
            })}
        </div>
      </div>


      <SwipeableEdgeDrawer />

    </div>
  );
}


export default App;