'use strict';
const student = {
  firstName: 'Ruqaiya',
  lastName: 'Electricwala',
  age: 28,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'French teacher';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);
console.log('typeof student: ', typeof student);
const vehicle = {
  make: 'Rolls-Royce',
  model: 'Boat Tail',
  year: 2022,
};
vehicle['color'] = 'rose-bronze';
vehicle['isConvertible'] = true;
console.log(`value of vehicle['color']: `, vehicle['color']);
console.log(`value of vehicle['isConvertible']: `, vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);
console.log('typeof vehicle: ', typeof vehicle);
const pet = {
  name: 'Tom',
  kind: 'cat',
};
delete pet.name;
delete pet.kind;
console.log('value of pet: ', pet);
console.log('typeof pet: ', typeof pet);
