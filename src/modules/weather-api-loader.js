export async function currentWeatherData(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b272e05589b5d32e477aa8e52d61a54e`);
        let data = await response.json();
        return data;
    } catch (err) {
        console.log(err)
    }
}