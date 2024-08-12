import React, { useState, useRef } from "react";

const Controls = ({
  menuItems,
  selectedMenuItem,
  setSelectedMenuItem,
  setOpenMenuItem,
}) => {
  const containerRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handlePointerDown = (e) => {
    setDragging(true);
    handlePointerMove(e); // Initialize on start
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const handlePointerLeave = () => {
    setDragging(false);
  };

  const handlePointerMove = (e) => {
    if (dragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate the angle of the mouse relative to the center of the circle
      const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
      const normalizedAngle = (angle + Math.PI) / (2 * Math.PI); // Normalize to 0-1 range

      // Determine the menu item based on the angle
      const itemIndex = Math.floor(normalizedAngle * menuItems.length);
      const clampedIndex = Math.max(
        0,
        Math.min(itemIndex, menuItems.length - 1)
      );

      if (menuItems[clampedIndex] !== selectedMenuItem) {
        setSelectedMenuItem(menuItems[clampedIndex]);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className=" absolute bottom-[7.85rem] w-[13%] h-[28%] flex items-center justify-center rounded-full z-[10]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
    >
      <button
        onClick={() => setOpenMenuItem("Home")}
        className="p-1 m-1 absolute top-0"
      >
        Menu
      </button>
      <button className="p-1 m-1 absolute left-[-0.4rem]">Prev</button>
      <button
        onClick={() => setOpenMenuItem(`${selectedMenuItem}`)}
        className="p-1 m-1 w-[6.6rem] h-[6.6rem] rounded-[50%]"
      ></button>
      <button className="p-1 m-1 absolute right-[-0.2rem]">Fwd</button>
      <button className="p-1 m-1 absolute bottom-0">Play/Pause</button>
    </div>
  );
};

export default Controls;
