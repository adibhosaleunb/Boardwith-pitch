import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './Backup.module.css';

export default function BackupEvidence({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={`${s.cols} ${s.three}`}>
        {slide.columns.map((col) => (
          <section key={col.title} aria-label={col.title}>
            <h3 className={s.colTitle}>{col.title}</h3>
            <ul className={s.items}>
              {col.items.map((item) => (
                <li key={item} className={typo.bodyDense}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className={s.foot}>
        <p className={typo.caption}>{slide.caption}</p>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
