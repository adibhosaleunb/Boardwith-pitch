import { slides } from '../data/startupData.js';
import Cover from './Cover.jsx';
import Problem from './Problem.jsx';
import Solution from './Solution.jsx';
import Product from './Product.jsx';
import BusinessModel from './BusinessModel.jsx';
import GoToMarket from './GoToMarket.jsx';
import Competition from './Competition.jsx';
import Team from './Team.jsx';
import Projections from './Projections.jsx';
import Ask from './Ask.jsx';
import BackupEvidence from './BackupEvidence.jsx';
import BackupMarket from './BackupMarket.jsx';
import BackupEconomics from './BackupEconomics.jsx';
import BackupSafety from './BackupSafety.jsx';

const COMPONENTS = {
  cover: Cover,
  problem: Problem,
  solution: Solution,
  product: Product,
  'business-model': BusinessModel,
  'go-to-market': GoToMarket,
  competition: Competition,
  team: Team,
  projections: Projections,
  ask: Ask,
  evidence: BackupEvidence,
  market: BackupMarket,
  economics: BackupEconomics,
  safety: BackupSafety,
};

export const deck = slides.map((slide) => ({ slide, Component: COMPONENTS[slide.id] }));

export const CORE_COUNT = slides.filter((s) => typeof s.number === 'number').length;
export const PROBLEM_INDEX = slides.findIndex((s) => s.id === 'problem');
export const SOLUTION_INDEX = slides.findIndex((s) => s.id === 'solution');

// '#/1' … '#/10', '#/a1' … '#/a4'
export const hashFor = (index) => `#/${String(slides[index].number).toLowerCase()}`;

export function indexFromHash(hash) {
  const key = hash.replace(/^#\/?/, '').toLowerCase();
  const i = slides.findIndex((s) => String(s.number).toLowerCase() === key);
  return i === -1 ? 0 : i;
}

export const counterFor = (index) => {
  const n = slides[index].number;
  return typeof n === 'number' ? `${n} / ${CORE_COUNT}` : n;
};
