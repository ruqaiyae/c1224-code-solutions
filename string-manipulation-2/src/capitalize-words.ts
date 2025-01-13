/* exported capitalizeWords */

function capitalizeWords(string: string): string {
  const array = string.split(' ');

  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    let string = '';
    for (let j = 0; j < array[i].length; j++) {
      if (j === 0) {
        string = array[i][j].toUpperCase();
      } else {
        string = string + array[i][j].toLowerCase();
      }
    }
    newArray.push(string);
  }
  const capitalizedWords = newArray.join(' ');
  return capitalizedWords;
}
