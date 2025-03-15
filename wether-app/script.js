weather_call();

document.querySelector("button").addEventListener("click",weather_call);

function weather_call()
{
    let c_name = (document.querySelector("#search-city").value).trim();
    let city_name = "";
    let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let month = ['Jan','Feb','Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let d = new Date();
    let hour = (d.getHours() < 10) ? "0" +d.getHours() : d.getHours();
    let min = (d.getMinutes() < 10) ? "0"+d.getMinutes() : d.getMinutes();
    let type = (d.getHours() < 12) ? "AM" : "PM";

    if(c_name == "")
    {
        city_name = "delhi";
        document.querySelector("#search-city").value = "delhi";
    }
    else
    {
        city_name = c_name;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=617c5fc02b668db549e7e3220476011f&units=metric`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res);
        // console.log(res.name);
        document.querySelector(".main").innerHTML = `
        <h3 class"">${res.name}</h3>
        <h4>${day[new Date().getDay()]}, ${month[new Date().getMonth()]} ${new Date().getDate()}, ${hour} : ${min} ${type}</h2>
        <div class="temp mt-4">
            <h1>${res.main.temp}<sup><div class="in"></div></sup></h1>
            <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png">
        </div>
        <p class="cast">${res.weather[0].main}</p>
        <h4 class="mb-5">Wind: ${res.wind.speed}km/h</h4>
        `; 
    })
    .catch((err)=>{
        console.log(err);
    })
}