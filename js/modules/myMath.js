'use strict';

var myMath = {
  randomNumber: function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  },
  howManyCookies: function(randomNum, averageCookies){
    var howMany = randomNum * averageCookies;
    return Math.floor(howMany);
  },
  totalCookies: function(cookieArray){
    var adder = (total, current) => total + current;
    return cookieArray.reduce(adder);
  },
  fillCookies: function(hours, min, max, avg, traffic, array){
    for (var i = 0; i < hours; i++) {
      var cookieHour = this.howManyCookies(this.randomNumber(min, max), avg) * traffic[i];
      cookieHour = Math.ceil(cookieHour);
      array[i] = cookieHour;
    }
    array[array.length-1+1]= this.totalCookies(array);
  },
  hoursOfOp: function(start, total, array){
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
  },
  findTotals: function(array,arrayX){
    array[0] = arrayX.reduce(function(array1, array2) {
      return array1.map(function(currentValue, index) {
        return currentValue + array2[index];
      });
    });
  }
};

export {myMath};
