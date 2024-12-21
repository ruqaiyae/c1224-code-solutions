'use strict';
/* exported reverse */
function reverse(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i > -1; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
