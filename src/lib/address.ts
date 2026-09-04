import { site } from './site';

/**
 * The firm is digital only. There is no public office address, no map, and no
 * directions, because there is nowhere for a client to go: everything is
 * handled remotely.
 *
 * The one place a business address is still expected is the contact clause of
 * the Privacy Policy and the Terms, so that is the only thing exported here.
 * Everything else that used to live in this module (officeAddress,
 * mapsEmbedSrc, mapsDirectionsUrl, officeGeo, the pending-confirmation copy)
 * is gone deliberately. If you need one of them back, the practice has
 * changed, not the code.
 */

/**
 * Governing law for the Terms. The firm is a New York entity regardless of
 * where its clients are.
 */
export const legalState = 'New York';
export const legalStateCode = 'NY';

/**
 * Postal line for the legal pages only. Not for the footer, the contact page,
 * or structured data. See the note on `legalAddress` in lib/site.ts.
 */
export const legalContactLine = site.legalAddress.full;
