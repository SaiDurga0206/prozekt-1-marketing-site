import type { ElementType } from 'react'

export interface NavItem {
  id: string
  label: string
  to: string
  Icon?: ElementType
}
