/* exported pick */

function pick(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};

  for (const key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        if (source[key] !== undefined) {
          newObj[key] = source[key];
        }
      }
    }
  }
  return newObj;
}
