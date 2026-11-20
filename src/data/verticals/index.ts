import { pageRoutes, type Locale } from '../../i18n';

// Card numbers are the existing translation keys, not positions in the agency offer list.
export const sectorCards = {
  restaurants: 1, hotels: 2, bars: 3, medical: 4, dentists: 5, lawyers: 6,
  hair: 7, spa: 8, gyms: 9,
} as const;
export type Sector = keyof typeof sectorCards;

export function sectorPaths(locale: Locale) {
  return (Object.keys(sectorCards) as Sector[]).map(sector => ({
    params: { vertical: pageRoutes[sector][locale].split('/').pop()! },
    props: { sector },
  }));
}
