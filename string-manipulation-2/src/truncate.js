'use strict';
/* exported truncate */
function truncate(length, string) {
  let truncated = '';
  if (!string) {
    return '...';
  } else if (length > string.length) {
    return string + '...';
  } else {
    for (let i = 0; i < length; i++) {
      truncated = truncated + string[i];
    }
  }
  truncated = truncated + '...';
  return truncated;
}
