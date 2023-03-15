import { useState, useEffect } from "react";

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
      <div>
        {/* cases: 209589
todayCases: 0
deaths: 7896
todayDeaths: 0
recovered: 191390
todayRecovered: 0
active: 10303
critical: 45
casesPerOneMillion: 5143
deathsPerOneMillion: 194
tests: 1207654
testsPerOneMillion: 29632
population: 40754388
continent: "Asia"
oneCasePerPeople: 194
oneDeathPerPeople: 5161
oneTestPerPeople: 34
activePerOneMillion: 252.81
recoveredPerOneMillion: 4696.18
criticalPerOneMillion: 1.1 */}
      </div>
    </div>
  );
}
