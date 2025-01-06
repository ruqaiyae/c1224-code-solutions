/* exported capitalize */

function capitalize(word: string): string {
  let newWord: string = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}
