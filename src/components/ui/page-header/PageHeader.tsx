import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { JSX, ReactNode } from 'react'

import { PAGE_HEADING_SIZE, PAGE_TEXT_SIZE } from '@/theme/theme'
import { resolveHeadingVariant, resolveSize, resolveTextVariant } from '@/theme/tokens'
import type { ComponentSize } from '@/types'

interface PageHeaderProps {
  overline: string
  title: string
  description?: string
  size?: ComponentSize
  children?: ReactNode
}

export function PageHeader({
  overline,
  title,
  description,
  size = 'medium',
  children,
}: PageHeaderProps): JSX.Element {
  const theme = useTheme()
  const spacing = resolveSize(theme.layout.headerSpacing, size)

  return (
    <Box>
      <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.12em' }}>
        {overline}
      </Typography>
      <Typography
        variant={resolveHeadingVariant(PAGE_HEADING_SIZE)}
        sx={{ mt: spacing.overlineToTitle, color: 'brandGraphite' }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography
          variant={resolveTextVariant(PAGE_TEXT_SIZE)}
          sx={{
            mt: spacing.titleToBody,
            color: 'text.primary',
            maxWidth: resolveSize(theme.layout.proseMaxWidth, size),
          }}
        >
          {description}
        </Typography>
      ) : null}
      {children ? <Box sx={{ mt: spacing.bodyToNav }}>{children}</Box> : null}
    </Box>
  )
}
