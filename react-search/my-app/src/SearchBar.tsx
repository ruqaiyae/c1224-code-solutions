type Props = {
  onSearch: (search: string) => void;
  text: string;
};

export function SearchBar({ onSearch, text }: Props) {
  return (
    <div>
      <label>
        <img src="./search-solid.svg" style={{ width: 10 }} />
        <input
          onChange={(e) => onSearch(e.target.value)}
          value={text}
          type="text"
          placeholder="Search"
        />
      </label>
    </div>
  );
}
