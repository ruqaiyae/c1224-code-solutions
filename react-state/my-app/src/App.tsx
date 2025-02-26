import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = [
  '/starry-sky.jpeg',
  `/Annot, Provence-Alpes-Côte d'Azur, France.jpg`,
  '/2025-Planner.jpg',
];
const captions = [
  'A Beautiful Image of Space',
  `Annot, Provence-Alpes-Côte d'Azur, France`,
  '2025-Planner',
];
const descriptions = [
  'A mesmerizing view of the cosmos, showcasing an endless expanse of twinkling stars scattered across the dark sky. The Milky Way stretches gracefully, forming a hazy, luminous band that adds depth to the scene. Wisps of clouds partially veil the celestial display, adding an ethereal touch. The image evokes a sense of wonder, tranquility, and the infinite beauty of the universe.',
  `A charming aerial view of a historic French village nestled in the lush greenery of the Provence-Alpes-Côte d'Azur region. The town features traditional stone buildings with terracotta rooftops, winding narrow streets, and an old church standing prominently at its center. Surrounded by rolling hills and rocky cliffs, the village exudes a timeless, rustic beauty that perfectly captures the essence of rural France.`,
  'A sleek and modern 2025 planner with a stylish geometric cover design, featuring vibrant colors and bold typography. It is placed on a bright yellow background, creating a visually appealing contrast. Beside the planner, a small potted plant adds a touch of greenery, enhancing the fresh and organized aesthetic. The planner symbolizes productivity, goal-setting, and a structured approach to the new year.',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description texts={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
