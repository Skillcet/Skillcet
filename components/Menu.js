import React from "react";
import menuOptions from "../data/menuOptions";
function Menu() {
  const menuItems = menuOptions.map((item) => (
    <p className="my-4" key={item.key}>
      {item.name}
    </p>
  ));
  return (
    <div className="bg-white w-full h-full ">
      <div className="h-60 w-full my-4 bg-green-200"></div>
      <div className=" border-t-2 border-b-2 my-8 border-black w-11/12 mx-auto">
        {menuItems}
      </div>
    </div>
  );
}

export default Menu;
