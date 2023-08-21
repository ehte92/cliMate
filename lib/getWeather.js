const axios = require("axios");
const moment = require("moment");

const KELVIN_TO_CELSIUS = 273.15;

const transformWeatherData = (data) => {
    const {
        weather, main, wind, clouds, rain, snow, sys, visibility, pop, timezone, name, coord, dt,
    } = data;

    return {
        icon: weather[0].icon,
        main: {
            Weather: weather[0].description,
            Temperature: `${(main.temp - KELVIN_TO_CELSIUS).toFixed(2)}°C`,
            Humidity: `${main.humidity}%`,
            Visibility: `${visibility}m`,
            Pressure: `${main.pressure} hPa`,
            "Wind Speed": `${wind.speed} m/s`,
            "Wind Direction": wind?.deg ? `${wind.deg}deg` : undefined,
            "Wind Gust": wind?.gust ? `${wind.gust}m/s` : undefined,
            Cloudiness: clouds?.all ? `${clouds.all}%` : "No",
            Precipitation: pop ? `${Math.floor(pop * 100)}%` : "No",
            Rain: rain?.["3h"] ? `${rain["3h"]}mm` : "No",
            Snow: snow?.["3h"] ? `${snow["3h"]}mm` : "No",
            Sunrise: moment.unix(sys.sunrise).format("h:mm:ss A"),
            Sunset: moment.unix(sys.sunset).format("h:mm:ss A"),
            TimeZone: timezone,
            City: name,
            Latitude: coord.lat,
            Longitude: coord.lon,
            Time: moment.unix(dt).format("dddd, Do MMMM YYYY, h:mm:ss A"),
        },
    };
};

const getWeather = async (city) => {
    try {
        const response = await axios.get(`https://cli-mate.vercel.app/api/weather/${city}`);
        return transformWeatherData(response.data);
    } catch (error) {
        throw error?.response?.data?.message || error.message;
    }
};

module.exports = getWeather;
