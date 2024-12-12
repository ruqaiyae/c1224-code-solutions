'use strict';
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const convert5MinutesToSeconds = convertMinutesToSeconds(5);
console.log('5 Minutes To Seconds:', convert5MinutesToSeconds);
console.log('10 Minutes To Seconds:', convertMinutesToSeconds(10));
function greet(name) {
  return 'Hey ' + name + '!';
}
console.log('Greet Beavis:', greet('Beavis'));
console.log('Greet SpongeBob:', greet('SpongeBob'));
const getArea = (width, height) => {
  const area = width * height;
  return area;
};
console.log('Area of a rectangle with width: 17, height: 42:', getArea(17, 42));
console.log('Area of a rectangle with width: 22, height: 38:', getArea(22, 38));
const getFirstName = (person) => {
  const firstName = person.firstName;
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
const getLastElement = (array) => {
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return lastElement;
};
console.log(
  'Value of lastElement:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
console.log('Value of lastElement:', getLastElement([true, true, false, true]));
function callOtherFunction(otherFunction, params) {
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
