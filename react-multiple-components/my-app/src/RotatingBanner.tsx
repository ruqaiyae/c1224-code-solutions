import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Banner item={items[currentIndex]} />
      <Btn
        label="Prev"
        onBtnClick={() =>
          setCurrentIndex((currentIndex - 1 + items.length) % items.length)
        }
      />
      <Indicators
        count={items.length}
        selected={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
      />
      <Btn
        label="Next"
        onBtnClick={() => setCurrentIndex((currentIndex + 1) % items.length)}
      />
    </>
  );
}

type BannerProp = {
  item: string;
};

function Banner({ item }: BannerProp) {
  return <h1>{item}</h1>;
}

type BtnProps = {
  bkg?: string;
  label: string;
  onBtnClick: () => void;
};

function Btn({ bkg, label, onBtnClick }: BtnProps) {
  return (
    <button onClick={onBtnClick} style={{ backgroundColor: bkg }}>
      {label}
    </button>
  );
}

type IndicatorsProps = {
  count: number;
  onSelect: (index: number) => void;
  selected: number;
};

function Indicators({ count, onSelect, selected }: IndicatorsProps) {
  const indicatorBtns = [];
  for (let i = 0; i < count; i++) {
    indicatorBtns.push(
      <Btn
        onBtnClick={() => onSelect(i)}
        key={i}
        label={String(i)}
        bkg={i === selected ? 'lightblue' : undefined}
      />
    );
  }

  return <div>{indicatorBtns}</div>;
}
