const apiKey = "422299e6ad5298efea46176c4f38e3f9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.getElementById("searchBox")
const button = document.getElementById("submit")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {

    if (!city) {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
        return;
    }

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"

    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Assets/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Assets/clear.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Assets/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Assets/mist.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Assets/rain.png"
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "Assets/snow.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    
    
}

 
button.addEventListener('click', function(){
    checkWeather(searchBox.value.trim());
});


searchBox.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

// window.addEventListener('load', () => {
//     checkWeather("delhi");
// });