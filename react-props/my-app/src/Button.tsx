type Btn = {
  btnText: string;
};

export function Button({ btnText }: Btn) {
  return <button> {btnText} </button>;
}
