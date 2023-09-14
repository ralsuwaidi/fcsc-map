import React, { useState } from "react";
import Map from "./Map";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import ButtonWithIcon from "./components/ButtonIcon";

const buttonList = [
  'Culture',
  'Religious',
  'Nature',
  'Adventure',
  'Entertainment',
]

function App() {
  const [isSidebarVisible, SidebarVisible] = useState(false);

  const handleButtonClick = () => {
    SidebarVisible(!isSidebarVisible);
  }

  return (
    <div className="h-full w-full">
      <Map />

      <div className="absolute left-4 top-4">

        <div className="mt-4">
          <ButtonWithIcon onClick={handleButtonClick} /> {/* Trigger sidebar visibility toggle */}
          {isSidebarVisible && <Sidebar />} {/* Only render Sidebar when isSidebarVisible is true */}
        </div>
      </div>


      <div className="absolute left-4 bottom-4">
        <div className="relative">
          {/* <Search /> */}


          {buttonList.map((button) => (
            <div key={button} >
              <p className="p-1 bg-white shadow-lg font-semibold mt-2 rounded-md w-fit">{button}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;