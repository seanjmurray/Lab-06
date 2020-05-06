'use strict';
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////MATH FUNCTIONS////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
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
var locationArray = [];
//Calculates total for all locations
var hoursArray = [];
function findTotals(){
  return locationArray.reduce(function(array1, array2) {
    return array1.map(function(currentValue, index) {
      return currentValue + array2[index];
    });
  });
}
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////RENDER SECTION////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// Render function for table header with hours
function renderHead(hours){
  var parent = document.getElementById('sales');
  var tableRow = document.createElement('tr');
  var thead = document.createElement('thead');
  parent.appendChild(thead);
  thead.appendChild(tableRow);
  var spacer = document.createElement('th');
  tableRow.appendChild(spacer);
  for (var i = 0; i < hours.length; i++) {
    var text = `${hours[i]}`;
    var th = document.createElement('th');
    th.textContent = text;
    tableRow.appendChild(th);
  }
}
//Render function for location data
function renderRow(city, sales) {
  var parent = document.getElementById('sales');
  var tableRow = document.createElement('tr');
  parent.appendChild(tableRow).setAttribute('id',`${city}`);
  var cityRow = document.getElementById(`${city}`);
  var cityName = document.createElement('td');
  cityName.textContent = city;
  cityRow.appendChild(cityName);
  for (var i = 0; i < sales.length; i++) {
    var text = `${sales[i]} cookies`;
    var td = document.createElement('td');
    td.textContent = text;
    cityRow.appendChild(td);
  }
}
//Render function for table foot
function renderFoot(array){
  var parent = document.getElementById('sales');
  var tableFoot = document.createElement('tfoot');
  var tableRow = document.createElement('tr');
  parent.appendChild(tableFoot);
  tableFoot.appendChild(tableRow);
  var total = document.createElement('td');
  total.textContent = 'Totals';
  tableRow.appendChild(total);
  for(var i = 0;i < array.lenght;i++){
    var td = document.createElement('td');
    td.textContent = `${array[i]}`;
    tableRow.appendChild(td);
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////LOCATION SECTION///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

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
  locationArray.push(this.cookiesPerHour);
};
//Add render method to each location
Locations.prototype.render = function(){
  renderRow(this.city, this.cookiesPerHour);
};
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////CODE THAT ACTUALLY DOES STUFF////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

var seattle = new Locations('Seattle',23,65,6,20,6.3);
var tokyo = new Locations('Tokyo',3,24,6,20,1.2);
var dubai = new Locations('Dubai',11,38,6,20,3.7);
var paris = new Locations('Paris',20,38,6,20,2.3);
var lima = new Locations('Lima',2,16,6,20,4.6);

hoursOfOp(6,14,hoursArray);
seattle.fill();
tokyo.fill();
dubai.fill();
paris.fill();
lima.fill();
var footerData = findTotals(locationArray);
