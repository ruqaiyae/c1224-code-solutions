/* exported reverse */

function reverse(array: unknown[]): unknown[] {
  const reversedArray: unknown[] = [];
  for (let i = array.length - 1; i > -1; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
