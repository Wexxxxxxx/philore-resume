import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const Me = () => {
  return (
    <div>
      <div className="bg-white bg-no-repeat bg-cover">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default Me;
