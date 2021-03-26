// import React from "react";
import React, { Component } from "react";
import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import "./WeatherToday.css";
import FakeWeather from "../data/FakeWeather.json";

export class WeatherToday extends React.Component{
    render(){ 
        return(
          <div></div>
//  <div className="container">
//           <div className="pictures">
//             <p className="time">{FakeWeather.list[0].dt_txt}</p>
//             <img class="images" src={mostlycloudy}></img>
//             <p className="time">{FakeWeather.list[0].main.temp_kf}</p>
//           </div>
//            <div className="pictures">
//             <p className="time">{FakeWeather.list[1].dt_txt}</p>
//             <img class="images" src={mostlycloudy}></img>
//             <p className="time">{FakeWeather.list[1].main.temp_kf}</p>
//           </div>
//           <div className="pictures">
//             <p className="time">{FakeWeather.list[2].dt_txt}</p>
//             <img class="images" src={clear}></img>
//             <p className="time">{FakeWeather.list[2].main.temp_kf}</p>
//           </div>
//           <div className="pictures">
//             <p className="time">{FakeWeather.list[3].dt_txt}</p>
//             <img class="images" src={clear}></img>
//             <p className="time">{FakeWeather.list[3].main.temp_kf}</p>
//           </div>
//           <div className="pictures">
//             <p className="time">{FakeWeather.list[4].dt_txt}</p>
//             <img class="images" src={clear}></img>
//             <p className="time">{FakeWeather.list[4].main.temp_kf}</p>
//           </div>
//           <div className="pictures">
//             <p className="time">{FakeWeather.list[5].dt_txt}</p>
//             <img class="images" src={clear}></img>
//             <p className="time">{FakeWeather.list[5].main.temp_kf}</p>
//           </div>
//           <div className="pictures">
//             <p className="time">{FakeWeather.list[6].dt_txt}</p>
//             <img class="images" src={mostlycloudy}></img>
//             <p className="time">{FakeWeather.list[6].main.temp_kf}</p>
//           </div>
//         </div> 
        );
    }
    
}