import { Chip } from '@mui/material'
import { alpha } from '@mui/material/styles'
import type { JSX } from 'react'

export function UnderDevelopmentChip(): JSX.Element {
  return (
    <Chip
      label="Under Development"
      sx={{
        alignSelf: 'flex-start',
        border: '1px solid',
        borderColor: 'brandGold',
        bgcolor: (theme) => alpha(theme.palette.brandGold, 0.16),
        color: 'brandGraphite',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}
    />
  )
}
