// import React, { Component } from "react";
// import Search from "./components/Search";
// import clear from "./img/weather-icons/clear.svg";
// import FakeWeather from "./data/FakeWeather.json";
// import TrueWeather from "./TrueWeather.js";

// import SayHi, { SayHello } from "./components/WeatherItem";
// // import {WeatherToday} from "./components/WeatherToday";
// import fakeWeatherData from "./fakeWeatherData.json";
// import "./App.css";
// import { WeatherToday } from "./components/WeatherToday";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "overcast clouds",
//       temp: "Temperature",
//       hum: "Humidity",
//       press: "Pressure",
//       time: "4:00",
//       test: true,
//       person: null
//     };
//   }
//   //  async componentDidMount()  {
//   //     const url = "http://api.openweathermap.org/data/2.5/forecast?q=Tripoli,LB&cnt=8&units=metric&appid=2668941322fae11e9201913abe5f5c12";
//   //     const response=await fetch(url);
//   //     const data=await response.json();
//   //     this.setState({person:data.list[0],loading:false});
//   //   }

//   async componentDidMount() {
//     const url = "http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=20534d7c3f1ef627a46c9533c02e8b35";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ person: data.list[0], loading: false })
//   }

//   handleInputChange = value => {
//     this.setState({ name: value });
//   };

//   render() {



//     return (



//       <div>
//         {this.state.test || !this.state.person ? (
//           <div>loading...</div>
//         ) : (
//           <div>
//             <div>{this.state.person.main.humidity}</div>
//           </div>
          
//           </div>




//       // <div className="app">
//       //   <div className="app__header">

//       //     <Search handleInput={this.handleInputChange} />
//       //   </div>
//       //   {/* <SayHi />*/
//       //     <SayHello color="black"
//       //       temp={this.state.temp}
//       //       name={this.state.name}
//       //       hum={this.state.hum}
//       //       press={this.state.press}
//       //     />}
//       //   {
//       //     <WeatherToday
//       //       time={this.state.time}
//       //     />}

//       // </div>
//     );
//   }
// }

// export default App;


import React, { Component } from "react";
import Search from "./components/Search";
import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";


import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import { WeatherToday } from "./components/WeatherToday";
import FakeWeather from "./data/FakeWeather.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Maria",
      loading: true,
      person: null
    };
  }

  async componentDidMount(){
    const url="http://api.openweathermap.org/data/2.5/forecast?q=Tripoli,LB&cnt=8&units=metric&appid=2668941322fae11e9201913abe5f5c12";
    const response= await fetch(url);
    const data = await response.json();
    this.setState({person: data.list, loading: false})
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
       <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
          ) : ( 
          <div className="container">
             <div className="pictures">
             <p className="time">{this.state.person[0].dt_txt}</p>
             <img class="images" src={mostlycloudy}></img>
             <p className="time">{this.state.person[0].main.temp} °C</p>
             </div>
             <div className="pictures">
             <p className="time">{this.state.person[1].dt_txt}</p>
             <img class="images" src={mostlycloudy}></img>
             <p className="time">{this.state.person[1].main.temp} °C</p>
             </div>
             <div className="pictures">
             <p className="time">{this.state.person[2].dt_txt}</p>
             <img class="images" src={mostlycloudy}></img>
             <p className="time">{this.state.person[2].main.temp} °C</p>
             </div>
             <div className="pictures">
             <p className="time">{this.state.person[3].dt_txt}</p>
             <img class="images" src={mostlycloudy}></img>
             <p className="time">{this.state.person[3].main.temp} °C</p>
             </div>
             <div className="pictures">
             <p className="time">{this.state.person[4].dt_txt}</p>
             <img class="images" src={mostlycloudy}></img>
             <p className="time">{this.state.person[4].main.temp} °C</p>
             </div>
             <div className="pictures">
             <p className="time">{this.state.person[5].dt_txt}</p>
             <img class="images" src={mostlycloudy}></img>
             <p className="time">{this.state.person[5].main.temp} °C</p>
             </div>
             <div className="pictures">
             <p className="time">{this.state.person[6].dt_txt}</p>
             <img class="images" src={mostlycloudy}></img>
             <p className="time">{this.state.person[6].main.temp} °C</p>
             </div>
{/* //            <div className="pictures">
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
//           </div> */}
          </div>
          )};
      </div>
      </div>
    );
  }
}

export default App;