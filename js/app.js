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
var test = [2,4,6,8,10,10,8,6,4,2];
// Finds total cookies from array
function totalCookies(cookieArray){
  function adder(total,current){
    return total + current;
  }
  return cookieArray.reduce(adder);
}
console.log(totalCookies(test));

var seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,

};



