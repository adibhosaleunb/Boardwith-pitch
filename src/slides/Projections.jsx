import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import ProjectionChart from '../components/ProjectionChart.jsx';
import Sources from '../components/Sources.jsx';
import EvidenceTag, { Tag } from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './Projections.module.css';

export default function Projections({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
      <div className={s.grid}>
        <div>
          {/* Cut applied (brief: "Cut first: the companion counts under the
              bars"); they are in the headline and in backup A3. */}
          <ProjectionChart years={slide.years} title={slide.chartTitle} showCompanions={false} barHeight={170} active={active} />
        </div>
        <div className={s.decide}>
          <h3 className={s.decideTitle}>{slide.decideTitle}</h3>
          <ol className={s.list}>
            {slide.decide.map((d, i) => (
              <li key={d.title} className={typo.body}>
                <span className={s.n} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <span className={typo.name}>{d.title}</span> {d.text}
                  {d.today ? (
                    <span className={s.today}>
                      <em>{d.today}</em>
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className={s.foot}>
        <p className={typo.caption}>
          {slide.chartNote} <EvidenceTag kind="projection" />
        </p>
        <p className={typo.caption}>
          <Tag tag={slide.footnoteTag} /> {slide.footnote}
        </p>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
