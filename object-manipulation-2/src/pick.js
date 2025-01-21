'use strict';
/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (const key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        if (source[key] !== undefined) {
          newObj[key] = source[key];
        }
      }
    }
  }
  return newObj;
}
