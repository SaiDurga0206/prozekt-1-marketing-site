import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import type { JSX } from 'react'

import { PageWrapper } from '@/components/layout/page-wrapper'
import { BackToOrganics } from '@/components/ui/back-link'
import { BRAND_COLORS, PAGE_HERO_GRADIENT } from '@/constants/BRAND_COLORS'
import { typographyTokens } from '@/theme/typography'

interface LaunchingSoonPageProps {
  title: string
}

export function LaunchingSoonPage({ title }: LaunchingSoonPageProps): JSX.Element {
  return (
    <PageWrapper>
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: { xs: 3, md: 6 },
          background: PAGE_HERO_GRADIENT,
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: BRAND_COLORS.SOFT_GOLD, mb: 2, letterSpacing: '0.2em' }}
        >
          {title}
        </Typography>

        <Typography
          variant="h1"
          sx={{
            color: BRAND_COLORS.DEEP_GRAPHITE,
            fontSize: typographyTokens.displayFontSize,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            mb: 3,
          }}
        >
          Launching Soon
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: BRAND_COLORS.STEEL, maxWidth: 420, mb: 5 }}
        >
          This section is currently under development. Check back soon for updates.
        </Typography>

        <BackToOrganics />
      </Box>
    </PageWrapper>
  )
}
