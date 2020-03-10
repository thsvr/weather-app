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
            .querySelector(".city-name span") //allow more than 1 city
            .textContent//.toLowerCase();

        } else {
          info = element.querySelector(".city-name").dataset.name//.toLowerCase();
        }
      } else {      
        info = element.querySelector(".city-name span").textContent//.toLowerCase();        
      }
      return info == chosenCity//.toLowerCase();
    });

    if (newArrCity.length > 0) {
      warning.textContent = `${
        newArrCity[0].querySelector(".city-name span").textContent
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
        <h1 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <span>${sys.country}</span>
        </h1> 

        <article class="city-temp">
          <div id="switchFar">${Math.round(main.temp)}°C</div>
          <p><button onclick="switchTempToFar()" id="btn-test" class="btn-temp">Swith temp to f</button></p>
        </article>

        <article>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]}">
          <p>${weather[0]["description"]}</p>
        </article>     
        
        <article>
          <p><button onclick="switchTempToKel()" id="btn-test2">Swith temp to k</button></p>
          <div id="switchKel">${Math.round(main.temp)}°C</div>
        </article>   

        <article>
          <p>Feels Like:${Math.round(main.feels_like)}°C</p>
          <p>Max temperature:${Math.round(main.temp_max)}°C</p>
          <p>Min temperature:${Math.round(main.temp_min)}°C</p>
        </article>  
        
        <p>Info got by Open Weather App</p>
        `;

        let checkTemp = false;
            
        switchTempToFar = () => {
          let x = document.getElementById("switchFar");
          let y = document.getElementById("btn-test");

          let cel = `<p id="c">${Math.round(main.temp)}°C<p>`;
          let far = `<p id="f">${Math.floor((main.temp)*1.8 + 32)}°F</p>`;

          if (checkTemp) { 
            x.innerHTML = cel;
            y.innerHTML = 'Switch temp to f'; 
            checkTemp = false;               

            } else {
              x.innerHTML = far;
              y.innerHTML = 'Switch temp to c';
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
          b.innerHTML = 'Switch temp to k'; 
          checkTemp2 = false;               

          } else {
            a.innerHTML = kel;
            b.innerHTML = 'Switch temp to c';
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

