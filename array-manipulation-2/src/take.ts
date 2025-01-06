/* exported take */

function take(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  if (array.length === 0) {
    return newArray;
  }

  for (let i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
