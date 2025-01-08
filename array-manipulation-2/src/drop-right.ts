/* exported dropRight */

function dropRight(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  if (count > array.length) {
    return newArray;
  }

  const end: number = array.length - count;
  for (let i = 0; i < end; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
