import React, { Component } from "react";
import Search from "./components/Search";
import clear from "./img/weather-icons/clear.svg";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

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
        {/* <SayHi />
        <SayHello color="black" name={this.state.name} /> */}
        <div className="app__header">
        <Search handleInput={this.handleInputChange} />
        </div>
        <div className="center">
<img src={clear} alt="clear"></img>
<p className="first_p">overcast clouds</p>
<p className="temp">Temperature &nbsp;
<span className="temp1"> 10° to 11 °C</span></p>
<p className="humidity"> Humidity &nbsp;
<span className="perc"> 78% &nbsp; </span> Pressure &nbsp;<span className="perc"> 1008.48 </span></p>
        </div>
        <div className="cointainer">
          <div className="pictures">
            <p className="time">03:00</p>
            <img  class="images"src={clear}></img>
            <p className="time">8°C</p>
            </div>
            <div className="pictures">
            <p className="time">03:00</p>
            <img  class="images"src={clear}></img>
            <p className="time">8°C</p>
            </div>
            <div className="pictures">
            <p className="time">03:00</p>
            <img  class="images"src={clear}></img>
            <p className="time">8°C</p>
            </div>
            <div className="pictures">
            <p className="time">03:00</p>
            <img  class="images"src={clear}></img>
            <p className="time">8°C</p>
            </div>
            <div className="pictures">
            <p className="time">03:00</p>
            <img  class="images"src={clear}></img>
            <p className="time">8°C</p>
            </div>
            <div className="pictures">
            <p className="time">03:00</p>
            <img  class="images"src={clear}></img>
            <p className="time">8°C</p>
            </div>
            <div className="pictures">
            <p className="time">03:00</p>
            <img  class="images"src={clear}></img>
            <p className="time">8°C</p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
