import { Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { JSX, ReactNode } from 'react'

import { resolveSize } from '@/theme/tokens'
import type { ComponentSize } from '@/types'

interface ContentStackProps {
  children: ReactNode
  size?: ComponentSize
}

export function ContentStack({ children, size = 'medium' }: ContentStackProps): JSX.Element {
  const theme = useTheme()

  return (
    <Stack spacing={resolveSize(theme.layout.contentStackSpacing, size)} sx={{ mt: 4 }}>
      {children}
    </Stack>
  )
}
