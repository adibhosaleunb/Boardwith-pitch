import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import ProjectionChart from '../components/ProjectionChart.jsx';
import Sources from '../components/Sources.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './Projections.module.css';

export default function Projections({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>
        {slide.sub} <Tag tag={slide.subTag} />
      </p>
      <div className={s.grid}>
        <ProjectionChart years={slide.years} showCompanions={false} barHeight={300} active={active} />
        <div className={s.decide}>
          <h3 className={s.decideTitle}>{slide.decideTitle}</h3>
          <ul className={s.list}>
            {slide.decide.map((q) => (
              <li key={q} className={typo.body}>
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Sources items={slide.sources} className={s.sources} />
    </Slide>
  );
}
