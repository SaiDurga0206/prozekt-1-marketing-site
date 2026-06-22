import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { JSX } from 'react'

import { resolveSize } from '@/theme/tokens'
import type { ComponentSize } from '@/types'

interface ContentImageProps {
  src: string
  alt: string
  size?: ComponentSize
}

export function ContentImage({ src, alt, size = 'medium' }: ContentImageProps): JSX.Element {
  const theme = useTheme()

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      sx={{
        width: '100%',
        maxWidth: resolveSize(theme.layout.imageMaxWidth, size),
        height: 'auto',
        maxHeight: resolveSize(theme.layout.imageHeight, size),
        aspectRatio: '16 / 9',
        objectFit: 'contain',
        backgroundColor: 'brandBone',
        mt: 1.5,
        display: 'block',
        mx: 'auto',
      }}
    />
  )
}
