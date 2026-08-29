import type { FaqItem, ProcessStep } from './types';

/** The four-step process shown on the homepage and services hub. */
export const houseProcess: ProcessStep[] = [
  {
    title: 'Free Consultation',
    body: 'Call, text, or send the form. Tell us what is going on. We will tell you what it involves and whether we are the right fit. No cost, no pressure.',
  },
  {
    title: 'Document Review',
    body: 'Share your tax and financial documents securely online from anywhere, or bring them to our Bronx office. We tell you exactly what we need.',
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
      'Yes, we serve clients nationwide. Tax preparation, resolution, bookkeeping, and planning are all handled remotely: documents are shared securely online and we review everything with you by phone or video. Our Bronx office serves clients who prefer to meet in person, but it is an option rather than a requirement.',
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
      'We provide secure electronic document sharing. You upload from your computer or phone and the files transmit encrypted. Please avoid sending tax documents as ordinary email attachments; if you would rather not send anything electronically at all, you are welcome to bring physical documents to our Bronx office.',
  },
  {
    question: 'Do you serve clients outside New York?',
    answer:
      'Yes. We work with individuals and businesses across the country and prepare federal and state filings for the states where you have an obligation. Being in another state does not change the process or how accessible we are.',
  },
  {
    question: 'Is remote service the same quality as meeting in person?',
    answer:
      'The work is identical. The same team, the same review process, the same walkthrough before anything is filed. The only difference is whether the conversation happens across a desk or over a call. Many clients find remote service faster, since it does not require anyone to schedule travel.',
  },
  {
    question: 'Can I start remotely and come in later if I need to?',
    answer:
      'Absolutely. Plenty of clients handle most of the year remotely and come in for a longer sit-down when something warrants it. Use the office when it helps and skip it when it does not.',
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
      'Once we connect, we send you a secure upload link, please do not attach tax documents to a regular email. You can also bring physical documents to our Bronx office if you prefer to hand them over in person.',
  },
  {
    question: 'Can we meet in person, or is everything remote?',
    answer:
      'Either. Our New York office is available for in-person appointments, and everything we do can also be handled entirely remotely. Tell us which you prefer and we will work that way.',
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
      'Yes. Every service listed here is available to clients nationwide, handled through secure document sharing and phone or video consultations. Our Bronx office is there for anyone who would rather do it in person.',
  },
];

export const bronxFaqs: FaqItem[] = [
  {
    question: 'Do I need an appointment to come in?',
    answer:
      'We recommend calling ahead so we can set aside proper time for you and tell you what to bring. That way your visit is one productive conversation rather than a trip that ends in a list of documents to go find.',
  },
  {
    question: 'Which services are available at the Bronx office?',
    answer:
      'All of them. Tax preparation, corporate returns, IRS resolution, bookkeeping, and tax planning are all available in person here, or remotely if that is easier for you.',
  },
  {
    question: 'Where exactly are you located?',
    answer:
      'We are in New York, and we are finalizing our published office address. Call or text us and we will confirm exactly where to meet and what to bring. Every service we offer is also available remotely if that is easier.',
  },
];
