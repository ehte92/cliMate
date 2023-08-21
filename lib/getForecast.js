/* eslint-disable no-restricted-syntax */
const axios = require("axios");
const chalk = require("chalk");
const moment = require("moment");

const KELVIN_TO_CELSIUS = 273.15;
const KEY_TIMINGS = [7, 13, 19, 22];

const getTimingLabel = (hour) => {
    switch (hour) {
    case 7: {
        return "Morning";
    }
    case 13: {
        return "Noon";
    }
    case 19: {
        return "Evening";
    }
    default: {
        return "Night";
    }
    }
};

const processForecastData = (list) => {
    const newData = {};

    for (const item of list) {
        const formattedDate = moment.unix(item.dt);
        const hour24Format = Number(formattedDate.format("HH"));

        if (KEY_TIMINGS.includes(hour24Format)) {
            const day = formattedDate.format("ddd DD MMM");
            const timingLabel = getTimingLabel(hour24Format);

            if (!newData[day]) newData[day] = [];

            newData[day].push([
                chalk.cyan.bold(timingLabel),
                `${(item.main.temp - KELVIN_TO_CELSIUS).toFixed(2)}°C`,
                item.weather[0].description,
                `${item.main.humidity}%`,
                `${item.visibility}m`,
                `${item.wind.speed}m/s`,
                item.clouds?.all ? `${item.clouds.all}%` : "No",
                item.rain?.["3h"] ? `${item.rain["3h"]}mm` : "No",
                item.snow?.["3h"] || "no",
            ]);
        }
    }

    return Object.fromEntries(Object.entries(newData).filter(([, timings]) => timings.length === KEY_TIMINGS.length));
};

const getForecast = async (city) => {
    try {
        const { data } = await axios.get(`https://cli-mate.vercel.app/api/forecast/${city}`);
        return processForecastData(data.list);
    } catch (error) {
        throw error?.response?.data || "Satellite is not responding, please try again later.";
    }
};

module.exports = getForecast;
