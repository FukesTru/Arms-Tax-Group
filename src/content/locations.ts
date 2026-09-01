import type { FaqItem } from '@/components/FAQ';

/**
 * Location pages for the municipalities around the Bronx office.
 *
 * ⚠️ READ THIS BEFORE ADDING ANOTHER ONE.
 *
 * Location pages are legitimate local SEO. Near-duplicate location pages are
 * doorway pages, which Google's spam policies name explicitly and which get
 * sites demoted rather than ranked. The line between the two is whether each
 * page says something the others do not.
 *
 * So every entry here carries genuinely different material: a different route
 * to the office, a different local economy, and above all a different tax
 * situation. Yonkers has its own resident income tax surcharge. Scarsdale
 * filers deal with equity compensation and household employees. Someone who
 * moved from the Bronx to Pelham mid-year has a part-year residency question
 * a lifelong Bronx resident never has to think about.
 *
 * If you add a city and find yourself copying another entry and swapping the
 * name, stop. That page will hurt the site rather than help it. Either find
 * the thing that is actually different about filing there, or leave it in the
 * area list on the Bronx page instead.
 *
 * ── ACCURACY ─────────────────────────────────────────────────────────────
 * No rates, thresholds, dollar figures, or year-specific rules appear in this
 * copy, deliberately. Those change, and a stale number on a tax firm's own
 * site is worse than no number. The copy describes situations, not amounts.
 * Everything stated here is structural and durable:
 *
 *   - New York City personal income tax applies to city residents. Westchester
 *     residents are not city residents, and NYC's nonresident earnings tax was
 *     repealed in 1999, so a Westchester resident working in Manhattan pays
 *     state tax but not city resident tax.
 *   - Yonkers is the exception. It levies its own resident income tax
 *     surcharge and a nonresident earnings tax on wages earned in the city.
 *   - Westchester property taxes are among the highest in the country, which
 *     interacts with the cap on the state and local tax deduction.
 *   - The metropolitan commuter transportation mobility tax reaches
 *     self-employed people in Westchester as well as in the city.
 *
 * ── ONE OFFICE ───────────────────────────────────────────────────────────
 * The firm has ONE office, in the Bronx. No page here may imply a location in
 * the city it is named for. Copy says "serving X from our Bronx office" or
 * "remotely", never "our X office".
 */

export type LocationContent = {
  /** URL segment under /who-we-serve. */
  slug: string;
  city: string;
  /** Used in headings and copy, e.g. "Mount Vernon, NY". */
  cityState: string;
  county: string;
  metaTitle: string;
  /** 150-160 characters. */
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  trustPoints: string[];
  /** Unique opening. Two or three paragraphs. */
  intro: string[];
  introHeading: string;
  /** What actually differs about filing from here. Unique per city. */
  focusHeading: string;
  focus: { title: string; body: string }[];
  /** Route from 1426 White Plains Road. Unique per city. */
  gettingHere: string;
  /** Areas within the municipality. */
  neighborhoods: string[];
  faqs: FaqItem[];
};

