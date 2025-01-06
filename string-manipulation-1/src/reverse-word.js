'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let wordReversed = '';
  for (let i = word.length - 1; i > -1; i--) {
    wordReversed += word[i];
  }
  return wordReversed;
}
