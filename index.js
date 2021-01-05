/**
For 25 seconds, light is red
For 5 seconds, light is yellow
For 30 seconds, I want to make the light as green
*/

let count = 0;

/**
  From 0-24, light should be red
  From 24-29, light should be yellow
  From 30-59, light should be green
**/

let timerElement = document.getElementById('timer');
let redElement = document.getElementsByClassName('red-light-box')[0];
let yellowElement = document.getElementsByClassName('yellow-light-box')[0];
let greenElement = document.getElementsByClassName('green-light-box')[0];
let timertext=document.getElementsByClassName('timer-text')[0];
let specialtimer=30;

setInterval(function() {
  if (count == 60) {
    count = 0;
    specialtimer=30;
  }
  if(count==29) {
    specialtimer=5;
  }
  if(count==34) {
    specialtimer=29;
  }
  if (count < 29) {
    greenElement.style.background = '';
    redElement.style.background = 'red';
  } else if (count < 34) {
    redElement.style.background = '';
    yellowElement.style.background = 'yellow';


  } else if (count < 59) {
    yellowElement.style.background = '';
    greenElement.style.background = 'green';

  }
  specialtimer=specialtimer-1;
  timertext.textContent=specialtimer;
  console.log(count);

  count++;
}, 1000);
