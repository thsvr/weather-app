const weatherKey = "6080e17b0fc07b99a71fde330eb48aed";
const searchForm = document.querySelector(".check-by-city .search-form");
const searchCity = document.querySelector(".check-by-city .search-city");
const warning = document.querySelector(".check-by-city .warning");
// const location = document.querySelector(".card-city .location");
const iconImg = document.querySelector('.icon-container > img');
const desc = document.querySelector('.icon-container > p');
// const infoBy = document.querySelector('.info-by > p');
const cityTemp = document.querySelector('.city-temp > div');
const cityCountry = document.querySelectorAll('.city-country > span');
const extraInfo = document.querySelectorAll('.extra-info > p');

let a = document.getElementById("switchKel");
let b = document.getElementById('temp-toggle');
let d = document.getElementById("btn-main-temp");
let c = document.getElementById("main-temp");

const getWholeData = (data) => {
  const getWeather = () => {
    return {description, icon, main} = data.weather[0];
  };
  const getTemp = () => {
    return {temp, temp_max, temp_min, feels_like} = data.main;
  };
  const getPlace = () => {
    return [name, country] = [data.name, data.sys.country];
  };
  return { getWeather, getTemp, getPlace };
};

// let index = -1;
const dataArray = [];

searchForm.addEventListener("submit", event => {
  event.preventDefault();

  index++;

  let chosenCity = searchCity.value;
  const cityListed = location.querySelectorAll(".card-city .city");
  const arrCities = Array.from(cityListed);

  //PROMISE

  const openWeatherApp = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${weatherKey}&units=metric`;
  let wholeData;

  fetch(openWeatherApp)
    .then(response => response.json())
    .then(data => {
      dataArray.push(data);

      domContainer(data);
    })

    //when some error occurs
    .catch(() => {
      warning.textContent = "I'm afraid we don't know the weather of this city.";
    });

  warning.textContent = "";
  searchForm.reset();
  searchCity.focus();
}); //END

const domContainer = (data) => {
  const { main, name, sys, weather } = data;
  const info = getWholeData(data)

      const list = document.createElement("li");
      list.classList.add("city");
  cityCountry[0].innerHTML = info.getPlace()[0]
  cityCountry[1].innerHTML = info.getPlace()[1]
  cityTemp.innerHTML = `<i class="fas fa-thermometer-three-quarters"></i>${Math.round(info.getTemp().temp)}°C`;
  iconImg.src = `http://openweathermap.org/img/wn/${info.getWeather().icon}@2x.png`;
  desc.innerHTML = info.getWeather().description;

  extraInfo[0].innerHTML = `<i class="fas fa-thermometer-three-quarters c-yellow"></i>
            <span class="x-padd">Feels Like</span>
            ${Math.round(info.getTemp().feels_like)}°C`;

  extraInfo[1].innerHTML = `<i class="fas fa-temperature-high c-red"></i>
            <span class="x-padd">Max temp</span>${Math.round(info.getTemp().temp_max)}°C`;

  extraInfo[1].innerHTML = `<i class="fas fa-temperature-low c-blue"></i>
            <span class="x-padd">Min temp</span>${Math.round(info.getTemp().temp_min)}°C`;

  a.innerHTML = `${Math.round(info.getTemp().temp)}°C`;
  console.log(data)
  d.style.display = 'block';
  b.style.display = 'inline';
  b.addEventListener('click', () => {toggleTemp(b, a, info.getTemp().temp)})
  d.addEventListener('click', () => {toggleTempF(d, c, info.getTemp().temp)})
}



  
let checkTemp = false;

const toggleTemp = (elem, c, tempInfo) => {
  let cel = `<p>${tempInfo}°C<p>`;
  let kel = `<p>${Math.round((tempInfo)+273.15)}°K</p>`;
    if (checkTemp) { 
      c.innerHTML = cel;
      elem.innerHTML = 'Switch to °K'; 
      checkTemp = false;
    } else {
      c.innerHTML = kel;
      elem.innerHTML = 'Switch to °C';
      checkTemp = true;
    }
}

let checkTempF = false;

const toggleTempF = (elem, c, tempInfo) => {
  let cel = `<i class="fas fa-thermometer-three-quarters"></i>${Math.round(tempInfo)}°C`;
  let faren = `<i class="fas fa-thermometer-three-quarters"></i>${Math.round(tempInfo * (9 / 5) + 32)}°F`;
    if (checkTempF) { 
      c.innerHTML = cel;
      elem.innerHTML = 'Switch to °F'; 
      checkTempF = false;
    } else {
      c.innerHTML = faren;
      elem.innerHTML = 'Switch to °C';
      checkTempF = true;
    }
}
  
