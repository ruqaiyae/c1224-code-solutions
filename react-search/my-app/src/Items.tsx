type ItemsProps = {
  filteredQuotes: string[];
};

export function Items({ filteredQuotes }: ItemsProps) {
  if (filteredQuotes.length === 0) {
    return <p>No items match the filter</p>;
  }

  const items = [];
  for (let i = 0; i < filteredQuotes.length; i++) {
    items.push(<li key={i}> {filteredQuotes[i]} </li>);
  }

  return <ul>{items}</ul>;
}
