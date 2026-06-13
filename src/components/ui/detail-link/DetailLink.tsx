import { Link as MuiLink } from '@mui/material'
import type { JSX, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

import theme, { PAGE_TEXT_SIZE } from '@/theme/theme'
import { resolveSize } from '@/theme/tokens'

interface DetailLinkProps {
  to: string
  children: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export function DetailLink({ to, children, onClick }: DetailLinkProps): JSX.Element {
  return (
    <MuiLink
      component={Link}
      to={to}
      onClick={onClick}
      underline="hover"
      sx={{
        mt: 2,
        display: 'inline-block',
        color: 'brandGraphite',
        fontWeight: 600,
        fontFamily: theme.typographyTokens.fontFamily,
        fontSize: resolveSize(theme.typographyTokens.textFontSize, PAGE_TEXT_SIZE),
      }}
    >
      {children}
    </MuiLink>
  )
}
