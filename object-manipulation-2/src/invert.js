'use strict';
/* exported invert */
function invert(source) {
  const newObj = {};
  for (const key in source) {
    const newKey = String(source[key]);
    newObj[newKey] = key;
  }
  return newObj;
}
