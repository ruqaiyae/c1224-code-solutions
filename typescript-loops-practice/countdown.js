'use strict';
/* exported countdown */
function countdown(num) {
  const array = [];
  while (num >= 0) {
    array.push(num);
    num--;
  }
  return array;
}
