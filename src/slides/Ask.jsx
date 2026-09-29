import { company } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Lockup from '../components/Lockup.jsx';
import Timeline from '../components/Timeline.jsx';
import FundingAllocation from '../components/FundingAllocation.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './Ask.module.css';

export default function Ask({ slide, active }) {
  const { today, next, ask } = slide;
  return (
    <Slide slide={slide} active={active} theme="teal">
      <Headline size="ask" className={s.headline}>
        {slide.headline}
      </Headline>
      <div className={s.cols}>
        <section className={s.col} aria-label={today.title}>
          <h3 className={s.colTitle}>{today.title}</h3>
          <ul className={s.today}>
            {today.lines.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>
        <section className={s.col} aria-label={next.title}>
          <h3 className={s.colTitle}>{next.title}</h3>
          <Timeline steps={next.steps} />
        </section>
        <section className={s.col} aria-label={ask.title}>
          <h3 className={s.colTitle}>{ask.title}</h3>
          <p className={s.askValue}>{ask.value}</p>
          <p className={s.instrument}>{ask.instrument}</p>
          <FundingAllocation label={ask.fundsLabel} funds={ask.funds} />
        </section>
      </div>
      <div className={s.bottom}>
        <p className={s.close}>{slide.close}</p>
        <div className={s.footer}>
          <Lockup width={220} eager={false} />
          <span>{company.email}</span>
          <span>{company.website}</span>
          <Sources items={slide.sources} className={s.sources} />
        </div>
      </div>
    </Slide>
  );
}
