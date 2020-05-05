'use strict';
// Random number between min and max
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

// Finds cookies sold per hour
function howManyCookies(randomNum, averageCookies) {
  var howMany = randomNum * averageCookies;
  return Math.floor(howMany);
}
// Finds total cookies from array
function totalCookies(cookieArray) {
  var adder = (total, current) => total + current;
  return cookieArray.reduce(adder);
}
// Fills cookie array
function fillCookies(hours, min, max, avg, array) {
  for (var i = 0; i < hours; i++) {
    var cookieHour = howManyCookies(randomNumber(min, max), avg);
    array.push(cookieHour);
  }
  array.push(totalCookies(array));
}
// Fills hours of op array
function hoursOfOp(start, total, array) {
  for (var i = 0; i < total; i++)
    if (start < 12) {
      array.push(`${start}am`);
      start++;
    } else if (start === 12) {
      array.push(`${start}pm`);
      start++;
    } else {
      array.push(`${start - 12}pm`);
      start++;
    }
  array.push('Total');
}
//Render function
function render(city, hours, sales) {
  var parent = document.getElementById('sales');
  var header = document.createElement('h3');
  header.textContent = city;
  parent.appendChild(header);
  for (var i = 0; i < hours.length; i++) {
    var text = `${hours[i]}: ${sales[i]} cookies`;
    var listItem = document.createElement('li');
    listItem.textContent = text;
    parent.appendChild(listItem);
  }
}

// Location Constructor
function Location(city,min,max,startHour,endHour,avg){
  this.city = city;
  this.minCust = min;
  this.maxCust = max;
  this.start = startHour;
  this.end = endHour;
  this.hours = [];
  this.avgCookie = avg;
  this.cookiesPerHour = [];
}
// Add fill method to each location
Location.prototype.fill = function () {
  fillCookies((this.end - this.start), this.minCust, this.maxCust, this.avgCookie, this.cookiesPerHour);
  hoursOfOp(this.start, (this.end - this.start), this.hours);
  render(this.city, this.hours, this.cookiesPerHour);
};
// Makes object for each Location
var seattle = new Location('Seattle',23,65,6,20,6.3);
var tokyo = new Location('Tokyo',3,24,6,20,1.2);
var dubai = new Location('Dubai',11,38,6,20,3.7);
var paris = new Location('Paris',20,38,6,20,2.3);
var lima = new Location('Lima',2,16,6,20,4.6);

