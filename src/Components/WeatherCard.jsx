import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherCard = () => {
  const [apiData, setApiData] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ce6e11907df17706eb42a070c71e13db`
      );
      const data = response.data;
      console.log(data);
        setApiData(data);
    };
    fetchData();
  }, [search]);
  const handleChange=(e)=>{
setSearch(e.target.value)
  }
  return (
    <div className="box">
      <h1>
        Weather <span>App</span>
      </h1>
      <input
        type="text"
        name="search"
        placeholder="search city"
        onChange={handleChange}
        value={search}
      />
      {apiData ? (
        <div className="element">
         <img src={"http://openweathermap.org/img/w/" + apiData.weather[0].icon + ".png"} alt="weather"/>
         <p><span>Temp:{apiData.main.temp}</span></p>
         <p><span>Name:{apiData.name}</span></p>
         <p><span>Country:{apiData.sys.country}</span></p>
          
        </div>
      ) : (
        <h1>No City Found</h1>
      )}
    </div>
  );
};

export default WeatherCard;
