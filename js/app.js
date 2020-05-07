'use strict';
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////GLOBAL VARIABLES///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////MATH VARS//////////////////////////////////////////////////
var hoursArray = [];
var locationArray = [];
var footerData = [];
var footIndex = 0;
//////////////////////////////////RENDER VARS/////////////////////////////////////////////////
var parentElement = document.getElementById('sales');
var renderSwitch = false;
/////////////////////////////////LOCATION ARRAY///////////////////////////////////////////////
var seattleMap = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3697.864808313805!2d-122.33973455133349!3d47.60961085257697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1588807691189!5m2!1sen!2sus';
var parisMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4693.095910761617!2d2.3362489846711765!3d48.86204987734898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1588807746087!5m2!1sen!2sus';
var tokyoMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.97304218315!2d139.60078482570233!3d35.66816253006262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1588807908246!5m2!1sen!2sus';
var limaMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249743.72044599216!2d-77.12786361535997!3d-12.026603400729176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1588807865302!5m2!1sen!2sus';
var dubaiMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6803.265851886894!2d55.27659531075481!3d25.197977415430366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1588807791312!5m2!1sen!2sus';

var seattleBio = 'Our original location in the same spot we have always been in Pike Place market where we purchase fresh Salmon daily.';
var parisBio = 'bonjour de Paris, name a better duo that salmon and art, we\'re waiting.';
var tokyoBio = 'Yet another city built on fish where you can get the same amazing quality cookies.';
var limaBio = 'Take a break from walking though the hills of Lima and grab a fresh cookie';
var dubaiBio = 'We are right next to the tallest building on earth, I bet our cookies taste even better at 2,717 feet in the sky.';

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
function fillCookies(hours, min, max, avg, traffic, array) {
  for (var i = 0; i < hours; i++) {
    var cookieHour = howManyCookies(randomNumber(min, max), avg) * traffic[i];
    cookieHour = Math.ceil(cookieHour);
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

//Calculates total for all locations
function findTotals(array){
  array.push(locationArray.reduce(function(array1, array2) {
    return array1.map(function(currentValue, index) {
      return currentValue + array2[index];
    });
  }));
}
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////RENDER SECTION////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Render function for table header with hours
function renderHead(hours){
  var tableRow = document.createElement('tr');
  var thead = document.createElement('thead');
  parentElement.appendChild(thead);
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
  var tableRow = document.createElement('tr');
  parentElement.appendChild(tableRow).setAttribute('id',`${city}`);
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
  var tableFoot = document.createElement('tfoot');
  var tableRow = document.createElement('tr');
  if(renderSwitch){
    document.getElementById('salesFoot').remove(tableRow);
  }
  parentElement.appendChild(tableFoot).setAttribute('id','salesFoot');
  tableFoot.appendChild(tableRow);
  var total = document.createElement('td');
  total.textContent = 'Totals';
  tableRow.appendChild(total);
  for(var i = 0; i < array.length;i++){
    var data = `${array[i]}`;
    var td = document.createElement('td');
    td.textContent = data;
    tableRow.appendChild(td);
  }
  renderSwitch = true;
}

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////LOCATION SECTION///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// Location Constructor
function Locations(city,mapLink,bio,min,max,startHour,endHour,avg){
  this.city = city;
  this.mapLink = mapLink;
  this.bio = bio;
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
  fillCookies((this.end - this.start), this.minCust, this.maxCust, this.avgCookie, this.traffic, this.cookiesPerHour);
  locationArray.push(this.cookiesPerHour);
  findTotals(footerData);
  footIndex++;
};
//Add render method to each location
Locations.prototype.render = function(){
  this.fill();
  renderRow(this.city, this.cookiesPerHour);
  renderFoot(footerData[footIndex-1]);
};
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////CODE THAT ACTUALLY DOES STUFF////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

var seattle = new Locations('Seattle',seattleMap,seattleBio,23,65,6,20,6.3);
var tokyo = new Locations('Tokyo',tokyoMap,tokyoBio,3,24,6,20,1.2);
var dubai = new Locations('Dubai',dubaiMap,dubaiBio,11,38,6,20,3.7);
var paris = new Locations('Paris',parisMap,parisBio,20,38,6,20,2.3);
var lima = new Locations('Lima',limaMap,limaBio,2,16,6,20,4.6);

// hoursOfOp(6,14,hoursArray);
// renderHead(hoursArray);

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////I ACTUALLY AM CRAZY CODE///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById('seattle').addEventListener('click', function(){
  removeStuff();
  renderLocations(seattleMap,seattle.city,seattleBio);
});
document.getElementById('dubai').addEventListener('click', function(){
  removeStuff();
  renderLocations(dubaiMap,dubai.city,dubaiBio);
});
document.getElementById('tokyo').addEventListener('click', function(){
  removeStuff();
  renderLocations(tokyoMap,tokyo.city,tokyoBio);
});
document.getElementById('paris').addEventListener('click', function(){
  removeStuff();
  renderLocations(parisMap,paris.city,parisBio);
});
document.getElementById('lima').addEventListener('click', function(){
  removeStuff();
  renderLocations(limaMap,lima.city,limaBio);
});
document.getElementById('ourStory').addEventListener('click', function(){
  removeStuff();
  renderStory();
});


