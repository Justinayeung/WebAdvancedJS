//https://openweathermap.org/api
// We're going to work with the current weather
// You need to register in order to obtain a key

//-------------------------------------------------------------
//Your Code Starts here

//JSON METHOD
// $(() => {
//     // loadData();
//     attachEvent();
// })

// attachEvent = () => {
//     $("#search-button").click(() => {
//         loadData($("#city").val());
//         $("#city").val([]); //Cleans input
//     });

//     $("#city").keypress((e) => {
//         if (e.keyCode == 13) {
//             loadData($("#city").val());
//             $("#city").val([]); //Cleans input
//         }
//     });
// }

// loadData = () => {
//     //let city = "Fishkill";
//     let city = $("#city").val();

//     //$.getJSON("url",()=>{})
//     $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=70f708ea0ae960d4c869108676d2a8f4",
//         (data) => {
//             //console.log(data);
//             let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
//             let weather = data.weather[0].description;
//             let temp = data.main.temp;
//             let cityName = data.name;
//             let country = data.sys.country;

//             //empties previous values
//             $(".icon").empty();
//             $(".weather").empty();
//             $(".tempF").empty();
//             $(".tempC").empty();
//             $(".city-name").empty();

//             $(".icon").attr("src", icon);
//             $(".weather").append(weather);
//             $(".tempF").append(Math.floor(temp * 9 / 5 - 459.67) + " °F");
//             $(".tempC").append(Math.floor(temp - 273.25) + " °C");
//             $(".city-name").append(cityName + ", " + country);
//         })
// }

if (city != "") {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=70f708ea0ae960d4c869108676d2a8f4",
        type: "GET",
        dataType: "JSON",

        success: (data) => {
            let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            let weather = data.weather[0].description;
            let temp = data.main.temp;
            let cityName = data.name;
            let country = data.sys.country;

            //empties previous values
            $(".icon").empty();
            $(".weather").empty();
            $(".tempF").empty();
            $(".tempC").empty();
            $(".city-name").empty();

            $(".icon").attr("src", icon);
            $(".weather").append(weather);
            $(".tempF").append(Math.floor(temp * 9 / 5 - 459.67) + " °F");
            $(".tempC").append(Math.floor(temp - 273.25) + " °C");
            $(".city-name").append(cityName + ", " + country);
        }
    })
} else {
    $("#error").append("City Not Found");
}

//-------------------------------------------------------------

// Other Resources

// JSON vs XML 
// https://restfulapi.net/json-vs-xml/

// AJAX Call vs getJSON Call
//https://medium.com/@KDweber89/ajax-vs-getjson-ca910fa6854e