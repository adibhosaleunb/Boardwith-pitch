import WindowFrame from './WindowFrame.jsx';
import frame from './WindowFrame.module.css';
import styles from './TeamMember.module.css';

// Photo in a small window frame, then name, role and one line.
export default function TeamMember({ person }) {
  return (
    <article className={styles.member}>
      <WindowFrame
        size="small"
        eager={false}
        image={{ src: person.photo, alt: person.name, position: '50% 40%' }}
        fallback={
          <span className={frame.initials} role="img" aria-label={person.name}>
            {person.initials}
          </span>
        }
      />
      <div className={styles.text}>
        <h3 className={styles.name}>{person.name}</h3>
        <p className={styles.role}>{person.role}</p>
        <p className={styles.line}>{person.line}</p>
      </div>
    </article>
  );
}
