import React, { useState } from "react";
import Map from "./Map";
import { GetSidebar } from "./components/Tab";
import { Button } from 'flowbite-react';
import { BiWorld } from 'react-icons/bi';
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';
import DrawerContent from "./components/Drawer/DrawerContent";
import SwipeableEdgeDrawer from "./SwipableEdgeDrawer";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
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
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleButtonClick = (tabNumber) => {
    SidebarVisible(true);
    setDrawerOpen(true)
    setTabNumber(tabNumber);
  }


  const handleFilterClick = (items) => {
    // If a category object is found, set the filter to its items
    if (items != filter) {
      console.log(items);
      setFilter(items);
    } else {
      setFilter(null)
    }
  }

  return (
    <div className="h-full w-full">

      {/* import the map */}
      <Map filter={filter} />

      {/* add pages on the top left  */}
      <div className="absolute left-4 top-8 bg-white rounded shadow-lg" >
        <Button className='bg-white' size={'sm'} onClick={() => handleButtonClick(0)}>
          <BiWorld className=" text-black h-4 w-4" />
        </Button>
        <Button className='bg-white' size={'sm'} onClick={() => handleButtonClick(1)}>
          <BsFillDoorOpenFill className=" text-black h-4 w-4" />
        </Button>
        <Button className='bg-white' size={'sm'} onClick={() => handleButtonClick(2)}>
          <FaMoneyBillAlt className=" text-black h-4 w-4" />
        </Button>
      </div>




      <SwipeableEdgeDrawer headerText="1Map"
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
      >
        <div className='no-scrollbar overflow-x-scroll mb-4'>
          <Stack direction="row" spacing={1}>
            {buttonList
              .filter(filterList => filterList.items.length > 0)
              .map((filterList) => {
                // Create a boolean check to see if the filterList matches the current filter
                const isActive = filter && JSON.stringify(filterList.items.sort()) === JSON.stringify(filter.sort());

                return (
                  <div key={filterList.category} >
                    <Chip
                      label={filterList.category}
                      variant={isActive ? "default" : "outlined"}
                      onClick={() => handleFilterClick(filterList.items)}
                      // color={isActive ? "primary" : "default"}
                      size="small"
                    />
                  </div>
                )
              })}
          </Stack>
        </div>

        {isSidebarVisible ? GetSidebar(tabNumber) : <DrawerContent />}


      </SwipeableEdgeDrawer>

    </div>
  );
}


export default App;