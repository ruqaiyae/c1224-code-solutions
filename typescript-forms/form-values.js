'use strict';
const $form = document.querySelector('#contact-form');
if (!$form) throw new Error('$form query failed');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted');
  const formElements = $form.elements;
  const responses = {
    name: formElements.name.value,
    email: formElements.email.value,
    message: formElements.message.value,
  };
  console.log(responses);
  $form.reset();
});
