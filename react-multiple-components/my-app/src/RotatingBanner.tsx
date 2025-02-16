import { useState } from 'react';

type Btn = {
  prev?: string;
  next?: string;
};

type Items = {
  items: string[];
};

export function RotatingBanner({ items }: Items) {
  const [index, setIndex] = useState(0);

  function Banner() {
    return <h3>{items[index]}</h3>;
  }

  function Btn({ prev, next }: Btn) {
    function handleClick() {
      prev && setIndex((index - 1 + items.length) % items.length);
      next && setIndex((index + 1) % items.length);
    }

    return (
      <div>
        <button onClick={handleClick}>{prev ? 'Prev' : 'Next'}</button>
      </div>
    );
  }

  function Indicators() {
    const indicatorsBtns = [];
    for (let i = 0; i < items.length; i++) {
      indicatorsBtns.push(
        <button
          onClick={() => setIndex(i)}
          key={items[i]}
          style={{ backgroundColor: i === index ? 'lightblue' : 'white' }}>
          {i}
        </button>
      );
    }
    return indicatorsBtns;
  }

  return (
    <>
      <Banner />
      <Btn prev={'prev'} />
      <Indicators />
      <Btn next={'next'} />
    </>
  );
}
