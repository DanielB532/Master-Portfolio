// Site-wide details. Edit these in one place.
export const site = {
  firstName: 'Daniel',
  lastName: 'Boadu',
  title: 'Email & CRM Marketer',
  role: 'Marketing', // TODO: your exact job title
  company: 'Hyve Group',
  location: 'London, UK',
  status: 'Open to conversations',
  intro:
    'I plan, write and analyse B2B email journeys at Hyve Group, the company behind Shoptalk. My strongest results come from sequencing: giving each send one job and using engagement data to decide what comes next.',
  // TODO: replace with your profile URL
  linkedin: 'https://www.linkedin.com/',
  // Put your CV at public/cv.pdf and set this to '/cv.pdf' to show the download button
  cv: '',
  tools: ['Zimplify', 'Monday.com', 'Claude (AI automation)'],
};

// What a recruiter should take away. Each skill points to evidence.
export const skills = [
  {
    name: 'Journey & sequence design',
    text: 'Multi-touch email journeys where each send has one job, built around where the reader is in their decision.',
    proof: { label: 'Shoptalk 3-email journey', href: '/work/stf26-cold-outbound/' },
  },
  {
    name: 'B2B copywriting',
    text: 'Plain, personal copy that senior audiences actually read, written both agency-side and in-house.',
    proof: { label: 'Shoptalk emails', href: '/work/stf26-cold-outbound/' },
  },
  {
    name: 'Performance analysis',
    text: 'Reading CTR, click-to-open, heat maps and unsubscribes together to judge the quality of engagement, not just the volume.',
    proof: { label: 'Heat map check', href: '/work/stf26-cold-outbound/#results' },
  },
  {
    name: 'Process & automation',
    text: 'Streamlining how emails get briefed, built and checked, using AI tools to cut manual QA.',
    proof: { label: 'Email QA automation, in progress', href: '' },
  },
];

// Career history, newest first. Add dates when ready.
export const experience = [
  {
    company: 'Hyve Group',
    role: 'Marketing',
    period: '',
    text: 'Building and running email programmes for B2B events including Shoptalk. Moving into sequencing, segmentation and list building.',
  },
  {
    company: 'Social Revelation Marketing',
    role: 'Email copywriter',
    period: '',
    text: 'Wrote email marketing content for the agency’s Instant Credibility Engine offer.',
  },
];
