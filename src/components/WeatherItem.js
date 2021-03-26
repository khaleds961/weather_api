import React, { Component } from "react";
import { render } from "react-dom";
import "./WeatherItem.css";
import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import FakeWeather from "../data/FakeWeather.json";




export default class WeatherItem extends Component {
  render() {
    return <div>Heello</div>;
  }
}
export class SayHello extends Component {
  render() {
    return (
      // <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
      //   Hello {this.props.name}
      <div className="center">
        <img src={mostlycloudy} alt="mostlycloudy"></img>
        <p className="first_p" > overcast clouds </p>
        <p className="temp">Temperature &nbsp;
<span className="temp1"> {FakeWeather.list[0].main.temp_min} to &nbsp;
{FakeWeather.list[0].main.temp_max} </span></p>
        <p className="humidity"> Humidity &nbsp;
<span className="perc"> {FakeWeather.list[0].main.humidity}% &nbsp; </span>
          Pressure &nbsp;<span className="perc"> {FakeWeather.list[0].main.pressure} </span></p>
      </div>
    );
  }
}
