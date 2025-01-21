/* exported invert */

function invert(source: Record<string, unknown>): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  for (const key in source) {
    const newKey: string = String(source[key]);
    newObj[newKey] = key;
  }
  return newObj;
}
