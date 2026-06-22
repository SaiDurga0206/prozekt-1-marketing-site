import { MUSHROOM_IMAGES } from '@/assets/mushrooms'
import type { MushroomVariety } from '@/types'

export const MUSHROOM_VARIETIES: MushroomVariety[] = [
  {
    id: 'milky',
    name: 'Milky',
    imageSrc: MUSHROOM_IMAGES['milky-mushroom'],
    imageAlt: 'Fresh milky mushrooms prepared for market',
    description:
      'A warm-climate edible mushroom valued for its firm texture, mild flavor, and reliable shelf life. Cultivated under controlled humidity and sanitation protocols for consistent harvest quality.',
  },
  {
    id: 'white-oyster',
    name: 'White Oyster',
    imageSrc: MUSHROOM_IMAGES['white-oyster-mushroom'],
    imageAlt: 'Fresh white oyster mushrooms with layered caps',
    description:
      'A versatile oyster mushroom variety known for tender caps, clean flavor, and fast crop cycles. Produced for fresh retail, food service, and value-added mushroom products.',
  },
  {
    id: 'pink-oyster',
    name: 'Pink Oyster',
    imageSrc: MUSHROOM_IMAGES['pink-oyster-mushroom'],
    imageAlt: 'Fresh pink oyster mushrooms with vibrant clustered caps',
    description:
      'A visually distinctive oyster mushroom with delicate texture and strong culinary appeal. Grown in carefully managed environments to preserve color, freshness, and market-ready presentation.',
  },
  {
    id: 'button-mushroom',
    name: 'Button Mushroom',
    imageSrc: MUSHROOM_IMAGES['button-mushroom'],
    imageAlt: 'Fresh button mushrooms with compact white caps',
    description:
      'A widely used culinary mushroom with a mild taste, compact form, and broad application across household, restaurant, and processing channels. Cultivated for uniform size and dependable quality.',
  },
  {
    id: 'lions-mane',
    name: "Lion's Mane",
    imageSrc: MUSHROOM_IMAGES['lions-mane'],
    imageAlt: "Fresh lion's mane mushroom with cascading white icicle-like spines",
    description:
      "A distinctive culinary and functional mushroom prized for its delicate, seafood-like texture and naturally occurring compounds that support cognitive wellness. Grown in controlled environments for consistent quality and peak freshness.",
  },
  {
    id: 'shiitake',
    name: 'Shitake',
    imageSrc: MUSHROOM_IMAGES.shiitake,
    imageAlt: 'Fresh shiitake mushrooms with broad brown caps',
    description:
      'A widely valued edible mushroom known for its rich umami flavor and firm texture. Cultivated on nutrient-rich substrates under precise humidity and temperature control for reliable harvests and extended shelf life.',
  },
  {
    id: 'cordyceps',
    name: 'Cordyceps',
    imageSrc: MUSHROOM_IMAGES.cordyceps,
    imageAlt: 'Cordyceps mushroom cultivated in a controlled farm setting',
    description:
      'A functional mushroom variety cultivated for wellness-focused food and supplement markets. Produced under strict quality protocols to preserve bioactive compounds and deliver clean, traceable product batches.',
  },
]
