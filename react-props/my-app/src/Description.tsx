type Content = {
  description: string;
};

export function Description({ description }: Content) {
  return <p> {description} </p>;
}
