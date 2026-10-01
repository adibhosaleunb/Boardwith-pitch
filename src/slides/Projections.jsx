import { CreditCard, Route, Repeat } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import ProjectionChart from '../components/ProjectionChart.jsx';
import Sources from '../components/Sources.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './Projections.module.css';

const ICONS = { pay: CreditCard, match: Route, repeat: Repeat };

export default function Projections({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>
        {slide.sub} <Tag tag={slide.subTag} />
      </p>
      <div className={s.grid}>
        <div>
          <ProjectionChart years={slide.years} title={slide.chartTitle} segmentLabels={slide.segmentLabels} showCompanions={false} barHeight={262} active={active} />
          <p className={`${typo.caption} ${s.chartNote}`}>{slide.chartNote}</p>
        </div>
        <div className={s.decide}>
          <h3 className={s.decideTitle}>{slide.decideTitle}</h3>
          <ol className={s.list}>
            {slide.decide.map((d) => {
              const Icon = ICONS[d.icon];
              return (
                <li key={d.title}>
                  <span className={s.icon} aria-hidden="true">
                    <Icon size={30} strokeWidth={2} />
                  </span>
                  <div>
                    <p className={s.question}>{d.title}</p>
                    {[].concat(d.today).map((t) => (
                      <p key={t} className={s.today}>
                        {t}
                      </p>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <Sources items={slide.sources} className={s.sources} />
    </Slide>
  );
}
