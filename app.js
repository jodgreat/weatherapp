import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import 'dotenv/config'

const apiKey = process.env.SECRET_KEY;
const app = express();
const port = process.env.PORT;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Function to convert temperature from Kelvin to Celsius

const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15) + "°C";

// Function that slice the Date and Time

const getDate = (dateString) => {
  const string = dateString.substring(0, 10); // You might want to use 10 instead of 9 for a complete date.
  return string;
};

// Days

const getDay = (day) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedneday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDay = days[new Date(day).getDay()];

  return getDay;
};

const check = (item) => {
  if (item === "" || item === null || item === undefined) {
    return "--";
  } else {
    return item;
  }
};

// Function to format time in 12-hour format
const formatTime12Hour = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  return `${hour12}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
};




app.get("/", async (req, res) => {
  try {
    const search = req.body["search-cities"];
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=phillipines&appid=${apiKey}`
    );
    const foreCast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=phillipines&appid=${apiKey}`
    );
    const result = response.data;
    const foreCastResponce = foreCast.data;
    // Temperature
    const temperature = kelvinToCelsius(result.main.temp);
    const feelsLike = kelvinToCelsius(result.main.feels_like);
    const tempMin = kelvinToCelsius(result.main.temp_min);
    const tempMax = kelvinToCelsius(result.main.temp_max);
    // Speed
    const speed = result.wind.speed + "km/hr";
    const lat = result.coord.lat;
    const lon = result.coord.lon;
    // Date Sunrise
    const sunriseTime = formatTime12Hour(result.sys.sunrise);
    // Date Sunset
    const sunsetTime = formatTime12Hour(result.sys.sunset);
    const countryName = result.name;
    // weather description
    const weatherDescription = result.weather[0].description;
    // Humidity
    const humidity = result.main.humidity + "%";
    // Weather icon
    const icon = result.weather[0].icon;
    // Pressure
    const pressure = result.main.pressure;
    // Wind
    const airCondition = result.wind;
    const airGust = check(result.wind.gust);

    const forecastList = foreCastResponce.list.slice(0, 7).map((item) => ({
      time: formatTime12Hour(item.dt),
      icon: item.weather[0].icon,
      temperature: kelvinToCelsius(item.main.temp),
      weather: item.weather[0].description,
    }));

    const fiveDayForecast = foreCastResponce.list
      .filter((item, index) => index % 8 === 0)
      .map((item) => ({
        date: getDay(item.dt_txt.split(" ")[0]), // Extract the date
        weather: item.weather[0].description,
        icon: item.weather[0].icon,
        temperature: kelvinToCelsius(item.main.temp),
      }));
    res.render("index.ejs", {
      countryName,
      weatherDescription,
      humidity,
      temperature,
      speed,
      sunriseTime,
      sunsetTime,
      icon,
      feelsLike,
      pressure,
      tempMin,
      tempMax,
      lat,
      lon,
      forecastResult: forecastList,
      fiveDayForecast,
      airCondition,
      airGust,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});


app.post("/", async (req, res) => {
  try {
    const search = req.body["search-cities"];
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
    );
    const foreCast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}`
    );
    const result = response.data;
    const foreCastResponce = foreCast.data;
    // Temperature
    const temperature = kelvinToCelsius(result.main.temp);
    const feelsLike = kelvinToCelsius(result.main.feels_like);
    const tempMin = kelvinToCelsius(result.main.temp_min);
    const tempMax = kelvinToCelsius(result.main.temp_max);
    // Speed
    const speed = result.wind.speed + "km/hr";
    const lat = result.coord.lat;
    const lon = result.coord.lon;
    // Date Sunrise
    const sunriseTime = formatTime12Hour(result.sys.sunrise);
    // Date Sunset
    const sunsetTime = formatTime12Hour(result.sys.sunset);
    const countryName = result.name;
    // weather description
    const weatherDescription = result.weather[0].description;
    // Humidity
    const humidity = result.main.humidity + "%";
    // Weather icon
    const icon = result.weather[0].icon;
    // Pressure
    const pressure = result.main.pressure;
    // Wind
    const airCondition = result.wind;
    const airGust = check(result.wind.gust);

    const forecastList = foreCastResponce.list.slice(0, 7).map((item) => ({
      time: formatTime12Hour(item.dt),
      icon: item.weather[0].icon,
      temperature: kelvinToCelsius(item.main.temp),
      weather: item.weather[0].description,
    }));

    const fiveDayForecast = foreCastResponce.list
      .filter((item, index) => index % 8 === 0)
      .map((item) => ({
        date: getDay(item.dt_txt.split(" ")[0]), // Extract the date
        weather: item.weather[0].description,
        icon: item.weather[0].icon,
        temperature: kelvinToCelsius(item.main.temp),
      }));
    res.render("index.ejs", {
      countryName,
      weatherDescription,
      humidity,
      temperature,
      speed,
      sunriseTime,
      sunsetTime,
      icon,
      feelsLike,
      pressure,
      tempMin,
      tempMax,
      lat,
      lon,
      forecastResult: forecastList,
      fiveDayForecast,
      airCondition,
      airGust,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.listen(port, () => {
  console.log(`Port running on localhost: ${port}`);
});
