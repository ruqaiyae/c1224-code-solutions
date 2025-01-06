const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('$clickButton does not exist');

function handleClick(event: Event): void {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('target: ', event.target);
}
$clickButton.addEventListener('click', handleClick);

const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton does not exist');

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('target: ', event.target);
}
$hoverButton.addEventListener('mouseover', handleMouseover);

const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('$doubleClickButton does not exist');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('target: ', event.target);
}
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
