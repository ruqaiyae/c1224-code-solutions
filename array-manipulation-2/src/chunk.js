'use strict';
/* exported chunk */
function chunk(array, size) {
  const newArray = [];
  let i = 0;
  while (i < array.length) {
    let count = size;
    const subArray = [];
    while (count > 0 && i < array.length) {
      subArray.push(array[i]);
      count--;
      i++;
    }
    newArray.push(subArray);
  }
  return newArray;
}
