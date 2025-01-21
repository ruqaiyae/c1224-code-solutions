/* exported ransomCase */

function ransomCase(string: string): string {
  let newWord: string = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newWord = newWord + string[i].toLowerCase();
    } else {
      newWord = newWord + string[i].toUpperCase();
    }
  }
  return newWord;
}
