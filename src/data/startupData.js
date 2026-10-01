// All deck copy lives here. Copy is final (brief, section 0): headlines,
// numbers and quotes are word for word. Slide components only lay it out.
//
// Inline markup understood by <Rich>:
//   **bold**   *italic*   [FOUNDER INPUT: …]  (renders as a visible placeholder)

export const company = {
  name: 'Boardwith',
  oneLiner: 'A checked companion for parents flying alone to Canada.',
  founder: { name: 'Aditya Bhosale', title: 'Founder & CEO' },
  stage: 'Pre-seed',
  confidential: true,
  confidentialLine: 'Pre-seed. Confidential.',
  printLine: 'Boardwith. Pre-seed. Confidential.',
  email: 'adityabhosale@boardwith.com',
  website: 'boardwith.com',
};

// Slide 8. Photos: public/images/team-*.webp, used as supplied (brief, 12.4).
// Full bios are in the slide's 20-minute notes.
export const team = [
  {
    name: 'Aditya Bhosale',
    role: 'Founder & CEO',
    initials: 'AB',
    photo: '/images/team-aditya.webp',
    lines: ['MSCS student at UNB; identity verification at Copart, 2021–2025', 'Cloud security at Skyhigh; 6+ years in production software'],
  },
  {
    name: 'Adarsh Shaw',
    role: 'CTO',
    initials: 'AS',
    photo: '/images/team-adarsh.webp',
    lines: ['BTech; software architect at Tavant; Google Cloud certified', 'Built the AI engine behind NutriLens'],
  },
  {
    name: 'Shivani Shinde',
    role: 'HR & Operations',
    initials: 'SS',
    photo: '/images/team-shivani.webp',
    lines: ['MBA in HR and Finance; led frontline restaurant teams', 'Leads companion recruitment, checks and support'],
  },
];

export const images = {
  lockup: { src: '/images/logo-lockup.png', alt: 'Boardwith', width: 2000, height: 613 },
  cover: {
    src: '/images/cover-parent.webp',
    alt: 'An older woman in a sari holds a younger man’s hand as they step off an escalator at a station.',
    position: '50% 40%',
  },
  problem: {
    src: '/images/problem-alone.webp',
    alt: 'Illustration: an older couple stands alone in a grey, crowded airport hall, holding a printed itinerary.',
    position: '44% 50%',
  },
  solution: {
    src: '/images/solution-together.webp',
    alt: 'Illustration: the same couple in a warm, bright airport, with a younger companion pointing the way to their gate.',
    position: '44% 50%',
  },
};

