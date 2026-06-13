import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { alpha, type Theme } from '@mui/material/styles'
import { useState, type JSX } from 'react'
import { Link } from 'react-router-dom'

import { DIVISION_DATA } from '@/constants/DIVISION_DATA'
import { DIVISIONS_INTRO_PARAGRAPHS } from '@/constants/DIVISIONS_COPY'
import { OPERATIONAL_AREAS } from '@/constants/OPERATIONAL_AREAS_DATA'
import {
  LANDING_VARIANTS,
  SELECTED_LANDING_VARIANT_ID,
} from '@/constants/LANDING_VARIANTS'
import { ROUTES } from '@/routes'
import { PAGE_HEADING_SIZE, PAGE_SUBHEADING_SIZE, PAGE_TEXT_SIZE } from '@/theme/theme'
import { resolveHeadingVariant, resolveSubHeadingVariant, resolveTextVariant } from '@/theme/tokens'
import type { LandingVariant } from '@/types/landing.types'

type HeroDetailPanel = 'gallery' | 'explore-divisions' | 'operational-areas'

const heroCardStyles = {
  border: '1px solid',
  borderColor: (theme: Theme) => alpha(theme.palette.brandBone, 0.55),
  backgroundColor: (theme: Theme) => alpha(theme.palette.brandGraphite, 0.45),
  backdropFilter: 'blur(2px)',
  borderRadius: '20px',
  p: 2,
  width: '100%',
}

