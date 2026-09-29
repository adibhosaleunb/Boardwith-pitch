import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import CommunityLoop from '../components/CommunityLoop.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './GoToMarket.module.css';

export default function GoToMarket({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.grid}>
        <CommunityLoop loop={slide.loop} />
        <div className={s.right}>
          {slide.metrics.map((m) => (
            <div key={m.label}>
              <p className={typo.medNum}>{m.value}</p>
              <p className={typo.body}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
      <Sources items={slide.sources} className={s.sources} />
    </Slide>
  );
}
