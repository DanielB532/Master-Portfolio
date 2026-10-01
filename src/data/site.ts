// Site-wide details. Edit these in one place.
export const site = {
  firstName: 'Daniel',
  lastName: 'Boadu',
  title: 'Email Marketing Co-ordinator at Hyve Group',
  focus: 'Email, CRM, automation & AI',
  role: 'Email Marketing Co-ordinator',
  company: 'Hyve Group',
  location: 'London, UK',
  status: 'Open to conversations',
  intro:
    'I’m an email marketer with 5+ years across email, CRM, copywriting and campaign execution, for 20+ B2B and B2C brands in the UK and US. At Hyve Group I run campaigns for global event brands like Shoptalk, and I build AI tools that take the manual work out of the process.',
  stats: [
    { value: '5+', label: 'years in email marketing' },
    { value: '20+', label: 'B2B and B2C brands' },
    { value: 'UK & US', label: 'markets' },
  ],
  linkedin: 'https://www.linkedin.com/in/daniel-boadu-5394a0218/',
  // Put your CV at public/cv.pdf and set this to '/cv.pdf' to show the download button
  cv: '',
  tools: ['HubSpot', 'Zimplify', 'Monday.com', 'ChatGPT', 'Claude', 'Claude Code'],
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
    proof: { label: 'Client recommendation', href: '/#recommendation' },
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
export const aiBuilds = [
  {
    name: 'UTM Tagging Assistant',
    where: 'Hyve Group',
    status: 'In use',
    built: 'Custom GPT (ChatGPT)',
    problem: 'Every campaign link needs consistent UTM tags before it goes into HubSpot, and doing it by hand invites typos that break reporting.',
    solution: 'An assistant that creates, validates and formats UTM-tagged links for Hyve email campaigns, ready to paste straight into HubSpot.',
  },
  {
    name: 'Email briefing & QA assistant',
    where: 'Hyve Group',
    status: 'In development',
    built: 'Claude',
    problem: 'Email requests arrive through a long form, approvals are slow, and it is hard to see when an email has actually gone out.',
    solution: 'A conversational intake tool that structures each request, speeds up sign-off and tracks send status, built from a spec I wrote with the team’s pain points.',
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

// Career history, newest first.
export const experience = [
  {
    company: 'Hyve Group',
    role: 'Email Marketing Co-ordinator',
    type: 'Full-time · Hybrid',
    period: 'Mar 2026 – Present',
    text: 'End-to-end email campaign execution across global event brands including Shoptalk and Groceryshop. Expanding into sequencing, segmentation and list building, and building AI tools for the team.',
  },
  {
    company: 'Future',
    role: 'Email Marketing Executive',
    type: 'Full-time · Remote',
    period: 'Nov 2025 – Jan 2026',
    text: 'Copywriting, campaign planning and management, and data management for email.',
  },
  {
    company: 'OANDA',
    role: 'Senior Copywriter',
    type: 'Full-time · Remote',
    period: 'Nov 2023 – Feb 2024',
    text: 'Copy for a global trading brand, including A/B tested email content.',
  },
  {
    company: 'Social Revelation Marketing',
    role: 'Email Marketing Manager & Copywriter',
    type: 'Contract · Remote',
    period: 'Nov 2022 – Present',
    text: 'Email strategy and copy for the agency and its clients, including the Instant Credibility Engine offer.',
  },
  {
    company: 'Freelance',
    role: 'Email Marketing Manager & Copywriter',
    type: 'Freelance · Remote',
    period: 'Jun 2020 – Nov 2025',
    text: 'Email marketing and copywriting for B2B and B2C clients in the UK and US.',
  },
];

export const education = { name: 'BTEC Extended Diploma in Business', result: 'D*D*D*' };

export const recommendation = {
  quote:
    'Daniel is great at what he does. Right from the start he took on board what I needed, the message I wanted to portray and the style, and he delivered on all fronts. He would also think outside of the box, creating emails which would help engage and convert others on my mailing list. Highly recommended.',
  name: 'Ryan John-Baptiste',
  context: 'Client, health and fitness coach · LinkedIn recommendation',
};
