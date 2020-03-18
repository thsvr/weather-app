import DOM, { searchForm, searchCity, warning } from './DOM';
import parseJSON from './parseJSON';


const weatherKey = '6080e17b0fc07b99a71fde330eb48aed';

const dataArray = [];
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const chosenCity = searchCity.value;
  const openWeatherApp = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${weatherKey}&units=metric`;
  const openWeatherAppF = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${weatherKey}&units=imperial`;

  fetch(openWeatherApp)
    .then(response => response.json())
    .then((json) => {
      dataArray.push(json);
      const data = parseJSON(json);
      DOM(data);
    })
    .catch(() => {
      warning.textContent = 'I\'m afraid we don\'t know the weather of this city.';
    });
  warning.textContent = '';
  searchForm.reset();
  searchCity.focus();
});
