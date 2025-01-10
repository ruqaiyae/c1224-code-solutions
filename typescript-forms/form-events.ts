function handleFocus(event: Event): void {
  console.log(`'focus' event was fired`);
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name: ', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log(`'blur' event was fired`);
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name: ', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name: ', eventTarget.name);
  console.log('value: ', eventTarget.value);
}

const $userName = document.querySelector('#user-name') as
  | HTMLInputElement
  | HTMLTextAreaElement;

if (!$userName) throw new Error('$userName query failed.');

const $userEmail = document.querySelector('#user-email') as
  | HTMLInputElement
  | HTMLTextAreaElement;

if (!$userEmail) throw new Error('$userName query failed.');

const $userMessage = document.querySelector('#user-message') as
  | HTMLInputElement
  | HTMLTextAreaElement;

if (!$userMessage) throw new Error('$userName query failed.');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
