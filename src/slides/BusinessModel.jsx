import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import PriceBar from '../components/PriceBar.jsx';
import RouteGlyph from '../components/RouteGlyph.jsx';
import Rich from '../components/Rich.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './BusinessModel.module.css';

export default function BusinessModel({ slide, active }) {
  const { tiers, metric } = slide;
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
      <div className={s.bar}>
        <PriceBar {...slide.priceBar} />
      </div>
      <div className={s.lower}>
        <table className={s.tiers}>
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
            {tiers.rows.map((r) => (
              <tr key={r.route}>
                <th scope="row">
                  <span className={s.route}>
                    <RouteGlyph stops={r.stops} className={s.glyph} />
                    {r.route}
                  </span>
                </th>
                <td className="num">{r.pays}</td>
                <td className="num">{r.earns}</td>
                <td className={`num ${s.keeps}`}>{r.keeps}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={s.metric}>
          <p className={typo.medNum}>{metric.value}</p>
          <p className={`${typo.body} ${s.metricLabel}`}>
            <Rich text={metric.label} /> <Tag tag={metric.tag} />
          </p>
        </div>
      </div>
      <div className={s.foot}>
        <p className={typo.caption}>{slide.caption}</p>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
