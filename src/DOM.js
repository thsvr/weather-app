export const searchForm = document.querySelector('.check-by-city .search-form');
export const searchCity = document.querySelector('.check-by-city .search-city');
export const warning = document.querySelector('.check-by-city .warning');
const iconImg = document.querySelector('.icon-container > img');
const desc = document.querySelector('.icon-container > p');
const cityTemp = document.querySelector('.city-temp > div');
const cityCountry = document.querySelectorAll('.city-country > span');
const extraInfo = document.querySelectorAll('.extra-info > p');
const a = document.getElementById('switchKel');
const b = document.getElementById('temp-toggle');
const c = document.getElementById('main-temp');
const d = document.getElementById('btn-main-temp');

export default (data) => {
  const list = document.createElement('li');
  let checkTempF = false;
  const toggleTempF = (elem, cc, tempInfo) => {
    const cel = `<i class='fas fa-thermometer-three-quarters'></i>${Math.round(
      tempInfo,
    )}°C`;
    const faren = `<i class='fas fa-thermometer-three-quarters'></i>${Math.round(
      tempInfo * (9 / 5) + 32,
    )}°F`;
    if (checkTempF) {
      cc.innerHTML = cel;
      elem.innerHTML = 'Switch to °F';
      checkTempF = false;
    } else {
      cc.innerHTML = faren;
      elem.innerHTML = 'Switch to °C';
      checkTempF = true;
    }
  };
  let checkTemp = false;
  const toggleTemp = (elem, ccc, tempInfo) => {
    const cel = `<i class='fas fa-thermometer-three-quarters'></i>${Math.round(
      tempInfo,
    )}°C`;
    const kel = `<p>${Math.round(tempInfo + 273.15)}°K</p>`;
    if (checkTemp) {
      ccc.innerHTML = cel;
      elem.innerHTML = 'Switch to °K';
      checkTemp = false;
    } else {
      ccc.innerHTML = kel;
      elem.innerHTML = 'Switch to °C';
      checkTemp = true;
    }
  };
  list.classList.add('city');
  cityCountry[0].innerHTML = data.name;
  cityCountry[1].innerHTML = data.country;
  cityTemp.innerHTML = `<i class='fas fa-thermometer-three-quarters'></i>${Math.round(
    data.temp,
  )}°C`;
  iconImg.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
  desc.innerHTML = data.description;
  extraInfo[0].innerHTML = `
  <i class='fas fa-thermometer-three-quarters c-yellow'></i>
  <span class='x-padd'>Feels Like</span>
  ${Math.round(data.feelsLike)}°C
  `;
  extraInfo[1].innerHTML = `
  <i class='fas fa-temperature-high c-red'></i>
  <span class='x-padd'>Max temp</span>${Math.round(data.tempMax)}°C
  `;
  extraInfo[2].innerHTML = `
  <i class='fas fa-temperature-low c-blue'></i>
  <span class='x-padd'>Min temp</span>${Math.round(data.tempMin)}°C
  `;
  a.innerHTML = `${Math.round(data.temp)}°C`;
  d.style.display = 'block';
  b.style.display = 'inline';
  b.addEventListener('click', () => {
    toggleTemp(b, a, data.temp);
  });
  d.addEventListener('click', () => {
    toggleTempF(d, c, data.temp);
  });
};