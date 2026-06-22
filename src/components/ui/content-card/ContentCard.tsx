import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { JSX, KeyboardEvent, ReactNode } from 'react'

import { resolveSize } from '@/theme/tokens'
import type { ComponentSize } from '@/types'

interface ContentCardProps {
  id?: string
  children: ReactNode
  size?: ComponentSize
  interactive?: boolean
  onActivate?: () => void
}

export function ContentCard({
  id,
  children,
  size = 'medium',
  interactive = false,
  onActivate,
}: ContentCardProps): JSX.Element {
  const theme = useTheme()

  return (
    <Box
      id={id}
      sx={{
        border: '1px solid',
        borderColor: 'brandSteel',
        backgroundColor: 'background.paper',
        p: resolveSize(theme.layout.cardPadding, size),
        ...(interactive
          ? {
              cursor: 'pointer',
              transition: theme.layout.borderTransition,
              '&:hover': { borderColor: 'brandGraphite' },
            }
          : {}),
      }}
      onClick={interactive ? onActivate : undefined}
      onKeyDown={
        interactive
          ? (event: KeyboardEvent<HTMLDivElement>) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onActivate?.()
              }
            }
          : undefined
      }
      {...(interactive ? { role: 'link', tabIndex: 0 } : {})}
    >
      {children}
    </Box>
  )
}
