/* exported getInitialsOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: Person): string {
  const firstName: string = person.firstName;
  const lastName: string = person.lastName;
  return firstName[0] + lastName[0];
}
