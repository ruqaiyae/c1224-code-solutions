import { useState, FormEvent } from 'react';

type UserForm = {
  username: string;
  password: string;
};

type User = {
  user?: UserForm;
};

export function UserForm({ user }: User) {
  const [username, setUsername] = useState(user?.username ?? '');
  const [password, setPassword] = useState(user?.password ?? '');
  const isCreating = user === undefined;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('username: ', username, 'password: ', password);

    if (isCreating) console.log('User created the account');
    else console.log('User updated account details');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div>User Form</div>
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
      <button>{isCreating ? 'Create' : 'Update'}</button>
    </form>
  );
}
