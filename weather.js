// =============================================
// STEP 1: Hardcoded weather data for testing
// Jab API key milega, neeche wala section use karna
// =============================================

var weatherData = {
  "delhi": {
    city: "New Delhi",
    country: "India",
    temp: "32°C",
    feelsLike: "35°C",
    humidity: "60%",
    windSpeed: "12 km/h",
    description: "Clear Sky",
    condition: "Sunny",
    icon: "☀️"
  },
  "mumbai": {
    city: "Mumbai",
    country: "India",
    temp: "29°C",
    feelsLike: "33°C",
    humidity: "80%",
    windSpeed: "18 km/h",
    description: "Partly Cloudy",
    condition: "Cloudy",
    icon: "⛅"
  },
  "patna": {
    city: "Patna",
    country: "India",
    temp: "36°C",
    feelsLike: "39°C",
    humidity: "55%",
    windSpeed: "8 km/h",
    description: "Hot and Humid",
    condition: "Sunny",
    icon: "🌤️"
  },
  "london": {
    city: "London",
    country: "UK",
    temp: "14°C",
    feelsLike: "11°C",
    humidity: "72%",
    windSpeed: "22 km/h",
    description: "Overcast Clouds",
    condition: "Cloudy",
    icon: "☁️"
  },
  "new york": {
    city: "New York",
    country: "USA",
    temp: "22°C",
    feelsLike: "20°C",
    humidity: "50%",
    windSpeed: "15 km/h",
    description: "Light Rain",
    condition: "Rainy",
    icon: "🌧️"
  },
  "tokyo": {
    city: "Tokyo",
    country: "Japan",
    temp: "26°C",
    feelsLike: "28°C",
    humidity: "65%",
    windSpeed: "10 km/h",
    description: "Clear Sky",
    condition: "Sunny",
    icon: "☀️"
  }
};

// Page load hone par default city dikhao
window.onload = function() {
  showWeather("delhi");
}

// Search button click hone par
function searchWeather() {
  var input = document.getElementById("cityInput");
  var city = input.value.trim().toLowerCase();
  var errorMsg = document.getElementById("errorMsg");

  // Agar input khali hai
  if (city === "") {
    errorMsg.textContent = "Please enter a city name.";
    return;
  }

  // Hardcoded data mein city dhundho
  if (weatherData[city]) {
    errorMsg.textContent = "";
    showWeather(city);
  } else {
    errorMsg.textContent = "City not found. Try: Delhi, Mumbai, Patna, London, New York, Tokyo";
  }
}

// Weather card update karna
function showWeather(city) {
  var data = weatherData[city];

  document.getElementById("cityName").textContent = data.city;
  document.getElementById("countryName").textContent = data.country;
  document.getElementById("temperature").textContent = data.temp;
  document.getElementById("feelsLike").textContent = data.feelsLike;
  document.getElementById("humidity").textContent = data.humidity;
  document.getElementById("windSpeed").textContent = data.windSpeed;
  document.getElementById("description").textContent = data.description;
  document.getElementById("condition").textContent = data.condition;
  document.getElementById("weatherIcon").textContent = data.icon;
}

// Enter key press karne par bhi search ho
document.getElementById("cityInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    searchWeather();
  }
});


// =============================================
// STEP 2: Jab OpenWeatherMap API key mile
// Upar wala weatherData aur searchWeather() hatao
// Neeche wala uncomment karo
// =============================================

/*
var API_KEY = "apna_api_key_yahan_daalo";

function searchWeather() {
  var city = document.getElementById("cityInput").value.trim();
  var errorMsg = document.getElementById("errorMsg");

  if (city === "") {
    errorMsg.textContent = "Please enter a city name.";
    return;
  }

  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=metric";

  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(function(data) {
      errorMsg.textContent = "";

      document.getElementById("cityName").textContent = data.name;
      document.getElementById("countryName").textContent = data.sys.country;
      document.getElementById("temperature").textContent = Math.round(data.main.temp) + "°C";
      document.getElementById("feelsLike").textContent = Math.round(data.main.feels_like) + "°C";
      document.getElementById("humidity").textContent = data.main.humidity + "%";
      document.getElementById("windSpeed").textContent = Math.round(data.wind.speed * 3.6) + " km/h";
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("condition").textContent = data.weather[0].main;
    })
    .catch(function(error) {
      errorMsg.textContent = "City not found. Please check the name.";
    });
}
*/