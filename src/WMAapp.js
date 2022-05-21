//alert("Ciao you!");
function displayTemperature(response) {
  console.log(response);
  let temperatureItem = document.querySelector("#temperature");
  let cityItem = document.querySelector("#cities");
  let conditionsItem = document.querySelector("#conditions");
  let windItem = document.querySelector("#winds");
  temperatureItem.innerHTML = Math.round(response.data.main.temp);
  cityItem.innerHTML = response.data.name;
  conditionsItem.innerHTML = response.data.weather[0].description;
  windItem.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "8c1d3a291a4d37607365dab69374db49";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Firenze&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
