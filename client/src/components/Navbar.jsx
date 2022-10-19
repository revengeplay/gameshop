import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container  mx-auto flex h-24 items-center justify-around">
      {/* left */}
      <div className=""></div>
      {/* center */}
      <Link to="/">
        <div className=" text-6xl font-bold">GAME MALL</div>
      </Link>
      {/* right */}
      <div></div>
    </div>
  );
};

export default Navbar;
