// import { useState } from 'react';
type Items = {
  items: string[];
};

export function RotatingBanner({ items }: Items) {
  // const [index, setIndex] = useState(0);

  // function Banner() {
  // return <h3>{items[index]}</h3>;
  // }

  function PrevBtn() {
    return (
      <div>
        <button>Prev</button>
      </div>
    );
  }

  function Indicators() {
    const indicatorsBtns = [];
    for (let i = 0; i < items.length; i++) {
      indicatorsBtns.push(<button key={items[i]}>{i}</button>);
    }
    return indicatorsBtns;
  }

  function NextBtn() {
    return (
      <div>
        <button>Next</button>
      </div>
    );
  }

  return (
    <>
      {/* <Banner /> */}
      <PrevBtn />
      <Indicators />
      <NextBtn />
    </>
  );
}
