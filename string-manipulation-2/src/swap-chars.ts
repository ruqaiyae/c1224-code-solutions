/* exported swapChars */

function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  let newString: string = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString = newString + string[secondIndex];
    } else if (i === secondIndex) {
      newString = newString + string[firstIndex];
    } else {
      newString = newString + string[i];
    }
  }
  return newString;
}
