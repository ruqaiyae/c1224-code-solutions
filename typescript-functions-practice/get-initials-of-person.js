'use strict';
/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const firstName = person.firstName;
  const lastName = person.lastName;
  return firstName[0] + lastName[0];
}
