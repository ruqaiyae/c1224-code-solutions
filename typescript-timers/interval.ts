const $countdownDisplay = document.querySelector('.countdown-display');
if (!$countdownDisplay) throw new Error('$countdown query failed.');

let countdown = Number($countdownDisplay.textContent);

const intervalID = setInterval(() => {
  countdown--;

  if (countdown > 0) {
    $countdownDisplay.textContent = String(countdown);
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }

  if (!countdown) {
    clearInterval(intervalID);
  }
}, 1000);
