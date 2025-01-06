/* exported reverseWord */

function reverseWord(word: string): string {
  let wordReversed: string = '';
  for (let i = word.length - 1; i > -1; i--) {
    wordReversed += word[i];
  }
  return wordReversed;
}
