/* exported isVowel */

function isVowel(char: string): boolean {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i] || char === vowels[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}
