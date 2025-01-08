/* exported chunk */

function chunk(array: unknown[], size: number): unknown[] {
  const newArray: unknown[] = [];

  let i: number = 0;
  while (i < array.length) {
    let count: number = size;
    const subArray: unknown[] = [];

    while (count > 0 && i < array.length) {
      subArray.push(array[i]);
      count--;
      i++;
    }
    newArray.push(subArray);
  }
  return newArray;
}
