import React from "react";

const Home = ({ menuItems,setSelectedMenuItem ,setOpenMenuItem,selectedMenuItem}) => {

  return (
    <div className="h-[100%] p-1">
      <div className="bg-white w-[50%] h-[100%] text-black">
        <h3 className="font-bold p-2">Adi's IPod</h3>
        {menuItems.map((menuItem) => (
          <p
            key={menuItem}
            className={`p-1 m-1 border-[1px] rounded border-black hover:bg-zinc-500 cursor-pointer ${ selectedMenuItem === menuItem ? 'bg-zinc-500' : ''}`}
            onClick={()=>(setSelectedMenuItem(`${menuItem}`), setOpenMenuItem(`${menuItem}`) )} 
          >
            {menuItem}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
