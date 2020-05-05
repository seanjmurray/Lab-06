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

var seattle = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  start: 6,
  end: 20,
  hours: [],
  avgCookie: 6.3,
  cookiesPerHour: [],
  fill: function () {
    fillCookies((this.end - this.start), this.minCust, this.maxCust, this.avgCookie, this.cookiesPerHour);
    hoursOfOp(this.start, (this.end - this.start), this.hours);
    render(this.city, this.hours, this.cookiesPerHour);
  }
};

var tokyo = {
  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  start: 6,
  end: 20,
  hours: [],
  avgCookie: 1.2,
  cookiesPerHour: [],
  fill: function () {
    fillCookies((this.end - this.start), this.minCust, this.maxCust, this.avgCookie, this.cookiesPerHour);
    hoursOfOp(this.start, (this.end - this.start), this.hours);
    render(this.city, this.hours, this.cookiesPerHour);
  }
};

var dubia = {
  city: 'Dubia',
  minCust: 11,
  maxCust: 38,
  start: 6,
  end: 20,
  hours: [],
  avgCookie: 3.7,
  cookiesPerHour: [],
  fill: function () {
    fillCookies((this.end - this.start), this.minCust, this.maxCust, this.avgCookie, this.cookiesPerHour);
    hoursOfOp(this.start, (this.end - this.start), this.hours);
    render(this.city, this.hours, this.cookiesPerHour);
  }
};

var paris = {
  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  start: 6,
  end: 20,
  hours: [],
  avgCookie: 2.3,
  cookiesPerHour: [],
  fill: function () {
    fillCookies((this.end - this.start), this.minCust, this.maxCust, this.avgCookie, this.cookiesPerHour);
    hoursOfOp(this.start, (this.end - this.start), this.hours);
    render(this.city, this.hours, this.cookiesPerHour);
  }
};

var lima = {
  city: 'Lima',
  minCust: 2,
  maxCust: 16,
  start: 6,
  end: 20,
  hours: [],
  avgCookie: 4.6,
  cookiesPerHour: [],
  fill: function () {
    fillCookies((this.end - this.start), this.minCust, this.maxCust, this.avgCookie, this.cookiesPerHour);
    hoursOfOp(this.start, (this.end - this.start), this.hours);
    render(this.city, this.hours, this.cookiesPerHour);
  }
};
