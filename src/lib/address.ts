import { site } from './site';

/**
 * Safe accessors for the office address while the intake form and the
 * client's live site disagree about it.
 *
 * The raw candidates deliberately live behind `site.address.candidates` so
 * that no component can reach an address without going through this module
 * and acknowledging the unconfirmed state. See the note in lib/site.ts.
 */

export const isAddressConfirmed =
  site.address.status === 'confirmed' && site.address.confirmed !== null;

/**
 * The confirmed address, or null while the conflict is open.
 * Every caller must handle null — that is the point.
 */
export const officeAddress = isAddressConfirmed
  ? site.address.candidates[site.address.confirmed as 'intake' | 'liveSite']
  : null;

/**
 * Both candidate addresses agree on the state, so this much is safe to
 * publish today. Used for the Terms page's governing-law clause.
 */
export const legalState = 'New York';
export const legalStateCode = 'NY';

/**
 * Coordinates are published only once someone has checked them against a real
 * map. See the note on `geoVerified` in lib/site.ts.
 */
export const officeGeo =
  officeAddress && site.address.geoVerified
    ? { latitude: officeAddress.latitude, longitude: officeAddress.longitude }
    : null;

/** Google Maps embed URL, or null while the address is unconfirmed. */
export const mapsEmbedSrc = officeAddress
  ? `https://www.google.com/maps?q=${encodeURIComponent(officeAddress.full)}&output=embed`
  : null;

/** Google Maps directions URL, or null while the address is unconfirmed. */
export const mapsDirectionsUrl = officeAddress
  ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress.full)}`
  : null;

/**
 * What to show visitors in place of a street address. Deliberately does not
 * name a city, since the two candidates are in different ones.
 */
export const addressPendingCopy = {
  short: 'Office address confirmation pending',
  long: 'Our office address is being updated. Call us and we will confirm exactly where to meet.',
};

/** Postal mailing line for legal pages, falling back to contact details. */
export const legalContactLine = officeAddress
  ? officeAddress.full
  : `${site.email} or ${site.phone.display}`;
