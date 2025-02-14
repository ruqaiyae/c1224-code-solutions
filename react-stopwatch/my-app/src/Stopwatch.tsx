import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './Stopwatch.css';

export function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  const isRunning = intervalID !== undefined;

  function handleClick() {
    if (!isRunning) {
      setIntervalID(setInterval(() => setSeconds((prev) => prev + 1), 1000));
    } else {
      clearInterval(intervalID);
      setIntervalID(undefined);
    }
  }

  return (
    <div className="stopwatch">
      <div
        onClick={() => {
          if (!isRunning) setSeconds(0);
        }}
        className="watch-face">
        <span>{seconds}</span>
      </div>
      <div onClick={handleClick}>
        {isRunning ? (
          <FaPause size="2rem" className="start-stop" />
        ) : (
          <FaPlay size="2rem" className="start-stop" />
        )}
      </div>
    </div>
  );
}
