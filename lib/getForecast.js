/* eslint-disable no-restricted-syntax */
const { default: axios } = require("axios");
const chalk = require("chalk");
const moment = require("moment");

const getTimeing = (hour) => {
    if (hour === 7) {
        return "Morning";
    }
    if (hour === 13) {
        return "Noon";
    }
    if (hour === 19) {
        return "Evening";
    }
    return "Night";
};

const getForecast = (city) =>
    new Promise((resolve, reject) => {
        axios
            .get(`https://cli-mate.vercel.app/api/forecast/${city}`)
            .then((res) => {
                const newData = {};
                const { list } = res.data;

                for (const listElement of list) {
                    const hour24Format = Number(moment.unix(listElement.dt).format("HH"));

                    if ([7, 13, 19, 22].includes(hour24Format)) {
                        const day = moment.unix(listElement.dt).format("ddd DD MMM");

                        if (!newData[day]) newData[day] = [];

                        newData[day].push([
                            chalk.cyan.bold(getTimeing(Number(moment.unix(listElement.dt).format("HH")))),
                            `${(listElement.main.temp - 273.15).toFixed(2)}°C`,
                            listElement.weather[0].description,
                            `${listElement.main.humidity}%`,
                            `${listElement.visibility}m`,
                            `${listElement.wind.speed}m/s`,
                            listElement.clouds?.all ? `${listElement.clouds.all}%` : "No",
                            listElement.rain?.["3h"] ? `${listElement.rain["3h"]}mm` : "No",
                            listElement.snow?.["3h"] || "no",
                        ]);
                    }
                }

                for (const day of Object.keys(newData)) if (newData[day].length < 4) delete newData[day];

                resolve(newData);
            })
            .catch((error) => {
                reject(error?.response?.data || "Sattelite is not responding, please try again later.");
            });
    });

module.exports = getForecast;
