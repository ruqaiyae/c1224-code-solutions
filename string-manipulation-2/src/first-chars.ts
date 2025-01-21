/* exported firstChars */

function firstChars(length: number, string: string): string {
  let newString: string = '';
  if (!string) {
    return newString;
  } else if (length > string.length) {
    return string;
  } else {
    for (let i = 0; i < length; i++) {
      newString = newString + string[i];
    }
    return newString;
  }
}
