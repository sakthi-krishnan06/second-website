const cityData = {
chennai: {
city: "Chennai, India",
temperature: "31°",
condition: "Sunny",
icon: "☀️",
humidity: "68%",
wind: "14 km/h",
feels: "34°",
visibility: "8 km"
},

```
delhi: {
    city: "New Delhi, India",
    temperature: "34°",
    condition: "Mostly Sunny",
    icon: "🌤️",
    humidity: "52%",
    wind: "11 km/h",
    feels: "36°",
    visibility: "7 km"
},

mumbai: {
    city: "Mumbai, India",
    temperature: "29°",
    condition: "Cloudy",
    icon: "☁️",
    humidity: "76%",
    wind: "18 km/h",
    feels: "31°",
    visibility: "6 km"
},

bengaluru: {
    city: "Bengaluru, India",
    temperature: "27°",
    condition: "Partly Cloudy",
    icon: "⛅",
    humidity: "70%",
    wind: "12 km/h",
    feels: "28°",
    visibility: "9 km"
},

hyderabad: {
    city: "Hyderabad, India",
    temperature: "30°",
    condition: "Sunny",
    icon: "☀️",
    humidity: "58%",
    wind: "13 km/h",
    feels: "32°",
    visibility: "9 km"
}
```

};

// Search weather

function searchWeather() {

```
const input = document
    .getElementById("cityInput")
    .value
    .trim()
    .toLowerCase();

if (input === "") {
    alert("Please enter a city name.");
    return;
}

if (cityData[input]) {

    updateWeather(cityData[input]);

} else {

    alert(
        "City not available in demo.\n\nTry: Chennai, Delhi, Mumbai, Bengaluru or Hyderabad."
    );
}
```

}

// Update weather information

function updateWeather(data) {

```
document.getElementById("cityName").textContent = data.city;

document.getElementById("temperature").textContent =
    data.temperature;

document.getElementById("condition").textContent =
    data.condition;

document.getElementById("weatherIcon").textContent =
    data.icon;

document.getElementById("humidity").textContent =
    data.humidity;

document.getElementById("wind").textContent =
    data.wind;

document.getElementById("feels").textContent =
    data.feels;

document.getElementById("visibility").textContent =
    data.visibility;
```

}

// Enter key search

document
.getElementById("cityInput")
.addEventListener("keypress", function(event) {

```
    if (event.key === "Enter") {
        searchWeather();
    }

});
```

// Get user's location

function getLocation() {

```
if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
}

navigator.geolocation.getCurrentPosition(

    function(position) {

        alert(
            "Location detected successfully!\n\n" +
            "Latitude: " +
            position.coords.latitude.toFixed(4) +
            "\nLongitude: " +
            position.coords.longitude.toFixed(4)
        );

    },

    function() {

        alert(
            "Unable to access your location. " +
            "Please allow location permission."
        );

    }

);
```

}