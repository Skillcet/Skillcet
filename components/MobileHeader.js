import React from "react";

function MobileHeader() {
  return (
    <div className="bottom-0  w-full flex justify-center items-start md:hidden fixed overflow-hidden h-14 shadow-mobile-footer bg-white shadow-md">
      <div className="grid grid-cols-4 justify-center w-full items-strech text-center h-12 px-2 ">
        <div className=" bg-blue-500 pt-4 rounded-b-lg text-white">Home</div>
        <div className=" pt-4 ">NRA</div>
        <div className=" pt-4 ">SkillCET</div>
        <div className=" pt-4 ">New Batches</div>
      </div>
    </div>
  );
}

export default MobileHeader;
