import { HOME_HASH, ROUTES, routeWithHash } from '@/routes'
import type { NavItem } from '@/types/brand.types'

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'HOME', to: routeWithHash(ROUTES.HOME, HOME_HASH.TOP) },
  { id: 'contact', label: 'CONTACT', to: ROUTES.CONTACT },
]
