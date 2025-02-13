import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './ValidateInput.css';

export function ValidatedInput() {
  const [text, setText] = useState('');

  let errorMessage;
  if (text.length === 0) {
    errorMessage = 'A password is required.';
  } else if (text.length < 8) {
    errorMessage = 'Your password is too short.';
  } else {
    errorMessage = '';
  }

  let condition;
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < digits.length; i++) {
    if (text.includes(digits[i])) {
      condition = '';
      break;
    } else {
      condition = <li key="fail"> 'Must include a digit' </li>;
    }
  }

  const icon =
    errorMessage === '' && condition === '' ? (
      <FaCheck className="icon check-icon" />
    ) : (
      <FaTimes className="icon x-icon" />
    );

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
        <ul className="errorMessage">{condition}</ul>
      </label>
    </div>
  );
}
