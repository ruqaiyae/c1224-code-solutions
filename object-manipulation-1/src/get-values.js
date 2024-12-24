'use strict';
/* exported getValues */
function getValues(object) {
  const arrayOfValues = [];
  for (const key in object) {
    arrayOfValues.push(object[key]);
  }
  return arrayOfValues;
}
