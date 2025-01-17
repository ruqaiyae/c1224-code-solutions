/* exported numVowels */

function numVowels(string: string): number {
  let count: number = 0;
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
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
