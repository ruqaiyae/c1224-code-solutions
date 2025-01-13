/* exported truncate */

function truncate(length: number, string: string): string {
  let truncated: string = '';
  if (!string) {
    return '...';
  } else if (length > string.length) {
    return string + '...';
  } else {
    for (let i = 0; i < length; i++) {
      truncated = truncated + string[i];
    }
  }

  truncated = truncated + '...';

  return truncated;
}
