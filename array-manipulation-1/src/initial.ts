/* exported initial */

function initial(array: unknown[]): unknown[] {
  const exceptLastElem: unknown[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    exceptLastElem.push(array[i]);
  }
  return exceptLastElem;
}
