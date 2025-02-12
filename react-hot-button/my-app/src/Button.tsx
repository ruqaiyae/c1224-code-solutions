import { useState } from 'react';
import './Button.css';

export function Button() {
  const [count, setCount] = useState(0);

  let color;
  if (count <= 3) {
    color = 'indigo';
  } else if (count <= 6) {
    color = 'lavender';
  } else if (count <= 9) {
    color = 'red';
  } else if (count <= 12) {
    color = 'orange';
  } else if (count <= 15) {
    color = 'yellow';
  } else if (count >= 18) {
    color = 'white';
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)} className={color}>
        Hot Button
      </button>
      <p>The button was clicked {count} times.</p>
    </>
  );
}
