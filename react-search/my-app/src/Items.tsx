type ItemsProps = {
  filteredQuotes: string[];
};

export function Items({ filteredQuotes }: ItemsProps) {
  const items = [];
  for (let i = 0; i < filteredQuotes.length; i++) {
    items.push(<li key={i}> {filteredQuotes[i]} </li>);
  }

  if (filteredQuotes.length === 0) {
    return <p>No items match the filter</p>;
  }

  return <ul>{items}</ul>;
}
