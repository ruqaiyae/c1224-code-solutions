'use strict';
/* exported take */
function take(array, count) {
  const newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (let i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
