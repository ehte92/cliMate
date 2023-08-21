<div align="center">
<h1 align="center">
<br>cliMate
</h1>
<h3>◦ Control your code's climate</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style&logo=GNU-Bash&logoColor=white" alt="GNU%20Bash" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style&logo=Prettier&logoColor=black" alt="Prettier" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/ehte92/cliMate?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/ehte92/cliMate?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/ehte92/cliMate?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/ehte92/cliMate?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents

- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#️-features)
- [📂 Project Structure](#-project-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [📦 Installation](#-installation)
- [Uninstall](#uninstall)
  - [🎮 Using cliMate](#-using-climate)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 📍 Overview

cliMate is a command-line weather application that provides current weather and forecast information based on a given city. It retrieves data from external APIs and displays it beautifully in the console. Additionally, the project includes a feature to generate ASCII art icons from PNG images and store them in a JSON file. The value proposition lies in the convenience and visually appealing presentation of weather data and the ability to enhance the user experience with custom icons.

---

## ⚙️ Features

| Feature                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **⚙️ Architecture**    | The codebase follows a modular architecture where the functionality is divided into several files or components. It has separate modules for installing dependencies, retrieving weather data, generating icons, and running an API server. The command-line weather application is separated into different modules for retrieving weather and forecasting data. Overall, the codebase exhibits a structured design using Node.js and various dependencies. |
| **📖 Documentation**   | The codebase contains comprehensive documentation in the form of comments and inline explanations. Each file has a brief summary of its functionality, clarifying its purpose and key considerations.                                                                                                                                                                                                                                                        |
| **🔗 Dependencies**    | The project relies on external libraries such as Axios, Moment, Express, and Chalk. Axios is used for making HTTP requests to weather APIs, and Moment is used for working with timestamps and time-related calculations. Express is used to create the API server for handling weather and forecast requests. Chalk is used for styling the console output with colors. These dependencies enhance the functionality and efficiency of the project.         |
| **🧩 Modularity**      | The codebase demonstrates a good level of modularity by separating concerns into different files/modules. Each file represents a specific aspect or feature of the weather application, such as retrieving weather data, getting forecasts, or generating icons. This modular design allows parts of the system to be easily modified or replaced without affecting the entire codebase, making it easier to maintain and extend.                            |
| **⚡️ Performance**    | The performance of the system depends on external APIs and data retrieval. The codebase efficiently handles HTTP requests using Axios and condenses the essential data for weather and forecasts. However, a detailed analysis of performance optimizations, data caching, and network route handling would be required to make further conclusions about performance-related aspects.                                                                       |
| **🔐 Security**        | The codebase does not reveal any specific security concerns. However, it is necessary to ensure that relevant security practices are implemented, such as proper data validation and handling, secure key storage, and protection against malicious input or attacks. Depending on the specific deployment environment, additional security measures may be required, such as encryption or API rate limiting.                                               |
| **🔀 Version Control** | The codebase adopts Git as the version control system, using Github for hosting and collaboration. The repository demonstrates good practices by including meaningful commit messages, commit history, and code reviews through PRs (Pull Requests). These practices facilitate collaboration, code maintenance, and enable rollbacks or feature-based deployments, ensuring the integrity of the project's version history.                                 |
| **🔌 Integrations**    | The project integrates with external APIs, such as OpenWeatherMap, to retrieve the desired weather and forecast data. It utilizes the                                                                                                                                                                                                                                                                                                                        |

---

## 📂 Project Structure

```bash
repo
├── api
│   └── server.js
├── bin
│   └── climate.js
├── icons
│   ├── generator.js
│   ├── icons.json
│   └── images
│       ├── ....png
├── installer.sh
├── lib
│   ├── getForecast.js
│   └── getWeather.js
├── package-lock.json
├── package.json
└── vercel.json

6 directories, 28 files
```

---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                     | Summary                                                                                                                                                                     |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [installer.sh](https://github.com/ehte92/cliMate/blob/main/installer.sh) | This code snippet installs Node.js and npm using nvm (Node Version Manager), with the ability to specify a specific version. It also installs the cliMate package globally. |

</details>

<details closed><summary>Bin</summary>

| File                                                                     | Summary                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [climate.js](https://github.com/ehte92/cliMate/blob/main/bin/climate.js) | This code snippet is a command-line weather application. It retrieves the current weather and a weather forecast for a given city using external APIs. It displays the data beautifully in the console using colors and tables. The user can provide the city as a command-line argument or input it when prompted. |

</details>

<details closed><summary>Icons</summary>

| File                                                                           | Summary          |
| ------------------------------------------------------------------------------ | ---------------- |
| [generator.js](https://github.com/ehte92/cliMate/blob/main/icons/generator.js) | This code block: |

1. Disables specific linting rules for console, imports, and file dependencies
2. Requires the fs, path, and asciify-image modules3. Defines options for rendering icons4. Sets the filename for the JSON file5. Creates an asynchronous function-Initializes an empty icons object-Writes the initial JSON file-Reads and processes PNG files from the "images" directory-Converts each image into ASCII art and adds it to the icons object-Writes the updated JSON fileIn summary, the code generates ASCII art icons from PNG images and stores them in a JSON file. |

</details>

<details closed><summary>Lib</summary>

| File                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getWeather.js](https://github.com/ehte92/cliMate/blob/main/lib/getWeather.js)   | This code snippet retrieves weather data for a city using Axios and Moment libraries. It makes an HTTP GET request to a weather API and transforms the response data into a structured format containing various weather information such as temperature, humidity, wind speed, precipitation, sunrise/sunset times, etc.                                                                                                                                                         |
| [getForecast.js](https://github.com/ehte92/cliMate/blob/main/lib/getForecast.js) | This code snippet is a function called "getForecast" which retrieves weather forecast data for a given city. It makes an HTTP GET request to an API endpoint, processes the response data, and returns a formatted forecast object. It uses external libraries such as axios, chalk, and moment for making the HTTP request, formatting the output, and manipulating timestamps. The function handles potential errors and rejects the promise with an appropriate error message. |

</details>

<details closed><summary>Api</summary>

| File                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [server.js](https://github.com/ehte92/cliMate/blob/main/api/server.js) | This code snippet creates an Express server that provides two API endpoints: one for retrieving current weather information based on a city name, and the other for retrieving forecast information. The server makes requests to the OpenWeatherMap API using the provided API key, and returns the responses as JSON to the client. The server runs on a specified port, defaulting to 3000 if not provided. |

</details>

---

## 🚀 Getting Started

### 📦 Installation

> You need NodeJs 14 or later to run this tool.

```bash
npm install climatey -g
```

## Uninstall

```bash
npm remove climatey -g
```

### 🎮 Using cliMate

```dotnetcli
$ climate

✔ City Name or Zip Code: · New York


                                                                     11ttffffLLfffftt11
    Weather : clear sky                                          ttffLLLLLLLLLLLLLLLLLLfftt
    Temperature : 21.55°C                                    11ffLLLLLLLLLLLLLLLLLLLLLLLLLLff11
    Humidity : 74%                                         11LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL11
    Visibility : 10000m                                  11LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL11
    Pressure : 1018 hPa                                  ffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLff
    Wind Speed : 3.6 m/s                               ttLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLtt
    Wind Direction : 250deg                            ffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLff
    Wind Gust : n\a                                  11LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL11
    Cloudiness : No                                  ttLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLtt
    Precipitation : No                               ffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLff
    Rain : No                                        LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
    Snow : No                                        LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
    Sunrise : 2:12:08 PM                             LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
    Sunset : 3:46:41 AM                              ffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLff
    TimeZone : -14400                                ffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLff
    City : New York                                  ttLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLtt
    Latitude : 40.7143                               11LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL11
    Longitude : -74.006                                ttLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLtt
    Time : Monday, 21st August 2023, 2:47:30 PM        11ffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLff11
                                                         11LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL11
                                                           11LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL11
                                                             11ffLLLLLLLLLLLLLLLLLLLLLLLLLLff11
                                                               11ttLLLLLLLLLLLLLLLLLLLLLLtt11
                                                                   11ttffffLLLLLLfffftt11


 Weather Forecast 🔮:
┌──────────────────────┬─────────────┬──────────────────┬──────────┬────────────┬─────────┬───────┬────────┬──────┐
│         Time         │ Temperature │ Weather          │ Humidity │ Visibility │ Wind    │ Cloud │ Rain   │ snow │
├────────────┬─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Morning │ 24.04°C     │ overcast clouds  │ 59%      │ 10000m     │ 5.68m/s │ 100%  │ No     │ no   │
│            ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Noon    │ 19.84°C     │ overcast clouds  │ 53%      │ 10000m     │ 6.41m/s │ 100%  │ No     │ no   │
│ Tue 22 Aug ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Evening │ 23.26°C     │ scattered clouds │ 43%      │ 10000m     │ 5.52m/s │ 46%   │ No     │ no   │
│            ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Night   │ 26.20°C     │ broken clouds    │ 35%      │ 10000m     │ 3.78m/s │ 66%   │ No     │ no   │
├────────────┼─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Morning │ 23.19°C     │ overcast clouds  │ 44%      │ 10000m     │ 1.63m/s │ 94%   │ No     │ no   │
│            ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Noon    │ 19.91°C     │ few clouds       │ 49%      │ 10000m     │ 4.24m/s │ 11%   │ No     │ no   │
│ Wed 23 Aug ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Evening │ 23.56°C     │ clear sky        │ 34%      │ 10000m     │ 3.02m/s │ 3%    │ No     │ no   │
│            ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Night   │ 26.18°C     │ clear sky        │ 29%      │ 10000m     │ 2.11m/s │ 2%    │ No     │ no   │
├────────────┼─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Morning │ 21.84°C     │ few clouds       │ 50%      │ 10000m     │ 3.47m/s │ 15%   │ No     │ no   │
│            ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Noon    │ 19.98°C     │ few clouds       │ 56%      │ 10000m     │ 1.65m/s │ 12%   │ No     │ no   │
│ Thu 24 Aug ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Evening │ 21.66°C     │ overcast clouds  │ 56%      │ 10000m     │ 3.32m/s │ 100%  │ No     │ no   │
│            ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Night   │ 23.19°C     │ overcast clouds  │ 52%      │ 10000m     │ 5.95m/s │ 99%   │ No     │ no   │
├────────────┼─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Morning │ 21.58°C     │ light rain       │ 68%      │ 10000m     │ 6.94m/s │ 99%   │ 0.85mm │ no   │
│            ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Noon    │ 20.45°C     │ moderate rain    │ 87%      │ 10000m     │ 7.46m/s │ 100%  │ 6.81mm │ no   │
│ Fri 25 Aug ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Evening │ 23.03°C     │ light rain       │ 82%      │ 10000m     │ 5.07m/s │ 100%  │ 1.69mm │ no   │
│            ├─────────┼─────────────┼──────────────────┼──────────┼────────────┼─────────┼───────┼────────┼──────┤
│            │ Night   │ 25.12°C     │ light rain       │ 73%      │ 10000m     │ 3.27m/s │ 100%  │ 0.28mm │ no   │
└────────────┴─────────┴─────────────┴──────────────────┴──────────┴────────────┴─────────┴───────┴────────┴──────┘
```

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).

```sh
git checkout -b new-feature-branch
```

4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.

```sh
git commit -m 'Implemented new feature.'
```

6. Push your changes to your forked repository on GitHub using the following command

```sh
git push origin new-feature-branch
```

7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
   The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  GNU` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---
