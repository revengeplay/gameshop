import React from "react";
import { HiMenu } from "react-icons/hi";

const Menubar = () => {
  return (
    <div className="flex justify-around container mx-auto h-12">
      <div className="bg-red-500">
        <HiMenu size={40} className=" mt-1" />
      </div>

      <div className="w-full bg-yellow-500 flex items-center space-x-5 pl-3">
        <div className="text-xl font-medium">NENTENDO</div>
        <div className="text-xl font-medium">PS5</div>
        <div className="text-xl font-medium">PS4</div>
        <div className="text-xl font-medium">XBOX</div>
        <div className="text-xl font-medium">PC</div>
      </div>
    </div>
  );
};

export default Menubar;
