'use strict';
/* exported initial */
function initial(array) {
  const exceptLastElem = [];
  for (let i = 0; i < array.length - 1; i++) {
    exceptLastElem.push(array[i]);
  }
  return exceptLastElem;
}
