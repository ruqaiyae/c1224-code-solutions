/* exported omit */

function omit(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const newObj: any = {};
  for (const prop in source) {
    let omit = false;
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        omit = true;
        break;
      }
    }
    if (!omit) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}
