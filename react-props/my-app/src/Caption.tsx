type ImageCaption = {
  imgCaption: string;
};

export function Caption({ imgCaption }: ImageCaption) {
  return <h3> {imgCaption} </h3>;
}
