document.querySelector('.search-button').addEventListener('click', checkWeather)



function checkWeather() {

    const city = document.querySelector('.input-area').value;

    const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
    const apiKey = '0737f2096107c6dde3358945d531a85d';

    

    fetch(`${URL}&appid=${apiKey}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = data.main.temp + '°C';
            document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
            document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
        })
        .catch((error) => {
            console.log(error)
        })

        

}
// checkWeather()