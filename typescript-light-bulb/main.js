'use strict';
const $bulb = document.querySelector('.bulb-on');
const $background = document.querySelector('.background-light');
if (!$bulb || !$background)
  throw new Error('$bulb or $background query failed');
$bulb.addEventListener('click', () => {
  $background.classList.toggle('background-dark');
  $bulb.classList.toggle('bulb-off');
});
