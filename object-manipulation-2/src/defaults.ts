/* exported defaults */
function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): void {
  for (const prop in source) {
    if (!target[prop] && target[prop] !== null) {
      target[prop] = source[prop];
    }
  }
}
