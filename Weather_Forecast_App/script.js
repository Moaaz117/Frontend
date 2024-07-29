const apiKey = "";
const search_btn = document.getElementById('search-btn');
let city_input = document.getElementById("city-input");
const city_p = document.getElementById('city');
const derece = document.getElementById('derece');
const durum = document.getElementById('durum');
const nem = document.getElementById('nem');
const hiz = document.getElementById('hiz');
const tarih = document.getElementById('tarih');
const container_right = document.getElementById("container-right");

// Günlerin div'lerini tanımla
const mondayDiv = document.getElementById('monday');
const tuesdayDiv = document.getElementById('tuesday');
const wednesdayDiv = document.getElementById('wednesday');
const thursdayDiv = document.getElementById('thursday');
const fridayDiv = document.getElementById('friday');

search_btn.addEventListener('click', Search);
city_input.addEventListener("keypress", function (event) {

  if (event.key === "Enter") {

    event.preventDefault();

    document.getElementById("search-btn").click();
  }
});
async function Search() {
  city_input = document.getElementById('city-input');
  const city = city_input.value;
  if (city != "") {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Lütfen bir şehir girin");
  }
}

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Hava durumu verileri alınamadı');
  }
  const data = await response.json();
  return data;
}

function displayWeatherInfo(data) {
  container_right.style.display = "block";
  const currentWeather = data.list[0]; // Mevcut hava durumu tahmini

  const weatherId = currentWeather.weather[0].id;
  const weatherEmoji = getWeatherEmoji(weatherId);

  city_p.textContent = `Current Weather in ${data.city.name}, ${data.city.country}`;
  derece.textContent = `${currentWeather.main.temp} °C`;

  durum.innerHTML = `
        <p><img src="https://openweathermap.org/img/wn/${weatherEmoji}@2x.png">${currentWeather.weather[0].description}</p>
      `;


  nem.textContent = `Humidity: ${currentWeather.main.humidity}%`;
  hiz.textContent = `Wind speed: ${currentWeather.wind.speed} m/s`;

  // Günlerin div'lerini tanımla
  const daysDivs = [mondayDiv, tuesdayDiv, wednesdayDiv, thursdayDiv, fridayDiv];

  // İlk 5 gün için hava durumu tahminlerini al
  const forecasts = data.list.filter((forecast, index) => index % 8 === 0).slice(0, 5);

  forecasts.forEach((forecast, index) => {
    const dayDiv = daysDivs[index];
    dayDiv.className = "Days";
    const date = new Date(forecast.dt * 1000);
    const dayName = getDayName(date);
    const temp = forecast.main.temp;
    const weatherDesc = forecast.weather[0].description;
    const weatherId = forecast.weather[0].id;
    const weatherEmoji = getWeatherEmoji(weatherId);

    tarih.textContent = `${dayName} ${new Date().toLocaleDateString()}`;// tarihi eklemek için

    if (dayDiv) {
      dayDiv.innerHTML = `
        <p class="right_day">${dayName}</p>
        <p class="right_derece" >${temp} °C</p>
        <p class="right_durum" ><img src="https://openweathermap.org/img/wn/${weatherEmoji}@2x.png">${weatherDesc}</p>
      `;
    }
  });
}

function getDayName(date) {
  const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  return daysOfWeek[date.getDay()];
}

function getWeatherEmoji(weatherId) {
  if (weatherId >= 200 && weatherId < 300) {
    return "11d"; // Thunderstorm
  } else if (weatherId >= 300 && weatherId < 400) {
    return "09d"; // Drizzle
  } else if (weatherId >= 500 && weatherId < 600) {
    return "10d"; // Rain
  } else if (weatherId >= 600 && weatherId < 700) {
    return "13d"; // Snow
  } else if (weatherId >= 700 && weatherId < 800) {
    return "50d"; // Atmosphere (fog, mist, etc.)
  } else if (weatherId === 800) {
    return "01d"; // Clear
  } else if (weatherId > 800 && weatherId < 900) {
    return "03d"; // Clouds
  } else {
    return "🌈"; // Unknown
  }
}

function displayError(message) {
  alert(message);
}
