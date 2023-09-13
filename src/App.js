import React, { useState } from "react";
import Map from "./Map";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import ButtonWithIcon from "./components/ButtonIcon";

function App() {
  const [isSidebarVisible, SidebarVisible] = useState(false);

  const handleButtonClick = () => {
    SidebarVisible(!isSidebarVisible);
  }

  return (
    <div className="h-full w-full">
      <Map />
      <div className="absolute left-4 top-4">
        <div className="relative">
          <Search />
          <div className="mt-4">
            <ButtonWithIcon onClick={handleButtonClick} /> {/* Trigger sidebar visibility toggle */}
            {isSidebarVisible && <Sidebar />} {/* Only render Sidebar when isSidebarVisible is true */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;