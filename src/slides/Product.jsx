import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Journey from '../components/Journey.jsx';
import Sources from '../components/Sources.jsx';
import EvidenceTag from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './Product.module.css';

export default function Product({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <div className={s.wrap}>
        <Headline>{slide.headline}</Headline>
        <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
        <div className={s.tagRow}>
          <EvidenceTag kind="concept" text={slide.stepsTag} />
          {slide.stepsNote ? <p className={s.stepsNote}>{slide.stepsNote}</p> : null}
        </div>
        <div className={s.journey}>
          <Journey steps={slide.steps} />
        </div>
        <Sources items={slide.sources} className={s.sources} />
      </div>
    </Slide>
  );
}
