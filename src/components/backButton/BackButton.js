import * as React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function BackButton() {
  return (
    <div className="backButton p-5 md:p-0 mt-8">
      <button className="bg-[#2b3945] shadow-lg lg:text-2xl flex justify-center items-center w-[7.5rem] text-white rounded p-2 text-xl">
        <span className="mr-2 text-xl lg:text-2xl">←</span> Back
      </button>
    </div>
  );
}

export default BackButton;
