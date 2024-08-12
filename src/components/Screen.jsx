import React from "react";
import Home from "./Home";
import CoverFlow from "./CoverFlow";
import Music from "./Music";
import Setting from "./Settings";
import Games from "./Games";
import Controls from "./Controls";
const Screen = ({ menuItems, selectedMenuItem, openMenuItem,setSelectedMenuItem,setOpenMenuItem }) => {
  // console.log(openMenuItem,"(Screen.jsx)");
  
  return (
    <div
      id="screen-container"
      className='relative w-[28vw] h-[90vh] bg-contain bg-no-repeat bg-center bg-[url("https://static-00.iconduck.com/assets.00/ipod-icon-288x512-o9c0l8i0.png")] m-1'
    >
      <div className="bg-white w-[75%] h-[40%] absolute top-[2rem] left-[3rem] bg-[url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-no-repeat ">
      {openMenuItem === '' && <p className="text-center top-[50%] relative">Press Menu to Unlock.</p>}
        {openMenuItem === "Home" && (
          <Home menuItems={menuItems} selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} setOpenMenuItem={setOpenMenuItem}/>
        )}
        {openMenuItem === "CoverFlow" && <CoverFlow />}
        {openMenuItem === "Music" && <Music />}
        {openMenuItem === "Games" && <Games />}
        {openMenuItem === "Settings" && <Setting />}
      </div>
    </div>
  );
};

export default Screen;
