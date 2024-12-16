'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const noStringsArray = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStringsArray.push(values[i]);
    }
  }
  return noStringsArray;
}
