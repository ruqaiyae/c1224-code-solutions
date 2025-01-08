'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const newArray = [];
  if (count > array.length) {
    return newArray;
  }
  const end = array.length - count;
  for (let i = 0; i < end; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
