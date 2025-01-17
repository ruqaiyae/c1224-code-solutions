'use strict';
/* exported numVowels */
function numVowels(string) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  string = string.toLocaleLowerCase();
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}
