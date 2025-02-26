type Img = {
  src: string;
};

import './Image.css';

export function Image({ src }: Img) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={src} alt="space-image" />
      </div>
    </div>
  );
}
