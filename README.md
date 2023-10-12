# Weather App README

This README provides an overview of a Weather App developed using Express.js and Axios. The app fetches weather information for a specified location, including current weather conditions and a 5-day forecast.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Endpoints](#endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you start using this Weather App, you should have the following prerequisites in place:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your system.
- [Express](https://expressjs.com/): The app uses the Express.js web framework.
- [Axios](https://github.com/axios/axios): Axios is used to make HTTP requests.
- API Key: You will need an API key from [OpenWeatherMap](https://openweathermap.org/api) to access weather data. The API key should be stored in an environment variable.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

To use this Weather App, follow these steps:

1. **Set up Environment Variables:**

   Create a `.env` file in the project root directory and define the following environment variables:

   ```env
   SECRET_KEY=YOUR_OPENWEATHERMAP_API_KEY
   PORT=3000
   ```

   Replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual OpenWeatherMap API key.

2. **Start the Server:**

   Run the following command to start the Express server:

   ```bash
   npm start
   ```

   The server will start and listen on the specified port (default is 3000).

3. **Access the Weather App:**

   Open a web browser and navigate to `http://localhost:3000` (or the specified port if you changed it in the `.env` file).

4. **Search for Weather:**

   You can search for weather information by entering a city name or location in the provided input field and clicking the "Search" button.

## Features

- Display current weather conditions, including temperature, humidity, wind speed, sunrise, sunset, and more.
- Show a 5-day weather forecast with date, weather description, and temperature.
- Fetch and display weather data for a specified city or location.

## Endpoints

The Weather App defines two main routes:

- `GET /`: This route displays the current weather information for a default location (Manila). It also provides a 5-day weather forecast for the same location.

- `POST /`: This route allows users to search for weather information by entering a city name in the input field. It fetches and displays weather data for the specified city.

## Environment Variables

- `SECRET_KEY`: Your OpenWeatherMap API key is stored as an environment variable. You must set this key to make API requests.

- `PORT`: The port on which the Express server listens. You can change the port as needed.

## Contributing

Feel free to contribute to this project by opening issues, proposing improvements, or submitting pull requests.

## License

This Weather App is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.
