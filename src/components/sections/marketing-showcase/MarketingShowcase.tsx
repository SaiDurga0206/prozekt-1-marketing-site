import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { alpha, type Theme } from '@mui/material/styles'
import { useState, type JSX } from 'react'
import { Link } from 'react-router-dom'

import mobileBackground from '@/assets/Home/mobilebackground.jpeg'
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
import type { LandingVariant } from '@/types'

type HeroDetailPanel = 'gallery' | 'explore-divisions' | 'operational-areas'

const ARIAL = 'Arial, "Helvetica Neue", sans-serif'
const GOLD = '#B39A63'

const heroCardStyles = {
  border: '1px solid',
  borderColor: (theme: Theme) => alpha(theme.palette.brandBone, 0.55),
  backgroundColor: (theme: Theme) => alpha(theme.palette.brandGraphite, 0.45),
  backdropFilter: 'blur(2px)',
  borderRadius: '20px',
  p: 2,
  width: '100%',
}

const divisionRoutes: Record<string, string> = {
  organics: ROUTES.ORGANICS,
  'ethical-systems': ROUTES.SUSTAINABILITY,
  recycling: ROUTES.RECYCLING,
}

export function MarketingShowcase(): JSX.Element {
  const [activePanel, setActivePanel] = useState<HeroDetailPanel>('explore-divisions')
  const activeVariant =
    LANDING_VARIANTS.find((variant: LandingVariant) => variant.id === SELECTED_LANDING_VARIANT_ID) ??
    LANDING_VARIANTS[0]

  const divisionCards = DIVISION_DATA.slice(0, 3)

  return (
    <Box id="marketing-showcase" component="section">

      {/* ── MOBILE VIEW (xs / sm only) ─────────────────────────────── */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
          minHeight: '100svh',
          backgroundColor: '#000000',
          fontFamily: ARIAL,
        }}
      >
        {/* Image hero — top to just above buttons */}
        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.72) 100%), url(${mobileBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            px: 3,
            pt: 7,
            pb: 4,
          }}
        >
          {/* Eyebrow */}
          <Typography
            sx={{
              color: GOLD,
              fontFamily: ARIAL,
              fontWeight: 400,
              fontSize: '0.6875rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              mb: 2.5,
            }}
          >
            {activeVariant.eyebrow}
          </Typography>

          {/* Headline */}
          <Typography
            component="h1"
            sx={{
              color: '#FFFFFF',
              fontFamily: ARIAL,
              fontWeight: 400,
              fontSize: '1.75rem',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              mb: 2,
            }}
          >
            {activeVariant.headline}
          </Typography>

          {/* Subheadline */}
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.75)',
              fontFamily: ARIAL,
              fontWeight: 400,
              fontSize: '0.8125rem',
              lineHeight: 1.7,
            }}
          >
            {activeVariant.subheadline}
          </Typography>
        </Box>

        {/* Black content area — buttons and everything below */}
        <Box sx={{ px: 3, pt: 3.5, pb: 6, flex: 1 }}>

        {/* CTA Buttons */}
        <Stack direction="row" spacing={1.5} sx={{ mb: 5, flexWrap: 'wrap', gap: 1.5 }}>
          <Button
            variant="outlined"
            onClick={() =>
              document.getElementById('mobile-divisions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            sx={{
              borderColor: '#FFFFFF',
              color: '#FFFFFF',
              fontFamily: ARIAL,
              fontWeight: 400,
              fontSize: '0.6875rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: 0,
              px: 2.5,
              py: 1,
              '&:hover': { borderColor: GOLD, color: GOLD, backgroundColor: 'transparent' },
            }}
          >
            {activeVariant.primaryCta}
          </Button>
          <Button
            variant="text"
            onClick={() =>
              document.getElementById('mobile-operational-areas')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            sx={{
              color: GOLD,
              fontFamily: ARIAL,
              fontWeight: 400,
              fontSize: '0.6875rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              px: 1,
              '&:hover': { color: '#FFFFFF', backgroundColor: 'transparent' },
            }}
          >
            {activeVariant.secondaryCta}
          </Button>
        </Stack>

        {/* Divisions list */}
        <Box id="mobile-divisions" sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 3 }}>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.3)',
              fontFamily: ARIAL,
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Our Divisions
          </Typography>

          {divisionCards.map((division) => {
            const destination = divisionRoutes[division.id]
            const rowSx = {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 2.25,
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              textDecoration: 'none',
            }
            const inner = (
              <>
                <Box>
                  <Typography
                    sx={{
                      color: GOLD,
                      fontFamily: ARIAL,
                      fontWeight: 400,
                      fontSize: '0.5625rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      mb: 0.5,
                    }}
                  >
                    {division.num}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      fontFamily: ARIAL,
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      letterSpacing: '0.01em',
                      lineHeight: 1.35,
                    }}
                  >
                    {division.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.3)',
                    fontFamily: ARIAL,
                    fontWeight: 400,
                    fontSize: '1rem',
                    ml: 2,
                    flexShrink: 0,
                  }}
                >
                  →
                </Typography>
              </>
            )

            return destination ? (
              <Box
                key={division.id}
                component={Link}
                to={destination}
                sx={{
                  ...rowSx,
                  '&:hover .mob-title': { color: GOLD },
                  '&:hover .mob-arrow': { color: GOLD },
                }}
              >
                {inner}
              </Box>
            ) : (
              <Box key={division.id} sx={rowSx}>
                {inner}
              </Box>
            )
          })}
        </Box>

        {/* Stats */}
        <Box
          sx={{
            mt: 5,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            pt: 4,
          }}
        >
          {activeVariant.stats.map((stat) => (
            <Box key={stat.id}>
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontFamily: ARIAL,
                  fontWeight: 400,
                  fontSize: '1.375rem',
                  lineHeight: 1,
                  mb: 0.75,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.3)',
                  fontFamily: ARIAL,
                  fontWeight: 400,
                  fontSize: '0.5rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Operational Areas */}
        <Box id="mobile-operational-areas" sx={{ mt: 6, borderTop: '1px solid rgba(255,255,255,0.1)', pt: 3 }}>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.3)',
              fontFamily: ARIAL,
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Operational Areas
          </Typography>

          {OPERATIONAL_AREAS.map((area, index) => (
            <Box
              key={area.id}
              sx={{
                py: 2.25,
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <Typography
                sx={{
                  color: GOLD,
                  fontFamily: ARIAL,
                  fontWeight: 400,
                  fontSize: '0.5625rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  mb: 0.5,
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </Typography>
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontFamily: ARIAL,
                  fontWeight: 400,
                  fontSize: '0.875rem',
                  letterSpacing: '0.01em',
                  lineHeight: 1.35,
                  mb: 0.75,
                }}
              >
                {area.title}
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.45)',
                  fontFamily: ARIAL,
                  fontWeight: 400,
                  fontSize: '0.75rem',
                  lineHeight: 1.65,
                }}
              >
                {area.description}
              </Typography>
            </Box>
          ))}
        </Box>
        </Box>{/* end black content area */}
      </Box>

      {/* ── DESKTOP / LAPTOP VIEW (md and above) ───────────────────── */}
      <Stack spacing={2.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Box
          sx={{
            minHeight: '88vh',
            backgroundImage: (theme) =>
              `linear-gradient(90deg, ${alpha(theme.palette.brandGraphite, 0.84)} 0%, ${alpha(
                theme.palette.brandGraphite,
                0.66,
              )} 45%, ${alpha(theme.palette.brandGraphite, 0.2)} 100%), url("${activeVariant.heroImageUrl}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            p: { md: 5, lg: 6 },
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <Grid container spacing={3} sx={{ width: '100%', flex: 1, alignItems: 'stretch', minHeight: 0 }}>
            <Grid size={{ md: 7.5 }} sx={{ display: 'flex', alignItems: 'center' }}>
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
                    sx={activePanel === 'explore-divisions' ? { boxShadow: 'none' } : undefined}
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
              size={{ md: 4.5 }}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
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
                  maxHeight: '72vh',
                  overflowY: activePanel === 'operational-areas' ? 'auto' : 'hidden',
                  pr: 0.5,
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
                  <Box sx={{ ...heroCardStyles, minHeight: 160, background: 'none', boxShadow: 'none', padding: 0, border: 'none' }}>
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
                    <Box key={area.id} sx={{ ...heroCardStyles, minHeight: 160 }}>
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

                    return destination ? (
                      <Box
                        key={division.id}
                        component={Link}
                        to={destination}
                        sx={{
                          ...heroCardStyles,
                          minHeight: 160,
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
                    ) : (
                      <Box key={division.id} sx={{ ...heroCardStyles, minHeight: 160 }}>
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
