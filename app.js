
let userCity = prompt("Enter Your City");

class Container {
    constructor(city, pressure, humidity, windSpeed, windDeg, icon, description, temperature, parent) {
      this.city = city;
      this.pressure = pressure;
      this.humidity = humidity;
      this.windSpeed = windSpeed;
      this.windDeg = windDeg;
      this.icon = icon;
      this.description = description;
      this.temperature = temperature;
      this.parent = document.querySelector(".articles");
    }
    render() {
      let div = document.createElement("div");
      div.classList.add("container");
      div.innerHTML = `
          <div class="div-col-1">
                  <div class="city">
                      City - ${this.city}
                  </div>
                  <div class="pressure">
                      Pressure: ${this.pressure} hPa
                  </div>
                  <div class="humidity">
                      Humidity: ${this.humidity}%
                  </div>
                  <div class="speed">
                      Wind speed: ${this.windSpeed}km/h SSE
                  </div>
                  <div class="deg">
                      Wind degrees: ${this.windDeg}
                  </div>
              </div>
              <div class="div-col-2">
                  <div class="icon">
                      <img src="http://openweathermap.org/img/w/${this.icon}.png" alt="">
                  </div>
                  <div class="description">
                      Description - ${this.description}
                  </div>
                  <div class="tempr">
                      Temperature: ${this.temperature}<sup>o</sup>c
                  </div>
              </div>
          `;
      this.parent.append(div);
    }
  }
  
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  )
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
      new Container(
        data.name,
        data.main.pressure,
        data.main.humidity,
        data.wind.speed,
        data.wind.deg,
        data.weather.map((item) => item.icon),
        data.weather.map((item) => item.description),
        data.main.temp
      ).render()
    });
  