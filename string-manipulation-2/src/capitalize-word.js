'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  let capitalizedWord = '';
  capitalizedWord = word.toLowerCase();
  if (capitalizedWord === 'javascript') {
    return 'JavaScript';
  } else {
    capitalizedWord = word[0].toUpperCase();
  }
  for (let i = 1; i < word.length; i++) {
    capitalizedWord = capitalizedWord + word[i].toLowerCase();
  }
  return capitalizedWord;
}
