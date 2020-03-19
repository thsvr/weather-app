export default (json) => {
  const { description, icon, main } = json.weather[0];
  const { temp } = json.main;
  const [name, country] = [json.name, json.sys.country];
  return {
    description,
    icon,
    main,
    temp,
    name,
    country,
    tempMax: json.main.temp_max,
    tempMin: json.main.temp_min,
    feelsLike: json.main.feels_like,
  };
};