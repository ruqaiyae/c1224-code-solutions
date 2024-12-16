/* exported addSuffixToAll */

function addSuffixToAll(words: string[], suffix: string): string[] {
  const arrayOfSuffixed: string[] = [];
  for (let i = 0; i < words.length; i++) {
    arrayOfSuffixed.push(words[i] + suffix);
  }
  return arrayOfSuffixed;
}
