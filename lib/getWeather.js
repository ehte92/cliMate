const { default: axios } = require("axios");
const moment = require("moment");

const getWeather = (city) =>
    new Promise((resolve, reject) => {
        axios
            .get(`https://cli-mate.vercel.app/api/weather/${city}`)
            .then((res) => {
                const responseData = res.data;
                resolve({
                    icon: responseData.weather[0].icon,
                    main: {
                        Weather: responseData.weather[0].description,
                        Temperature: `${(responseData.main.temp - 273.15).toFixed(2)}°C`,
                        Humidity: `${responseData.main.humidity}%`,
                        Visibility: `${responseData.visibility}m`,
                        Pressure: `${responseData.main.pressure} hPa`,
                        "Wind Speed": `${responseData.wind.speed} m/s`,
                        "Wind Direction": responseData.wind?.deg ? `${responseData.wind.deg}deg` : undefined,
                        "Wind Gust": responseData.wind?.gust ? `${responseData.wind.gust}m/s` : undefined,
                        Cloudiness: responseData.clouds?.all ? `${responseData.clouds.all}%` : "No",
                        Precipitation: responseData?.pop ? `${Math.floor(responseData.pop * 100)}%` : "No",
                        Rain: responseData.rain?.["3h"] ? `${responseData.rain["3h"]}mm` : "No",
                        Snow: responseData.snow?.["3h"] ? `${responseData.snow["3h"]}mm` : "No",
                        Sunrise: moment.unix(responseData.sys.sunrise).format("h:mm:ss A"),
                        Sunset: moment.unix(responseData.sys.sunset).format("h:mm:ss A"),
                        TimeZone: responseData.timezone,
                        City: responseData.name,
                        Latitude: responseData.coord.lat,
                        Longitude: responseData.coord.lon,
                        Time: moment.unix(responseData.dt).format("dddd, Do MMMM YYYY, h:mm:ss A"),
                    },
                });
            })
            .catch((error) => {
                reject(error?.response?.data?.message || error.message);
            });
    });

module.exports = getWeather;
