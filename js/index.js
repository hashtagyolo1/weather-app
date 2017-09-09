function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    supported.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  $.getJSON(
    "https://fcc-weather-api.glitch.me/api/current?lat=" +
      position.coords.latitude +
      "&lon=" +
      position.coords.longitude,
    function(json) {
      $("#weatherIcon").append("<img src=" + (json.weather[0].icon) + ">");
      $("#weatherDescription").html(json.weather[0].description);
      $("#temperature").html(json.main.temp);
    }
  );
}

function tempChange(){
  if (document.getElementById("tempButton").innerHTML === "C"){
    document.getElementById("temperature").innerHTML = Math.round(document.getElementById("temperature").innerHTML * 1.8 + 32);
      document.getElementById("tempButton").innerHTML = "F";
  } else {
    document.getElementById("temperature").innerHTML = Math.round((document.getElementById("temperature").innerHTML - 32) / 1.8);
      document.getElementById("tempButton").innerHTML = "C";
  }
}