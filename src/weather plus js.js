function formatDate(date) {
    let currentMinutes = date.getMinutes();
    
    if (currentMinutes < 10) 
    { currentMinutes = `0${currentMinutes}`; }
    
    let currentHours = date.getHours();
    
    if (currentHours < 10) 
    { currentHours = `0${currentHours}`; }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let currentDay = days[date.getDay()];

    return `${currentDay} ${currentHours}:${currentMinutes}`;
    }
    let currentDayTime = document.getElementById("dayTime");
    let newDayTime = new Date();

    currentDayTime.innerHTML = formatDate(newDayTime);

    function displayTemperature(response) {
      let temperature = Math.round(response.data.temperature.current);
      let temperatureElement = document.querySelector("#temp-value");

      temperatureElement.innerHTML = `${temperature}`
      
    
      let h1 = document.querySelector("#cityHeading");
      h1.innerHTML = response.data.city;

      let humidityElement = document.querySelector("#humidity");
      humidityElement.innerHTML = response.data.temperature.humidity;

      let windElement = document.querySelector("#wind");
      windElement.innerHTML = response.data.wind.speed;

      let descriptionElement = document.querySelector("#description");
      descriptionElement.innerHTML = response.data.condition.description;

    }


  
    

    function citySearch(event) {
        event.preventDefault();
         
        let newCityName = document.querySelector("#city-input");
        let city = newCityName.value;
 
      let apiKey = "33betdbcb4109a093d33a9a0230cbfob";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayTemperature);
    }

      let citySearchClick = document.querySelector("#citySearchBar");
      citySearchClick.addEventListener("submit", citySearch); 
    
    
    

    
   


      