export const slides = [
  // ─── 1 ──────────────────────────────────────────────────────────────
  {
    id: 'cover',
    number: 1,
    title: 'Title',
    layout: 'L1',
    theme: 'teal',
    headline: 'A checked companion for parents flying alone to Canada.',
    timing: { five: 15, twenty: 60 },
    notes: {
      five: '“Hi, I’m Aditya Bhosale, founder of Boardwith. We find a background-checked companion on the same flights for parents flying alone to Canada for the first time. Let me show you why.”',
      twenty: [
        'Introduce yourself and the co-founders by name.',
        'One line on the company (NB corporation, Energia Ventures, Fredericton).',
        'Tell them the shape: five slides of story, five of plan, then questions.',
      ],
    },
  },

  // ─── 2 ──────────────────────────────────────────────────────────────
  {
    id: 'problem',
    number: 2,
    title: 'Problem / Opportunity',
    layout: 'L2',
    headline: 'Alone at the arrival airport, and nobody’s responsibility.',
    sub: 'Need follows being alone, new to flying and short on English, not age.',
    numbers: [
      { value: '45 min', label: 'Shashikant P. couldn’t reach his mother after she missed her Toronto connection.' },
      { value: '25–30 min', label: 'Meena J., 67, alone after Toronto immigration, despite a wheelchair booking.' },
      { value: '59%', label: 'of 401 people surveyed found trustworthy help hard to find.' },
    ],
    sources: [
      'Interviews, September 2026 (6 conversations, in person and by phone).',
      'Survey of 401 respondents, April–May 2026.',
    ],
    timing: { five: 50, twenty: 180 },
    notes: {
      five: '“When my mother first flew home to India alone, I watched her through the glass at Fredericton airport. I couldn’t reach her. In Dubai, a stranger walked her to her connection. This September I interviewed six families and travellers. Shashikant’s mother missed her Toronto connection; he couldn’t reach her for 45 minutes. Meena, 67, was left alone after Toronto immigration for almost half an hour, despite a wheelchair booking. Once they land, no one is responsible for them. And it isn’t age: it’s being alone, new to flying and short on English. In our survey of 401 people, 59% found trustworthy help hard to find.”',
      twenty: [
        'Tell the mother story in full: four flights, three connections, Fredericton–Toronto–Dubai–Delhi–Indore; the stranger in Dubai.',
        'What families already spend: wheelchair assistance booked for parents who can walk (four or five families the founder knows); C$282.50 for one airport’s escort at Toronto; a second ticket plus time off; Shashikant delayed his mother’s next visit three months; Nikhil paid C$70 more for a longer connection.',
        'The learning: three interviewees found Toronto or Montreal hardest (immigration, re-checking bags, a domestic connection), not the Gulf hub. A couple, 64 and 60, managed fine: “I am 64, not 84.”',
        'Opportunity: about 88,000 one-way journeys a year by parents flying alone for the first time, roughly C$20–29 million at our price. Say that it’s an estimate being re-sized. Open **A2** if asked.',
        'Survey context: 401 responses, April–May 2026, via LinkedIn, UNB groups, community groups and in person.',
      ],
    },
  },

  // ─── 3 ──────────────────────────────────────────────────────────────
  {
    id: 'solution',
    number: 3,
    title: 'Value proposition',
    layout: 'L2',
    headline: 'One checked companion, the whole way.',
    lines: [
      { icon: 'plane', text: 'One person across airports', detail: 'On the same flights, known to the family before departure' },
      { icon: 'shield', text: 'Checked before the match', detail: 'ID, criminal record and Indian police clearance' },
      { icon: 'companion', text: 'A companion, not a caregiver', detail: 'Matched on language where we can' },
    ],
    prices: [
      { value: 'C$225–325', label: 'Boardwith, the whole route', tag: { kind: 'assumption', qualifier: 'price untested' } },
      { prefix: 'from', value: 'C$282.50', label: 'Toronto Pearson escort, one airport only' },
    ],
    sources: [
      'ALLWAYS Toronto meet-and-assist (arriving), company website, September 2026.',
      'Interviews, September 2026.',
    ],
    timing: { five: 30, twenty: 120 },
    notes: {
      five: '“Boardwith gives the family one companion for that trip, checked for ID and criminal record before we match them, on the same flights, and ideally speaking the parent’s language. A companion, not a caregiver. Meena told us, ‘I would not want somebody treating me like a patient.’ We charge 225 to 325 dollars for the whole route. At Toronto Pearson, an escort for that one airport starts at 282.”',
      twenty: [
        'Said, not shown: Meena’s “I would not want somebody treating me like a patient.”',
        'Before and after, using the two illustrations: handed over airport by airport, versus one person across airports.',
        'Language: “English only would not help me much when I am nervous.” Meena would prefer a woman who speaks Marathi or Hindi. Language and gender preferences narrow the pool, and the pilot measures by how much.',
        'The family knows the companion before departure.',
        'Value in the buyer’s units: hours out of contact removed, a visit not delayed, no second ticket.',
        'Family updates while the parent is offline were requested (Shashikant; Sunil and Kavita D.) and are planned, not designed.',
      ],
    },
  },

  // ─── 4 ──────────────────────────────────────────────────────────────
  {
    id: 'product',
    number: 4,
    title: 'Underlying magic',
    layout: 'L3',
    headline: 'Checked before the match. Matched on the flights.',
    sub: 'All 5 routes we heard pass through Toronto or Montreal, so we match there.',
    stepsTag: 'Concept screens',
    stepsNote: 'The pilot runs on a sign-up form, matching by hand and Stripe payment links.',
    steps: [
      { title: 'Add the flights', detail: 'Flights, dates, language' },
      { title: 'Check the companion', detail: 'ID, record, police clearance' },
      { title: 'Match on the flights', detail: 'Whole route, or arrival legs' },
      { title: 'Travel together', detail: 'Met before departure' },
    ],
    sources: [
      'Stripe Identity (C$2.00 per ID-and-selfie check), Certn (C$24.99–29.99), Consulate General of India, Toronto (police clearance fees).',
      'Status: in talks with Stripe Identity, Jumio and Certn.',
    ],
    timing: { five: 30, twenty: 150 },
    notes: {
      five: '“How it works. The family books the ticket, then gives us the flights and the parent’s language. Every companion passes ID, criminal record and Indian police clearance checks before any match. Then we match on the flights. Whole routes rarely overlap, but all five routes we heard passed through Toronto or Montreal, exactly where parents struggle. So when a whole route won’t match, we match those legs.”',
      twenty: [
        'What each step means: (1) after booking the ticket, the family enters flight numbers, dates and the parent’s language; (2) ID and selfie, criminal record and Indian police clearance, about C$73 per companion; (3) the whole route if possible, otherwise the legs through the Canadian arrival airport, with language considered; (4) the family knows the companion before departure, and trip updates for the family are planned.',
        'Walk the four screens. They’re concepts; the pilot runs on a sign-up form, matching by hand and Stripe payment links. The app takes four to six months, the length of the planned Mitacs internship.',
        'Checks: Stripe Identity at C$2.00 per ID-and-selfie check; Certn criminal record checks at C$24.99–29.99; Indian police clearance. About C$73 per companion in total. In talks with Stripe Identity, Jumio and Certn.',
        'Why it’s hard to copy: a checked supply of companions on a specific corridor, route data from every sign-up, and a trust record per companion that grows with each trip (planned). Be honest that early on the moat is execution and density, not technology.',
        'Open **A4** for safety questions.',
      ],
    },
  },

  // ─── 5 ──────────────────────────────────────────────────────────────
  {
    id: 'business-model',
    number: 5,
    title: 'Business model',
    layout: 'L4',
    headline: 'We keep C$75 a journey, about C$30 after costs.',
    sub: 'The adult child in Canada pays by card, once per journey. The price rises with the legs covered.',
    priceBar: {
      total: 325,
      caption: 'Two or more connections: the family pays C$325',
      segments: [
        { key: 'companion', label: 'Companion earns', value: 250, display: 'C$250', tone: 'companion' },
        { key: 'checks', label: 'Checks', value: 36.5, display: 'C$36.50', tone: 'cost' },
        { key: 'card', label: 'Card fees', value: 9.73, display: 'C$9.73', tone: 'cost' },
        { key: 'kept', label: 'Boardwith keeps', value: 28.77, display: '≈ C$29', tone: 'boardwith' },
      ],
    },
    // stops = connections, drawn as a small route glyph beside each row
    tiers: {
      head: ['Route', 'Family pays', 'Companion earns', 'We keep after costs'],
      rows: [
        { route: 'Direct', stops: 0, pays: 'C$225', earns: 'C$150', keeps: '≈ C$32' },
        { route: 'One connection', stops: 1, pays: 'C$275', earns: 'C$200', keeps: '≈ C$30' },
        { route: 'Two or more', stops: 2, pays: 'C$325', earns: 'C$250', keeps: '≈ C$29' },
      ],
    },
    metric: {
      value: '≈ C$30',
      label: 'a journey at 2 trips per companion a year, **≈ C$47–50** at 4',
      tag: { kind: 'assumption' },
    },
    caption: 'Before insurance (not yet quoted) and support time. Each parent visit is two one-way journeys.',
    sources: [
      'Stripe pricing (card fees). Check costs: Stripe Identity, Certn, Consulate of India. Prices: Boardwith plan, untested.',
    ],
    timing: { five: 30, twenty: 120 },
    notes: {
      five: '“The adult child pays us once per journey, by card. On a route with two connections, the family pays 325 dollars, the companion earns 250, and we keep 75. After card fees and checks, that’s about 30 dollars. If companions fly four times a year instead of two, it’s about 47. Shashikant would pay 400 ‘if I really trusted the person.’ Trust, not hours, sets the price.”',
      twenty: [
        'Said, not shown: checks are about C$73 per companion, spread over two trips a year; card fees are 2.9% + C$0.30. Shashikant: C$400 one way, “if I really trusted the person.”',
        'Why per journey, not a subscription: a parent visits perhaps once a year (assumption).',
        'Why price by legs: the companion stays for all of them.',
        'Price signals: buyers offered C$150–400; Shashikant said C$700–800 is too much and he’d trust an offer under C$100 less. Nikhil offered C$150 for a full journey. These are stated, not paid.',
        'What’s not in the C$30: insurance (to be quoted) and support time. Open **A3**.',
      ],
    },
  },

  // ─── 6 ──────────────────────────────────────────────────────────────
  {
    id: 'go-to-market',
    number: 6,
    title: 'Go-to-market plan',
    layout: 'L3',
    headline: 'One community supplies both sides.',
    sub: 'First trips in the December 2026 break, from Fredericton.',
    loop: {
      families: { title: 'Families with visiting parents', text: 'Families of UNB’s 454 Indian students, and Fredericton’s Indian community' },
      students: { title: 'Students flying home', text: 'The December break brings our first companions' },
      match: { title: 'Boardwith match', text: 'Checked, same flights' },
      arrows: {
        families: 'Parents visit again; families refer families',
        students: 'Students escort again on later trips',
      },
      channels: [
        'Fredericton Association of India',
        'UNB Graduate Students’ Association',
        'the groups behind 401 survey responses',
        'referrals',
        'Fredericton airport',
      ],
    },
    metrics: [
      { value: '1', label: 'companion signed up' },
      { name: 'Fredericton Association of India', label: 'offered to help onboard our first families' },
      { value: 'C$50–100', label: 'outreach per pilot trip, no paid ads', tag: { kind: 'assumption' } },
    ],
    sources: [
      'UNB Fall 2025 enrolment summary. Survey, April–May 2026. Founder’s conversations, September 2026.',
    ],
    timing: { five: 30, twenty: 120 },
    notes: {
      five: '“We start in Fredericton, where one community supplies both sides: families whose parents visit, and students flying home in December who can be companions. The Fredericton Association of India has offered to help us find and onboard our first families, and our first companion has signed up. Families pay a refundable deposit at list price, so we learn who really pays. No paid ads.”',
      twenty: [
        'Said, not shown: a sign-up form records route, dates, airline and language, then families pay a refundable deposit at list price through a Stripe payment link. The C$50–100 is C$500–1,000 of the MVP, infrastructure and outreach line ÷ 10 trips, excluding founder time.',
        'Beachhead: UNB Fredericton had 454 Indian students in Fall 2025 (409 undergraduate, 45 graduate).',
        'Channels, in order: the Association, the GSA, the groups behind the 401 survey responses, referrals from interviews (including an introduction in Moncton), Fredericton airport.',
        'Supply: Neel, a student, has escorted a family friend’s mother unpaid and would escort a stranger for about C$250 with checks paid by Boardwith. We’ll poll GSA students flying home in December for route, price and willingness to do checks.',
        'Cost to win a pilot customer: C$500–1,000 of printing and events across 10 trips, plus founder time.',
        'The sign-up form records route, dates, airline and language, so overlap is counted before any trip is promised.',
      ],
    },
  },

  // ─── 7 ──────────────────────────────────────────────────────────────
  {
    id: 'competition',
    number: 7,
    title: 'Competitive analysis',
    layout: 'L3',
    headline: 'Today, trusted help for the whole trip costs a second ticket.',
    sub: 'Help is either checked for one airport, or unchecked for the whole route.',
    axes: {
      x: { from: 'One airport', to: 'The whole trip' },
      y: { from: 'Unchecked', to: 'Checked' },
    },
    // x, y in 0–1 (x: one airport → whole trip; y: unchecked → checked).
    // Heights leave room for each two-line label.
    options: [
      { name: 'Airline assistance, free', text: 'Handed over airport by airport', x: 0.05, y: 0.94 },
      { name: 'Airport escort, from C$282.50', text: 'One airport only', x: 0.05, y: 0.68 },
      { name: 'Family flies along', text: 'A second ticket plus time off', x: 0.95, y: 0.94, align: 'right' },
      { name: 'MatchMyFlight, US$25–75', text: 'Checks phone, email and ticket', x: 0.95, y: 0.44, align: 'right' },
      { name: 'Community groups, free', text: 'Email only', x: 0.95, y: 0.2, align: 'right' },
      { name: 'A kind stranger', text: 'Luck', x: 0.05, y: 0.2 },
    ],
    boardwith: { name: 'Boardwith, C$225–325', text: 'Checked, the whole trip. Not yet proven.', x: 0.95, y: 0.69 },
    sources: [
      'Company websites reviewed September 2026: MatchMyFlight, TravelSakha, ALLWAYS, Marhaba.',
      'Interviews, September 2026.',
    ],
    timing: { five: 25, twenty: 120 },
    notes: {
      five: '“Today, trusted help for the whole trip means buying a second ticket. Airline assistance is free but hands parents over airport by airport. Toronto’s meet-and-assist covers one airport. MatchMyFlight covers the route cheaply, but checks only phone, email and ticket. We’re checked and continuous. We’re not proven yet, and that’s what the pilot is for.”',
      twenty: [
        'Said, not shown: meet-and-assist is ALLWAYS at Toronto and Marhaba at Dubai (US$55.75–92.92); the groups are TravelSakha, Facebook and WhatsApp. Shashikant, on airline assistance: “No one person knew her whole journey.” Our edge: checks before the match, and one person across airports.',
        'Give each competitor its due. MatchMyFlight has a head start with our exact customers, and already sells a US$14.99 add-on with checkpoint guidance and family updates. Airline assistance is free and families trust it. Meet-and-assist staff are trained and have airport access.',
        'Why families switch: trust at the connection, one person across airports, and a price near one airport’s escort.',
        'Never say we have no competition. The real incumbent is a kind stranger and luck.',
      ],
    },
  },

  // ─── 8 ──────────────────────────────────────────────────────────────
  {
    id: 'team',
    number: 8,
    title: 'Management team',
    layout: 'L4',
    headline: 'The founder built identity checks, and lived this problem.',
    partnersTitle: 'Working with',
    partners: [
      { icon: 'building', name: 'Energia Ventures', role: 'incubator' },
      { icon: 'rocket', name: 'JHSC Ventures Shadow Institute', role: 'venture program' },
      { icon: 'school', name: 'Dr. Kenneth Kent, UNB', role: 'supervisor, Mitacs application submitted' },
    ],
    gap: 'Next to add: an insurance broker and legal counsel, both budgeted.',
    sources: ['Team members’ professional histories. Mitacs application, submitted.'],
    timing: { five: 25, twenty: 90 },
    notes: {
      five: '“At Copart, I worked on identity verification for people registering on an auction portal. Adarsh, our CTO, is a software architect at Tavant and built the AI engine behind NutriLens. Shivani has an MBA in HR and Finance, managed frontline restaurant teams, and leads companion recruitment, checks and support.”',
      twenty: [
        'Scars: the founder booked and paid for his mother’s trip and searched Facebook and WhatsApp groups for someone on her route, and found no one.',
        'Skills: identity verification is Boardwith’s first trust check; the founder has done it in production.',
        'Adarsh Shaw, CTO: BTech; software architect and lead engineer at Tavant; previously designed production data pipelines at Infosys; Google Cloud certified. Built the core AI engine behind NutriLens (Google Agentic AI Hackathon 2025), shipping LLM features end to end in a React/Node app.',
        'Shivani Shinde, HR & Operations: MBA in HR and Finance; former manager at a restaurant chain, leading frontline teams and customer service. Leads companion recruitment, onboarding and background checks, plus traveller and companion support.',
        'Aditya’s longer bio: Senior Software Engineer at Copart India Technology Centre (2021–2025), working on identity verification for user registration; cloud security auditing for AWS and Azure at Skyhigh Security; Master of Computer Science student at UNB.',
        'The gap: legal drafting and insurance. Shivani now covers companion operations; insurance and legal counsel are budgeted, and Energia Ventures mentors and Dr. Kent partly cover the rest.',
      ],
    },
  },

  // ─── 9 ──────────────────────────────────────────────────────────────
  {
    id: 'projections',
    number: 9,
    title: 'Financial projections and key metrics',
    layout: 'L3',
    headline: 'From Atlantic Canada to all of Canada: C$1.15M revenue in year 3.',
    sub: 'Illustrative, not a forecast. Every number is an assumption the pilot will test.',
    subTag: { kind: 'projection' },
    chartTitle: 'One-way journeys a year',
    years: [
      { year: 'Year 1', journeys: 252, display: '252', where: 'Atlantic Canada', pace: '21 a month', revenue: 'C$18,900 revenue' },
      { year: 'Year 2', journeys: 2052, display: '2,052', where: 'Eastern Canada', pace: '171 a month', revenue: 'C$153,900 revenue' },
      { year: 'Year 3', journeys: 15360, display: '15,360', where: 'All of Canada', pace: '1,280 a month', revenue: 'C$1,152,000 revenue' },
    ],
    decideTitle: 'Three numbers decide it',
    decide: [
      { icon: 'pay', title: 'Do families pay C$225–325?', today: 'Today: 0 paid' },
      { icon: 'match', title: 'Do routes match?', today: 'Today: 1 full-route overlap in 5 routes' },
      { icon: 'repeat', title: 'How often do companions fly?', today: ['2 trips a year: ≈ C$30 a journey', '4 trips a year: ≈ C$47–50'] },
    ],
    chartNote: 'Revenue = C$75 kept per journey. Salaries, insurance and support aren’t modelled until the pilot prices them.',
    sources: [
      'Boardwith revenue model, 30 September 2026. Market estimate from Week 2 (about 88,000 serviceable journeys). Unit economics from Week 3.',
    ],
    timing: { five: 25, twenty: 120 },
    notes: {
      five: '“This is an illustrative plan, not a forecast. Twenty-one journeys a month in Atlantic Canada in year one, 171 across Eastern Canada in year two, and 1,280 across all of Canada in year three: 1.15 million dollars of revenue. Three things decide it: do families pay, do routes match, and do companions fly four times a year, not two.”',
      twenty: [
        'Said, not shown: matching is by flight, so year 3 families anywhere in Canada fly in through Toronto, Vancouver, Montreal or Calgary. Year 3 is about 17.5% of the ~88,000 serviceable journeys and 1.75% of all India–Canada journeys. Companions needed by year: 126, 1,026 and 7,680. The 5 routes are the interview routes.',
        'Walk the bottom-up logic from backup **A3**: Atlantic Canada in year one (the Fredericton Association of India, UNB, the Moncton introduction); Eastern Canada in year two; all of Canada in year three.',
        'Why it isn’t only Toronto and Montreal: matching is by flight, not by city. A family in Calgary or Surrey books the same way as one in Fredericton, and their parents fly in through Toronto, Vancouver, Montreal or Calgary. Every new city adds travellers to the same routes, so matching gets easier as we grow.',
        'Say the share before they do: year 3 is about 17.5% of the ~88,000 serviceable journeys, which is 1.75% of all India–Canada journeys. The serviceable estimate is being re-sized; adding the India–US corridor later (2.06 million Indian visitors in 2025) would make it about 3%.',
        'Say what’s not modelled: team salaries, insurance, support. At about C$30 a journey, year 3 contributes about C$461,000; if companions fly four times a year (about C$47), about C$722,000.',
        'Pilot trips lose money on purpose (about −C$80 each, because 20 companions are checked for 10 trips).',
      ],
    },
  },

  // ─── 10 ─────────────────────────────────────────────────────────────
  {
    id: 'ask',
    number: 10,
    title: 'Current status, timeline, use of funds',
    layout: 'L1',
    theme: 'teal',
    headline: 'C$75,000 takes us from our first 10 trips to 21 journeys a month.',
    today: {
      title: 'Today',
      lines: [
        '0 paid trips, C$0 revenue',
        '401 surveyed, 6 interviewed',
        '1 companion signed up',
        'Fredericton Association of India ready to help',
        'Mitacs application submitted',
      ],
    },
    next: {
      title: 'Next twelve months',
      steps: [
        { when: 'October', what: 'sign-ups; insurance and legal quotes' },
        { when: 'November', what: 'deposits; companion checks' },
        { when: 'December', what: 'first trips' },
        { when: 'Month six', what: '10 trips done, results reported' },
        { when: 'Month twelve', what: '21 journeys a month in Atlantic Canada' },
      ],
    },
    ask: {
      title: 'The ask',
      value: 'C$75,000',
      instrument: 'Pre-seed SAFE (post-money), C$1.5M cap, 20% discount, C$10,000 minimum',
      fundsLabel: 'Use of funds',
      funds: [
        { label: 'Mitacs contribution', value: 7500, display: 'C$7,500' },
        { label: 'Insurance, legal and checks', value: 15000, display: 'C$15,000' },
        { label: 'App and infrastructure', value: 25000, display: 'C$25,000' },
        { label: 'Operations and outreach', value: 27500, display: 'C$27,500' },
      ],
    },
    close: 'Every parent’s first flight alone, with someone checked beside them.',
    sources: ['Use of funds proposed 30 September 2026 for twelve months: the pilot, then a first year in Atlantic Canada. Mitacs Accelerate program terms.'],
    timing: { five: 40, twenty: 120 },
    notes: {
      five: '“Today: 401 survey responses, six interviews, one companion signed up, and zero paid trips. We’re raising 75,000 dollars on a SAFE to change that. It covers twelve months: ten pilot trips that show us the match rate, the price families accept, what we make per trip, and whether every trip was safe; then 21 journeys a month in Atlantic Canada. My mother got lucky. Every parent’s first flight alone should have someone checked beside them. Thank you.”',
      twenty: [
        'Said, not shown: the six use-of-funds lines below; twelve months of runway; up to seven investors at the C$10,000 minimum; the Mitacs contribution unlocks a C$15,000 internship award if approved; no paid trip runs before insurance and signed terms; month six reports match rate, accepted price, contribution per trip and incidents, and tests connection-only help at C$40–60; if only C$30,000 is raised, the pilot still runs.',
        'Status: registered NB corporation; Energia Ventures; Shadow Institute; Mitacs submitted; in talks with Stripe Identity, Jumio and Certn; insurance and legal not yet engaged.',
        'Timeline month by month; the December break is about ten weeks away; month twelve is slide 9’s year 1, 21 journeys a month in Atlantic Canada.',
        'Use of funds line by line, C$75,000 over twelve months. Mitacs, C$7,500: unlocks a C$15,000 internship award if approved; the founder is the intern, so it funds him full-time on Boardwith.',
        'Insurance and legal, C$10,000: a year of liability insurance, and legal review of the terms, the companion agreement and the privacy policy.',
        'Companion checks and refunds, C$5,000: the pilot’s 20 checked companions and a refund buffer, plus checks ahead of year-1 revenue. After that, year-1 checks and card fees are paid from what families pay.',
        'App and infrastructure, C$25,000: the app and the cloud it runs on, so the pilot moves off forms and hand-matching (matching, checks, payments and payouts in one flow; family updates next).',
        'Companion operations and support, C$15,000: part-time recruitment, checks and the trip support line as trips grow past what the founder can watch alone.',
        'Marketing and outreach, C$12,500: the Atlantic Canada launch through community associations, UNB and other campuses, and the Moncton introduction.',
        'If less than C$75,000 is raised: C$30,000 still runs the 10-trip pilot, as first planned; the Atlantic launch, paid operations and most of the app wait for the rest. Below C$30,000, the first trips run unpaid and the pilot still measures match rate and safety.',
        'Terms: pre-seed SAFE (post-money), C$1.5M valuation cap, 20% discount, C$10,000 minimum cheque (up to seven investors). At the cap, C$75,000 is 5% of the company. Why C$1.5M: Canadian pre-seed caps typically run C$1–3M, with C$1–1.5M for first-time founders before traction; a seed round after the pilot at C$4–5M would put these investors up about 3× on paper.',
        'End on the close line, then stop talking.',
      ],
    },
  },

  // ─── A1 ─────────────────────────────────────────────────────────────
  {
    id: 'evidence',
    number: 'A1',
    title: 'Six conversations',
    layout: 'L4',
    headline: 'Six conversations changed who we serve.',
    columns: [
      {
        title: 'Confirmed',
        items: [
          'The adult child in Canada is the buyer.',
          'No one person is responsible at the connection, even with airline help.',
          'Families already pay for workarounds (a visit delayed three months; C$70 for a longer connection).',
          'Trust, not hours, sets the price (offers of C$150–400).',
        ],
      },
      {
        title: 'We were wrong',
        items: [
          'Age defines the customer (“I am 64, not 84.” Sunil D.)',
          'The Gulf hub is the hardest point (three found Toronto or Montreal hardest)',
          'Companions help strangers out of goodwill (Neel asks about C$250)',
          'Students will pay for a full journey (Nikhil T. offered C$150 and needed “maybe one hour of help in Montreal”)',
        ],
      },
      {
        title: 'What changed',
        items: [
          'Customer narrowed to first-time solo parents with limited English.',
          'Excluded: couples, confident parents, travellers needing medical care, unaccompanied minors.',
          'Matching now considers language; the role is a companion, not a caregiver.',
          'Connection-only help (C$40–60) is tested in the December pilot alongside the full journey.',
        ],
      },
    ],
    caption: 'Five of six conversations came through the founder’s network. Next: interviews through the Fredericton Association of India and the GSA.',
    sources: ['Customer Discovery Evidence Report, 28 September 2026.'],
    notes: {
      five: 'Read the “we were wrong” column aloud. It shows the team learns.',
      twenty: ['Read the “we were wrong” column aloud. It shows the team learns.'],
    },
  },

  // ─── A2 ─────────────────────────────────────────────────────────────
  {
    id: 'market',
    number: 'A2',
    title: 'Market sizing and why now',
    layout: 'L4',
    headline: 'About 88,000 solo parent journeys a year: an estimate we are re-sizing.',
    ladder: [
      { level: 'Total', who: 'All trips to Canada by residents of India (439,000 in 2024 × 2)', journeys: '878,000', value: 'Ceiling, not a forecast', tag: { kind: 'evidence', qualifier: 'Statistics Canada' } },
      { level: 'Serviceable', who: 'Parents flying alone for the first time (34% aged 55+ × about 30% alone, first time)', journeys: 'about 88,000', value: 'C$20–29 million', tag: { kind: 'estimate' } },
      { level: 'Obtainable', who: 'Parents of UNB Fredericton’s 454 Indian students, one family in five a year', journeys: 'about 180', value: 'C$40,500–58,500', tag: { kind: 'estimate' } },
    ],
    ladderHead: ['Level', 'Who', 'One-way journeys a year', 'Value at C$225–325'],
    resize: 'The 55+ filter is the wrong one; interviews say need follows being alone, new to flying and short on English. We are re-sizing around those travellers.',
    crossCheck: 'IRCC issued about 52,900 super visas to parents and grandparents (all countries) in 2025, about 106,000 journeys if each made one round trip.',
    crossCheckTag: { kind: 'evidence', qualifier: 'IRCC; calculation' },
    whyNow: 'South Asian Canadians: 669,060 (1996) → 2.57 million (2021). Trips from India fell 21.2% in Q1 2025, then rose by 16,000 in Q4 2025, the largest increase of any country. Canada plans 15,000 parent and grandparent permanent residents a year, 2026–2028. Later corridors: over 1.2 million Indian students abroad in 2025.',
    headwind: 'Study permits for Indian students halved, 188,715 (2024) → 94,605 (2025). The buyer base is the settled community, not new students.',
    sources: [
      'Statistics Canada (2024 tourism; Q1 and Q4 2025 Visitor Travel Survey; 2021 Census portrait); Destination Canada India market profile; IRCC briefing, 23 March 2026; UNB Fall 2025 enrolment; ICEF Monitor.',
    ],
    notes: {
      five: 'Say “ceiling” for the total, “estimate” for the serviceable market, and name the re-size.',
      twenty: ['Say “ceiling” for the total, “estimate” for the serviceable market, and name the re-size.'],
    },
  },

  // ─── A3 ─────────────────────────────────────────────────────────────
  {
    id: 'economics',
    number: 'A3',
    title: 'Unit economics and the illustrative model',
    layout: 'L4',
    headline: 'Each journey earns about C$30 today; companions flying more often lift it to C$47–50.',
    table1: {
      title: 'Contribution per journey, by trips per companion a year',
      tag: { kind: 'assumption' },
      head: ['Route', 'Price', 'Companion', 'Card fees', '2 trips/yr', '3 trips/yr', '4 trips/yr'],
      rows: [
        ['Direct', 'C$225', 'C$150', 'C$6.83', '≈ C$32', '≈ C$44', '≈ C$50'],
        ['One connection', 'C$275', 'C$200', 'C$8.28', '≈ C$30', '≈ C$42', '≈ C$48'],
        ['Two or more', 'C$325', 'C$250', 'C$9.73', '≈ C$29', '≈ C$41', '≈ C$47'],
      ],
      note: 'Checks: about C$73 per companion, spread over their trips in a year. Insurance and support time not included.',
    },
    table2: {
      title: 'The illustrative three-year scenario',
      tag: { kind: 'projection' },
      head: ['', 'Year 1', 'Year 2', 'Year 3'],
      rows: [
        ['Where families live', 'Atlantic Canada', 'Eastern Canada', 'All of Canada'],
        ['How we get there', '21 journeys a month', '171 a month', '1,280 a month: about 17.5% of ~88,000 serviceable'],
        ['One-way journeys', '252', '2,052', '15,360'],
        ['Companions needed (2 trips each)', '126', '1,026', '7,680'],
        ['Family bookings (average C$300)', 'C$75,600', 'C$615,600', 'C$4,608,000'],
        ['Boardwith revenue (C$75 each)', 'C$18,900', 'C$153,900', 'C$1,152,000'],
        ['Contribution (≈ C$30 each)', 'C$7,560', 'C$61,560', 'C$460,800'],
        ['Contribution at 4 trips per companion (≈ C$47; 3,840 companions)', '', '', '≈ C$721,900'],
      ],
      note: 'Year 3 journeys by where families live: Ontario 60%, British Columbia 18%, the Prairies 15%, Quebec 5%, Atlantic Canada 2% (guided by the 2021 Census South Asian population by province). Matching is by flight, so families anywhere in Canada fly in through Toronto, Vancouver, Montreal or Calgary.',
    },
    pilot: 'Pilot trips lose money on purpose. Checking 20 companions for 10 trips is about C$146 of checks per trip, so each pilot trip is roughly −C$80 after the companion and card fees. The metric that matters is contribution at steady state.',
    bigger: 'More trips per companion; connection-only help at C$40–60 (signalled by Nikhil T. and by Sunil and Kavita D.); paid add-ons such as family updates; more corridors.',
    notes: {
      five: 'Point to the 4-trips column. That’s the lever.',
      twenty: ['Point to the 4-trips column. That’s the lever.'],
    },
  },

  // ─── A4 ─────────────────────────────────────────────────────────────
  {
    id: 'safety',
    number: 'A4',
    title: 'Trust, safety and the incident plan',
    layout: 'L4',
    headline: 'No paid trip runs before insurance and signed terms.',
    checks: {
      title: 'Checks before any match',
      items: ['ID and selfie', 'criminal record check', 'Indian police clearance'],
      after: 'Boardwith pays for them.',
    },
    notServed: {
      title: 'Who we don’t serve yet',
      text: 'Travellers who need medical care (companions would decline them) and unaccompanied minors.',
    },
    backup: {
      title: 'Backup on every pilot trip',
      text: 'The traveller also books free airline assistance.',
    },
    incident: {
      title: 'Incident plan',
      tag: { kind: 'assumption', qualifier: 'untested' },
      items: [
        ['Companion no-show', 'full refund'],
        ['Family cancels', 'full refund before a match; after a match, the companion’s payout is kept'],
        ['Long delay', 'the companion’s payout doesn’t change'],
        ['Missed connection', 'the companion stays; the founder helps the family and airline rebook'],
        ['Illness', 'the companion alerts airline or airport staff; the founder calls the family'],
      ],
      last: 'The founder monitors every live trip',
    },
    open: {
      title: 'Still open',
      text: 'Insurance quote; legal review of the terms, the companion agreement and the privacy policy (all budgeted).',
    },
    notes: {
      five: 'Lead with the rule: no paid trip before insurance and signed terms.',
      twenty: ['Lead with the rule: no paid trip before insurance and signed terms.'],
    },
  },
];
