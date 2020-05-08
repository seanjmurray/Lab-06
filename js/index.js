'use strict';
import {myRender} from './modules/myRender.js'

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

window.addEventListener('load', myRender.renderHome)
document.getElementById('fish').addEventListener('click', function(){
  myRender.removeStuff();
  myRender.renderHome();
});
document.getElementById('seattle').addEventListener('click', function(){
  myRender.removeStuff();
  myRender.renderLocation(seattleMap,'Seattle',seattleBio)
});
document.getElementById('paris').addEventListener('click', function(){
  myRender.removeStuff();
  myRender.renderLocation(parisMap,'Paris',parisBio)
});
document.getElementById('tokyo').addEventListener('click', function(){
  myRender.removeStuff();
  myRender.renderLocation(tokyoMap,'Tokyo',tokyoBio)
});
document.getElementById('lima').addEventListener('click', function(){
  myRender.removeStuff();
  myRender.renderLocation(limaMap,'Lima',limaBio)
});
document.getElementById('dubai').addEventListener('click', function(){
  myRender.removeStuff();
  myRender.renderLocation(dubaiMap,'Dubai',dubaiBio);
});
document.getElementById('ourStory').addEventListener('click', function(){
  myRender.removeStuff();
  myRender.renderStory();
});

