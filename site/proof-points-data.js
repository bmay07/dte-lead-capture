// Shared proof-point tiles pulled from real customer case studies (news-data.js).
// claim = value proposition, v/l = the measurable stat, link = full story.
export const PROOF_POINTS = [
  {
    slug: 'jack-evans-hedging-at-pinecliff-freedman-racing',
    claim: 'Cut labour, not corners',
    v: '1', l: 'Operator, down from 3',
    name: 'Jack Evans · Pinecliff Freedman Racing'
  },
  {
    slug: 'mango-pruning-a-gold-nugget',
    claim: 'Hedge on your own schedule',
    v: '90,000', l: 'Trees maintained a season',
    name: 'Alf Pappalardo · Marathon Man Go'
  },
  {
    slug: 'saves-time-money-and-physical-strain-howard-meltzer-mechanizes-orchard-hedging',
    claim: 'Hand pruning eliminated',
    v: '~10 days', l: 'To prune 2,000 olive trees',
    name: 'Howard Meltzer · Yellingbo Olive Grove'
  },
  {
    slug: 'greentec-quadsaw-customer-story',
    claim: 'Drop the contractor bill',
    v: '3,200+', l: 'Avocado trees, no contractors',
    name: 'David Gunson · Orchardist, NZ'
  }
];
export function storyHref(slug) { return 'case-study.html?n=' + slug; }
