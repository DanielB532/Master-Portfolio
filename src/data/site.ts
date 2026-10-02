// Site-wide details. Edit these in one place.
export const site = {
  firstName: 'Daniel',
  lastName: 'Boadu',
  title: 'Email Marketing Co-ordinator at Hyve Group',
  focus: 'Email, CRM, automation & AI',
  aka: 'aka \u2018Fed-Ex\u2019, because I always deliver',
  role: 'Email Marketing Co-ordinator',
  company: 'Hyve Group',
  location: 'London, UK',
  intro:
    'I\u2019m an email marketer with 5+ years of running full campaigns across email, CRM and copywriting, for 20+ B2B and B2C brands in the UK and US. At Hyve Group I own the email execution process for global event brands like Shoptalk, and I use AI to streamline that process and get campaigns out faster.',
  stats: [
    { value: '5+', label: 'years in email marketing' },
    { value: '20+', label: 'B2B and B2C brands' },
    { value: 'UK & US', label: 'markets' },
  ],
  email: 'danielboadu03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/daniel-boadu-5394a0218/',
  // Put your CV at public/cv.pdf and set this to '/cv.pdf' to show the download button
  cv: '',
  tools: [
    { group: 'Email & CRM', items: ['HubSpot', 'Marketo', 'ActiveCampaign', 'Mailchimp', 'GoHighLevel', 'Kajabi', 'AWeber', 'Swoogo'] },
    { group: 'Data & prospecting', items: ['Apollo', 'Zimplify'] },
    { group: 'Project management', items: ['Monday.com', 'Trello'] },
    { group: 'AI', items: ['ChatGPT', 'Claude', 'Claude Code'] },
  ],
};

// What a recruiter should take away. Each skill points to evidence.
export const skills = [
  {
    name: 'Journey & sequence design',
    text: 'Multi-touch email journeys where each send has one job, built around where the reader is in their decision.',
    proof: { label: 'Shoptalk 3-email journey', href: '/work/stf26-cold-outbound/' },
  },
  {
    name: 'Copywriting',
    text: 'Plain, persuasive copy for B2B and B2C audiences, written agency-side, freelance and in-house for 20+ brands.',
    proof: { label: 'Future awards emails', href: '/work/future-awards/#samples' },
  },
  {
    name: 'Performance analysis',
    text: 'Reading CTR, click-to-open, heat maps and unsubscribes together to judge the quality of engagement, not just the volume.',
    proof: { label: 'Heat map check', href: '/work/stf26-cold-outbound/#results' },
  },
  {
    name: 'AI & automation',
    text: 'Building AI assistants and workflows that remove repetitive campaign work, from link tagging to briefing and QA.',
    proof: { label: 'AI builds', href: '/#ai' },
  },
];

// AI tools and workflows. status: shown as a pill.
export const aiBuilds: {
  name: string; where: string; status: string; built: string; problem: string; solution: string;
  link?: { label: string; href: string };
}[] = [
  {
    name: 'UTM Tagging Assistant',
    where: 'Hyve Group',
    status: 'In use',
    built: 'Custom GPT (ChatGPT)',
    problem: 'Every campaign link needs consistent UTM tags before it goes into HubSpot, and doing it by hand invites typos that break reporting.',
    solution: 'An assistant that creates, validates and formats UTM-tagged links for Hyve email campaigns, ready to paste straight into HubSpot.',
    link: { label: 'Watch the demo on LinkedIn', href: 'https://lnkd.in/p/e6pUZh2U' },
  },
  {
    name: 'Email performance analyst',
    where: 'Hyve Group',
    status: 'In use',
    built: 'Custom agent (ChatGPT)',
    // link: { label: 'See the post on LinkedIn', href: '' },  // add once the post is up
    problem: 'Campaign stats sat in reports that took time to turn into something the team could act on.',
    solution: 'An agent that turns email stats into a ready-made PowerPoint and highlights where our emails can improve, which has helped the team spot and fix weak points.',
  },
  {
    name: 'Fintech Meetup email enhancer',
    where: 'Hyve Group',
    status: 'In use',
    built: 'Custom GPT (ChatGPT)',
    problem: 'Event emails need accurate, specific details, and checking every draft against the event information is slow.',
    solution: 'A GPT loaded with all of Fintech Meetup\u2019s event details that takes a drafted email and strengthens it with the right facts, angles and proof points.',
  },
  {
    name: 'HTML email troubleshooting',
    where: 'Hyve Group',
    status: 'Done',
    built: 'AI-assisted debugging',
    problem: 'Sponsor-supplied HTML broke two Groceryshop emails, one on mobile and one spilling off the page, days before send.',
    solution: 'Used AI to find what was breaking each layout, fixed the code myself and re-tested, then caught a copy error in the same QA pass.',
    link: { label: 'See the before and after', href: '/work/html-email-fixes/' },
  },
  {
    name: 'Email briefing & QA assistant',
    where: 'Hyve Group',
    status: 'In development',
    built: 'Claude',
    problem: 'Email requests arrive through a long form, approvals are slow, and it is hard to see when an email has actually gone out.',
    solution: 'A conversational intake tool that structures each request, speeds up sign-off and tracks send status, built from a spec I wrote with the team\u2019s pain points.',
  },
  {
    name: 'Personalised outreach pipeline',
    where: 'Side project',
    status: 'Built',
    built: 'Claude, spreadsheets, manual send',
    problem: 'Cold outreach to small businesses is slow when every email has to be researched and written from scratch.',
    solution: 'A workflow that finds target businesses, pulls contact details from their websites and drafts a personalised email for each one into a sheet, which I review and send myself.',
  },
  {
    name: 'This website',
    where: 'Personal',
    status: 'Live',
    built: 'Claude Code, Astro, GitHub, Vercel',
    problem: 'I wanted a portfolio I could keep adding to without rebuilding it each time.',
    solution: 'Designed, built and deployed with Claude Code. Each case study is a single content file, and every change goes live automatically.',
  },
];

