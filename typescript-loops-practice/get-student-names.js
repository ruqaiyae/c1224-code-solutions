'use strict';
function getStudentNames(students) {
  const arrayOfStudents = [];
  for (let i = 0; i < students.length; i++) {
    arrayOfStudents.push(students[i].name);
  }
  return arrayOfStudents;
}
