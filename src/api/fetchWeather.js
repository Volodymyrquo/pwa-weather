import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "b00f4091a7adbf1936008eb7f5ad0fe8";

export const fetchWeather = async (query) => {
  debugger;
  const { data } = await axios.get(URL, {
    params: { q: query, units: "metric", appid: API_KEY },
  });
  return data;
};
