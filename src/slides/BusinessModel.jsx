import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import PriceBar from '../components/PriceBar.jsx';
import BigMetric from '../components/BigMetric.jsx';
import Sources from '../components/Sources.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './BusinessModel.module.css';

export default function BusinessModel({ slide, active }) {
  const { tiers } = slide;
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
      <div className={s.bar}>
        <PriceBar {...slide.priceBar} />
      </div>
      <div className={s.lower}>
        <table className={`${s.tiers} ${typo.bodyDense}`}>
          <thead>
            <tr>
              {tiers.head.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tiers.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className="num">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className={s.side}>
          <BigMetric {...slide.metric} size="medium" />
          <blockquote className={`${typo.quote} ${s.quote}`}>
            {slide.quote.text} <span className={typo.quoteBy}>{slide.quote.by}</span>
          </blockquote>
        </div>
      </div>
      <div className={s.foot}>
        <p className={typo.caption}>
          {slide.footnote} <Tag tag={slide.footnoteTag} />
        </p>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
