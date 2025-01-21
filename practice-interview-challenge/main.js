'use strict';
function getRangeReport(start, end) {
  let total = 0;
  const odds = [];
  const evens = [];
  const range = [];
  let average = 0;
  for (let i = start; i <= end; i++) {
    total = total + i;
    if (i % 2 === 1) {
      odds.push(i);
    } else {
      evens.push(i);
    }
    range.push(i);
    average = total / range.length;
  }
  console.log('total: ', total);
  console.log('odds: ', odds);
  console.log('evens: ', evens);
  console.log('range: ', range);
  console.log('average: ', average);
  const rangeObj = {
    total,
    odds,
    evens,
    range,
    average,
  };
  return rangeObj;
}
getRangeReport(1, 10);
getRangeReport(1, 5);
