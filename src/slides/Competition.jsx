import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import CompetitorMap from '../components/CompetitorMap.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './Competition.module.css';

export default function Competition({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
      <div className={s.grid}>
        <CompetitorMap axes={slide.axes} options={slide.options} boardwith={slide.boardwith} />
        <div className={s.right}>
          <blockquote className={typo.quote}>
            {slide.quote.text} <span className={typo.quoteBy}>{slide.quote.by}</span>
          </blockquote>
          <p className={`${typo.body} ${s.edge}`}>
            <span className={typo.name}>Our edge:</span> <em>{slide.edge}</em>
          </p>
          <Sources items={slide.sources} className={s.sources} />
        </div>
      </div>
    </Slide>
  );
}
