import { team } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import TeamMember from '../components/TeamMember.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './Team.module.css';

export default function Team({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.people}>
        {team.map((p) => (
          <TeamMember key={p.name} person={p} />
        ))}
      </div>
      <div className={s.bottom}>
        <p className={typo.caption}>{slide.caption}</p>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
