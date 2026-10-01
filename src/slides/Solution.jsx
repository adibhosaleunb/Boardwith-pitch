import { Plane, ShieldCheck, HeartHandshake } from 'lucide-react';
import { images } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import StoryImage from '../components/StoryImage.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import { useDeck } from '../lib/DeckContext.js';
import typo from '../styles/type.module.css';
import s from './Split.module.css';

const ICONS = { plane: Plane, shield: ShieldCheck, companion: HeartHandshake };

export default function Solution({ slide, active }) {
  const { mode } = useDeck();
  return (
    <Slide slide={slide} active={active}>
      {mode !== 'stage' && <StoryImage image={images.solution} reveal={mode === 'reading'} />}
      <div className={s.column}>
        <Headline size="short">{slide.headline}</Headline>
        <ul className={s.iconLines}>
          {slide.lines.map(({ icon, text, detail }) => {
            const Icon = ICONS[icon];
            return (
              <li key={text}>
                <Icon className={s.icon} size={40} strokeWidth={2} aria-hidden="true" />
                <div>
                  <p className={s.lineTitle}>{text}</p>
                  {detail ? <p className={s.lineDetail}>{detail}</p> : null}
                </div>
              </li>
            );
          })}
        </ul>
        <dl className={s.prices}>
          {slide.prices.map((p) => (
            <div key={p.value} className={s.price}>
              <dt className={typo.medNum}>
                {p.prefix ? <span className={s.prefix}>{p.prefix} </span> : null}
                {p.value}
              </dt>
              <dd className={s.priceLabel}>
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
