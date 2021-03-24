import React from "react";
import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
 import "./WeatherToday.css";

export class WeatherToday extends React.Component{
    render(){
        return(
<div className="cointainer">
          <div className="pictures">
            <p className="time">03:00</p>
            <img class="images" src={mostlycloudy}></img>
            <p className="time">8°C</p>
          </div>
          <div className="pictures">
            <p className="time">03:00</p>
            <img class="images" src={mostlycloudy}></img>
            <p className="time">8°C</p>
          </div>
          <div className="pictures">
            <p className="time">03:00</p>
            <img class="images" src={clear}></img>
            <p className="time">8°C</p>
          </div>
          <div className="pictures">
            <p className="time">03:00</p>
            <img class="images" src={clear}></img>
            <p className="time">8°C</p>
          </div>
          <div className="pictures">
            <p className="time">03:00</p>
            <img class="images" src={clear}></img>
            <p className="time">8°C</p>
          </div>
          <div className="pictures">
            <p className="time">03:00</p>
            <img class="images" src={clear}></img>
            <p className="time">8°C</p>
          </div>
          <div className="pictures">
            <p className="time">03:00</p>
            <img class="images" src={mostlycloudy}></img>
            <p className="time">8°C</p>
          </div>
        </div>
        );
    }
}