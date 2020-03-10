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

}); //END

