/* exported filterOutStrings */

function filterOutStrings(values: unknown[]): unknown[] {
  const noStringsArray: unknown[] = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStringsArray.push(values[i]);
    }
  }
  return noStringsArray;
}
