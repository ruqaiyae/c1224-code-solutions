/* exported toObject */

function toObject(keyValuePair: [string, unknown]): Record<string, unknown> {
  const object: Record<string, unknown> = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
