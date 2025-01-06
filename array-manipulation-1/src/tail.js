'use strict';
/* exported tail */
function tail(array) {
  const exceptFirstElem = [];
  for (let i = 1; i < array.length; i++) {
    exceptFirstElem.push(array[i]);
  }
  return exceptFirstElem;
}
