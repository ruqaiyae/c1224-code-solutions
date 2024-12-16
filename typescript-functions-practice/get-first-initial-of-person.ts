/* exported getFirstInitialOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

function getFirstInitialOfPerson(person: Person): string {
  const firstName: string = person.firstName;
  return firstName[0];
}
