import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { JSX } from 'react'

import { PAGE_SUBHEADING_SIZE, PAGE_TEXT_SIZE } from '@/theme/theme'
import { resolveSize, resolveSubHeadingVariant, resolveTextVariant } from '@/theme/tokens'
import { ContentCard } from '../content-card'

interface GoalCardProps {
  heading: string
  body: string
}

export function GoalCard({ heading, body }: GoalCardProps): JSX.Element {
  const theme = useTheme()

  return (
    <ContentCard size="medium">
      <Typography variant="overline" sx={{ color: 'brandGold', letterSpacing: '0.14em' }}>
        Our Goal
      </Typography>
      <Typography variant={resolveSubHeadingVariant(PAGE_SUBHEADING_SIZE)} sx={{ mt: 1, color: 'brandGraphite' }}>
        {heading}
      </Typography>
      <Typography
        variant={resolveTextVariant(PAGE_TEXT_SIZE)}
        sx={{ mt: 2, color: 'text.primary', maxWidth: resolveSize(theme.layout.proseMaxWidth, 'medium') }}
      >
        {body}
      </Typography>
    </ContentCard>
  )
}
