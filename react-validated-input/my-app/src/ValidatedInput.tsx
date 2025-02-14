import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './ValidateInput.css';

export function ValidatedInput() {
  const [text, setText] = useState('');

  let errorMessage = '';
  if (text.length === 0) errorMessage = 'A password is required.';
  else if (text.length < 8) errorMessage = 'Your password is too short.';
  else if (!text.match(/\d/)) errorMessage = 'Must include a digit';
  else if (!text.match(/[A-Z]/))
    errorMessage = 'Must include an uppercase letter';
  else if (!text.match(/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/))
    errorMessage = 'Must include a special character';

  const isValid = errorMessage.length === 0;

  const icon = isValid ? <FaCheck color="green" /> : <FaTimes color="red" />;

  return (
    <div className="flex w-full m-12">
      <label>
        <span className="text-gray-700">Password</span>
        <div className="flex items-center">
          <input
            onChange={(e) => setText(e.target.value)}
            type="password"
            id="password"
            name="password"
            value={text}
            className="w-full input"
          />
          {icon}
        </div>
        <p className="errorMessage">{errorMessage}</p>
      </label>
    </div>
  );
}
