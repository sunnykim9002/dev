

const API_KEY = "3d0fd8a19a5b08f1d7fded2b6ad7fa80";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    console.log(url);
}
function onGeoError() {}





navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)