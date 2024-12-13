interface Library {
  title: string;
  author: string;
}

interface Employee {
  name: string;
  age: number;
  position: string;
}

const heroes = ['Iron Man', 'Hulk', 'Thor', 'Spiderman'];

let randomNumber = Math.random();
randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

const library: Library[] = [
  {
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];

const lastBook = library.pop();
console.log('Last book:', lastBook);

const firstBook = library.shift();
console.log('First book:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

const fullName = 'Ruqaiya Electricwala';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

const employee: Employee = {
  name: 'James',
  age: 32,
  position: 'VP',
};

const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);

const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);

const employeePairs = Object.entries(employee);
console.log('employeePairs;', employeePairs);
