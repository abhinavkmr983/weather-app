// =============================================
// STEP 1: Hardcoded weather data for testing
// Jab API key milega, Step 2 wala section use karna
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
window.onload = function () {
  showWeather("delhi");

  // Search button click event
  document.getElementById("searchBtn").addEventListener("click", function () {
    searchWeather();
  });

  // Enter key press karne par bhi search ho
  document.getElementById("cityInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchWeather();
    }
  });
};

// Search karo — hardcoded data mein city dhundho
function searchWeather() {
  var cityInput = document.getElementById("cityInput");
  var errorMsg  = document.getElementById("errorMsg");
  var city      = cityInput.value.trim().toLowerCase();

  if (city === "") {
    errorMsg.textContent = "Please enter a city name.";
    return;
  }

  if (weatherData[city]) {
    errorMsg.textContent = "";
    showWeather(city);
  } else {
    errorMsg.textContent = "City not found. Try: Delhi, Mumbai, Patna, London, New York, Tokyo";
  }
}

// Weather card ke saare elements update karo
function showWeather(city) {
  var data = weatherData[city];

  document.getElementById("cityName").textContent    = data.city;
  document.getElementById("countryName").textContent = data.country;
  document.getElementById("temperature").textContent = data.temp;
  document.getElementById("feelsLike").textContent   = data.feelsLike;
  document.getElementById("humidity").textContent    = data.humidity;
  document.getElementById("windSpeed").textContent   = data.windSpeed;
  document.getElementById("description").textContent = data.description;
  document.getElementById("condition").textContent   = data.condition;
  document.getElementById("weatherIcon").textContent = data.icon;
}


