import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import CompetitorMap from '../components/CompetitorMap.jsx';
import Sources from '../components/Sources.jsx';
import s from './Competition.module.css';

export default function Competition({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.map}>
        <CompetitorMap axes={slide.axes} options={slide.options} boardwith={slide.boardwith} />
      </div>
      <Sources items={slide.sources} className={s.sources} />
    </Slide>
  );
}
