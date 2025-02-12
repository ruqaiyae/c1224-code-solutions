import { useState } from 'react';
import './Button.css';

export function Button() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('indigo');

  function handleClick() {
    setCount(count + 1);

    if (count < 2) {
      setColor('indigo');
    } else if (count < 5) {
      setColor('lavender');
    } else if (count < 8) {
      setColor('red');
    } else if (count < 11) {
      setColor('orange');
    } else if (count < 14) {
      setColor('yellow');
    } else if (count >= 14) {
      setColor('white');
    }
  }

  return (
    <>
      <button onClick={handleClick} className={color}>
        Hot Button
      </button>
      <p>The button was clicked {count} times.</p>
    </>
  );
}
