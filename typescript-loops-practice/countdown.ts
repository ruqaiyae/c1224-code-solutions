/* exported countdown */

function countdown(num: number): number[] {
  const array: number[] = [];
  while (num >= 0) {
    array.push(num);
    num--;
  }
  return array;
}
