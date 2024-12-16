'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const arrayOfSuffixed = [];
  for (let i = 0; i < words.length; i++) {
    arrayOfSuffixed.push(words[i] + suffix);
  }
  return arrayOfSuffixed;
}
