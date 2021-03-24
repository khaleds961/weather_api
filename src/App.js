import React, { Component } from "react";
import Search from "./components/Search";
import clear from "./img/weather-icons/clear.svg";

import SayHi, { SayHello } from "./components/WeatherItem";
// import {WeatherToday} from "./components/WeatherToday";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import { WeatherToday } from "./components/WeatherToday";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        
        <div className="app__header">
          <Search handleInput={this.handleInputChange} />
        </div>
        {/* <SayHi />*/
        <SayHello color="black" name={this.state.name} /> }
       {<WeatherToday/>}
      </div>
    );
  }
}

export default App;
