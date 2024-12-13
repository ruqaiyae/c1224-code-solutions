'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
function sumArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
function reverseString(str) {
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
function getValues(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
