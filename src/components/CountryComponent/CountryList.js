import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function CountryList(props) {
  const { countries } = props;

  return (
    <div className="min-h-screen mt-1 p-5 flex flex-col space-y-10 text-white">
      {countries.map((items) => (
        <Link key={items.name.common} to={`${items.name.common}`}>
          <button key={items.name.common} className="text-left">
            <div className="h-[31rem]">
              <div className="h-2/4">
                <img
                  className="h-full rounded-t-md"
                  src={items.flags.png}
                  alt="new"
                />
              </div>
              <div className="h-2/4 p-6 bg-[#2b3945] rounded-b-md">
                <div className="">
                  <h2 className="text-3xl font-bold">{items.name.common}</h2>
                  <div className="mt-7 text-xl space-y-3 tracking-wide">
                    <h2 className="font-bold">
                      Population:{" "}
                      <span className="font-light">
                        {items.population
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </h2>
                    <h2 className="font-bold">
                      Region: <span className="font-light">{items.region}</span>
                    </h2>
                    <h2 className="font-bold">
                      {" "}
                      Capital:{" "}
                      <span className="font-light">{items.capital}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default CountryList;
