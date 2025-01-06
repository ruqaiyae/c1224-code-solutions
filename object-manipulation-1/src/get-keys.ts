/* exported getKeys */

function getKeys(object: Record<string, unknown>): string[] {
  const arrayOfKeys: string[] = [];
  for (const key in object) {
    arrayOfKeys.push(key);
  }
  return arrayOfKeys;
}
