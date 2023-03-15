import { useState, useEffect } from "react";
import "./App.css";

export default function FetchData() {
  const [fetchedData, setFetchedData] = useState([]);
  const [input, setInput] = useState("");
  const [searchedData, setSearchedData] = useState("");

  const api = " https://disease.sh/v3/covid-19/countries";

  useEffect(() => {
    fetch(api)
      .then((rep) => {
        return rep.json();
      })
      .then((data) => {
        console.log(data);
        return setFetchedData(data);
      });
  }, []);

  const handleSearch = () => {
    console.log("searching...");
    let filteredData = fetchedData.filter((ele) => {
      return input === ele.country;
    });
    const [d_str_data] = filteredData;
    setSearchedData(d_str_data);
    setInput("");
  };
  console.log(searchedData, "-------");

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        placeholder="country ..."
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      {""}
      <button onClick={() => handleSearch()}>Search</button>
      {searchedData ? (
        <div>
          <p> cases: {searchedData.cases} </p>
          <p> deaths: {searchedData.deaths} </p>
          <p> recovered: {searchedData.recovered} </p>
          <p> todayRecovered: {searchedData.todayRecovered} </p>
          <p> active: {searchedData.active} </p>
          <p> critical: {searchedData.critical} </p>
          <p> tests: {searchedData.tests} </p>
          <p> population: {searchedData.population} </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
