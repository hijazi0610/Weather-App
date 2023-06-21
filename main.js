document.querySelector('.search-button').addEventListener('click', checkWeather)
document.querySelector('.input-area').addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        checkWeather();
    }
})


function checkWeather() {

    const city = document.querySelector('.input-area').value;

    const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
    const apiKey = '0737f2096107c6dde3358945d531a85d';

    const weatherIcon = document.querySelector('.weather-icon');

    fetch(`${URL}&appid=${apiKey}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
            document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
            document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

            if (data.weather[0].main == 'Rain') {
                weatherIcon.src = 'images/rain.png';
            } else if(data.weather[0].main == 'Clear') {
                weatherIcon.src = 'images/clear.png';
            } else if(data.weather[0].main == 'Clouds') {
                weatherIcon.src = 'images/clouds.png';
            } else if (data.weather[0].main == 'Mist') {
                weatherIcon.src = 'images/mist.png';
            } else if (data.weather[0].main == 'Drizzle') {
                weatherIcon.src = 'images/drizzle.png'
            }
            
        })
        .catch((error) => {
            console.log(error)
        })

        
        

}
checkWeather()