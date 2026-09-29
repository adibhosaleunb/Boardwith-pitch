import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import CommunityLoop from '../components/CommunityLoop.jsx';
import Sources from '../components/Sources.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './GoToMarket.module.css';

export default function GoToMarket({ slide, active }) {
  const { loop } = slide;
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
      <div className={s.grid}>
        <div className={s.left}>
          <CommunityLoop loop={loop} />
          <p className={`${typo.bodyDense} ${s.channels}`}>
            <span className={typo.name}>Channels:</span> {loop.channels.join(' · ')}
          </p>
          <p className={`${typo.bodyDense} ${s.conversion}`}>{loop.conversion}</p>
        </div>
        <div className={s.right}>
          {slide.metrics.map((m) => (
            <div key={m.label} className={s.metric}>
              {m.value ? <p className={typo.medNum}>{m.value}</p> : null}
              <p className={typo.body}>
                {m.name ? <span className={typo.name}>{m.name} </span> : null}
                {m.label} <Tag tag={m.tag} />
              </p>
            </div>
          ))}
          <Sources items={slide.sources} className={s.sources} />
        </div>
      </div>
    </Slide>
  );
}
