import * as React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function BackButton() {
  return (
    <div className="backButton p-5 mt-8">
      <button className="bg-[#2b3945] shadow-lg flex justify-center items-center w-[7.5rem] text-white rounded p-2 text-xl">
        <span className="mr-2 text-xl">←</span> Back
      </button>
    </div>
  );
}

export default BackButton;
