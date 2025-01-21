interface RangeReport {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): RangeReport {
  let total: number = 0;
  const odds: number[] = [];
  const evens: number[] = [];
  const range: number[] = [];
  let average: number = 0;

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

  const rangeObj: RangeReport = {
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
