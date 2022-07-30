import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function CountryList(props) {
  const { countries } = props;

  return (
    <div className="min-h-screen mt-1 p-5 lg:p-7 flex flex-col md:flex-row md:gap-4 lg:gap-7 xl:gap-4 2xl:gap-24 gap-10 flex-wrap text-white lg:justify-center lg:items-center md:justify-center md:items-center">
      {countries.map((items) => (
        <Link key={items.name.common} to={`${items.name.common}`}>
          <button key={items.name.common} className="text-left">
            <div className="h-[31rem] md:h-[25rem] md:w-[18rem] lg:w-[18rem] xl:w-[18rem]">
              <div className="h-2/4 md:h-2/4 md:w-full">
                <img
                  className="h-full md:w-full md:h-full rounded-t-md"
                  src={items.flags.png}
                  alt="new"
                />
              </div>
              <div className="h-2/4 p-6 bg-[#2b3945] rounded-b-md">
                <div className="">
                  <h2 className="text-3xl md:text-2xl font-bold">
                    {items.name.common}
                  </h2>
                  <div className="mt-3 text-xl space-y-1 tracking-wide">
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
