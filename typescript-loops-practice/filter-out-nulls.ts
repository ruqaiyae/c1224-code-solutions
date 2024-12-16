/* exported filterOutNulls */

function filterOutNulls(values: unknown[]): unknown[] {
  const filteredArray: unknown[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filteredArray.push(values[i]);
    }
  }
  return filteredArray;
}
