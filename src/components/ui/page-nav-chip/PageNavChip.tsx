import { Box, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { JSX, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { resolveSize } from '@/theme/tokens'
import type { ComponentSize } from '@/types/ui.types'

interface PageNavChipProps {
  label: string
  size?: ComponentSize
  onClick?: () => void
  to?: string
}

export function PageNavChip({ label, size = 'medium', onClick, to }: PageNavChipProps): JSX.Element {
  const chipSize = size === 'small' ? 'small' : 'medium'

  const chipSx = {
    borderColor: 'brandSteel',
    color: 'text.primary',
  }

  if (to) {
    return (
      <Chip
        label={label}
        variant="outlined"
        clickable
        size={chipSize}
        component={Link}
        to={to}
        sx={chipSx}
      />
    )
  }

  return (
    <Chip
      label={label}
      variant="outlined"
      clickable
      size={chipSize}
      onClick={onClick}
      sx={chipSx}
    />
  )
}

export function PageNavChipRow({
  children,
  size = 'medium',
}: {
  children: ReactNode
  size?: ComponentSize
}): JSX.Element {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: resolveSize(theme.layout.navChipGap, size),
      }}
    >
      {children}
    </Box>
  )
}
