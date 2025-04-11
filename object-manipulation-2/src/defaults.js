'use strict';
/* exported defaults */
function defaults(target, source) {
  for (const prop in source) {
    if (!target[prop] && target[prop] !== null) {
      target[prop] = source[prop];
    }
  }
}
