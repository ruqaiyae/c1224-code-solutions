import { ChangeEvent } from 'react';

type Props = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

export function SearchBar({ handleChange, text }: Props) {
  return (
    <div>
      <label>
        <img src="./search-solid.svg" style={{ width: 10 }} />
        <input
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Search"
        />
      </label>
    </div>
  );
}
