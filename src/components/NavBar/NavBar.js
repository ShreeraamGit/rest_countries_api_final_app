import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import sun from "./sun.svg";
import moon from "./moon.svg";
import * as React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

function NavBar() {
  const [mode, setMode] = useState(false);

  const modeHandler = () => {
    setMode((prev) => !prev);
  };

  return (
    <div className="navbar border-2 border-none h-[6rem] bg-[#2b3945] rounded-b-md flex justify-between items-center p-4">
      <div className="text-white text-lg font-bold">Where In World?</div>
      <div className="flex space-x-2">
        <img
          className="h-7 w-7 md:h-8 md:w-8"
          src={mode ? sun : moon}
          alt="light mode"
        />
        <button
          onClick={modeHandler}
          className="text-white text-lg font-semi-bold"
        >
          {mode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
