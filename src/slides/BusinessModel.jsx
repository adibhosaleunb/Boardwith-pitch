import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import PriceBar from '../components/PriceBar.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './BusinessModel.module.css';

export default function BusinessModel({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.bar}>
        <PriceBar {...slide.priceBar} />
      </div>
      <div className={s.foot}>
        <div className={s.left}>
          <p className={typo.caption}>{slide.caption}</p>
          <Sources items={slide.sources} />
        </div>
        <div className={s.metric}>
          <p className={typo.bigNum}>{slide.metric.value}</p>
          <p className={`${typo.body} ${s.metricLabel}`}>
            {slide.metric.label} <Tag tag={slide.metric.tag} />
          </p>
        </div>
      </div>
    </Slide>
  );
}
