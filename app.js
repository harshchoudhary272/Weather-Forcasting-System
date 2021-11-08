let weather = {
    apikey: "1f7a4a23c36d62dcd151e8a7e57d115d",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + 
            city +
            "&units=metric&appid=" +
            this.apikey
        )
             .then((response) => response.json())
             .then((data) => console.log(data));
    },
    /*displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather;
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
    }*/
};