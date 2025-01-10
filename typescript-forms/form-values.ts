interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface Responses {
  name: string;
  email: string;
  message: string;
}

const $form = document.querySelector('#contact-form') as HTMLFormElement;

if (!$form) throw new Error('$form query failed');

$form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  console.log('Form submitted');

  const formElements = $form.elements as FormElements;

  const responses: Responses = {
    name: formElements.name.value,
    email: formElements.email.value,
    message: formElements.message.value,
  };

  console.log(responses);
  $form.reset();
});
