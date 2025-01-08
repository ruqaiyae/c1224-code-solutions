'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  if (count > array.length) {
    return array.slice();
  }
  const start = array.length - count;
  for (let i = start; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
