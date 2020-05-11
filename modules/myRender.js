'use strict';
var parentElement = document.getElementById('sales');
var indexSwitch = false;
var myRender = {  
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
  },
  indexRender: function(html,target){
    if(indexSwitch){
      target.innerHTML= '<div id="main"></div>';
    }
    target.innerHTML = html;
    indexSwitch = true;
  },
  target: document.getElementById('main'),
  home: `<header class="flex-container">
  <h1>Pat's Salmon Cookies</h1>
  </header>
  <main>
  <section class="hero">
    <h2>Welcome to the home of the best cookies on earth!</h2>
    <img src="images/chinook.jpg" alt="">
  </section>
  <section class="dark flex-container">
    <figure>
      <h3>Pat's shirts</h3>
      <img src="images/shirt.jpg" alt="Shirt" class="store">
      <p>Our signature Salmon: $19.99</p>
    </figure>
    <figure>
      <h3>Salmon cookies</h3>
      <img src="images/frosted-cookie.jpg" alt="Cookie" class="store">
      <p>Salmon cookies: $19.99/doz.</p>
    </figure>
    <figure>
      <h3>Our cookie cutters</h3>
      <img src="images/cutter.jpeg" alt="Cookie cutter" class="store">
      <p>Make Salmon cookies at home: $9.99</p>
    </figure>
  </section>
  <section>
    <h2>COVID-19 Update</h2>
    <p>All of our locations are closed currently, However you can still order your cookies online!</p>
  </section>
  </main>
  <footer class="flex-container">
  <div>
    <p> &copy; Salmon Cookies 2020 </p>
  </div>
  </footer>`,
  story: `<header class="flex-container">
<h1>Our story</h1>
</header>
<main>
<section>
  <img src="images/family.jpg" alt="Family" class="padding">
</section>
<section class="dark">
  <p class="padding">I started this business when all of my friends kept asking for my cookie recipe. Now we have expanded to 5 locations across 5 continents, I never thought my cookie's would take me there. Thank you so much.</p>
</section>
</main>
<footer>
<p> &copy; Salmon Cookies 2020 </p>
</footer>`,
admin: `  <header class="flex-container">
<h1>Admin</h1>
</header>
<main>
<section class="flex-container">
  <div class="login">
 <form action="sales.html">
   <label>Username:
    <input type="text" required>
   </label>
   <br>
   <label>Password:
    <input type="password" required>
   </label>
   <br>
   <button>Login</button>
 </form>
</div>
</section>
</main>
<footer>
<p> &copy; Salmon Cookies 2020 </p>
</footer>`,
seattle: `<header class="flex-container">
<h1>Seattle</h1>
</header>
<main>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3697.864808313805!2d-122.33973455133349!3d47.60961085257697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1588807691189!5m2!1sen!2sus" width="400" height="300"></iframe>

<article><h3>Seattle Location</h3><h4>Hours: 6am-8pm</h4><p>Our original location in the same spot we have always been in Pike Place market where we purchase fresh Salmon daily.</p><h4>Address:</h4><p>Fake street name, like really fake</p><p>Fake city, State, 12345-6789</p></article>
</main>
<footer>
<p> &copy; Salmon Cookies 2020 </p>
</footer>`,
paris: `   <header class="flex-container">
<h1>Paris</h1>
</header>
<main>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4693.095910761617!2d2.3362489846711765!3d48.86204987734898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1588807746087!5m2!1sen!2sus" height="300" width="400"></iframe>

<article><h3>Paris Location</h3><h4>Hours: 6am-8pm</h4><p>bonjour de Paris, name a better duo that salmon and art, we're waiting.</p><h4>Address:</h4><p>Fake street name, like really fake</p><p>Fake city, State, 12345-6789</p></article>
</main>
<footer>
<p> &copy; Salmon Cookies 2020 </p>
</footer>`,
dubai:`<header class="flex-container">
<h1>Dubai</h1>
</header>
<main>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6803.265851886894!2d55.27659531075481!3d25.197977415430366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1588807791312!5m2!1sen!2sus" height="300" width="400"></iframe>

<article><h3>Dubai Location</h3><h4>Hours: 6am-8pm</h4><p>We are right next to the tallest building on earth, I bet our cookies taste even better at 2,717 feet in the sky.</p><h4>Address:</h4><p>Fake street name, like really fake</p><p>Fake city, State, 12345-6789</p></article>
</main>
<footer>
<p> &copy; Salmon Cookies 2020 </p>
</footer>`,
lima:` <header class="flex-container">
<h1>Lima</h1>
</header>
<main>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249743.72044599216!2d-77.12786361535997!3d-12.026603400729176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1588807865302!5m2!1sen!2sus" height="300" width="400"></iframe>

<article><h3>Lima Location</h3><h4>Hours: 6am-8pm</h4><p>Take a break from walking though the hills of Lima and grab a fresh cookie</p><h4>Address:</h4><p>Fake street name, like really fake</p><p>Fake city, State, 12345-6789</p></article>
</main>
<footer>
<p> &copy; Salmon Cookies 2020 </p>
</footer>`,
tokyo:`<header class="flex-container">
<h1>Tokyo</h1>
</header>
<main>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.97304218315!2d139.60078482570233!3d35.66816253006262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1588807908246!5m2!1sen!2sus" height="300" width="400"></iframe>

<article><h3>Tokyo Location</h3><h4>Hours: 6am-8pm</h4><p>Yet another city built on fish where you can get the same amazing quality cookies.</p><h4>Address:</h4><p>Fake street name, like really fake</p><p>Fake city, State, 12345-6789</p></article>
</main>
<footer>
<p> &copy; Salmon Cookies 2020 </p>
</footer>`
 
};

export {myRender};
