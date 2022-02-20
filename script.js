const currentDate = new Date();

// localStorage.setItem('userDate', JSON.stringify("2 April 2022"));

const y = formateTime(currentDate.getFullYear());
const m = formateTime(currentDate.getMonth() + 1);
const d = formateTime(currentDate.getDate());

const today = y + "-" + m + "-" + d;
// setInterval(funcName, 1000) means that as date is in milliseconds so call thta func every second. 
// set interval calls the passed function after passed interval.
var ramazan = '2 April 2022';

const headingEl = document.getElementById('heading-el');
const caleInputEl = document.querySelector('input[type="date"]');
caleInputEl.value = new Date(ramazan.valueAsDate);

// setting minimum value of calender to current date.
caleInputEl.setAttribute("min", today);

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

// JSON.parse(localStorage.getItem("userDate"))

var ramazanDate = new Date(JSON.parse(localStorage.getItem("userDate")));
ramazanDate.setHours(0);

function countdown(dateCame) {
    // var dateFromCal = new Date(caleInputEl.valueAsDate);
    var dateFromCal = dateCame;
    let currentDate = new Date();

    const totalSeconds = (ramazanDate - currentDate) / 1000;//dividing by 1000 bcz returned date is in milliseconds

    const days = Math.floor(totalSeconds / 3600 / 24);// /3600 reduces seconds and /24 reduces days
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60)

    daysEl.innerHTML = formateTime(days);
    hoursEl.innerHTML = formateTime(hours);
    minsEl.innerHTML = formateTime(mins);
    secondsEl.innerHTML = formateTime(seconds);
    if (ramazanDate != currentDate.valueAsDate) {
        calender();
    }
    // calender();
}

function formateTime(time) {
    // this adds 0 if the time(min, sec, hours, or days) is less than 10 then 0 will be added before that value.
    // if (time < 10) {
    //     const bigTextEl = document.querySelectorAll('.big-text');
    //     // console.log(bigTextEl);
    //     bigTextEl.forEach(element => {
    //         element.style.color = 'red';
    //     });
    //     return (`0${time}`);
    // } else
    //     return time;
    return time < 10 ? (`0${time}`) : time;
}

function calender() {
    if (caleInputEl.valueAsDate != currentDate.valueAsDate) {
        let dateFromCal = new Date(caleInputEl.valueAsDate);
        localStorage.setItem('userDate', JSON.stringify(dateFromCal));
        JSON.parse(localStorage.getItem("userDate"));
        dateFromCal.setHours(0);
        ramazanDate = dateFromCal;
        headingEl.innerHTML = "Choosed Date";
    }
}

// initial call
countdown(ramazanDate)

setInterval(countdown, 1000);