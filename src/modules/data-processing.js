import {
    currentWeatherData
}
from './weather-api-loader.js'

let weatherInformation = ""

// search function
export async function citySearch() {
    const citySearch = document.querySelector('#citySearch')
    const searchBtn = document.querySelector('#searchBtn')

    searchBtn.addEventListener('click', async (e) => {
        e.preventDefault()
        weatherInformation = await currentWeatherData(citySearch.value)
        console.log(weatherInformation)
        currentWeatherDisplay()
    })
}

// displays current weather
function currentWeatherDisplay() {
    const cityName = document.querySelector('#cityName')
    const currentTemp = document.querySelector('#currentTemp')
    const currentWeatherIcon = document.querySelector('#currentWeatherIcon')
    const currentFeelsLike = document.querySelector('#currentFeelsLike')
    const currentHumidity = document.querySelector('#currentHumidity')
    const currentWindSpeed = document.querySelector('#currentWindSpeed')


    cityName.textContent = `${weatherInformation.name}, ${weatherInformation.sys.country}`;
    currentWeatherIcon.src = `https://openweathermap.org/img/wn/${weatherInformation.weather[0].icon}.png`
    currentTemp.textContent = temperatureConverter(weatherInformation.main.temp)
    currentFeelsLike.textContent = `Feels like: ${temperatureConverter(weatherInformation.main.feels_like)}`
    currentHumidity.textContent = `Humidity: ${weatherInformation.main.humidity}%`
    currentWindSpeed.textContent = `Wind speed: ${weatherInformation.wind.speed}m/s`
}

let temperatureScale = 'celsius'
// let temperatureScale = 'fahrenheit'

// converts temperature
function temperatureConverter(temp) {
    if (temperatureScale === 'celsius') {
        return `${Math.round(temp - 273.15)}°C`
    } else if (temperatureScale === 'fahrenheit') {
        return `${Math.round(1.8 * (temp - 273.15) + 32)}°F`
    }
}