///////////THIS IS LITERALLY THE BEST CODE I HAVE EVER WRITTEN///////////
function removeStuff(){
  if(locationSwitch){
    document.getElementsByClassName('getme')[0].parentNode.innerHTML= '<span class="getme"></span>';
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////

function renderHome(){
  var parentThing = document.getElementById('reactDoesThisBetter');
  var div = document.createElement('div');
  parentThing.appendChild(div).setAttribute('class', 'flex getme');
  var img = document.createElement('img');
  div.appendChild(img).setAttribute('src','images/frosted-cookie.jpg');
  locationSwitch =true;
}

var locationSwitch = false;
function renderLocations(map,city,bio){
  var parentThing = document.getElementById('reactDoesThisBetter');
  var div = document.createElement('div');
  var article = document.createElement('article');
  var h3 = document.createElement('h3');
  var makeMap1 = document.createElement('iframe');
  parentThing.appendChild(div).setAttribute('class','flex getme');
  div.appendChild(makeMap1).setAttribute('src', map);
  div.appendChild(article);
  h3.textContent = `${city} Location`;
  article.appendChild(h3);
  var h4 = document.createElement('h4');
  h4.textContent = 'Hours: 6am-8pm';
  article.appendChild(h4);
  var aboutP = document.createElement('p');
  aboutP.textContent = bio;
  article.appendChild(aboutP);
  var addressH =document.createElement('h4');
  addressH.textContent = 'Address:';
  article.appendChild(addressH);
  var address1 = document.createElement('p');
  var address2 = document.createElement('p');
  address1.textContent = 'Fake street name, like really fake';
  article.appendChild(address1);
  address2.textContent = 'Fake city, State, 12345-6789';
  article.appendChild(address2);
  locationSwitch =true;
}
function renderStory(){
  var parentThing = document.getElementById('reactDoesThisBetter');
  var div = document.createElement('div');
  var h3 = document.createElement('h3');
  var article = document.createElement('article');
  parentThing.appendChild(div).setAttribute('class','flex getme');
  var img = document.createElement('img');
  div.appendChild(img).setAttribute('src', 'images/family.jpg');
  div.appendChild(article);
  h3.textContent = 'Our Story';
  article.appendChild(h3);
  var p = document.createElement('p');
  p.textContent = 'I started this business when all of my friends kept asking for my cookie recipe. Now we have expanded to 5 locations across 5 continents, I never thought my cookie\'s would take me there. Thank you so much.';
  article.appendChild(p).setAttribute('class','about');
  locationSwitch =true;
}

