'use strict';
/* exported getKeys */
function getKeys(object) {
  const arrayOfKeys = [];
  for (const key in object) {
    arrayOfKeys.push(key);
  }
  return arrayOfKeys;
}
