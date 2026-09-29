import { images } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import StoryImage from '../components/StoryImage.jsx';
import { useDeck } from '../lib/DeckContext.js';
import typo from '../styles/type.module.css';
import s from './Split.module.css';

// Split a value like "25–30 min" into the figure and its unit.
const parts = (v) => {
  const m = v.match(/^(.*?)(\s*(?:min|%))$/);
  return m ? [m[1], m[2].trim()] : [v, ''];
};

export default function Problem({ slide, active }) {
  const { mode } = useDeck();
  return (
    <Slide slide={slide} active={active}>
      {mode !== 'stage' && <StoryImage image={images.problem} />}
      <div className={s.column}>
        <Headline size="l2">{slide.headline}</Headline>
        {slide.sub ? <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p> : null}
        <dl className={s.numbers}>
          {slide.numbers.map((n) => {
            const [fig, unit] = parts(n.value);
            return (
              <div key={n.value} className={s.numberRow}>
                <dt className={s.figure}>
                  {fig}
                  {unit ? <span className={unit === '%' ? s.pct : s.unit}>{unit === '%' ? '%' : ` ${unit}`}</span> : null}
                </dt>
                <dd className={s.numberLabel}>{n.label}</dd>
              </div>
            );
          })}
        </dl>
        <Sources items={slide.sources} className={s.sources} />
      </div>
    </Slide>
  );
}
