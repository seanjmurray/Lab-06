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
  var adder = (total,current) => total + current;
  return cookieArray.reduce(adder);
}
// Fills cookie array
function fillCookies(hours,min,max,avg,array){
  for(var i =0; i < hours; i++){
    var cookieHour = howManyCookies(randomNumber(min,max),avg);
    array.push(cookieHour);
  }
  array.push(totalCookies(array));
}
// Fills hours of op array
function hoursOfOp(start,total,array){
  for(var i=0;i<total;i++)
    if(start < 12){
      array.push(`${start}am`);
      start++;
    }else if(start === 12){
      array.push(`${start}pm`);
      start++;
    }else{
      array.push(`${start - 12}pm`);
      start++;
    }
}

var seattle = {
  minCust: 23,
  maxCust: 65,
  start: 6,
  end: 20,
  hours: [],
  avgCookie: 6.3,
  cookiesPerHour: [],
  fill: function(){
    fillCookies((this.end-this.start),this.minCust,this.maxCust,this.avgCookie,this.cookiesPerHour);
    hoursOfOp(this.start,(this.end-this.start),this.hours);
  }
};

seattle.fill();
console.log(seattle.cookiesPerHour);
console.log(seattle.hours);
