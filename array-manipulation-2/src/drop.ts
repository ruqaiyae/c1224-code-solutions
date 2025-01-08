/* exported drop */

function drop(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  for (let i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
