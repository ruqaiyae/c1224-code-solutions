import { useState } from 'react';
import { Topic } from './App';

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [currentID, setCurrentID] = useState<number>();

  const mappedTopics = topics.map((topic) => (
    <TopicsCard
      card={topic}
      key={topic.id}
      display={topic.id === currentID}
      onTitleClick={(target) =>
        target === currentID ? setCurrentID(undefined) : setCurrentID(topic.id)
      }
    />
  ));

  return <div>{mappedTopics}</div>;
}

type CardProps = {
  card: Topic;
  display?: boolean;
  onTitleClick: (target: number) => void;
};

function TopicsCard({ card, display, onTitleClick }: CardProps) {
  return (
    <>
      <h3 onClick={() => onTitleClick(card.id)}>{card.title}</h3>
      {display ? <p>{card.content}</p> : undefined}
    </>
  );
}
