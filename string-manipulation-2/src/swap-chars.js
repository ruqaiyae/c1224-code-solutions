'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString = newString + string[secondIndex];
    } else if (i === secondIndex) {
      newString = newString + string[firstIndex];
    } else {
      newString = newString + string[i];
    }
  }
  return newString;
}
