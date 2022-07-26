import * as React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import OptionsBar from "../OptionsBar/OptionsBar";
import CountryList from "../CountryComponent/CountryList";

function Home(props) {
  const { countries } = props;
  const categories = ["All", "Africa", "Americas", "Europe", "Asia", "Oceania"];
  const [items, setItems] = useState(countries);

  const [message, setMessage] = useState("");

  const captureValue = (e) => {
    setMessage(
      e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1).toLowerCase()
    );
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && message) {
      setItems(countries.filter((items) => items.name.common === message));
      setMessage("");
    } else {
      setItems(countries);
    }
  };

  const filterButtonHandler = (e) => {
    let filterValue = e.target.value;
    //console.log(filterValue);
    if (filterValue !== "All") {
      const filteredList = countries.filter(
        (items) => items.region === filterValue
      );
      //console.log(filteredList);
      setItems(filteredList);
    } else {
      setItems(countries);
      //console.log(countries);
    }
  };

  return (
    <main className="bg-[#202c37] min-h-screen min-w-screen font-['Nunito_Sans']">
      <NavBar></NavBar>
      <SearchBar
        handler={handleKeyDown}
        captureHandler={captureValue}
        message={message}
      ></SearchBar>
      <OptionsBar
        categories={categories}
        handlerFunction={filterButtonHandler}
      ></OptionsBar>
      <CountryList countries={items}></CountryList>
    </main>
  );
}

export default Home;
