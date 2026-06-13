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
} as const

export const HOME_HASH = {
  TOP: 'top',
  MARKETING_SHOWCASE: 'marketing-showcase',
  PROJECTS_GALLERY: 'projects-gallery',
} as const

export function routeWithHash(route: string, hash: string): string {
  return `${route}#${hash}`
}
