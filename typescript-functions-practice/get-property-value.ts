/* exported getPropertyValue */

function getPropertyValue(
  object: Record<string, string>,
  key: string
): unknown {
  const prop: string = object[key];
  return prop;
}
