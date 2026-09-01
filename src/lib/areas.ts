/**
 * Local service areas around the Bronx office.
 *
 * WHY THIS IS ONE PAGE, NOT MANY
 * The obvious local-SEO move is a page per neighborhood ("Tax Preparation in
 * Parkchester", "Tax Preparation in Pelham Bay", and so on). Do not do that.
 * Near-duplicate pages that differ only by place name are doorway pages, which
 * Google's spam policies name explicitly and which get sites demoted rather
 * than ranked. One substantive page that names the areas honestly, backed by
 * matching `areaServed` structured data, is what actually earns local
 * visibility.
 *
 * The office is on White Plains Road in the East Bronx, so the neighborhood
 * list starts with what is genuinely nearby and works outward.
 *
 * These are service areas, not locations. The firm has one office. Copy that
 * renders this list must never imply otherwise.
 */

export type AreaGroup = {
  key: string;
  label: string;
  /** Shown under the group heading; keep it factual about reach, not offices. */
  note: string;
  areas: string[];
  /** schema.org type for the entries in this group. */
  schemaType: 'Place' | 'City';
};

export const areaGroups: AreaGroup[] = [
  {
    key: 'bronx',
    label: 'Across the Bronx',
    note: 'The office is on White Plains Road in the East Bronx, minutes from most of the borough.',
    schemaType: 'Place',
    areas: [
      'Parkchester',
      'Morris Park',
      'Van Nest',
      'Westchester Square',
      'Throgs Neck',
      'Pelham Bay',
      'Country Club',
      'Castle Hill',
      'Soundview',
      'Co-op City',
      'Baychester',
      'Williamsbridge',
      'Wakefield',
      'Norwood',
      'Bedford Park',
      'Fordham',
      'Belmont',
      'Tremont',
      'Kingsbridge',
      'Riverdale',
      'Mott Haven',
      'Melrose',
      'Hunts Point',
      'City Island',
    ],
  },
  {
    key: 'westchester',
    label: 'Lower Westchester',
    note: 'A short drive north on the Hutchinson River Parkway or Metro-North.',
    schemaType: 'City',
    areas: [
      'Mount Vernon',
      'Yonkers',
      'New Rochelle',
      'Pelham',
      'Pelham Manor',
      'Eastchester',
      'Bronxville',
      'Tuckahoe',
      'Scarsdale',
      'Larchmont',
      'Mamaroneck',
      'White Plains',
    ],
  },
  {
    key: 'nyc',
    label: 'The rest of New York City',
    note: 'Reachable on the 6, the 2 and 5, and the Metro-North New Haven line.',
    schemaType: 'Place',
    areas: [
      'Upper Manhattan',
      'Harlem',
      'East Harlem',
      'Washington Heights',
      'Inwood',
      'Astoria',
      'Jackson Heights',
      'Flushing',
      'College Point',
      'Whitestone',
      'Bayside',
      'Brooklyn',
      'Queens',
    ],
  },
];

/** Flat list of every named area, for structured data. */
export const allAreas = areaGroups.flatMap((group) =>
  group.areas.map((name) => ({ name, schemaType: group.schemaType }))
);
