import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './Backup.module.css';

function DataTable({ table, className = '', highlightCol }) {
  return (
    <table className={`${s.table} ${className}`}>
      <caption className={s.tableTitle}>
        {table.title} <Tag tag={table.tag} />
      </caption>
      <thead>
        <tr>
          {table.head.map((h, i) => (
            <th key={i} scope="col" className={i === highlightCol ? s.hl : ''}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => {
          // Empty cells right after the row label widen the label instead.
          let span = 1;
          while (span < row.length - 1 && row[span] === '') span++;
          return (
            <tr key={row[0]}>
              <th scope="row" colSpan={span > 1 ? span : undefined} className={span > 1 ? s.spanned : ''}>
                {row[0]}
              </th>
              {row.slice(span).map((cell, j) => (
                <td key={j + span} className={`num ${j + span === highlightCol ? s.hl : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function BackupEconomics({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.econ}>
        <div>
          <DataTable table={slide.table1} highlightCol={6} />
          <DataTable table={slide.table2} className={s.t2} />
        </div>
        <div className={s.econNotes}>
          <p className={typo.caption}>{slide.table1.note}</p>
          <p className={typo.caption}>{slide.table2.note}</p>
          <p className={s.ref}>
            <span className={typo.name}>Pilot note:</span> {slide.pilot}
          </p>
          <p className={s.ref}>
            <span className={typo.name}>What makes it bigger:</span> {slide.bigger}
          </p>
        </div>
      </div>
    </Slide>
  );
}
