/* exported getWords */

function getWords(string: string): string[] {
  if (string) {
    return string.split(' ');
  }
  return [];
}
