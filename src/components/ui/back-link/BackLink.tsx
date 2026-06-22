import { Link as MuiLink } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { JSX } from 'react'
import { Link } from 'react-router-dom'

import { PAGE_TEXT_SIZE } from '@/theme/theme'
import { resolveSize } from '@/theme/tokens'
import type { ComponentSize } from '@/types'

interface BackLinkProps {
  to: string
  label: string
  size?: ComponentSize
}

export function BackLink({ to, label, size = 'medium' }: BackLinkProps): JSX.Element {
  const theme = useTheme()

  return (
    <MuiLink
      component={Link}
      to={to}
      underline="hover"
      sx={{
        color: 'text.secondary',
        fontFamily: theme.typographyTokens.fontFamily,
        fontSize: resolveSize(theme.typographyTokens.textFontSize, PAGE_TEXT_SIZE),
        letterSpacing: '0.04em',
        display: 'block',
        mb: resolveSize(theme.layout.backLinkBottomSpacing, size),
      }}
    >
      {label}
    </MuiLink>
  )
}
