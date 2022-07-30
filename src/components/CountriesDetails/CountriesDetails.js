import * as React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import BackButton from "../backButton/BackButton";
import { v4 as uuidv4 } from "uuid";
import { Outlet } from "react-router-dom";

function CountriesDetail(props) {
  const { countries } = props;
  console.log(countries);

  const { countryName } = useParams();

  const selectedCountry = countries.find(
    (items) => items.name.common === countryName
  );

  return (
    <main className="bg-[#202c37] min-h-screen min-w-screen font-['Nunito_Sans']">
      <NavBar></NavBar>
      <div className="md:pl-10 md:pr-10 md:space-y-16 flex flex-col lg:flex-col md:justify-center md:content-center lg:justify-center">
        <Link to={"/"}>
          <BackButton></BackButton>
        </Link>
        <div className="detailsContainer p-0 mt-0 lg:text-xl text-white flex md:items-center lg:justify-between lg:items-center">
          <div className="innerContainer  flex flex-col space-y-16 md:space-y-0 md:flex-row md:space-x-0 lg:space-x-24 lg:items-center">
            <div className="flagbox h-[15rem] md:h-[24rem] md:w-2/4">
              <img
                className="h-full md:h-full rounded-md"
                src={selectedCountry.flags.png}
                alt="new"
              />
            </div>
            <div className="detailsBox space-y-3 md:w-2/4">
              <h1 className="text-2xl lg:text-4xl font-extrabold">
                {selectedCountry.name.common}
              </h1>
              <div className="firstLevel lg:text-2xl flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
                <div className="firstLevelInner md:mt-0 flex flex-col space-y-2">
                  <h2 className="font-bold">
                    {" "}
                    Native Name:{" "}
                    <span className="font-normal">
                      {selectedCountry.name.official}
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    {" "}
                    Population:{" "}
                    <span className="font-normal">
                      {selectedCountry.population
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    {" "}
                    Region:{" "}
                    <span className="font-normal">
                      {selectedCountry.region}
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    {" "}
                    Sub-Region:{" "}
                    <span className="font-normal">
                      {selectedCountry.subregion}
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    {" "}
                    Capital:{" "}
                    <span className="font-normal">
                      {selectedCountry.capital}
                    </span>
                  </h2>
                </div>
                <div className="secondLevel space-y-2">
                  <h2 className="font-bold">
                    {" "}
                    Top Level:{" "}
                    <span className="font-normal">
                      {selectedCountry.capital}
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    {" "}
                    Currencies:{" "}
                    <span className="font-normal">
                      {Object.values(selectedCountry.currencies)[0].name}{" "}
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    {" "}
                    Languages:{" "}
                    <span className="font-normal">
                      {Object.values(selectedCountry.languages).join(" , ")}{" "}
                    </span>
                  </h2>
                </div>
              </div>
              <div className="borderDetails flex flex-col space-y-5">
                <h2 className="text-xl lg:text-3xl font-bold">
                  Border Countries:
                </h2>
                <div className="listBorders flex flex-wrap gap-3">
                  {selectedCountry.borders ? (
                    selectedCountry.borders.map((items) => (
                      <Link key={uuidv4()} to={`${items}`}>
                        <button
                          key={uuidv4()}
                          className="pr-8 pl-8 rounded bg-[#2b3945] font-bold"
                        >
                          {items}
                        </button>
                      </Link>
                    ))
                  ) : (
                    <div className="">No borders Avalaible</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </main>
  );
}

export default CountriesDetail;
