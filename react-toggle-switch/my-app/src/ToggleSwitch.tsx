import { useState } from 'react';
import './ToggleSwitch.css';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  let switchOn;
  let label;
  if (isOn) {
    switchOn = 'toggle-switch is-on';
    label = 'ON';
  } else {
    switchOn = 'toggle-switch';
    label = 'OFF';
  }

  function handleClick() {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }

  return (
    <div onClick={handleClick} className={switchOn}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label">{label}</span>
    </div>
  );
}
