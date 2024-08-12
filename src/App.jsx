import React,{useState} from "react"
import Screen from "./components/Screen"
import Controls from "./components/Controls";

function App() {
  const menuItems = ['CoverFlow', 'Music', 'Games', 'Settings'];
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const [openMenuItem, setOpenMenuItem] = useState('');
  return (
    <div id='ipod-body' className="bg-black text-white flex justify-center  "  > 
    <Screen menuItems={menuItems} openMenuItem={openMenuItem} selectedMenuItem={selectedMenuItem}  setSelectedMenuItem={setSelectedMenuItem} setOpenMenuItem={setOpenMenuItem}/>
    <Controls menuItems={menuItems}
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
        setOpenMenuItem={setOpenMenuItem}/>
    </div>
  )
}

export default App
