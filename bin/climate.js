#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable unicorn/no-await-expression-member */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
const ora = require("ora");
const chalk = require("chalk");
const Table = require("cli-table3");
const { prompt } = require("enquirer");
const getWeather = require("../lib/getWeather");
const Icons = require("../icons/icons.json");
const getForecast = require("../lib/getForecast");

const spinner = ora();

const weather = (city) =>
    new Promise((resolve, reject) => {
        spinner.start("beaming the weather data from space...🛰");
        getWeather(city)
            .then((res) => {
                const weatherIcon = Icons[res.icon];

                const weatherData = Object.keys(res.main)
                    .map(
                        (key) => `${chalk.whiteBright.bold(key)} : ${chalk.white(res.main[key] || chalk.gray("n\\a"))}`,
                    )
                    .filter(Boolean)
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
                spinner.stop();
                resolve(weatherTable.toString());
            })
            .catch((error) => {
                if (error?.message) {
                    spinner.fail(error?.message);
                    return;
                }
                spinner.fail("Sattelite is not responding, please try again later.");
                reject(error);
            });
    });

const foreCast = (city) =>
    new Promise((resolve, reject) => {
        spinner.start("forecasting the future...🔮");
        getForecast(city)
            .then((res) => {
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
                        const tableData = [];
                        if (i === 0) {
                            tableData.push({
                                rowSpan: 4,
                                content: chalk.green.bold(day),
                                vAlign: "center",
                            });
                        }
                        tableData.push(...dayObj);
                        table.push(tableData);
                    }
                }

                spinner.stop();
                resolve(chalk.yellow.bold("\n\n Weather Forecast 🔮:\n") + table.toString());
            })
            .catch((error) => {
                if (error?.message) {
                    spinner.fail(error?.message);
                    reject();
                    return;
                }
                spinner.fail("Sattelite is not responding, please try again later.");
                reject();
            });
    });

(async () => {
    const city =
        process.argv[2] ||
        (
            await prompt({
                type: "input",
                name: "city",
                message: "City Name or Zip Code:",
            })
        ).city;

    console.log("\n");

    const weatherData = await weather(city);
    console.log(weatherData);

    const forecastData = await foreCast(city);
    console.log(forecastData);
})();
