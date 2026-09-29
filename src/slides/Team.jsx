import { Building2, Rocket, GraduationCap } from 'lucide-react';
import { team } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import TeamMember from '../components/TeamMember.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './Team.module.css';

const ICONS = { building: Building2, rocket: Rocket, school: GraduationCap };

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
        <h3 className={s.partnersTitle}>{slide.partnersTitle}</h3>
        <ul className={s.partners}>
          {slide.partners.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <li key={p.name}>
                <Icon className={s.partnerIcon} size={32} strokeWidth={2} aria-hidden="true" />
                <span>
                  <span className={s.partnerName}>{p.name}</span>, {p.role}
                </span>
              </li>
            );
          })}
        </ul>
        <p className={`${typo.caption} ${s.gap}`}>{slide.gap}</p>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
