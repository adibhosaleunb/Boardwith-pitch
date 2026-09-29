import typo from '../styles/type.module.css';

const SIZES = {
  hero: typo.hero,
  default: typo.headline,
  l2: typo.headlineL2,
  short: typo.headlineShort,
  ask: typo.headlineAsk,
};

export default function Headline({ children, size = 'default', as: Tag = 'h2', className = '' }) {
  return <Tag className={`${SIZES[size]} ${className}`}>{children}</Tag>;
}
