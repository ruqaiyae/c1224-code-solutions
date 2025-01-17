/* exported lastChars */

function lastChars(length: number, string: string): string {
  let newString: string = '';
  const array: string[] = [];

  if (!string) {
    return newString;
  } else if (length > string.length) {
    return string;
  } else {
    for (let i = 0; i < string.length; i++) {
      array.push(string[i]);
    }
    const newArray = array.splice(-length);
    newString = newArray.join('');
    return newString;
  }
}
