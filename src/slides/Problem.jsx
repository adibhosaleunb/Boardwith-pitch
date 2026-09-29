import { images } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import BigMetric from '../components/BigMetric.jsx';
import Sources from '../components/Sources.jsx';
import StoryImage from '../components/StoryImage.jsx';
import { useDeck } from '../lib/DeckContext.js';
import typo from '../styles/type.module.css';
import s from './Split.module.css';

export default function Problem({ slide, active }) {
  const { mode } = useDeck();
  return (
    <Slide slide={slide} active={active}>
      {mode !== 'stage' && <StoryImage image={images.problem} />}
      <div className={s.column}>
        <Headline size="l2">{slide.headline}</Headline>
        <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
        <ul className={s.stories}>
          {slide.stories.map((story) => (
            <li key={story.name} className={typo.body}>
              <span className={typo.name}>{story.name}</span> {story.text}
            </li>
          ))}
        </ul>
        <BigMetric {...slide.metric} className={s.metric} />
        <Sources items={slide.sources} className={s.sources} />
      </div>
    </Slide>
  );
}