export const locations: LocationContent[] = [
  {
    slug: 'mount-vernon-ny',
    city: 'Mount Vernon',
    cityState: 'Mount Vernon, NY',
    county: 'Westchester County',
    metaTitle: 'Tax Preparation & Accounting in Mount Vernon, NY',
    metaDescription:
      'Tax preparation, IRS resolution, and bookkeeping for Mount Vernon, NY residents and small businesses. Minutes up White Plains Road from our Bronx office.',
    heroTitle: 'Tax & Accounting for Mount Vernon, NY',
    heroSubtitle:
      'Mount Vernon sits directly on the Bronx line, and our office is a straight run down White Plains Road. Personal and business returns, IRS resolution, bookkeeping, and planning, in person or remotely.',
    trustPoints: ['Minutes from Mount Vernon', 'Bronx, NY Office', 'Free Consultation'],
    introHeading: 'The closest thing to a neighborhood firm, across the county line',
    intro: [
      'Mount Vernon shares a border with the north Bronx, and for a lot of households the line is administrative rather than practical. People live on one side of it and work, shop, and worship on the other. That closeness is exactly why the tax picture catches people out: crossing the city line changes which government taxes your income, and nothing about daily life signals that it happened.',
      'A Mount Vernon resident is not a New York City resident. That means no city resident income tax, even for someone who commutes into Manhattan or the Bronx every day, because the city stopped taxing nonresident earnings in 1999. Withholding does not always reflect that correctly, particularly after a move, and the correction shows up as either a refund you were owed or a balance you did not expect.',
      'The city has a deep base of small businesses, contractors, home health aides, barbers and stylists, drivers, and other self-employed people. That is a different set of questions from a straightforward W-2 return, and it is most of what we handle for clients here.',
    ],
    focusHeading: 'What tends to come up for Mount Vernon filers',
    focus: [
      {
        title: 'Moving across the city line',
        body: 'A move from the Bronx to Mount Vernon partway through a year creates a part-year city residency situation. Income earned while you were still a city resident is treated differently from income earned after. Getting the split right is the difference between a correct return and a notice.',
      },
      {
        title: 'Withholding that did not follow the move',
        body: 'Payroll systems often keep withholding city tax after an employee moves out of the five boroughs. It is one of the most common things we find on a first return for a new Mount Vernon resident, and it is usually recoverable.',
      },
      {
        title: 'Self-employment across two jurisdictions',
        body: 'If you live in Mount Vernon and work for clients in the Bronx or Manhattan, your income sourcing, estimated payments, and the metropolitan commuter transportation mobility tax all come into it. We work through the whole picture rather than one form at a time.',
      },
    ],
    gettingHere:
      'From most of Mount Vernon it is a straight run south on White Plains Road, or the Hutchinson River Parkway to the Pelham Parkway exit. On Metro-North, both Mount Vernon West on the Harlem line and Mount Vernon East on the New Haven line put you a short ride from the office.',
    neighborhoods: ['Fleetwood', 'Chester Heights', 'Oakwood Heights', 'South Side', 'North Side', 'Wakefield border'],
    faqs: [
      {
        question: 'I moved from the Bronx to Mount Vernon last year. Does that change my return?',
        answer:
          'Yes, and it is one of the more common things we correct. For the part of the year you lived in the Bronx you were a New York City resident and owed city income tax; for the part after the move you were not. The return has to reflect that split. We also check whether your employer kept withholding city tax after the move, which happens often and is usually recoverable.',
      },
      {
        question: 'Do I pay New York City income tax if I live in Mount Vernon but work in Manhattan?',
        answer:
          'No. New York City personal income tax applies to city residents. The city repealed its tax on nonresident earnings in 1999, so commuting in from Westchester does not make you liable for it. You do still file a New York State return, and if your withholding was set up wrong we will find it.',
      },
      {
        question: 'Do you handle small business returns for Mount Vernon businesses?',
        answer:
          'Yes. Sole proprietors, LLCs, partnerships, S-corps and C-corps, along with the bookkeeping behind them. A good number of our business clients are self-employed people who started with a personal return and added the business side later.',
      },
    ],
  },

  {
    slug: 'yonkers-ny',
    city: 'Yonkers',
    cityState: 'Yonkers, NY',
    county: 'Westchester County',
    metaTitle: 'Tax Preparation & Accounting in Yonkers, NY',
    metaDescription:
      'Tax preparation and accounting for Yonkers, NY. We handle the Yonkers resident surcharge and nonresident earnings tax most filers get wrong. Free consultation.',
    heroTitle: 'Tax & Accounting for Yonkers, NY',
    heroSubtitle:
      'Yonkers is the one Westchester city with its own income tax, and it is the single most misfiled thing we see from clients here. Personal and business returns, IRS resolution, bookkeeping, and planning.',
    trustPoints: ['Yonkers Surcharge Handled', 'Bronx, NY Office', 'Free Consultation'],
    introHeading: 'The one Westchester city with its own income tax',
    intro: [
      'Yonkers is the largest city in Westchester and the fourth largest in New York State, and it is the only municipality in the county that levies an income tax of its own. Residents pay a surcharge calculated on top of their state tax, and people who work in Yonkers without living there can owe a separate earnings tax on those wages.',
      'That is not obscure, but it is routinely missed, especially by people who moved in from the Bronx and assumed leaving the city meant leaving local income tax behind. It does not. It replaces one local tax with another, calculated a completely different way.',
      'Yonkers also has an unusually broad economic base for a city its size, from downtown and the waterfront through the industrial areas to the residential north end. We see everything from single W-2 returns to multi-entity businesses, and the local tax question touches nearly all of them.',
    ],
    focusHeading: 'What tends to come up for Yonkers filers',
    focus: [
      {
        title: 'The resident income tax surcharge',
        body: 'Yonkers residents owe a surcharge computed on their New York State tax liability. It is a separate line, it is easy to leave off, and because it is derived from the state figure, anything that changes the state return changes it too.',
      },
      {
        title: 'The nonresident earnings tax',
        body: 'If you work in Yonkers but live elsewhere, wages earned in the city can be subject to a separate earnings tax. People who split time between a Yonkers worksite and somewhere else are the ones most likely to get this wrong in either direction.',
      },
      {
        title: 'Leaving the Bronx for Yonkers',
        body: 'Moving from the Bronx to Yonkers swaps New York City resident tax for the Yonkers surcharge, and a mid-year move means part-year treatment for both. We handle the changeover so neither gets double counted or dropped.',
      },
    ],
    gettingHere:
      'From central and south Yonkers the Bronx River Parkway or the Cross County Parkway brings you across in around twenty minutes. From the north end the Saw Mill and then the Cross County is usually cleaner. The Metro-North Hudson line connects through to the Bronx, and the 4 train at Woodlawn is close to the Yonkers line.',
    neighborhoods: ['Getty Square', 'Park Hill', 'Ludlow', 'Nodine Hill', 'Bryn Mawr', 'Crestwood', 'Dunwoodie', 'Northwest Yonkers'],
    faqs: [
      {
        question: 'What is the Yonkers income tax, and do I owe it?',
        answer:
          'Yonkers is the only Westchester municipality with its own income tax. If you live in Yonkers you owe a resident surcharge calculated on top of your New York State tax. If you work in Yonkers but live somewhere else, wages you earn in the city can be subject to a separate nonresident earnings tax. Which applies depends on where you live and where the work is performed, and we work that out before the return is filed rather than after a notice arrives.',
      },
      {
        question: 'I moved from the Bronx to Yonkers. Am I better off or worse off?',
        answer:
          'It depends on your income and situation, so we would rather look at your numbers than give you a slogan. Structurally, you stop being a New York City resident, so city resident income tax no longer applies, and you start owing the Yonkers surcharge instead. A mid-year move means part of the year falls under each. That transition year is the one worth having someone check.',
      },
      {
        question: 'My return was filed without the Yonkers surcharge. What happens now?',
        answer:
          'Usually a notice and an adjusted balance. It is fixable. Bring us what you filed and any correspondence you have received, and we will work out what is actually owed, whether the underlying return was right otherwise, and what your options are for resolving it.',
      },
    ],
  },

  {
    slug: 'new-rochelle-ny',
    city: 'New Rochelle',
    cityState: 'New Rochelle, NY',
    county: 'Westchester County',
    metaTitle: 'Tax Preparation & Accounting in New Rochelle, NY',
    metaDescription:
      'Tax preparation, IRS resolution, and bookkeeping for New Rochelle, NY. Co-op and condo owners, downtown renters, and small businesses. Free consultation.',
    heroTitle: 'Tax & Accounting for New Rochelle, NY',
    heroSubtitle:
      'A downtown that has changed faster than almost anywhere in Westchester, and a housing mix that makes returns here look different. Personal and business tax, IRS resolution, bookkeeping, and planning.',
    trustPoints: ['Co-op & Condo Owners', 'Bronx, NY Office', 'Free Consultation'],
    introHeading: 'A city in the middle of rewriting itself',
    intro: [
      'New Rochelle has added more downtown housing in the last decade than most cities its size add in a generation, and the tax questions that come with that are specific. New construction, tenant incentives, co-op and condo ownership, and people relocating from the city all show up in returns here in ways they do not elsewhere in the county.',
      'The housing mix matters more than people expect. Owning a co-op is not the same as owning a house for tax purposes, and the deductible portion of a maintenance charge is not obvious from the statement the board sends you. Getting it right is worth real money on an itemized return.',
      'Beyond housing, this is a city with a substantial professional and small business base, from the waterfront through downtown to the north end near Iona. We handle personal returns, business returns, and the bookkeeping underneath them.',
    ],
    focusHeading: 'What tends to come up for New Rochelle filers',
    focus: [
      {
        title: 'Co-op and condo ownership',
        body: 'A co-op owner does not own real property in the usual sense, and only part of a monthly maintenance charge represents deductible taxes and interest. The board issues the figures each year and they are routinely either missed or claimed in full. Both are wrong.',
      },
      {
        title: 'Relocating from New York City',
        body: 'A great many new downtown residents came from the five boroughs. A move partway through the year means part-year city residency, and payroll that keeps withholding city tax afterward. It is worth checking in the first year here.',
      },
      {
        title: 'Property taxes against the deduction cap',
        body: 'Westchester property tax bills are among the highest in the country, and the cap on the state and local tax deduction means a large share often does not translate into federal benefit. Knowing where you land changes whether itemizing is worth it at all.',
      },
    ],
    gettingHere:
      'The Hutchinson River Parkway south to the Pelham Parkway exit is usually the quickest route, with I-95 and the Cross County as alternatives when the Hutch is busy. On Metro-North, the New Haven line runs from New Rochelle station down through the Bronx.',
    neighborhoods: ['Downtown', 'North End', 'Rochelle Park', 'Rochelle Heights', 'Sutton Manor', 'Davenport Neck', 'Echo Park', 'Wykagyl'],
    faqs: [
      {
        question: 'How does owning a co-op affect my return?',
        answer:
          'A co-op owner holds shares in a corporation rather than title to real property, so the deduction works differently. Each year the co-op reports the portion of your maintenance that represents your share of the building’s property taxes and mortgage interest, and only that portion is potentially deductible. We see the whole maintenance charge claimed, and we see the deduction missed entirely. Bring the statement and we will use the right figure.',
      },
      {
        question: 'I just moved to New Rochelle from the Bronx. What should I watch for?',
        answer:
          'Two things in the first year. Part-year New York City residency, because city resident income tax applies only to the part of the year you actually lived in the city. And your withholding, because employers frequently keep taking city tax out after a move to Westchester. Both are straightforward to handle when someone looks for them.',
      },
      {
        question: 'Do you work with New Rochelle small businesses?',
        answer:
          'Yes. Corporate and partnership returns, sole proprietors and single-member LLCs, and monthly bookkeeping that feeds into the return rather than arriving as a surprise in March. If you are choosing an entity structure or reconsidering one, that conversation sits with our tax planning work.',
      },
    ],
  },

  {
    slug: 'pelham-ny',
    city: 'Pelham',
    cityState: 'Pelham, NY',
    county: 'Westchester County',
    metaTitle: 'Tax Preparation & Accounting in Pelham, NY',
    metaDescription:
      'Tax preparation and accounting for Pelham and Pelham Manor, NY. The closest Westchester village to our Bronx office, about ten minutes away. Free consultation.',
    heroTitle: 'Tax & Accounting for Pelham, NY',
    heroSubtitle:
      'Pelham and Pelham Manor sit right on the Bronx line, closer to our office than much of the borough is. Personal and business tax preparation, IRS resolution, bookkeeping, and year-round planning.',
    trustPoints: ['Closest Westchester Village', 'Bronx, NY Office', 'Free Consultation'],
    introHeading: 'Across the line, and barely a drive',
    intro: [
      'Pelham and Pelham Manor border Pelham Bay in the Bronx, which makes them the closest Westchester municipalities to our office. For clients here, coming in person is genuinely easier than it is for people living in the western half of the borough.',
      'The villages are small, residential, and heavily weighted toward households where at least one person commutes into Manhattan. That produces a fairly consistent return profile: W-2 income, a house, a substantial property tax bill, and often some investment income alongside it. The questions are less about complexity and more about whether the return is actually optimized.',
      'It is also a common landing place for people leaving the Bronx or Manhattan for more space, which brings the first-year residency and withholding issues that come with any move out of the five boroughs.',
    ],
    focusHeading: 'What tends to come up for Pelham filers',
    focus: [
      {
        title: 'Property taxes and whether itemizing still pays',
        body: 'Pelham property tax bills are high enough that the state and local deduction cap frequently binds. Whether itemizing beats the standard deduction is a real calculation here rather than a foregone conclusion, and it can flip year to year.',
      },
      {
        title: 'Commuter withholding',
        body: 'Working in Manhattan while living in Pelham means New York State tax but no New York City resident tax. Payroll does not always reflect that, particularly in the year someone moves. It is one of the first things we check.',
      },
      {
        title: 'Investment income alongside a salary',
        body: 'Brokerage accounts, dividends, capital gains, and equity from an employer all interact with the timing of the return rather than sitting neatly on one form. Planning through the year, rather than reacting in April, is where the difference gets made.',
      },
    ],
    gettingHere:
      'From either village it is a short drive down the Hutchinson River Parkway or straight through Pelham Bay on Boston Post Road. Most clients here are ten to fifteen minutes from the office. The Metro-North New Haven line stops at Pelham and runs down through the Bronx.',
    neighborhoods: ['Pelham Heights', 'Pelham Manor', 'Chester Park', 'Village of Pelham', 'Pelhamwood'],
    faqs: [
      {
        question: 'Is it worth itemizing with a Pelham property tax bill?',
        answer:
          'Sometimes, and it is worth actually running rather than assuming. The cap on the state and local tax deduction means a large property tax bill does not translate into federal benefit past a point, and whether itemizing beats the standard deduction depends on your mortgage interest, charitable giving, and the rest of the picture. We calculate it both ways rather than defaulting to one.',
      },
      {
        question: 'Do I owe New York City tax if I live in Pelham and work in the city?',
        answer:
          'No. New York City personal income tax applies to city residents only, and the city’s tax on nonresident earnings was repealed in 1999. You file a New York State return. If your paycheck shows city tax being withheld, that is an error worth correcting, and often worth recovering.',
      },
      {
        question: 'How close is your office to Pelham?',
        answer:
          'Ten to fifteen minutes for most of the village, straight down the Hutchinson River Parkway or through Pelham Bay. Pelham is the nearest Westchester municipality to us. Call ahead so we can set aside proper time and tell you what to bring.',
      },
    ],
  },

  {
    slug: 'eastchester-ny',
    city: 'Eastchester',
    cityState: 'Eastchester, NY',
    county: 'Westchester County',
    metaTitle: 'Tax Preparation & Accounting in Eastchester, NY',
    metaDescription:
      'Tax preparation, IRS resolution, and bookkeeping for Eastchester and Tuckahoe, NY. Long-held property, retirement income, and businesses. Free consultation.',
    heroTitle: 'Tax & Accounting for Eastchester, NY',
    heroSubtitle:
      'Eastchester and Tuckahoe sit along the Bronx River Parkway, a straight run from our office. Personal and business tax preparation, IRS resolution, bookkeeping, and year-round planning.',
    trustPoints: ['Eastchester & Tuckahoe', 'Bronx, NY Office', 'Free Consultation'],
    introHeading: 'Settled, residential, and closer than the map suggests',
    intro: [
      'The town of Eastchester, along with the village of Tuckahoe inside it, runs along the Bronx River Parkway corridor north of Mount Vernon. It is long-settled and largely residential, with a stable population of homeowners rather than the churn you see in the county’s bigger cities.',
      'That stability shapes the work. Returns here more often involve long-held property, retirement income beginning to come into play, and questions about what happens to a house that has appreciated for decades. Those are planning questions as much as filing questions, and they are better answered before a year closes than after.',
      'Tuckahoe adds a denser village center with a small business base and more renters, so the two halves of the town produce noticeably different returns despite sharing a school district and a tax roll.',
    ],
    focusHeading: 'What tends to come up for Eastchester filers',
    focus: [
      {
        title: 'Long-held property',
        body: 'A house owned for thirty years carries a cost basis nobody has looked at in decades, plus improvements that may or may not have been documented. If a sale is on the horizon, reconstructing that basis is worth doing before it is urgent.',
      },
      {
        title: 'Retirement income coming online',
        body: 'Social Security, pensions, and retirement account distributions each get taxed differently at the state level in New York, and the order you draw from them changes the result. This is planning work, not filing work.',
      },
      {
        title: 'The STAR credit and school taxes',
        body: 'New York’s School Tax Relief program applies to primary residences, and the way it is delivered has changed over the years. We check that homeowners here are actually receiving what they are entitled to.',
      },
    ],
    gettingHere:
      'The Bronx River Parkway runs almost directly from Eastchester and Tuckahoe down to the office, and the Cross County Parkway connects across if you are coming from the eastern side of town. The Metro-North Harlem line stops at both Tuckahoe and Crestwood.',
    neighborhoods: ['Tuckahoe', 'Bronxville P.O.', 'Chester Heights', 'Lake Isle', 'Waverly', 'Garth Road corridor'],
    faqs: [
      {
        question: 'We have owned our house since the 1980s. What should we be thinking about?',
        answer:
          'Cost basis, mainly. Decades of improvements can raise your basis and reduce the gain on an eventual sale, but only if you can substantiate them. There is also an exclusion available on the sale of a primary residence with its own conditions. None of this is urgent until it is, and it is far easier to assemble while you still have the records.',
      },
      {
        question: 'I am about to retire. When should we talk?',
        answer:
          'Before you start drawing, if possible. Social Security, pension income, and retirement account withdrawals are treated differently under New York State rules, and the sequence you draw them in affects both your federal and state position. Once the year is over the options narrow considerably.',
      },
      {
        question: 'Do you handle Tuckahoe businesses as well?',
        answer:
          'Yes. Corporate and partnership returns, sole proprietors, and monthly bookkeeping. The village center has a solid base of small businesses and professional practices, and that work is the same for us whether the address is Tuckahoe or Eastchester.',
      },
    ],
  },

  {
    slug: 'bronxville-ny',
    city: 'Bronxville',
    cityState: 'Bronxville, NY',
    county: 'Westchester County',
    metaTitle: 'Tax Preparation & Accounting in Bronxville, NY',
    metaDescription:
      'Tax preparation and year-round planning for Bronxville, NY. Equity compensation, investment income, and high property tax bills against the deduction cap.',
    heroTitle: 'Tax & Accounting for Bronxville, NY',
    heroSubtitle:
      'A square mile of Manhattan commuters, high property assessments, and returns where the planning matters more than the filing. Personal and business tax, IRS resolution, bookkeeping, and year-round planning.',
    trustPoints: ['Equity Comp & Investments', 'Bronx, NY Office', 'Free Consultation'],
    introHeading: 'Where the planning matters more than the filing',
    intro: [
      'Bronxville is barely a square mile, and its return profile is unusually consistent: households with substantial W-2 income, a high property assessment, investment accounts, and frequently some form of employer equity. The returns are not complicated in the sense of being messy. They are complicated in the sense that decisions made in October determine what April looks like.',
      'That is a different engagement from straightforward preparation. If the first conversation happens when the documents arrive, most of the levers have already been pulled. The clients we do the best work for here are the ones we speak to during the year.',
      'The village is on the Metro-North Harlem line with a heavy commuter population into Manhattan, which brings the usual state-and-city question, and a lot of people whose compensation is not all cash.',
    ],
    focusHeading: 'What tends to come up for Bronxville filers',
    focus: [
      {
        title: 'Employer equity',
        body: 'Restricted stock, options, and employee stock purchase plans each have their own timing and their own traps, and the withholding your employer applies is frequently not enough. Knowing that in November is useful. Knowing it in April is just bad news.',
      },
      {
        title: 'Property taxes against the deduction cap',
        body: 'Bronxville assessments produce some of the highest tax bills in the county, and the cap on state and local tax deductions means much of it does not carry federal benefit. That changes the calculus on charitable timing and on whether to itemize at all.',
      },
      {
        title: 'Investment income and its timing',
        body: 'Realized gains, loss harvesting, and the interaction between capital gains and the rest of the return are all decisions with deadlines. They are planning conversations, and the deadline is December, not April.',
      },
    ],
    gettingHere:
      'The Bronx River Parkway runs south from Bronxville almost to the office, typically twenty minutes outside rush hour. The Metro-North Harlem line from Bronxville station connects down through the Bronx. Much of our work with clients here happens remotely, with documents shared securely and reviews by video.',
    neighborhoods: ['Village of Bronxville', 'Lawrence Park', 'Cedar Knolls', 'Armour Villa', 'Sagamore Park'],
    faqs: [
      {
        question: 'My compensation includes stock. When should we be talking?',
        answer:
          'Well before the year ends. Restricted stock vesting, option exercises, and stock purchase plan shares all have timing consequences, and employer withholding on equity is often set at a rate below what you will actually owe. That gap is discoverable in advance and unpleasant to discover in April. This is our tax planning work rather than preparation.',
      },
      {
        question: 'Is my property tax bill still worth deducting?',
        answer:
          'Partly, and less than the bill suggests. The state and local tax deduction is capped, and Bronxville assessments comfortably exceed it for most households, so a large share produces no federal benefit. What that changes is the surrounding strategy, particularly the timing of charitable giving and whether itemizing beats the standard deduction at all. We run it rather than assume it.',
      },
      {
        question: 'Do we need to come to the Bronx office?',
        answer:
          'No. Everything we do is available remotely, with documents shared through a secure link and the review done by phone or video. Plenty of our Bronxville clients have never been to the office. If you would rather sit down in person, the drive is about twenty minutes down the Bronx River Parkway.',
      },
    ],
  },

  {
    slug: 'scarsdale-ny',
    city: 'Scarsdale',
    cityState: 'Scarsdale, NY',
    county: 'Westchester County',
    metaTitle: 'Tax Preparation & Accounting in Scarsdale, NY',
    metaDescription:
      'Tax preparation and year-round planning for Scarsdale, NY. Investment income, equity compensation, household employees, and multi-state filing handled properly.',
    heroTitle: 'Tax & Accounting for Scarsdale, NY',
    heroSubtitle:
      'Returns here are rarely about the forms. They are about decisions made months earlier. Personal and business tax preparation, IRS resolution, bookkeeping, and year-round planning.',
    trustPoints: ['Year-Round Planning', 'Bronx, NY Office', 'Free Consultation'],
    introHeading: 'The work that happens before the documents arrive',
    intro: [
      'Scarsdale households tend to have returns where the interesting decisions were made long before anything was filed. Investment income, employer equity, business interests, charitable giving, and often household employees all sit alongside each other, and they interact.',
      'That interaction is the whole point. Harvesting a loss changes what a Roth conversion costs. Bunching charitable contributions changes whether itemizing works this year. Paying someone to work in your home creates employer obligations most people do not realize they have taken on. None of these are questions a return can answer in April, because by then they are settled.',
      'We do the preparation, and we would rather do the planning that precedes it. That is a different relationship from a once-a-year transaction, and it is the one that produces a different result.',
    ],
    focusHeading: 'What tends to come up for Scarsdale filers',
    focus: [
      {
        title: 'Household employees',
        body: 'Paying a nanny, a housekeeper, or a home health aide above a threshold makes you an employer, with payroll tax obligations, state registration, and year-end reporting. It is one of the most commonly missed obligations we see, and it is not a small one to unwind.',
      },
      {
        title: 'Charitable timing',
        body: 'With the state and local deduction capped, whether you itemize at all can hinge on charitable giving, and concentrating two years of contributions into one can change the answer. That decision has a December deadline.',
      },
      {
        title: 'Multi-state and non-resident income',
        body: 'A property elsewhere, a business interest in another state, or partnership income sourced outside New York each bring their own filing requirements. Missing a state return is a slow problem that surfaces years later.',
      },
    ],
    gettingHere:
      'The Bronx River Parkway runs directly from Scarsdale down to the office, around twenty-five minutes outside peak. The Metro-North Harlem line from Scarsdale station runs down through the Bronx. Most of our work with clients here is handled remotely, with documents shared securely and reviews by video.',
    neighborhoods: ['Fox Meadow', 'Greenacres', 'Heathcote', 'Quaker Ridge', 'Edgewood', 'Village Center'],
    faqs: [
      {
        question: 'We pay a nanny. Does that make us employers?',
        answer:
          'Very likely, yes. Paying a household worker above a threshold creates federal and state employment obligations: payroll taxes, state registration, and year-end wage reporting. It is one of the most frequently missed obligations we encounter, and it compounds if it is left. It is entirely manageable once it is set up properly, and we would rather set it up than unwind it.',
      },
      {
        question: 'Can you plan around our charitable giving?',
        answer:
          'Yes, and it is one of the more consequential levers available. Because the state and local tax deduction is capped, charitable contributions often decide whether itemizing beats the standard deduction at all. Concentrating two years of giving into one year can change that answer. The decision has to be made before the year closes, which is why it sits in planning rather than preparation.',
      },
      {
        question: 'We have income from another state. Does that complicate things?',
        answer:
          'It adds filings rather than complications. A rental property, a business interest, or partnership income sourced to another state generally means a non-resident return there as well as your New York return, with a credit mechanism so the same income is not taxed twice. The problem is usually not difficulty, it is that the extra return never got filed.',
      },
    ],
  },

  {
    slug: 'white-plains-ny',
    city: 'White Plains',
    cityState: 'White Plains, NY',
    county: 'Westchester County',
    metaTitle: 'Tax Preparation & Accounting in White Plains, NY',
    metaDescription:
      'Tax preparation, corporate returns, and bookkeeping for White Plains, NY businesses and professionals. Westchester’s commercial center. Free consultation.',
    heroTitle: 'Tax & Accounting for White Plains, NY',
    heroSubtitle:
      'Westchester’s commercial center, and the densest concentration of small businesses and professional practices in the county. Corporate and personal returns, IRS resolution, bookkeeping, and planning.',
    trustPoints: ['Business & Corporate Tax', 'Bronx, NY Office', 'Free Consultation'],
    introHeading: 'Where the county does its business',
    intro: [
      'White Plains is the county seat and Westchester’s commercial center, with a concentration of corporate offices, professional practices, and small businesses that is denser than anywhere else in the county. That tilts the work here toward the business side.',
      'Entity structure comes up constantly. Whether a practice should be an S-corp, what reasonable compensation means for an owner who is also an employee, how to handle a partnership where the partners are compensated differently, and when a growing sole proprietorship should become something else. These are decisions with real tax consequences and they are frequently made on instinct.',
      'The residential side is substantial too, with a downtown that has added a great deal of rental housing, much of it occupied by people who moved up from the city. Those first-year residency and withholding questions apply here as they do across the county.',
    ],
    focusHeading: 'What tends to come up for White Plains filers',
    focus: [
      {
        title: 'Entity structure and reasonable compensation',
        body: 'An owner-operator taking distributions from an S-corp has to pay themselves reasonable compensation first, and what counts as reasonable is a common examination issue. Getting the split defensible matters more than getting it aggressive.',
      },
      {
        title: 'Businesses that left the city',
        body: 'A business relocated from Manhattan or the Bronx to White Plains leaves behind New York City’s unincorporated business tax and commercial rent tax. Whether it fully escapes them depends on where the work is actually performed and where the customers are.',
      },
      {
        title: 'Books that have to hold up',
        body: 'Professional practices and growing businesses reach a point where the shoebox stops working, usually when a lender, a partner, or an examiner asks a question. Monthly bookkeeping that feeds directly into the return is what prevents that becoming an emergency.',
      },
    ],
    gettingHere:
      'The Bronx River Parkway or the Hutchinson River Parkway both run from White Plains down to the office in roughly half an hour outside peak hours. White Plains is a Metro-North Harlem line hub with frequent service down through the Bronx. Business clients here are often handled entirely remotely.',
    neighborhoods: ['Downtown', 'Battle Hill', 'Highlands', 'Fisher Hill', 'Gedney Farms', 'North Street', 'Prospect Park'],
    faqs: [
      {
        question: 'Should my practice be an S-corp?',
        answer:
          'It depends on your income level, how much you take as salary versus distribution, your state filing position, and what you plan to do with the business. The structure can reduce self-employment tax, but it brings payroll obligations, a separate return, and the requirement to pay yourself reasonable compensation. We would rather model it against your actual numbers than answer in the abstract.',
      },
      {
        question: 'My business moved out of NYC. What changes?',
        answer:
          'Potentially the city-level business taxes. New York City levies an unincorporated business tax and, in parts of Manhattan, a commercial rent tax, and neither applies to a business operating in White Plains. Whether you fully leave them behind depends on where the work is performed and where your customers are, not only on your mailing address. That is worth confirming rather than assuming.',
      },
      {
        question: 'Can you take over bookkeeping mid-year?',
        answer:
          'Yes, and it is common. We start with a cleanup engagement to rebuild and reconcile the period already gone, working from bank and credit card statements where the records are thin, then move to monthly work from a known-good position. Better mid-year than after a filing deadline has forced the issue.',
      },
    ],
  },

  {
    slug: 'larchmont-ny',
    city: 'Larchmont',
    cityState: 'Larchmont, NY',
    county: 'Westchester County',
    metaTitle: 'Tax Preparation & Accounting in Larchmont, NY',
    metaDescription:
      'Tax preparation and year-round planning for Larchmont, NY. Manhattan commuters, high property assessments, and self-employment questions. Free consultation.',
    heroTitle: 'Tax & Accounting for Larchmont, NY',
    heroSubtitle:
      'A New Haven line village where most returns pair a city salary with a Westchester property bill. Personal and business tax preparation, IRS resolution, bookkeeping, and year-round planning.',
    trustPoints: ['Commuter Filings', 'Bronx, NY Office', 'Free Consultation'],
    introHeading: 'A city salary and a Westchester tax bill',
    intro: [
      'Larchmont is small, on the water, and heavily commuter. The typical return here pairs Manhattan employment income with a Westchester property tax bill, and the interesting part is how those two things interact rather than either on its own.',
      'The state-and-city question comes up in every first conversation. Living in Larchmont means New York State tax without New York City resident tax, even for someone in a Manhattan office five days a week. Payroll systems do not always get that right, especially in the year of a move, and the correction is worth having.',
      'Alongside that, households here often carry investment accounts and some employer equity, which turns the engagement into a planning relationship rather than an annual filing. The decisions that matter have December deadlines, not April ones.',
    ],
    focusHeading: 'What tends to come up for Larchmont filers',
    focus: [
      {
        title: 'Commuting into the city',
        body: 'New York City resident income tax does not apply to Larchmont residents, and the city’s nonresident earnings tax was repealed in 1999. What matters is that your withholding reflects that, which after a move it often does not.',
      },
      {
        title: 'Property assessments and the deduction cap',
        body: 'Village and school taxes here run high enough that the state and local deduction cap binds for most households. That changes whether itemizing is worth it, and it makes charitable timing a live decision.',
      },
      {
        title: 'Self-employment and the commuter mobility tax',
        body: 'Consultants and self-employed professionals in Westchester fall inside the metropolitan commuter transportation district, so the mobility tax can apply alongside estimated payments. It is easy to overlook when someone first goes independent.',
      },
    ],
    gettingHere:
      'The Hutchinson River Parkway south to the Pelham Parkway exit is the usual route, around twenty minutes outside peak. The Metro-North New Haven line runs from Larchmont station down through the Bronx. Many clients here work with us entirely remotely.',
    neighborhoods: ['Larchmont Village', 'Larchmont Manor', 'Larchmont Gardens', 'Howell Park', 'Murray Avenue'],
    faqs: [
      {
        question: 'I work in Manhattan and live in Larchmont. Which taxes do I owe?',
        answer:
          'New York State income tax, and federal, but not New York City resident income tax. City income tax applies to city residents, and the separate tax the city once levied on nonresident earnings was repealed in 1999. The thing worth checking is your withholding, because payroll frequently continues taking out city tax after someone moves to Westchester.',
      },
      {
        question: 'I went independent this year. What changes?',
        answer:
          'Quarterly estimated payments, self-employment tax, and a set of deductions that did not exist when you were on a W-2. There is also the metropolitan commuter transportation mobility tax, which reaches self-employed people in Westchester as well as in the city and is routinely missed in a first year. Worth a conversation early rather than a surprise at filing.',
      },
      {
        question: 'Do you meet with clients remotely?',
        answer:
          'Yes, and most of our Larchmont clients work with us that way. Documents are shared through a secure link, and we go through everything by phone or video. The Bronx office is there if you would rather sit down, about twenty minutes down the Hutch.',
      },
    ],
  },

  {
    slug: 'mamaroneck-ny',
    city: 'Mamaroneck',
    cityState: 'Mamaroneck, NY',
    county: 'Westchester County',
    metaTitle: 'Tax Preparation & Accounting in Mamaroneck, NY',
    metaDescription:
      'Tax preparation, IRS resolution, and bookkeeping for Mamaroneck, NY. Small businesses, the harbor trades, and commuter households alike. Free consultation.',
    heroTitle: 'Tax & Accounting for Mamaroneck, NY',
    heroSubtitle:
      'A harbor village with a working small business base alongside its commuter households. Personal and business tax preparation, IRS resolution, bookkeeping, and year-round planning.',
    trustPoints: ['Small Business Returns', 'Bronx, NY Office', 'Free Consultation'],
    introHeading: 'Two economies in one village',
    intro: [
      'Mamaroneck runs from the harbor up through the village center, and it supports two fairly different economies alongside each other. There are the commuter households on the New Haven line, and there is a genuine working base of trades, marine businesses, contractors, restaurants and shops around the harbor and along Mamaroneck Avenue.',
      'Those produce very different returns. The commuter side raises the usual Westchester questions about state versus city tax and property assessments against the deduction cap. The business side raises entity structure, seasonality, equipment purchases, and books that need to hold up when a lender asks.',
      'We handle both, and for owner-operated businesses they are usually the same conversation, because the business return and the personal return move together.',
    ],
    focusHeading: 'What tends to come up for Mamaroneck filers',
    focus: [
      {
        title: 'Seasonal and uneven income',
        body: 'Harbor and trade businesses do not earn evenly through the year, which makes estimated payments a real question rather than a formality. Paying on last year’s pattern when this year looks different is how penalties happen.',
      },
      {
        title: 'Equipment and vehicles',
        body: 'A boat, a truck, or a piece of equipment used in a business has depreciation options with meaningfully different outcomes, and the right answer depends on where your income lands this year against next. That is a decision, not a default.',
      },
      {
        title: 'Owner-operated businesses',
        body: 'When the business return and the personal return belong to the same household, treating them separately leaves money on the table. We look at both together, which is the point of having one team handle the books and the filing.',
      },
    ],
    gettingHere:
      'The Hutchinson River Parkway or I-95 south, then across to the Pelham Parkway exit, is around twenty-five minutes outside peak. The Metro-North New Haven line runs from Mamaroneck station down through the Bronx.',
    neighborhoods: ['Village of Mamaroneck', 'Orienta', 'Harbor Heights', 'Washingtonville', 'Heathcote Hill', 'Rye Neck'],
    faqs: [
      {
        question: 'My income is seasonal. How should I handle estimated payments?',
        answer:
          'Not by dividing last year’s tax into four equal pieces, which is what most people do and what causes penalties in a year that looks different. There is an annualized method that lets payments follow when the income actually arrives, which suits harbor and trade businesses far better. It takes more bookkeeping through the year, which is part of why we prefer to handle both.',
      },
      {
        question: 'I bought a truck for the business. How is that treated?',
        answer:
          'There are several ways to write it off, and they are not interchangeable. Taking the full deduction immediately helps if this is a high-income year and hurts if next year will be better. Vehicles also carry their own limitations depending on how they are used. The right answer depends on your two-year picture, so it is worth asking before the purchase rather than after.',
      },
      {
        question: 'Can you do both my business and personal return?',
        answer:
          'Yes, and for an owner-operated business that is the sensible way to do it. The two returns feed each other, so handling them separately means someone is working without half the picture. It is also how we catch things that only show up when you look at both, like compensation structure or timing decisions that shift income between the two.',
      },
    ],
  },
];

export function locationBySlug(slug: string): LocationContent | undefined {
  return locations.find((l) => l.slug === slug);
}

/** Slugs of cities with their own page, for linking from area chips. */
export const locationSlugs = locations.map((l) => l.slug);

/**
 * Area names that should link to a page covering them without being an exact
 * match. The Eastchester page covers Tuckahoe, and the Pelham page covers
 * Pelham Manor, so those chips link rather than sitting dead.
 */
const ALIASES: Record<string, string> = {
  tuckahoe: 'eastchester-ny',
  'pelham manor': 'pelham-ny',
};

/** The page covering a named area, if one exists. */
export function slugForArea(name: string): string | undefined {
  const key = name.trim().toLowerCase();
  const exact = locations.find((l) => l.city.toLowerCase() === key);
  return exact?.slug ?? ALIASES[key];
}
