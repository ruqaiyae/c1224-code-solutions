import { FormEvent } from 'react';

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const currentTarget = event.currentTarget;
  const formData = new FormData(currentTarget);
  const entries = Object.fromEntries(formData);
  console.log(entries);
}

export function RegistrationFormUncontrolled() {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Username</span>
        <input type="text" name="username" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <button>Sign Up</button>
    </form>
  );
}