export function MarketingShowcase(): JSX.Element {
  const [activePanel, setActivePanel] = useState<HeroDetailPanel>('explore-divisions')
  const activeVariant =
    LANDING_VARIANTS.find((variant: LandingVariant) => variant.id === SELECTED_LANDING_VARIANT_ID) ??
    LANDING_VARIANTS[0]

  const divisionCards = DIVISION_DATA.slice(0, 3)
  const divisionRoutes: Record<string, string> = {
    organics: ROUTES.ORGANICS,
    'ethical-systems': ROUTES.SUSTAINABILITY,
    recycling: ROUTES.RECYCLING,
  }

  return (
    <Box id="marketing-showcase" component="section">
      <Stack spacing={2.5}>
        <Box
          sx={{
            minHeight: { xs: 'auto', sm: 'auto', md: '88vh' },
            backgroundImage: (theme) =>
              `linear-gradient(90deg, ${alpha(theme.palette.brandGraphite, 0.84)} 0%, ${alpha(
                theme.palette.brandGraphite,
                0.66,
              )} 45%, ${alpha(theme.palette.brandGraphite, 0.2)} 100%), url("${activeVariant.heroImageUrl}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            p: { xs: 2.5, sm: 3.5, md: 5, lg: 6 },
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <Grid container spacing={3} sx={{ width: '100%', flex: 1, alignItems: 'stretch', minHeight: 0 }}>
            <Grid size={{ xs: 12, md: 7.5 }} sx={{ display: 'flex', alignItems: 'center' }}>
              <Stack spacing={1.5} sx={{ maxWidth: 760 }}>
                <Typography
                  variant={resolveHeadingVariant(PAGE_HEADING_SIZE)}
                  sx={{ color: 'brandBone' }}
                >
                  {activeVariant.headline}
                </Typography>
                <Typography
                  variant={resolveTextVariant(PAGE_TEXT_SIZE)}
                  sx={{ color: 'brandBone', opacity: 0.92, maxWidth: 620 }}
                >
                  {activeVariant.subheadline}
                </Typography>
                <Stack direction="row" spacing={1.25} sx={{ pt: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      setActivePanel((current) =>
                        current === 'explore-divisions' ? 'gallery' : 'explore-divisions',
                      )
                    }
                    sx={
                      activePanel === 'explore-divisions'
                        ? { boxShadow: 'none' }
                        : undefined
                    }
                  >
                    {activeVariant.primaryCta}
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      setActivePanel((current) =>
                        current === 'operational-areas' ? 'gallery' : 'operational-areas',
                      )
                    }
                    sx={{
                      borderColor: 'brandBone',
                      color: 'brandBone',
                      '&:hover': { borderColor: 'brandGold' },
                      ...(activePanel === 'operational-areas'
                        ? { boxShadow: (theme) => `0 0 0 2px ${theme.palette.brandGold}` }
                        : {}),
                    }}
                  >
                    {activeVariant.secondaryCta}
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid
              id="projects-gallery"
              size={{ xs: 12, md: 4.5 }}
              sx={{
                display: 'flex',
                alignItems: { xs: 'flex-start', md: 'flex-end' },
                height: '100%',
                minHeight: 0,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 1.5,
                  // xs/sm: no height cap — let content flow and page scroll naturally
                  // md+: cap the panel so it sits alongside the hero text column
                  maxHeight: { md: '72vh' },
                  overflowY: { md: activePanel === 'operational-areas' ? 'auto' : 'hidden' },
                  pr: { md: 0.5 },
                  ...(activePanel === 'operational-areas'
                    ? {
                        overscrollBehavior: 'contain',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'thin',
                        scrollbarColor: (theme: Theme) =>
                          `${alpha(theme.palette.brandGold, 0.6)} transparent`,
                        '&::-webkit-scrollbar': { width: 6 },
                        '&::-webkit-scrollbar-thumb': {
                          backgroundColor: (theme: Theme) => alpha(theme.palette.brandGold, 0.55),
                          borderRadius: 999,
                        },
                      }
                    : {}),
                }}
              >
                {activePanel === 'explore-divisions' && (
                  <Box sx={{ ...heroCardStyles, minHeight: { xs: 150, md: 160 }, background: 'none', boxShadow: 'none', padding: 0, border: 'none' }}>
                    <Stack spacing={1.25}>
                      {DIVISIONS_INTRO_PARAGRAPHS.map((paragraph) => (
                        <Typography
                          key={paragraph.slice(0, 32)}
                          variant={resolveTextVariant(PAGE_TEXT_SIZE)}
                          sx={{ color: 'brandBone', opacity: 0.9 }}
                        >
                          {paragraph}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                )}

                {activePanel === 'operational-areas' &&
                  OPERATIONAL_AREAS.map((area, index) => (
                    <Box key={area.id} sx={{ ...heroCardStyles, minHeight: { xs: 150, md: 160 } }}>
                      <Typography variant="overline" sx={{ color: 'brandGold' }}>
                        OPERATIONAL AREA {String(index + 1).padStart(2, '0')}
                      </Typography>
                      <Typography
                        variant={resolveSubHeadingVariant(PAGE_SUBHEADING_SIZE)}
                        sx={{ color: 'brandBone', mt: 0.5 }}
                      >
                        {area.title}
                      </Typography>
                      <Typography
                        variant={resolveTextVariant(PAGE_TEXT_SIZE)}
                        sx={{ color: 'brandBone', opacity: 0.9, mt: 1 }}
                      >
                        {area.description}
                      </Typography>
                    </Box>
                  ))}

                {activePanel === 'gallery' &&
                  divisionCards.map((division) => {
                    const destination = divisionRoutes[division.id]
                    const isClickable = Boolean(destination)

                    const cardContent = (
                      <>
                        <Typography
                          variant={resolveSubHeadingVariant(PAGE_SUBHEADING_SIZE)}
                          sx={{ color: 'brandBone' }}
                        >
                          {division.title}
                        </Typography>
                        <Typography
                          variant={resolveTextVariant(PAGE_TEXT_SIZE)}
                          sx={{ color: 'brandBone', opacity: 0.9, mt: 1 }}
                        >
                          {division.description}
                        </Typography>
                      </>
                    )

                    if (isClickable) {
                      return (
                        <Box
                          key={division.id}
                          component={Link}
                          to={destination}
                          sx={{
                            ...heroCardStyles,
                            minHeight: { xs: 150, md: 160 },
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'transform 140ms ease, background-color 140ms ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              backgroundColor: (theme: Theme) => alpha(theme.palette.brandGraphite, 0.6),
                            },
                          }}
                        >
                          {cardContent}
                        </Box>
                      )
                    }

                    return (
                      <Box key={division.id} sx={{ ...heroCardStyles, minHeight: { xs: 150, md: 160 } }}>
                        {cardContent}
                      </Box>
                    )
                  })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  )
}
