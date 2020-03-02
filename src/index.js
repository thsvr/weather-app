import axios from 'axios';

async function getResults(query){
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const weatherKey = '6080e17b0fc07b99a71fde330eb48aed';

  try {
    const res = await axios(`${proxy}api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6080e17b0fc07b99a71fde330eb48aed`)
    //const res = await axios(`${proxy}api.openweathermap.org/data/2.5/weather?q=${query},${weatherKey}`); NOT WORKING ${}
    const weatherNow = res.data.weatherNow;
    console.log(weatherNow);
  } catch(error) {
      alert(error);
  }
};
getResults('London');


