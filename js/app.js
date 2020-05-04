'use strict';
// Random number between min and max
function randomNumber(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  var number = Math.floor(Math.random() * (max-min+1)) + min;
  return number;
}

// Finds cookies sold per hour
function howManyCookies(randomNum,averageCookies){
  var howMany = randomNum * averageCookies;
  return Math.floor(howMany);
}







