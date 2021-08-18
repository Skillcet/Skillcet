import React from "react";

function MobileHeader() {
  return (
    <div className="bottom-0  w-full flex justify-center items-center md:hidden fixed overflow-hidden h-10 bg-white shadow-md">
      <div className="grid grid-cols-4 justify-center w-full items-center text-center">
        <div>Item</div>
        <div>Item</div>
        <div>Item</div>
        <div>Item</div>
      </div>
    </div>
  );
}

export default MobileHeader;
