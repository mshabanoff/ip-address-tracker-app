import React, { Fragment, useEffect, useState } from "react";

import axios from 'axios'

import "./App.css";

import Details from "./components/Detail";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";

const App = () => {

  const [position, setPosition] = useState([]);
  const [ip, setIp] = useState("");
  const [res, setRes] = useState();

  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_CFXC1aqn7SHvLwsMR4fwnNMp05eKR&ipAddress=${ip}`)
      .then((result) => {
        setRes(result.data);
        setIp(result.data.ip);
        setPosition([result.data.location.lat, result.data.location.lng]);
      });
  }, [ip]);

  if (ip !== "" && position.length !== 0) {
    return (
      <Fragment>
        <div className="fluid-container top">
          <div className="text-center text_h">IP Address Tracker</div>
          <SearchBar default={ip} setIp={setIp} />
          <Details detail={res} />
        </div>
        <Map position={position} />
      </Fragment>
    );
  }

  return (
    <div></div>
  );
}

export default App;
