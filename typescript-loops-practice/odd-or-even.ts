/* exported oddOrEven */

function oddOrEven(numbers: number[]): string[] {
  const oddOrEvenArray: string[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenArray.push('even');
    } else {
      oddOrEvenArray.push('odd');
    }
  }
  return oddOrEvenArray;
}
