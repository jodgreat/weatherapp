Weather App README
This README provides an overview of a Weather App developed using Express.js and Axios. The app fetches weather information for a specified location, including current weather conditions and a 5-day forecast.

Table of Contents
Prerequisites
Installation
Usage
Features
Endpoints
Environment Variables
Contributing
License
Prerequisites
Before you start using this Weather App, you should have the following prerequisites in place:

Node.js: Make sure you have Node.js installed on your system.
Express: The app uses the Express.js web framework.
Axios: Axios is used to make HTTP requests.
API Key: You will need an API key from OpenWeatherMap to access weather data. The API key should be stored in an environment variable.
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd <project-directory>
Install the required dependencies:

bash
Copy code
npm install
Usage
To use this Weather App, follow these steps:

Set up Environment Variables:

Create a .env file in the project root directory and define the following environment variables:

env
Copy code
SECRET_KEY=YOUR_OPENWEATHERMAP_API_KEY
PORT=3000
Replace YOUR_OPENWEATHERMAP_API_KEY with your actual OpenWeatherMap API key.

Start the Server:

Run the following command to start the Express server:

bash
Copy code
npm start
The server will start and listen on the specified port (default is 3000).

Access the Weather App:

Open a web browser and navigate to http://localhost:3000 (or the specified port if you changed it in the .env file).

Search for Weather:

You can search for weather information by entering a city name or location in the provided input field and clicking the "Search" button.

Features
Display current weather conditions, including temperature, humidity, wind speed, sunrise, sunset, and more.
Show a 5-day weather forecast with date, weather description, and temperature.
Fetch and display weather data for a specified city or location.
Endpoints
The Weather App defines two main routes:

GET /: This route displays the current weather information for a default location (Phillipines). It also provides a 5-day weather forecast for the same location.

POST /: This route allows users to search for weather information by entering a city name in the input field. It fetches and displays weather data for the specified city.

Environment Variables
SECRET_KEY: Your OpenWeatherMap API key is stored as an environment variable. You must set this key to make API requests.

PORT: The port on which the Express server listens. You can change the port as needed.

Contributing
Feel free to contribute to this project by opening issues, proposing improvements, or submitting pull requests.

License
This Weather App is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.
