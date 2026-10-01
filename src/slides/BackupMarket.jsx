import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './Backup.module.css';

// A step ladder (not concentric circles): each rung is narrower. The three
// serviceable rungs share a level name, with their part on a second line.
// A value may be two lines (the obtainable rung adds students to parents);
// its tag follows the last line.
const lines = (v, tag) => {
  const all = [].concat(v);
  return all.map((t, i) => (
    <span key={t} className={s.rungLine}>
      {t}
      {tag && i === all.length - 1 ? (
        <>
          {' '}
          <Tag tag={tag} />
        </>
      ) : null}
    </span>
  ));
};

export default function BackupMarket({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <ol className={s.ladder} aria-label="Market ladder">
        {slide.ladder.map((rung, i) => (
          <li key={`${rung.level}-${rung.sub ?? ''}`} className={`${s.rung} ${rung.note ? s.hasNote : ''}`} style={{ '--rung': i }}>
            <span className={s.rungLevel}>
              {rung.level}
              {rung.sub ? (
                <span className={s.rungSub}>
                  <span className="sr-only">: </span>
                  {rung.sub}
                </span>
              ) : null}
            </span>
            <span className={s.rungWho}>{rung.who}</span>
            <span className={s.rungNum}>
              <span className="sr-only">{slide.ladderHead[2]}: </span>
              {lines(rung.journeys)}
            </span>
            <span className={s.rungValue}>
              {lines(rung.value, rung.tag)}
            </span>
            {rung.note ? (
              <span className={s.rungNote}>
                {rung.note} <Tag tag={rung.noteTag} />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <div className={`${s.cols} ${s.two} ${s.tight}`}>
        <div className={s.stack}>
          <p className={s.ref}>
            <span className={typo.name}>Re-size note:</span> {slide.resize}
          </p>
          <p className={s.ref}>
            <span className={typo.name}>Cross-check:</span> {slide.crossCheck} <Tag tag={slide.crossCheckTag} />
          </p>
        </div>
        <div className={s.stack}>
          <p className={s.ref}>
            <span className={typo.name}>Why now:</span> {slide.whyNow}
          </p>
          <p className={s.ref}>
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
