//alert("Ciao you!");
function formatDate(timestamp) {
  let fullDate = new Date(timestamp);
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[fullDate.getDay()];
  let date = fullDate.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[fullDate.getMonth()];
  let year = fullDate.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}
function formatTime() {
  let fullDate = new Date();
  let FD = fullDate.toString();
  let arrayTimezone = FD.split(" ");
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes} ${arrayTimezone[5]}`;
}

function displayForecast() {
  let forecastItem = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let daysForecast = ["Wed", "Thur", "Fri", "Sat", "Sun", "Mon"];
  daysForecast.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
      <div class="col-2">
        <div class="weather-forecast-date">${day}</div>
        <img src="src/sun-icon.jpeg" alt="" width="40" />
        <div class="weather-forecast-temperature">
          <span class="max-temp">18°</span>
          <span class="min-temp">17°</span>
        </div>
      </div>`;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastItem.innerHTML = forecastHTML;
}

function displayTemperature(response) {
  let temperatureItem = document.querySelector("#temperature");
  let cityItem = document.querySelector("#cities");
  let conditionsItem = document.querySelector("#conditions");
  let windItem = document.querySelector("#winds");
  let dateItem = document.querySelector("#date");
  let timeItem = document.querySelector("#time");
  let skyItem = document.querySelector("#sky");
  temperatureItem.innerHTML = Math.round(response.data.main.temp);
  cityItem.innerHTML = response.data.name;
  conditionsItem.innerHTML = response.data.weather[0].description;
  windItem.innerHTML = Math.round(response.data.wind.speed);
  dateItem.innerHTML = formatDate(response.data.dt * 1000);
  timeItem.innerHTML = formatTime(response.data.dt * 1000);
  console.log(response.data.dt * 1000);
  skyItem.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  skyItem.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "8c1d3a291a4d37607365dab69374db49";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(city);
  axios.get(apiUrl).then(displayTemperature);
}

function citySubmit(event) {
  event.preventDefault();
  let cityInputItem = document.querySelector("#city-input");
  search(cityInputItem.value);
}
search("Firenze");
displayForecast();

let form = document.querySelector("#search-form");
form.addEventListener("submit", citySubmit);
