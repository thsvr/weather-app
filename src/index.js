import updateDOM, { searchForm, searchCity, warning } from './DOM';
import parseJSON from './parseJSON';

const weatherKey = '6080e17b0fc07b99a71fde330eb48aed';
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  let data = {};
  const chosenCity = searchCity.value;
  const metricURL = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${weatherKey}&units=metric`;
  const fehrenhitURL = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${weatherKey}&units=imperial`;
  fetch(metricURL)
    .then(response => response.json())
    .then(json => parseJSON(json))
    .then(dataMetric => { data = dataMetric; })
    .then(() => fetch(fehrenhitURL))
    .then(response => response.json())
    .then(json => parseJSON(json))
    .then(dataImperial => dataImperial.temp)
    .then(tempF => updateDOM(data, tempF))
    .catch(() => {
      warning.textContent = 'I\'m afraid we don\'t know the weather of this city.';
    });
  warning.textContent = '';
  searchForm.reset();
  searchCity.focus();
});
