const weatherKey = "6080e17b0fc07b99a71fde330eb48aed";
const searchForm = document.querySelector(".check-by-city .search-form");
const searchCity = document.querySelector(".check-by-city .search-city");
const warning = document.querySelector(".check-by-city .warning");
const location = document.querySelector(".card-city .location");

// DOM MANIPULATION

searchForm.addEventListener("submit", event => {
  event.preventDefault();

  let chosenCity = searchCity.value;
  const cityListed = location.querySelectorAll(".card-city .city");
  const arrCities = Array.from(cityListed);

  if (arrCities.length > 0) {
    const newArrCity = arrCities.filter(element => {
      let info = "";
      if (chosenCity.includes(",")) {
        
        if (chosenCity.split(",")[1].length > 2) {
          chosenCity = chosenCity.split(",")[0];
          info = element
            .querySelector(".city-country span") //allow more than 1 city
            .textContent//.toLowerCase();

        } else {
          info = element.querySelector(".city-country").dataset.name//.toLowerCase();
        }
      } else {      
        info = element.querySelector(".city-country span").textContent//.toLowerCase();        
      }
      return info == chosenCity//.toLowerCase();
    });

    if (newArrCity.length > 0) {
      warning.textContent = `${
        newArrCity[0].querySelector(".city-country span").textContent
      } is displayed below but you can check for another location that isn't displayed yet.`;
      searchForm.reset();
      searchCity.focus();
      return;
    };    
  }

  //PROMISE

  const openWeatherApp = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${weatherKey}&units=metric`;
  let wholeData;

  fetch(openWeatherApp)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      wholeData = data;
      console.log(wholeData);

// SECOND OPTION OF ICONS: CHOOSE LATER 
//       const icon = `https://openweathermap.org/img/wn/${
//   weather[0]["icon"]
// }@2x.png`;

      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      //do stuff with the data
      const list = document.createElement("li");
      list.classList.add("city");  

      const card = `
        <article class="city-country" data-name="${name},${sys.country}">
          <span class="city-name">${name}</span>
          <span class="country-name">${sys.country}</span>
        </article> 

        <article class="city-temp">
          <div id="switchFar"><i class="fas fa-thermometer-three-quarters"></i>${Math.round(main.temp)}°C</div>
          <button onclick="switchTempToFar()" id="btn-test" class="btn-temp">Switch to °F</button>
        </article>

        <article class="icon-container">
          <img class="weather-icon" src="${icon}" alt="${
        weather[0]["description"]}">
          <p class="weather-desc">${weather[0]["description"]}</p>
        </article>       

        <article class="extra-info">
          <p><i class="fas fa-thermometer-three-quarters c-yellow"></i><span class="x-padd">Feels Like</span>${Math.round(main.feels_like)}°C</p>
          <p><i class="fas fa-temperature-high c-red"></i><span class="x-padd">Max temp</span>${Math.round(main.temp_max)}°C</p>
          <p><i class="fas fa-temperature-low c-blue"></i><span class="x-padd">Min temp</span>${Math.round(main.temp_min)}°C</p>
        </article>  

        <article class="kelvin-info">
          <button onclick="switchTempToKel()" id="btn-test2" class="btn-temp">Switch to °K</button>
          <div id="switchKel">${Math.round(main.temp)}°C</div>
        </article> 
        
        <p class="info-by"><i class="fas fa-info-circle"></i><span class="x-padd">Info got by Open Weather App<span></p>
        `;

        let checkTemp = false;
            
        switchTempToFar = () => {
          let x = document.getElementById("switchFar");
          let y = document.getElementById("btn-test");

          let cel = `<p id="c">${Math.round(main.temp)}°C<p>`;
          let far = `<p id="f">${Math.floor((main.temp)*1.8 + 32)}°F</p>`;

          if (checkTemp) { 
            x.innerHTML = cel;
            y.innerHTML = 'Switch to °F'; 
            checkTemp = false;               

            } else {
              x.innerHTML = far;
              y.innerHTML = 'Switch to °C';
              checkTemp = true;
            }
        };

      let checkTemp2 = false;

      switchTempToKel = () => {
        let a = document.getElementById("switchKel");
        let b = document.getElementById("btn-test2");

        let cel = `<p id="c">${Math.round(main.temp)}°C<p>`;
        let kel = `<p id="k">${Math.floor((main.temp)+273.15)}°K</p>`;

        if (checkTemp2) { 
          a.innerHTML = cel;
          b.innerHTML = 'Switch to °K'; 
          checkTemp2 = false;               

          } else {
            a.innerHTML = kel;
            b.innerHTML = 'Switch to °C';
            checkTemp2 = true;
          }
      };
      list.innerHTML = card;
      location.appendChild(list);
    })

    //when some error occurs
    .catch(() => {
      warning.textContent = "I'm afraid we don't know the weather of this city.";
    });

  warning.textContent = "";
  searchForm.reset();
  searchCity.focus(); 
}); //END

const getWholeData = (data) => {
  const getWeather = () => {
    return {description, icon, main} = data.weather[0];
  }
  return { getWeather, getTemp }
} 

console.log(getWholeData(wholeData).getWeather().description)

//main, name, sys, weather, feels_like, temp_max, temp_min, temp

