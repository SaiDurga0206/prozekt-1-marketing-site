export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  ORGANICS: '/organics',
  SUSTAINABILITY: '/sustainability',
  RECYCLING: '/recycling-repurposing',
  MUSHROOMS: '/organics/mushrooms',
  POULTRY: '/organics/poultry',
  MICROGREENS: '/organics/microgreens',
  HYDRO_AERO: '/organics/hydro-aeroponics',
  FUNCTIONAL_FOODS: '/organics/functional-foods',
  CONTACT: '/contact',
  RECIPE_BOOK: '/recipe-book',
  PINK_OYSTER_65: '/recipe-book/pink-oyster-65',
} as const

export const HOME_HASH = {
  TOP: 'top',
} as const

export function routeWithHash(route: string, hash: string): string {
  return `${route}#${hash}`
}
