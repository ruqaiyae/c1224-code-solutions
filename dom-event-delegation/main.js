'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList query failed');
$taskList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log('event.target: ', eventTarget);
  console.log('event.target.tagName: ', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const closest = eventTarget.closest('.task-list-item');
    console.log(closest);
    closest?.remove();
  }
});