// Career history, newest first. highlights and link are optional.
export const experience: {
  company: string; role: string; type: string; period: string; text: string;
  highlights?: string[]; tools?: string[]; link?: { label: string; href: string }[];
}[] = [
  {
    company: 'Hyve Group',
    role: 'Email Marketing Co-ordinator',
    type: 'Full-time · Hybrid',
    period: 'Mar 2026 – Present',
    text: 'I own the email execution process across global event brands including Shoptalk and Groceryshop, running full campaigns from brief to send. I use AI throughout to streamline the workflow and speed up delivery, and I\u2019m expanding into sequencing, segmentation and list building.',
    link: [{ label: 'Shoptalk case study', href: '/work/stf26-cold-outbound/' }],
  },
  {
    company: 'Future plc (Awards & Events)',
    role: 'Email Marketing Executive',
    type: 'Full-time · Remote',
    period: 'Nov 2025 – Jan 2026',
    text: 'Performance copy and campaign execution across 20+ UK and US B2B and B2C brands, including Marie Claire, Ideal Home, SCN, AV Technology and Sound & Video Contractor.',
    highlights: [
      'Increased open rates by 10–15% through stronger hooks and clearer value framing in each brand\u2019s voice.',
      'Improved conversions and entries by 10% through segmentation and personalisation by audience and intent.',
      'Supported a 20% revenue increase on the NAMM project by building prospect lists in Apollo and shaping outreach.',
      'Led copy and planning for the Best of Show Awards at NAMM, with the full journey built before launch.',
    ],
    tools: ['Swoogo', 'Apollo', 'Trello', 'Marketo'],
    link: [{ label: 'Future awards case study', href: '/work/future-awards/' }],
  },
  {
    company: 'OANDA',
    role: 'Senior Copywriter',
    type: 'Full-time · Remote',
    period: 'Nov 2023 – Feb 2024',
    text: 'Copy for a global trading brand, turning complex, heavily regulated financial offers into clear, persuasive landing pages and emails.',
    highlights: [
      'Wrote welcome bonus landing pages for OANDA\u2019s affiliate partners, explaining a tiered offer of up to $10,000 in three simple steps.',
      'Wrote landing page copy for the OANDA x New York Red Bulls partnership.',
      'Wrote follow-up emails for webinar attendees, including a $300 new account bonus offer, alongside A/B tested email content.',
    ],
  },
  {
    company: 'Social Revelation Marketing',
    role: 'Email Marketing Manager & Copywriter',
    type: 'Contract · Remote',
    period: 'Nov 2022 – Present',
    text: 'Lifecycle and campaign messaging across multiple offers and segments, including the Instant Credibility Engine, plus the social copy that feeds the email channel.',
    highlights: [
      'Lifted open rates by 15% and click-through by 12% by reworking subject lines, preview text and body flow.',
      'Increased lead magnet sign-ups by 20% with stronger hooks, value framing and calls to action.',
      'Built an automated welcome sequence in Kajabi that improved retention by 10% and cut inactive contacts by 8%.',
      'Raised primary inbox placement by 25% by improving engagement signals and list quality.',
      'Contributed to 10% revenue growth by balancing value-led sequences with offer-led pushes.',
      'Wrote the agency\u2019s own Instagram content, turning stats and short stories into posts that drove followers to the link in bio.',
    ],
    tools: ['Kajabi', 'AWeber', 'GoHighLevel'],
  },
  {
    company: 'Layton Media / Vanquish Holdings',
    role: 'Copywriter & Email Marketer',
    type: 'Remote',
    period: 'May 2022 – May 2023',
    text: 'Launch, retention and automated customer journeys for online course brands, from nurture and countdown sequences to abandoned cart, onboarding and win-back.',
    highlights: [
      'Generated $30,000 in two months from a course launch through offer framing, urgency and objection handling.',
      'Wrote the pre-sale sequence for a $1,000 course that sold out in two days.',
      'Used RFM segmentation for high-value and lapsed audiences, reducing bounce rates by 10%.',
    ],
    tools: ['ActiveCampaign'],
    link: [
      { label: 'Layton Media case study', href: '/work/layton-media-launch/' },
      { label: 'Vanquish case study', href: '/work/vanquish-presale/' },
    ],
  },
  {
    company: 'Freelance',
    role: 'Email Marketing Manager & Copywriter',
    type: 'Freelance · Remote',
    period: 'Jun 2020 – Nov 2025',
    text: 'Email marketing and copywriting for B2B and B2C clients in the UK and US, across e-commerce, course providers, fitness, finance and events.',
  },
];

// From the CV. Shown as tags under the skills section.
export const coreSkills = [
  'Campaign execution & scheduling', 'Lifecycle & nurture journeys', 'Segmentation & targeting',
  'Personalisation', 'QA (links, tracking, tokens, dynamic content, devices)', 'List hygiene & deliverability',
  'Performance reporting', 'A/B testing', 'Tone of voice', 'Conversion copywriting',
  'Social-to-email funnels', 'Stakeholder coordination',
];

export const education = { name: 'BTEC Extended Diploma in Business', result: 'D*D*D*' };

export const recommendation = {
  quote:
    'Daniel is great at what he does. Right from the start he took on board what I needed, the message I wanted to portray and the style, and he delivered on all fronts. He would also think outside of the box, creating emails which would help engage and convert others on my mailing list. Highly recommended.',
  name: 'Ryan John-Baptiste',
  context: 'Client, health and fitness coach · LinkedIn recommendation',
};
