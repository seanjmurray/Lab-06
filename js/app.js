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
  array.push('Daily Location Total');
}
var renderSwitch = false;
//Render function
function renderRow(city, sales) {
  var parent = document.getElementById('sales');
  var tableRow = document.createElement('tr');
  parent.appendChild(tableRow).setAttribute('id',`${city}`);
  parent = document.getElementById(`${city}`);
  var rowHead = document.createElement('th');
  rowHead.textContent = city;
  parent.appendChild(rowHead);
  for (var i = 0; i < sales.length; i++) {
    var text = `${sales[i]} cookies`;
    var listItem = document.createElement('td');
    listItem.textContent = text;
    parent.appendChild(listItem);
  }
  renderSwitch =true;
}
function renderHead(hours){
//finds sales table adds thead tag
  var parent = document.getElementById('sales');
  // TR for thead
  var tableRow = document.createElement('tr');
  // Only renders top of table with time first time
  if(!renderSwitch){
    var thead = document.createElement('thead');
    parent.appendChild(thead);
    // adds new tr
    parent.appendChild(tableRow);
    //adds one empty th for layout
    parent.appendChild(document.createElement('th'));
    // TH for thead with times
    for (var i = 0; i < hours.length; i++) {
      var text = `${hours[i]}`;
      var header = document.createElement('th');
      header.textContent = text;
      parent.appendChild(header);
    }
  }
}
var locationArray = [];
var locationTotal = [];
var hoursArray = [];
function findTotals(){
  return locationArray.reduce(function(array1, array2) {
    return array1.map(function(value, index) {
      return value + array2[index];
    });
  });
}


// Location Constructor
function Locations(city,min,max,startHour,endHour,avg){
  this.city = city;
  this.minCust = min;
  this.maxCust = max;
  this.start = startHour;
  this.end = endHour;
  this.traffic = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
  this.avgCookie = avg;
  this.cookiesPerHour = [];
}
// Add fill method to each location
Locations.prototype.fill = function () {
  fillCookies((this.end - this.start), this.minCust, this.maxCust, this.avgCookie, this.cookiesPerHour);
};
//Add render method to each location
Locations.prototype.render = function(){
  renderRow(this.city, this.cookiesPerHour);
};
// Makes object for each Location
var seattle = new Locations('Seattle',23,65,6,20,6.3);
var tokyo = new Locations('Tokyo',3,24,6,20,1.2);
var dubai = new Locations('Dubai',11,38,6,20,3.7);
var paris = new Locations('Paris',20,38,6,20,2.3);
var lima = new Locations('Lima',2,16,6,20,4.6);

hoursOfOp(6,14,hoursArray);
