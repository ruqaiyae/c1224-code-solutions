interface Person {
  firstName: string;
  lastName: string;
}

function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = minutes * 60;
  return seconds;
}

const convert5MinutesToSeconds: number = convertMinutesToSeconds(5);
console.log('5 Minutes To Seconds:', convert5MinutesToSeconds);

console.log('10 Minutes To Seconds:', convertMinutesToSeconds(10));

function greet(name: string): string {
  return 'Hey ' + name + '!';
}

console.log('Greet Beavis:', greet('Beavis'));
console.log('Greet SpongeBob:', greet('SpongeBob'));

const getArea = (width: number, height: number): number => {
  const area: number = width * height;
  return area;
};

console.log('Area of a rectangle with width: 17, height: 42:', getArea(17, 42));
console.log('Area of a rectangle with width: 22, height: 38:', getArea(22, 38));

const getFirstName = (person: Person): string => {
  const firstName: string = person.firstName;
  return firstName;
};

console.log(
  'Value of firstName:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

console.log(
  'Value of firstName:',
  getFirstName({ firstName: 'John', lastName: 'Henry' })
);

const getLastElement = (array: unknown[]): unknown => {
  const lastElementIndex: number = array.length - 1;
  const lastElement: unknown = array[lastElementIndex];
  return lastElement;
};

console.log(
  'Value of lastElement:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);

console.log('Value of lastElement:', getLastElement([true, true, false, true]));

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

console.log(
  'Result of calling other function:',
  callOtherFunction(convertMinutesToSeconds, 10)
);

console.log(
  'Result of calling other function:',
  callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha'])
);
