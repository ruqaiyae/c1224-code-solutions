import { useState, FormEvent } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('username: ', username);
    console.log('password: ', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Username</span>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          value={username}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
      </label>
      <button>Sign Up</button>
    </form>
  );
}
