/* exported getValues */

function getValues(object: Record<string, unknown>): unknown[] {
  const arrayOfValues: unknown[] = [];
  for (const key in object) {
    arrayOfValues.push(object[key]);
  }
  return arrayOfValues;
}
