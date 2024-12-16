'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const filteredArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filteredArray.push(values[i]);
    }
  }
  return filteredArray;
}
