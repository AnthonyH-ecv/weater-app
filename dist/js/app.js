var cityName = document.getElementById("city-name");

// cityName.addEventListener("keyup", function(event) {
//   // Cancel the default action, if needed
//   event.preventDefault();
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Trigger the button element with a click
//     submit();
//   }
// });

const submit = () => {
  //var app = document.querySelector("#app");
  var container = document.querySelector(".container");

  var city = cityName.value;
  var key = "APPID=b370cb2879fda84d3f7ad1d2e06af966";
  var data = `http://api.openweathermap.org/data/2.5/weather?q=${city}&${key}&lang=fr&units=metric`;

  console.log(city);

  setTimeout(() => {
    cityName.value = "";
  });

  const appData = async function() {
    const response = await fetch(data);
    const jsonData = await response.json();
    console.log(jsonData);

    const affiche = () => {
      container.innerHTML = "";
      var div = document.createElement("div");
      div.classList.add("content");
      var icon = jsonData.weather[0].icon;
      console.log(icon);

      div.innerHTML = `

        <div class = content-top>
          <div class = img-banner>
            <div class = title-city>
          
              <h1 class = title>${jsonData.name}<h1>
            </div>
          <div class = temperature>            
            <p>${jsonData.main.temp_min} <span>&#8451;</span></p>
          </div>   
              
          </div>

          <div class = description>
            <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon météo">
            <p>${jsonData.weather[0].description}</p>
          </div>

        </div>

        <div class = content-bottom>
        <p>Humidité <span>${jsonData.main.humidity}</span> %</p>
        <p>Vent <span>${jsonData.wind.speed}</span> Km/h</p>
        </div>
          
      `;

      container.appendChild(div);
    };
    affiche();
  };
  appData();
};
