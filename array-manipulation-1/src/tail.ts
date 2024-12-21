/* exported tail */

function tail(array: unknown[]): unknown[] {
  const exceptFirstElem: unknown[] = [];
  for (let i = 1; i < array.length; i++) {
    exceptFirstElem.push(array[i]);
  }
  return exceptFirstElem;
}
