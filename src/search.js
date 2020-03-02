import axios from 'axios';
export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const weatherKey = '6080e17b0fc07b99a71fde330eb48aed';
  
    try {
      const res = await axios(`${proxy}api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6080e17b0fc07b99a71fde330eb48aed`)
      //const res = await axios(`${proxy}api.openweathermap.org/data/2.5/weather?q=${this.query},${weatherKey}`); NOT WORKING ${}
      this.result = res.data.weatherNow;
      console.log(weatherNow);
    } catch(error) {
        alert(error);
    }
  };
}

