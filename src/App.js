import React, { useState, useEffect } from "react";
import "./App.css";
import { Cards, Chart, Country } from "./component/index";

import { fetchData } from "./api";
const App = () => {
  const [get, set] = useState({});
  const [getcountry, setcountry] = useState("");

  useEffect(() => {
    async function anyNameFunction() {
      const datas = await fetchData();
      console.log(datas, "app.js");
      set(datas);
    }
    // Execute the created function directly
    anyNameFunction();
  }, []);
  const handleChange = async (country) => {
    console.log(country);
    console.log("FALTU");
    setcountry(country);
    const datas = await fetchData(country);
    console.log(datas);
    set(datas);
  };
  return (
    <div className="App">
      <Cards get={get} />
      <Country handleChange={handleChange} />
      <Chart get={get} getcountry={getcountry} />
    </div>
  );
};

export default App;
