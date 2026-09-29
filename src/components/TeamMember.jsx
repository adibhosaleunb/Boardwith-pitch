import Rich from './Rich.jsx';
import styles from './TeamMember.module.css';

export default function TeamMember({ person }) {
  return (
    <article className={styles.member}>
      <h3 className={styles.name}>{person.name}</h3>
      <p className={styles.role}>
        {person.role} {person.roleInput ? <Rich text={person.roleInput} /> : null}
      </p>
      <ul className={styles.lines}>
        {person.lines.map((line) => (
          <li key={line}>
            <Rich text={line} />
          </li>
        ))}
      </ul>
    </article>
  );
}
