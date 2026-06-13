
import { Box, Stack } from '@mui/material'
import type { JSX, ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps): JSX.Element {
  return (
    <Box id="top" component="main" sx={{ width: '100%' }}>
      <Stack spacing={0}>{children}</Stack>
    </Box>
  )
}
