import type { JSX } from 'react'

import { ROUTES } from '@/routes'
import { BackLink } from './BackLink'

export function BackToHome(): JSX.Element {
  return <BackLink to={ROUTES.HOME} label="← Back to Home" size="medium" />
}
