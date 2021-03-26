//  import { useEffect, useState } from "react";

// function TrueWeather() {
//     const [description, setDescription] = useState('');
//     useEffect(() => {
//         fetch('http://api.openweathermap.org/data/2.5/forecast?q=Tripoli,LB&cnt=8&units=metric&appid=2668941322fae11e9201913abe5f5c12')
//         .then(res =>res.json())
//             .then(data => {
//                 console.log(data);
//                 var i=0;
//                 setDescription;(data.list[i].weather[0].description)
//             })
//     }, [])
//   return description;      
// }

// export default TrueWeather();

// function TrueWeather() {
//     const key = '266949ef92ac6c49b0af1f36ae9f52af';
//     const city = 'Karachi';
//     const country = 'PK';

//     const [tempMax, setTempMax] = useState('');
//     const [tempMin, setTempMin] = useState('');
//     const [description, setDescription] = useState('');
//     const [pressure, setPressure] = useState('');
//     const [humidity, setHumidity] = useState('');
//     const [id, setID] = useState('');

//     const [temp1, setTemp1] = useState('');
//     const [time1, setTime1] = useState('');
//     const [id1, setID1] = useState('');

//     const [temp2, setTemp2] = useState('');
//     const [time2, setTime2] = useState('');
//     const [id2, setID2] = useState('');

//     const [temp3, setTemp3] = useState('');
//     const [time3, setTime3] = useState('');
//     const [id3, setID3] = useState('');

//     const [temp4, setTemp4] = useState('');
//     const [time4, setTime4] = useState('');
//     const [id4, setID4] = useState('');

//     const [temp5, setTemp5] = useState('');
//     const [time5, setTime5] = useState('');
//     const [id5, setID5] = useState('');

//     const [temp6, setTemp6] = useState('');
//     const [time6, setTime6] = useState('');
//     const [id6, setID6] = useState('');

//     const [temp7, setTemp7] = useState('');
//     const [time7, setTime7] = useState('');
//     const [id7, setID7] = useState('');
//     useEffect(() => {
//         fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&cnt=8&units=metric&appid=' + key)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 var i = 0;
//                 setTempMax(data.list[i].main.temp_max);
//                 setTempMin(data.list[i].main.temp_min);
//                 setDescription(data.list[i].weather[0].description);
//                 setPressure(data.list[i].main.pressure);
//                 setHumidity(data.list[i].main.humidity);
//                 setID(data.list[i].weather[0].id);

//                 setTemp1(data.list[i + 1].main.temp);
//                 setID1(data.list[i].weather[0].id);
//                 setTime1(data.list[i + 1].dt_txt);

//                 setTemp2(data.list[i + 2].main.temp);
//                 setID2(data.list[i].weather[0].id);
//                 setTime2(data.list[i + 2].dt_txt);

//                 setTemp3(data.list[i + 3].main.temp);
//                 setID3(data.list[i].weather[0].id);
//                 setTime3(data.list[i + 3].dt_txt);

//                 setTemp4(data.list[i + 4].main.temp);
//                 setID4(data.list[i].weather[0].id);
//                 setTime4(data.list[i + 4].dt_txt);

//                 setTemp5(data.list[i + 5].main.temp);
//                 setID5(data.list[i].weather[0].id);
//                 setTime5(data.list[i + 5].dt_txt);


//                 setTemp6(data.list[i + 6].main.temp);
//                 setID6(data.list[i].weather[0].id);
//                 setTime6(data.list[i + 6].dt_txt);

//                 setTemp7(data.list[i + 7].main.temp);
//                 setID7(data.list[i].weather[0].id);
//                 setTime7(data.list[i + 7].dt_txt);
//             })
//     }, [])

//     var arr = [
//         [id, description, tempMin, tempMax, humidity, pressure],
//         [time1.substring(10, 16), id1, temp1],
//         [time2.substring(10, 16), id2, temp2],
//         [time3.substring(10, 16), id3, temp3],
//         [time4.substring(10, 16), id4, temp4],
//         [time5.substring(10, 16), id5, temp5],
//         [time6.substring(10, 16), id6, temp6],
//         [time7.substring(10, 16), id7, temp7]
//     ];
// }
//     export default TrueWeather();
