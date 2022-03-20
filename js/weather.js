//weather.js

const API_KEY = "27bd8db5ec76e3604e0e75632c4ec7cc";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //console.log(`lat${lat}, lng${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  //console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = `${data.weather[0].description} / ${data.main.temp}℃`;
    }); //fatch는 약속
}
function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
