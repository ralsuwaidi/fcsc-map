import React, { useState } from "react";
import Map from "./Map";
import { GetSidebar } from "./components/Tab";
import DrawerContent from "./components/Drawer/DrawerContent";
import SwipeableEdgeDrawer from "./SwipableEdgeDrawer";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import OnLoadModal from "./components/OnLoadModal";
import TabButtonGroup from "./components/tabItems/TabButtonGroup";
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
  const [tabNumber, setTabNumber] = useState(null);
  const [filter, setFilter] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);



  const handleFilterClick = (items) => {
    // If a category object is found, set the filter to its items
    if (items !== filter) {
      setFilter(items);
    } else {
      setFilter(null)
    }
  }

  return (
    <div className="h-full w-full">

      <Map setDrawerOpen={setDrawerOpen} setTabNumber={setTabNumber} filter={filter} />

      <OnLoadModal />

      <SwipeableEdgeDrawer
        headerText="1Map"
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

        {tabNumber != null ? GetSidebar(tabNumber) : <DrawerContent />}

        <div className="mt-4">
          <TabButtonGroup setTabNumber={setTabNumber} />
        </div>

      </SwipeableEdgeDrawer>

    </div>
  );
}


export default App;