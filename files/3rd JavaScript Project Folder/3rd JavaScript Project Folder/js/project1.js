const months = [
"January",
"Febuary",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];

const weekdays = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
// query Selector All is very powerful, and useful. Makes it much easier
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// For month, know that it is an array. So December (12th Month) would be 11 below
// let futureDate = new Date(2022, 11, 25, 12, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 19, 12, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const secs = futureDate.getHours();
// Dealing with days is much more trickier
let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}PM`;

// The future date in miliseconds
const futureTime = futureDate.getTime();

function getRemainingTime(){
const today = new Date().getTime();
const t = futureTime - today;
// 1s = 1000ms
// 1m = 60s
// 1hr = 60mins
// 1d = 24hrs

// values in ms
const oneDay = 24*60*60*1000;
const oneHour = 60*60*1000;
const oneMinute = 60*1000;
// for calculating all values
let days = t/oneDay;
days = Math.floor(days);
let hours = Math.floor((t%oneDay)/oneHour);
let minutes = Math.floor((t%oneHour)/oneMinute);
let seconds = Math.floor((t%oneMinute)/100);

// set values array
const values = [days, hours, minutes, seconds];

function format(item){
    if (item < 10){
        return item = `0${item}`
    }
    return item
}

items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
});
if (t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, time's up!</h4>;`
}
}
// The countdown
let countdown = setInterval(getRemainingTime, 100);
getRemainingTime();