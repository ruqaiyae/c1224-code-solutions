'use strict';
/* exported getWords */
function getWords(string) {
  if (string) {
    return string.split(' ');
  }
  return [];
}
