import { useState } from 'react';
import { Topic } from './App';

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [currentID, setCurrentID] = useState<number>();

  function handleTitleClick(id: number) {
    id === currentID ? setCurrentID(undefined) : setCurrentID(id);
  }

  const mappedTopics = topics.map((topic) => (
    <TopicsCard
      card={topic}
      key={topic.id}
      hasDisplay={topic.id === currentID}
      onTitleClick={() => handleTitleClick(topic.id)}
    />
  ));

  return <div>{mappedTopics}</div>;
}

type CardProps = {
  card: Topic;
  hasDisplay?: boolean;
  onTitleClick: () => void;
};

function TopicsCard({ card, hasDisplay, onTitleClick }: CardProps) {
  return (
    <>
      <h3 onClick={() => onTitleClick()}>{card.title}</h3>
      {hasDisplay && <p>{card.content}</p>}
    </>
  );
}
