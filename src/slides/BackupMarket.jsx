import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './Backup.module.css';

// A three-step ladder (not concentric circles): each rung is narrower.
export default function BackupMarket({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <ol className={s.ladder} aria-label="Market ladder">
        {slide.ladder.map((rung, i) => (
          <li key={rung.level} className={s.rung} style={{ '--rung': i }}>
            <span className={s.rungLevel}>{rung.level}</span>
            <span className={s.rungWho}>{rung.who}</span>
            <span className={s.rungNum}>
              <span className="sr-only">{slide.ladderHead[2]}: </span>
              {rung.journeys}
            </span>
            <span className={s.rungValue}>
              {rung.value} <Tag tag={rung.tag} />
            </span>
          </li>
        ))}
      </ol>
      <div className={`${s.cols} ${s.two} ${s.tight}`}>
        <div className={s.stack}>
          <p className={typo.bodyDense}>
            <span className={typo.name}>Re-size note:</span> {slide.resize}
          </p>
          <p className={typo.bodyDense}>
            <span className={typo.name}>Cross-check:</span> {slide.crossCheck} <Tag tag={slide.crossCheckTag} />
          </p>
        </div>
        <div className={s.stack}>
          <p className={typo.bodyDense}>
            <span className={typo.name}>Why now:</span> {slide.whyNow}
          </p>
          <p className={typo.bodyDense}>
            <span className={typo.name}>Headwind:</span> {slide.headwind}
          </p>
        </div>
      </div>
      <div className={s.foot}>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
