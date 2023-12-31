import React, { useState } from "react";
import Map from "./Map";
import { GetSidebar } from "./components/Tab";
import DrawerContent from "./components/Drawer/DrawerContent";
import SwipeableEdgeDrawer from "./SwipableEdgeDrawer";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import OnLoadModal from "./components/OnLoadModal";
import TabButtonGroup from "./components/tabItems/TabButtonGroup";
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import IconButton from '@mui/material/IconButton';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';

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

/**
 * The main component of the application.
 * @returns {JSX.Element} The App component.
 */
function App() {
  const [tabNumber, setTabNumber] = useState(null);
  const [filter, setFilter] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [withBikeRoute, setWithBikeRoute] = useState(false)
  const [with3D, setWith3D] = useState(false)

  /**
   * Toggles the bike route display on the map.
   */
  const toggleBikeRoute = () => {
    setWithBikeRoute(!withBikeRoute)
  }

  /**
   * Toggles the 3D display on the map.
   */
  const toggle3D = () => {
    setWith3D(!with3D)
  }

  /**
   * Handles the click event on a filter button.
   * If a category object is found, set the filter to its items.
   * @param {Array} items - The items to filter.
   */
  const handleFilterClick = (items) => {
    if (items !== filter) {
      setFilter(items);
    } else {
      setFilter(null)
    }
  }

  return (
    <div className="h-full w-full">

      <Map with3D={with3D} withBikeRoute={withBikeRoute} setDrawerOpen={setDrawerOpen} setTabNumber={setTabNumber} filter={filter} />

      <OnLoadModal />


      <div className="absolute bg-white rounded shadow-lg"
        style={{
          top: '50px',
          right: '9px',
          maxWidth: '30px',
          maxHeight: '30px'
        }}>
        <IconButton onClick={toggleBikeRoute} aria-label="toggle bike route" style={{ padding: '5px' }}>
          <DirectionsBikeIcon fontSize="small" color={withBikeRoute ? "primary" : "action"} />
        </IconButton>
      </div>

      <div className="absolute bg-white rounded shadow-lg"
        style={{
          top: '90px',
          right: '9px',
          maxWidth: '30px',
          maxHeight: '30px'
        }}>
        <IconButton onClick={toggle3D} aria-label="toggle bike route" style={{ padding: '5px' }}>
          <ThreeDRotationIcon fontSize="small" color={with3D ? "primary" : "action"} />
        </IconButton>
      </div>

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