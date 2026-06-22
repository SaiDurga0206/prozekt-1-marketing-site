import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { JSX, ReactNode } from 'react'

import { resolveSize } from '@/theme/tokens'
import type { ComponentSize } from '@/types'

interface PageContainerProps {
  children: ReactNode
  size?: ComponentSize
}

export function PageContainer({ children, size = 'medium' }: PageContainerProps): JSX.Element {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: resolveSize(theme.layout.pageMaxWidth, size),
        mx: 'auto',
        px: resolveSize(theme.layout.pagePaddingX, size),
        py: resolveSize(theme.layout.pagePaddingY, size),
      }}
    >
      {children}
    </Box>
  )
}
