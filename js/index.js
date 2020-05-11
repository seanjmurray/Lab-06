'use strict';
import {myRender} from '/modules/myRender.js';


document.onload = myRender.indexRender(myRender.home,myRender.target);

document.getElementById('home').addEventListener('click', function(){myRender.indexRender(myRender.home,myRender.target);
});

document.getElementById('ourStory').addEventListener('click', function(){myRender.indexRender(myRender.story,myRender.target);
});

document.getElementById('admin').addEventListener('click', function(){
  myRender.indexRender(myRender.admin,myRender.target);
});

document.getElementById('seattle').addEventListener('click', function(){
  myRender.indexRender(myRender.seattle,myRender.target);
});

document.getElementById('paris').addEventListener('click', function(){
  myRender.indexRender(myRender.paris,myRender.target);
});

document.getElementById('dubai').addEventListener('click', function(){
  myRender.indexRender(myRender.dubai,myRender.target);
});

document.getElementById('tokyo').addEventListener('click', function(){
  myRender.indexRender(myRender.tokyo,myRender.target);
});

document.getElementById('lima').addEventListener('click', function(){
  myRender.indexRender(myRender.lima,myRender.target);
});

document.getElementById('openMe').addEventListener('click', openNav);

document.getElementById('closeMe').addEventListener('click', closeNav);

function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}




