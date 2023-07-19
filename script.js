const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "d951173335f69730d913a90d534f7960"
}

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e){
    if(e.keyCode===13){
        getInfo(input.value);
    }
}
async function getInfo(data) {
const res= await fetch(`${api.endpoint}weather?q=${data}&units=metric&appid=${api.key}`)
const result = await res.json();
displayResult(result);
}


function displayResult(result){
document.querySelector("#city").textContent=`${result.name}, ${result.sys.country}`;

getOurDate();

let temperature = document.querySelector("#temperature");
temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

let feelsLike = document.querySelector("#feelsLike");
feelsLike.innerHTML= `Feels like: ${Math.round(result.main.feels_like)}<span>°</span>`;

let conditions = document.querySelector("#conditions");
conditions.textContent = `${result.weather[0].description}`;

let variation = document.querySelector("#variation");
variation.innerHTML = `Min: ${Math.round(result.main.temp_min)}<span>°</span> Max: ${Math.round(result.main.temp_max)}<span>°</span>`;
 
console.log(result);

}

function getOurDate(){
// 1. today's date
const myDate = new Date();
const days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// 2. DAY
let currentDay = days[myDate.getDay()];

//3. Date
let currentDate = myDate.getDate();

//4. Month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = months[myDate.getMonth()];

//5. Current year
let currentYear = myDate.getFullYear();
console.log(currentYear);

let displayDate = document.querySelector("#date").textContent = currentDay + " " + currentDate + " " + currentMonth + ",  " + currentYear;
//let displayDate = document.querySelector("#date").textContent = `${currentDay}` + " " + `${currentDate}` + " " + `${currentMonth}` + ",  " + `${currentYear}`;

}