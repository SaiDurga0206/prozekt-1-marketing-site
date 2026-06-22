import type { JSX } from 'react'

import { ROUTES } from '@/routes'
import { BackLink } from './BackLink'

export function BackToRecipeBook(): JSX.Element {
  return <BackLink to={ROUTES.RECIPE_BOOK} label="← Back to Recipe Book" />
}
