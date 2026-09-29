import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import CommunityLoop from '../components/CommunityLoop.jsx';
import Sources from '../components/Sources.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './GoToMarket.module.css';

export default function GoToMarket({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
      <div className={s.grid}>
        <CommunityLoop loop={slide.loop} />
        <div className={s.right}>
          {slide.metrics.map((m) => (
            <div key={m.label}>
              {m.value ? <p className={typo.medNum}>{m.value}</p> : <p className={s.metricName}>{m.name}</p>}
              <p className={`${typo.bodyDense} ${s.metricLabel}`}>
                {m.label} <Tag tag={m.tag} />
              </p>
            </div>
          ))}
        </div>
      </div>
      <Sources items={slide.sources} className={s.sources} />
    </Slide>
  );
}
