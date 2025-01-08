/* exported takeRight */

function takeRight(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  if (count > array.length) {
    return array.slice();
  }

  const start: number = array.length - count;
  for (let i = start; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
