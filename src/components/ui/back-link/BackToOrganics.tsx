import type { JSX } from 'react'

import { ROUTES } from '@/routes'
import { BackLink } from './BackLink'

export function BackToOrganics(): JSX.Element {
  return <BackLink to={ROUTES.ORGANICS} label="← Back to Organics" size="medium" />
}
