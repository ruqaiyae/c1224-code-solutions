'use strict';
const $imgList = document.querySelectorAll('.images');
if (!$imgList) throw new Error('$imgList query failed.');
const $progressCircle = document.querySelectorAll('.circle');
if (!$progressCircle) throw new Error('$progressCircle query failed.');
const $progressRow = document.querySelector('.progress-row');
if (!$progressRow) throw new Error('$progressRow query failed.');
const $angleRight = document.querySelector('.fa-angle-right');
if (!$angleRight) throw new Error('$angleRight query failed.');
const $angleLeft = document.querySelector('.fa-angle-left');
if (!$angleLeft) throw new Error('$angleRight query failed.');
function imgProgress() {
  clearInterval(intervalID);
  intervalID = setInterval(imgProgress, 2000);
  for (let i = 0; i < $imgList.length; i++) {
    if (!$imgList[i].classList.contains('hidden')) {
      $imgList[i].classList.add('hidden');
      $progressCircle[i].classList.replace('fa-solid', 'fa-regular');
      if (i === $imgList.length - 1) {
        $imgList[0].classList.remove('hidden');
        $progressCircle[0].classList.replace('fa-regular', 'fa-solid');
      } else {
        $imgList[i + 1].classList.remove('hidden');
        $progressCircle[i + 1].classList.replace('fa-regular', 'fa-solid');
      }
      break;
    }
  }
}
function imgReverse() {
  clearInterval(intervalID);
  intervalID = setInterval(imgProgress, 2000);
  for (let i = $imgList.length - 1; i >= 0; i--) {
    if (!$imgList[i].classList.contains('hidden')) {
      $imgList[i].classList.add('hidden');
      $progressCircle[i].classList.replace('fa-solid', 'fa-regular');
      if (i === 0) {
        $imgList[$imgList.length - 1].classList.remove('hidden');
        $progressCircle[$imgList.length - 1].classList.replace(
          'fa-regular',
          'fa-solid'
        );
      } else {
        $imgList[i - 1].classList.remove('hidden');
        $progressCircle[i - 1].classList.replace('fa-regular', 'fa-solid');
      }
      break;
    }
  }
}
$angleRight.addEventListener('click', imgProgress);
$angleLeft.addEventListener('click', imgReverse);
$progressRow.addEventListener('click', (event) => {
  clearInterval(intervalID);
  intervalID = setInterval(imgProgress, 2000);
  const eventTarget = event.target;
  for (let i = 0; i < $progressCircle.length; i++) {
    if (eventTarget === $progressCircle[i]) {
      for (let j = 0; j < $progressCircle.length; j++) {
        $progressCircle[j].classList.replace('fa-solid', 'fa-regular');
        $imgList[j].classList.add('hidden');
      }
      $progressCircle[i].classList.replace('fa-regular', 'fa-solid');
      $imgList[i].classList.remove('hidden');
    }
  }
});
let intervalID = setInterval(imgProgress, 2000);
