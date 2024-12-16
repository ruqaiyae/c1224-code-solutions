/* exported getStudentNames */
interface Students {
  name: string;
}

function getStudentNames(students: Students[]): string[] {
  const arrayOfStudents: string[] = [];
  for (let i = 0; i < students.length; i++) {
    arrayOfStudents.push(students[i].name);
  }
  return arrayOfStudents;
}
