import { useEffect, useState } from 'react';
import {
  FaAngleLeft,
  FaAngleRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';
import { type Image } from './App';
import './Carousel.css';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setImageIndex((imageIndex + 1) % images.length);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [imageIndex]);

  return (
    <>
      <div className="container">
        <Btn
          prev
          onBtnClick={() =>
            setImageIndex((imageIndex - 1 + images.length) % images.length)
          }
        />

        <ImageDisplay image={images[imageIndex]} />

        <Btn
          onBtnClick={() => setImageIndex((imageIndex + 1) % images.length)}
        />
      </div>

      <Dots
        count={images.length}
        imageIndex={imageIndex}
        onDotClick={(i) => setImageIndex(i)}
      />
    </>
  );
}

type BtnProps = {
  prev?: boolean;
  onBtnClick: () => void;
};

function Btn({ prev, onBtnClick }: BtnProps) {
  const Icon = prev ? FaAngleLeft : FaAngleRight;
  return <Icon onClick={onBtnClick} className="btn" />;
}

type ImageProp = {
  image: Image;
};

function ImageDisplay({ image }: ImageProp) {
  return <img src={image.src} alt={image.alt} className="image" />;
}

type dotsProps = {
  count: number;
  imageIndex: number;
  onDotClick: (i: number) => void;
};

function Dots({ count, imageIndex, onDotClick }: dotsProps) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push(
      i === imageIndex ? (
        <FaCircle key={i} />
      ) : (
        <FaRegCircle key={i} onClick={() => onDotClick(i)} />
      )
    );
  }
  return <div className="dots-container">{dots}</div>;
}
