const $letters = document.querySelectorAll('span');
console.log($letters);

if (!$letters) throw new Error('$letters query failed');

let index = -1;

document.addEventListener('keydown', (event: Event) => {
  index++;
  if (index > $letters.length - 1) {
    const $body = $letters[$letters.length - 1].closest('body') as HTMLElement;
    const $div = document.createElement('div');
    $div.className = 'playAgain';
    $body.appendChild($div);
    const $playAgain = document.createElement('p');
    $playAgain.textContent = 'Do you wish to play again?';
    const $button = document.createElement('button');
    $button.textContent = 'Yes!';
    $div.append($playAgain, $button);

    $button.addEventListener('click', () => {
      $playAgain.remove();
      $button.remove();
      index = -1;
      $letters[index + 1].className = 'current';
      for (let i = 1; i < $letters.length; i++) {
        $letters[i].classList.remove('pass');
      }
    });
  } else if (event.key === 'Backspace') {
    $letters[index].className = 'current';
    index--;
  } else if (event.key === $letters[index].textContent) {
    $letters[index].className = 'pass';
    $letters[index + 1].className = 'current';
  } else if (event.key === ' ' && $letters[index].innerHTML === '&nbsp;') {
    $letters[index].className = 'pass';
    $letters[index + 1].className = 'current';
  } else {
    $letters[index].className = 'fail';
    index--;
  }
});
