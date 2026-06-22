import { ORGANICS_IMAGES } from '@/assets/organics'
import { ROUTES } from '@/routes'
import type { OrganicsArea } from '@/types'

export const ORGANICS_AREAS: OrganicsArea[] = [
  {
    id: 'mushrooms',
    name: 'Mushrooms',
    imageSrc: ORGANICS_IMAGES.mushrooms,
    imageAlt: 'Fresh edible mushrooms grown in a controlled farm environment',
    description:
      'Includes premium varieties such as Milky and Oyster mushrooms, plus specialty cultivars including Lion\'s Mane, Shiitake, and Cordyceps — all grown under controlled conditions for better nutrition, shelf life, and consistent quality.',
    detailLinkLabel: "View Milky, White Oyster, Pink Oyster, Button Mushroom, Lion's Mane, Shiitake & Cordyceps →",
  },
  {
    id: 'microgreens',
    name: 'Microgreens',
    imageSrc: ORGANICS_IMAGES.microgreens,
    imageAlt: 'Colorful trays of nutrient-rich microgreens',
    description:
      'Fast-growing, nutrient-dense greens supplied for health-conscious consumers, food services, and premium retail channels.',
  },
  {
    id: 'hydro-aero',
    name: 'Hydro/Aeroponics',
    subsections: [
      {
        imageSrc: ORGANICS_IMAGES.hydroponics,
        imageAlt: 'Hydroponic crop channels with healthy green leaves',
        description:
          'Soil-free farming systems with precise nutrient delivery and efficient water use to produce clean, high-yield crops year-round.',
      },
      {
        imageSrc: ORGANICS_IMAGES.aeroponics,
        imageAlt: 'Aeroponic roots suspended and misted in a vertical setup',
        description:
          'Mist-based root feeding technology that improves oxygen availability and supports faster, healthier plant growth in compact spaces.',
      },
    ],
  },
  {
    id: 'organic-poultry',
    name: 'Free Range Poultry',
    imageSrc: ORGANICS_IMAGES['organic-poultry'],
    imageAlt: 'Free-range poultry in natural outdoor habitat',
    description:
      'Ethical poultry systems featuring native and specialty breeds including Aseel, Vanaraja, Sonali, Kadaknath, Turkey, and Quail — raised with healthy feed, improved welfare, and traceable farming practices.',
    detailLinkLabel: 'View Aseel, Vanaraja, Sonali, Kadaknath, Turkey & Quail →',
  },
  {
    id: 'functional-foods',
    name: 'Functional Foods',
    imageSrc: ORGANICS_IMAGES['functional-foods'],
    imageAlt: 'Functional food ingredients and healthy prepared products',
    description:
      'Value-added products made from quality farm inputs to deliver nutrition, convenience, and wellness-focused food experiences.',
  },
]

export const ORGANICS_AREA_ROUTES: Partial<Record<string, string>> = {
  mushrooms: ROUTES.MUSHROOMS,
  'organic-poultry': ROUTES.POULTRY,
  microgreens: ROUTES.MICROGREENS,
  'hydro-aero': ROUTES.HYDRO_AERO,
  'functional-foods': ROUTES.FUNCTIONAL_FOODS,
}
