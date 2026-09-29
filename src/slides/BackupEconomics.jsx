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
        {table.rows.map((row) => (
          <tr key={row[0]}>
            {row.map((cell, i) =>
              i === 0 ? (
                <th key={i} scope="row">
                  {cell}
                </th>
              ) : (
                <td key={i} className={`num ${i === highlightCol ? s.hl : ''}`}>
                  {cell}
                </td>
              ),
            )}
          </tr>
        ))}
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
