#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable unicorn/no-await-expression-member */
/* eslint-disable no-restricted-syntax */

const ora = require("ora");
const chalk = require("chalk");
const Table = require("cli-table3");
const { prompt } = require("enquirer");
const getWeather = require("../lib/getWeather");
const Icons = require("../icons/icons.json");
const getForecast = require("../lib/getForecast");

const spinner = ora();

const displayError = (error) => {
    const errorMessage = error?.message || "Satellite is not responding, please try again later.";
    spinner.fail(errorMessage);
};

const formatWeatherData = (res) => {
    const weatherIcon = Icons[res.icon];
    const weatherData = Object.keys(res.main)
        .map((key) => `${chalk.whiteBright.bold(key)} : ${chalk.white(res.main[key] || chalk.gray("n\\a"))}`)
        .join("\n");

    const weatherTable = new Table({
        chars: {
            top: "",
            "top-mid": "",
            "top-left": "",
            "top-right": "",
            bottom: "",
            "bottom-mid": "",
            "bottom-left": "",
            "bottom-right": "",
            left: "",
            "left-mid": "",
            mid: "",
            "mid-mid": "",
            right: "",
            "right-mid": "",
            middle: " ",
        },
        style: {
            "padding-left": 4,
            head: ["yellow", "bold"],
        },
    });
    weatherTable.push([`\n${weatherData}`, weatherIcon]);

    return weatherTable.toString();
};

const formatForecastData = (res) => {
    const table = new Table({
        head: [
            { colSpan: 2, content: "Time" },
            "Temperature",
            "Weather",
            "Humidity",
            "Visibility",
            "Wind",
            "Cloud",
            "Rain",
            "snow",
        ],
        style: {
            border: ["gray"],
            head: ["brightRed", "bold"],
        },
        colAligns: ["center"],
    });

    for (const day of Object.keys(res)) {
        for (const [i, dayObj] of res[day].entries()) {
            const tableData = i === 0
                ? [
                    {
                        rowSpan: 4,
                        content: chalk.green.bold(day),
                        vAlign: "center",
                    },
                ]
                : [];
            tableData.push(...dayObj);
            table.push(tableData);
        }
    }

    return chalk.yellow.bold("\n\n Weather Forecast 🔮:\n") + table.toString();
};

const fetchWeather = async (city) => {
    spinner.start("beaming the weather data from space...🛰");
    try {
        const res = await getWeather(city);
        return formatWeatherData(res);
    } catch (error) {
        displayError(error);
        throw error;
    } finally {
        spinner.stop();
    }
};

const fetchForecast = async (city) => {
    spinner.start("forecasting the future...🔮");
    try {
        const res = await getForecast(city);
        return formatForecastData(res);
    } catch (error) {
        displayError(error);
        throw error;
    } finally {
        spinner.stop();
    }
};

(async () => {
    try {
        const city = process.argv[2]
            || (
                await prompt({
                    type: "input",
                    name: "city",
                    message: "City Name or Zip Code:",
                })
            ).city;

        console.log("\n");

        const weatherData = await fetchWeather(city);
        console.log(weatherData);

        const forecastData = await fetchForecast(city);
        console.log(forecastData);
    } catch {
        // Errors already displayed inside functions
    }
})();
