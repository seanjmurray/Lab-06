'use strict';
var parentElement = document.getElementById('sales');

var myRender = {
  removeStuff: function(){
      document.getElementsByClassName('getme')[0].parentNode.innerHTML= '<span class="getme"></span>';
  },
  renderHome: function(){
    var parentThing = document.getElementById('reactDoesThisBetter');
    var div = document.createElement('div');
    parentThing.appendChild(div).setAttribute('class', 'flex getme');
    var img = document.createElement('img');
    div.appendChild(img).setAttribute('src','images/frosted-cookie.jpg');
  },
  renderLocation: function(map,city,bio){
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
  },
  renderStory: function(){
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
  },
  renderLocations: function(event){
    console.log(event);
    var city = `${event.target.id}`;
    var map = `${event.target.id}Map`;
    var bio = `${event.target.id}Bio`;
    console.log(city,map,bio);
    removeStuff();
    renderLocation(map,city,bio);
  },
  removeTable: function(){
      document.getElementById('sales').innerHTML = '<table id="sales"></table>';
  },
  renderHead: function(hours){
    var tableRow = document.createElement('tr');
    var thead = document.createElement('thead');
    parentElement.appendChild(thead).setAttribute('id','salesHead');
    thead.appendChild(tableRow);
    var spacer = document.createElement('th');
    tableRow.appendChild(spacer);
    for (var i = 0; i < hours.length; i++) {
      var text = `${hours[i]}`;
      var th = document.createElement('th');
      th.textContent = text;
      tableRow.appendChild(th);
    }
  },
  renderRow: function(city,sales){
    var tableRow = document.createElement('tr');
    parentElement.appendChild(tableRow).setAttribute('id',`${city}`);
    var cityRow = document.getElementById(`${city}`);
    var cityName = document.createElement('td');
    cityName.textContent = city;
    cityRow.appendChild(cityName);
    for (var i = 0; i < 15; i++) {
      var text = `${sales[i]} cookies`;
      var td = document.createElement('td');
      td.textContent = text;
      cityRow.appendChild(td);
    }
  },
  renderFoot: function(array){
    var tableFoot = document.createElement('tfoot');
    var tableRow = document.createElement('tr');
    parentElement.appendChild(tableFoot).setAttribute('id','salesFoot');
    tableFoot.appendChild(tableRow);
    var total = document.createElement('td');
    total.textContent = 'Totals';
    tableRow.appendChild(total);
    for(var i = 0; i < 15;i++){
      var data = `${array[i]}`;
      var td = document.createElement('td');
      td.textContent = data;
      tableRow.appendChild(td);
    }
  }
};

export {myRender};