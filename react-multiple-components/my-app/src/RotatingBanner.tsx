type Items = {
  items: string[];
};

export function RotatingBanner({ items }: Items) {
  const Banner = () => <h3>{items[0]}</h3>;

  const PrevBtn = () => (
    <div>
      <button>Prev</button>
    </div>
  );

  const Position = () => {
    const positionBtns = [];
    for (let i = 0; i < items.length; i++) {
      positionBtns.push(<button key={items[i]}>{i}</button>);
    }
    return positionBtns;
  };

  const NextBtn = () => (
    <div>
      <button>Next</button>
    </div>
  );

  return (
    <>
      <Banner />
      <PrevBtn />
      <Position />
      <NextBtn />
    </>
  );
}
