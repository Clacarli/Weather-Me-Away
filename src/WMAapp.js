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
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  return `${day} ${date} ${month} ${year}`;
}
function formatTime(timestamp) {
  let fullDate = new Date(timestamp);
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  return `${hours}:${minutes}`;
}
function displayTemperature(response) {
  console.log(response);
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
  skyItem.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  skyItem.setAttribute("alt", response.data.weather[0].description);
}
let city = "Fort Lauderdale";
let apiKey = "8c1d3a291a4d37607365dab69374db49";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
