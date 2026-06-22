import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import PhoneIcon from '@mui/icons-material/Phone'

import { HOME_HASH, ROUTES, routeWithHash } from '@/routes'
import type { NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'HOME', to: routeWithHash(ROUTES.HOME, HOME_HASH.TOP), Icon: HomeIcon },
  { id: 'recipe-book', label: 'RECIPE BOOK', to: ROUTES.RECIPE_BOOK, Icon: MenuBookIcon },
  { id: 'contact', label: 'CONTACT', to: ROUTES.CONTACT, Icon: PhoneIcon },
]
