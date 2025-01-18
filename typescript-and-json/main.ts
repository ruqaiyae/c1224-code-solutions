interface Books {
  isbn: string;
  title: string;
  author: string;
}

const booksArray: Books[] = [
  {
    isbn: '978-3-16-148410-0',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    isbn: '978-0-7432-7356-5',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    isbn: '978-1-5011-9807-8',
    title: '1984',
    author: 'George Orwell',
  },
];

console.log('booksArray: ', booksArray);
console.log('typeof booksArray: ', typeof booksArray);

const jsonString = JSON.stringify(booksArray);
console.log('jsonString: ', jsonString);
console.log('typeof jsonString: ', typeof jsonString);

const studentJSON = '{"studentID": 8675309, "name": "John Smith"}';
console.log('studentJSON: ', studentJSON);
console.log('typeof studentJSON: ', typeof studentJSON);

const student = JSON.parse(studentJSON);
console.log('student: ', student);
console.log('typeof student: ', typeof student);
