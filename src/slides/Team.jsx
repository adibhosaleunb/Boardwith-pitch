import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import TeamMember from '../components/TeamMember.jsx';
import Rich from '../components/Rich.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './Team.module.css';

// Cut applied (brief: "Cut first: Aditya's third bullet") so the columns fit
// above the "working with" lines. The line stays in startupData.js.
const trim = (people) => people.map((p, i) => (i === 0 ? { ...p, lines: p.lines.filter((_, j) => j !== 2) } : p));

export default function Team({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.people}>
        {trim(slide.people).map((p) => (
          <TeamMember key={p.name} person={p} />
        ))}
      </div>
      <div className={s.bottom}>
        <p className={typo.bodyDense}>
          <span className={typo.name}>Working with:</span> {slide.workingWith.join(' · ')}
        </p>
        <p className={typo.bodyDense}>
          <span className={typo.name}>Who’s missing:</span> {slide.missing}
        </p>
        <p className={`${typo.caption} ${s.foot}`}>
          <Rich text={slide.headshots} />
          <span className={s.sep} />
          <span className={typo.name}>Sources:</span> {slide.sources.join(' ')}
        </p>
      </div>
    </Slide>
  );
}
