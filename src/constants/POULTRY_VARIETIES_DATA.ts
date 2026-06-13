import { POULTRY_IMAGES } from '@/assets/poultry'

export interface PoultryVariety {
  id: string
  name: string
  imageSrc: string
  imageAlt: string
  description: string
}

export const POULTRY_VARIETIES: PoultryVariety[] = [
  {
    id: 'aseel',
    name: 'Aseel',
    imageSrc: POULTRY_IMAGES.aseel,
    imageAlt: 'Aseel breed chicken with strong build and upright posture',
    description:
      'A hardy native Indian breed valued for its resilience, lean meat, and adaptability to local climates. Raised with ethical feed programs and open-range access for healthier growth and traceable protein quality.',
  },
  {
    id: 'vanaraja',
    name: 'Vanaraja',
    imageSrc: POULTRY_IMAGES.vanaraja,
    imageAlt: 'Vanaraja dual-purpose poultry in a free-range farm setting',
    description:
      'A dual-purpose variety developed for both meat and egg production, suited to backyard and small-scale organic systems. Managed under controlled welfare standards for consistent yield and clean farm-to-market supply.',
  },
  {
    id: 'sonali',
    name: 'Sonali',
    imageSrc: POULTRY_IMAGES.sonali,
    imageAlt: 'Sonali colored layer hens in a free-range poultry enclosure',
    description:
      'A colored layer breed known for steady egg production and efficient feed conversion in sustainable poultry operations. Supplied for retail, food service, and health-focused consumers seeking responsibly raised eggs.',
  },
  {
    id: 'kadaknath',
    name: 'Kadaknath',
    imageSrc: POULTRY_IMAGES.kadaknath,
    imageAlt: 'Kadaknath black-feathered chicken breed in natural habitat',
    description:
      'A distinctive native breed prized for its dark-colored meat and high nutritional profile. Cultivated through selective breeding and organic feeding practices to preserve breed integrity and premium market value.',
  },
  {
    id: 'turkey',
    name: 'Turkey',
    imageSrc: POULTRY_IMAGES.turkey,
    imageAlt: 'Free-range turkeys on a poultry farm',
    description:
      'Broad-breasted and heritage turkey lines raised for festive and year-round protein demand. Produced with spacious housing, quality feed, and welfare-focused management for superior texture and flavor.',
  },
  {
    id: 'quail',
    name: 'Quail',
    imageSrc: POULTRY_IMAGES.quail,
    imageAlt: 'Japanese quail in a controlled organic farming environment',
    description:
      'Compact, fast-growing birds supplied for eggs and meat in gourmet and wellness-oriented food segments. Bred in hygienic, controlled environments for high productivity and consistent product quality.',
  },
]
