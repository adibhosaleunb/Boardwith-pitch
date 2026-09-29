import { images } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import StoryImage from '../components/StoryImage.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import { useDeck } from '../lib/DeckContext.js';
import typo from '../styles/type.module.css';
import s from './Split.module.css';

// The pull quote is cut to the speaker notes (brief: "Cut first: the pull
// quote") because the price anchor and sources need the room at 1080px.
export default function Solution({ slide, active }) {
  const { mode } = useDeck();
  return (
    <Slide slide={slide} active={active}>
      {mode !== 'stage' && <StoryImage image={images.solution} />}
      <div className={s.column}>
        <Headline size="short">{slide.headline}</Headline>
        <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
        <ul className={s.changes}>
          {slide.changes.map((line) => (
            <li key={line} className={typo.body}>
              {line}
            </li>
          ))}
        </ul>
        <dl className={s.prices}>
          {slide.prices.map((p) => (
            <div key={p.value} className={s.price}>
              <dt className={typo.medNum}>
                {p.prefix ? <span className={s.prefix}>{p.prefix} </span> : null}
                {p.value}
              </dt>
              <dd className={typo.body}>
                {p.label} <Tag tag={p.tag} />
              </dd>
            </div>
          ))}
        </dl>
        <Sources items={slide.sources} className={s.sources} />
      </div>
    </Slide>
  );
}
