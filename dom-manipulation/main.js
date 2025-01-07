'use strict';
let clicks = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
$hotButton.addEventListener('click', () => {
  clicks++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  const clicksToString = clicks.toString();
  $clickCount.textContent = `Clicks: ${clicksToString}`;
  if (clicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
