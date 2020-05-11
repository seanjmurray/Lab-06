'use strict';

import {myMath} from './myMath.js'
import {myRender} from './myRender.js'
//////////////////////////////////////////////////////////////////////////////////////////////
var allLocations = [];
var hoursArray = [];
var locationArray = [];
var footerData = [];
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
  allLocations.push(this);
}
// Add fill method to each location
Locations.prototype.fill = function () {
  myMath.fillCookies((this.end - this.start), this.minCust, this.maxCust, this.avgCookie, this.traffic, this.cookiesPerHour);
  locationArray.push(this.cookiesPerHour);
};
//Add render method to each location
Locations.prototype.render = function(){
  this.fill();
  myRender.renderRow(this.city, this.cookiesPerHour);
};
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////CODE THAT ACTUALLY DOES STUFF////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
var seattle = new Locations('Seattle',23,65,6,20,6.3);
var tokyo = new Locations('Tokyo',3,24,6,20,1.2);
var dubai = new Locations('Dubai',11,38,6,20,3.7);
var paris = new Locations('Paris',20,38,6,20,2.3);
var lima = new Locations('Lima',2,16,6,20,4.6);
myMath.hoursOfOp(6,14,hoursArray);
renderTable();
function renderTable(){
  myRender.removeTable();
  myRender.renderHead(hoursArray);
  for(var i = 0;i <allLocations.length;i++){
    allLocations[i].render();
  }
  myMath.findTotals(footerData,locationArray);
  myRender.renderFoot(footerData[0]);
}

document.getElementById('location-form').addEventListener('submit',cityMaker);

function cityMaker(event){
  event.preventDefault();
  var city = event.target.city.value;
  var min = Number(event.target.min.value);
  var max = Number(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);
  new Locations(city,min,max,6,20,avg);
  renderTable();
  console.log(allLocations);
}
