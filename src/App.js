import * as React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home/Home";
import { Spinner } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import CountriesDetail from "./components/CountriesDetails/CountriesDetails";
import InnerBorderPage from "./components/InnerBorderPage/InnerBorderPage";
import SecondInnerBorderPage from "./components/SecondInnerBorderPage/SecondInnerBorderPage";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [borderVal, setBorderVal] = useState("");

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const borderButtonhandler = (e) => {
    const pressedInnerBorder = e.target.value;
    setBorderVal(pressedInnerBorder);
  };

  if (!isLoaded) {
    return (
      <ChakraProvider>
        <main className="min-h-screen min-w-screen bg-[#202c37] font-['Nunito_Sans'] tracking-wider">
          <NavBar></NavBar>
          <div className="flex flex-col h-screen w-screen justify-start items-center mt-10">
            <h2 className="text-white text-3xl">Page Loading</h2>
            <p className="text-center text-white mt-3 mb-5 font-normal">
              Loading Content, Please Wait...
            </p>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            ></Spinner>
          </div>
        </main>
      </ChakraProvider>
    );
  }

  if (isLoaded) {
    return (
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home countries={items}></Home>} />
          <Route
            path=":countryName"
            element={<CountriesDetail countries={items}></CountriesDetail>}
          ></Route>
          <Route
            path=":countryName/:borderCountry"
            element={
              <InnerBorderPage
                countries={items}
                borderButtonhandler={borderButtonhandler}
                borderVal={borderVal}
              ></InnerBorderPage>
            }
          ></Route>
          <Route
            path=":countryName/:borderCountry/*"
            element={
              <SecondInnerBorderPage
                borderButtonhandler={borderButtonhandler}
                countries={items}
                borderVal={borderVal}
              ></SecondInnerBorderPage>
            }
          ></Route>
        </Routes>
      </ChakraProvider>
    );
  }
}

export default App;
