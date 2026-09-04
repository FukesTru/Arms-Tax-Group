import type { FaqItem, ProcessStep } from './types';

/** The four-step process shown on the homepage and services hub. */
export const houseProcess: ProcessStep[] = [
  {
    title: 'Free Consultation',
    body: 'Call, text, or send the form. Tell us what is going on. We will tell you what it involves and whether we are the right fit. No cost, no pressure.',
  },
  {
    title: 'Document Review',
    body: 'Share your tax documents securely online from anywhere, on a phone or a desktop. We tell you exactly what we need rather than sending a generic list.',
  },
  {
    title: 'We Handle It',
    body: 'Preparation, filing, resolution, or bookkeeping, our team does the work and keeps you posted as it moves.',
  },
  {
    title: 'Results & Ongoing Support',
    body: 'We walk you through the outcome in plain language and stay reachable year-round, not just between January and April.',
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: 'Do you work with clients outside New York?',
    answer:
      'Yes. The practice is entirely remote, and that is the only way we work: documents are shared securely online, we review everything with you by phone or video, and returns are e-filed federally and in whichever states you owe in. There is no office to visit, which is what lets us take clients in every state rather than one neighbourhood.',
  },
  {
    question: 'What documents do I need to get started?',
    answer:
      'It depends on what you need. For a personal return, usually photo ID, Social Security numbers for everyone on the return, your income forms, and last year’s return. For business work, add your entity documents and financial records. After our first conversation we send you a checklist built around your situation rather than a generic list.',
  },
  {
    question: 'Do you help with back taxes or IRS notices?',
    answer:
      'Yes. Back taxes, unfiled returns, and IRS notices are a core part of what we do. The first step is finding out what the IRS actually has on file for you, which is often different from what people assume. From there we explain the options genuinely available in your situation.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing depends on the complexity of the work. A single W-2 return and a multi-entity business with several years of catch-up filings are very different engagements. The consultation is free, and we quote the work before starting so you know what you are committing to.',
  },
  {
    question: 'Can you handle my personal and business taxes together?',
    answer:
      'Yes, and there is a real advantage to it. For most small business structures, business income flows onto the personal return, so preparing both together means the two agree and nothing is missed or double-counted.',
  },
  {
    question: 'What makes you different from a seasonal tax office?',
    answer:
      'We are here after April. Notices arrive in July, quarterly estimates come due through the year, and planning decisions that matter have to be made before December. Being available year-round means you are not starting over with a new provider every time something comes up.',
  },
];

export const whoWeServeFaqs: FaqItem[] = [
  {
    question: 'How do I send documents securely?',
    answer:
      'We provide secure electronic document sharing. You upload from your computer or phone and the files transmit encrypted. Please avoid sending tax documents as ordinary email attachments, which are not a secure channel. If you have paper documents, a clear photo of each page uploaded through the secure link is fine.',
  },
  {
    question: 'Do you serve clients outside New York?',
    answer:
      'Yes. We work with individuals and businesses across the country and prepare federal and state filings for the states where you have an obligation. Being in another state does not change the process or how accessible we are.',
  },
  {
    question: 'Is a fully remote firm as good as a local one?',
    answer:
      'The work is identical, and being remote is what makes some of it better. The same person handles your return start to finish, with the same review process and the same walkthrough before anything is filed. What changes is that nobody has to schedule travel, documents arrive the moment you upload them, and we are not limited to whoever happens to be within driving distance of an office.',
  },
  {
    question: 'How do we actually talk things through?',
    answer:
      'By phone or video, at a time you pick. We go through your return with you line by line if that is what you want, share a screen when it helps, and answer questions as they come up. A call is not a downgrade from a meeting, it is just a meeting you did not have to drive to.',
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: 'How quickly will I hear back?',
    answer:
      'We aim to respond to consultation requests promptly during business days. If your matter is time-sensitive (an IRS notice with a response deadline, or a filing extension running out) say so in your message or call directly, and we will prioritize it.',
  },
  {
    question: 'How do I send documents securely?',
    answer:
      'Once we connect, we send you a secure upload link. Please do not attach tax documents to a regular email. Photos of paper documents are fine as long as every page is legible and uploaded through that link.',
  },
  {
    question: 'Is everything really handled online?',
    answer:
      'Yes. This is a digital practice: there is no office to visit and no in-person appointment to book. Documents move through a secure link, consultations happen by phone or video, and returns are e-filed. That is not a limitation we work around, it is what lets us take clients in every state.',
  },
];

export const servicesHubFaqs: FaqItem[] = [
  {
    question: 'I am not sure which service I need. Where do I start?',
    answer:
      'Start with the free consultation and describe the problem rather than trying to name the solution: "I got a letter from the IRS," "I need capital for a contract," "I have not filed in three years." Figuring out which service fits is our job.',
  },
  {
    question: 'Can I use more than one service at a time?',
    answer:
      'Yes, and many clients do. Bookkeeping feeding into tax preparation, a personal return alongside the business one, or planning that runs through the year and into the filing. These combinations work well precisely because the same team handles all of it.',
  },
  {
    question: 'Do you work with both individuals and businesses?',
    answer:
      'Both. Individual and family tax work sits alongside a full business practice, and for owner-operated businesses the two are usually connected. We routinely handle both sides for the same client.',
  },
  {
    question: 'Are all of these services available remotely?',
    answer:
      'Yes. Every service listed here is available to clients in all 50 states, handled through secure document sharing and phone or video consultations. The practice is digital only, so remote is not a fallback option, it is how the work is done.',
  },
];

