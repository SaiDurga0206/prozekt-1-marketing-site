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
  RECIPE_DETAIL: '/recipe-book/:recipeId',
  PINK_OYSTER_65: '/recipe-book/pink-oyster-65',
  MILKY_MUSHROOM_MASALA_CURRY: '/recipe-book/milky-mushroom-masala-curry',
  MILKY_MUSHROOM_GHEE_ROAST: '/recipe-book/milky-mushroom-ghee-roast',
} as const

export const HOME_HASH = {
  TOP: 'top',
} as const

export function routeWithHash(route: string, hash: string): string {
  return `${route}#${hash}`
}
