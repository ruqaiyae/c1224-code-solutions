/* exported setValue */

function setValue(
  object: Record<string, unknown>,
  key: string,
  value: unknown
): undefined {
  object[key] = value;
}
