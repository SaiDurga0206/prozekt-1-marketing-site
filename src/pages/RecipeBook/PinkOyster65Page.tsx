import { Box, Chip, Dialog, DialogContent, Divider, IconButton, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CloseIcon from '@mui/icons-material/Close'
import PeopleIcon from '@mui/icons-material/People'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined'
import type { JSX } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { PageWrapper } from '@/components/layout'
import { BackToRecipeBook, PageContainer } from '@/components/ui'
import { BRAND_COLORS, RECIPE_BOOK_FONT, RECIPES } from '@/constants'
import type { RecipeCardData } from '@/types'

const recipe = RECIPES.find((r) => r.id === 'pink-oyster-65')!

// ── Nutritional data ─────────────────────────────────────────────────────────

const NUTRIENT_ROWS = [
  { label: 'Energy', value: '~27 kcal' },
  { label: 'Water', value: '~93 g' },
  { label: 'Carbohydrates', value: '~2.6 g' },
  { label: 'Natural sugars', value: '~2.6 g' },
  { label: 'Added sugar', value: '0 g' },
  { label: 'Dietary fibre', value: '~2.0 g' },
  { label: 'Protein', value: '~2.0 g' },
  { label: 'Total fat', value: '~0.4 g' },
  { label: 'Saturated fat', value: '~0.1 g' },
  { label: 'Trans fat', value: '0 g' },
  { label: 'Cholesterol', value: '0 mg' },
  { label: 'Sodium', value: '~18 mg' },
  { label: 'Salt equivalent', value: '~0.05 g' },
]

const VITAMIN_ROWS = [
  { label: 'Vitamin A', value: '~2 RAE' },
  { label: 'Beta-carotene', value: '~29 mcg' },
  { label: 'Vitamin B1 / Thiamin', value: '~0.07 mg' },
  { label: 'Vitamin B2 / Riboflavin', value: '~0.20 mg' },
  { label: 'Vitamin B3 / Niacin', value: '~5.2 mg' },
  { label: 'Vitamin B6', value: '~0.11 mg' },
  { label: 'Vitamin B9 / Folate', value: '~51 mcg' },
  { label: 'Vitamin B12', value: '0 mcg' },
  { label: 'Vitamin C', value: '~2 mg' },
  { label: 'Vitamin D', value: '0 mcg (unless UV-exposed)' },
  { label: 'Vitamin E', value: '0 mg' },
]

const MINERAL_ROWS = [
  { label: 'Calcium', value: '0 mg' },
  { label: 'Sodium', value: '~18 mg' },
  { label: 'Potassium', value: '~298 mg' },
  { label: 'Magnesium', value: '~16 mg' },
  { label: 'Phosphorus', value: '~110 mg' },
  { label: 'Iron', value: '~0.4 mg' },
  { label: 'Zinc', value: '~0.7 mg' },
  { label: 'Selenium', value: '~1 mcg' },
  { label: 'Copper', value: '~0.24 mg' },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function NutritionRow({ label, value, shaded }: { label: string; value: string; shaded: boolean }): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { xs: 2.5, md: 3 },
        py: 1.1,
        bgcolor: shaded ? alpha(BRAND_COLORS.SOFT_GOLD, 0.045) : 'transparent',
      }}
    >
      <Typography variant="body2" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, fontSize: '0.875rem' }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ color: BRAND_COLORS.STEEL, fontWeight: 600, fontSize: '0.875rem', minWidth: 90, textAlign: 'right' }}>
        {value}
      </Typography>
    </Box>
  )
}

function NutritionSection({ title, rows }: { title: string; rows: { label: string; value: string }[] }): JSX.Element {
  return (
    <Box>
      {/* Section header row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: { xs: 2.5, md: 3 },
          py: 1.25,
          bgcolor: alpha(BRAND_COLORS.DEEP_GRAPHITE, 0.06),
          borderTop: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.15)}`,
          borderBottom: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.15)}`,
        }}
      >
        <Typography variant="overline" sx={{ color: BRAND_COLORS.SOFT_GOLD, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.7rem' }}>
          {title}
        </Typography>
        <Typography variant="overline" sx={{ color: BRAND_COLORS.STEEL, letterSpacing: '0.1em', fontSize: '0.7rem' }}>
          Per 100 g
        </Typography>
      </Box>
      {rows.map((row, i) => (
        <NutritionRow key={row.label} label={row.label} value={row.value} shaded={i % 2 === 0} />
      ))}
    </Box>
  )
}

function NutritionModal({ open, onClose }: { open: boolean; onClose: () => void }): JSX.Element {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            overflow: 'hidden',
            bgcolor: BRAND_COLORS.PAPER_WHITE,
            mx: { xs: 1.5, sm: 3 },
          },
        },
      }}
    >
      {/* ── Dialog header ── */}
      <Box
        sx={{
          bgcolor: BRAND_COLORS.DEEP_GRAPHITE,
          px: { xs: 2.5, md: 3 },
          pt: 3,
          pb: 2.5,
          position: 'relative',
        }}
      >
        <IconButton
          onClick={onClose}
          size="small"
          aria-label="Close"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            color: 'rgba(255,255,255,0.5)',
            '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <ScienceOutlinedIcon sx={{ color: BRAND_COLORS.SOFT_GOLD, fontSize: 20 }} />
          <Typography
            variant="overline"
            sx={{ color: BRAND_COLORS.SOFT_GOLD, letterSpacing: '0.14em', fontSize: '0.7rem' }}
          >
            NUTRITION INFORMATION
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{ color: '#fff', fontFamily: RECIPE_BOOK_FONT, fontWeight: 400, mb: 2, lineHeight: 1.2 }}
        >
          Product Nutritional Values
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {[
            'Product: Fresh Pink Oyster Mushroom',
            'Reference profile: Raw oyster mushroom / Pleurotus spp.',
            'Serving reference: Per 100 g raw product',
          ].map((line) => (
            <Typography key={line} variant="caption" sx={{ color: 'rgba(255,255,255,0.55)', display: 'block', lineHeight: 1.6 }}>
              {line}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* ── Nutrition tables ── */}
      <DialogContent sx={{ p: 0, overflowY: 'auto' }}>
        <NutritionSection title="Nutrient Profile" rows={NUTRIENT_ROWS} />
        <NutritionSection title="Vitamin Profile" rows={VITAMIN_ROWS} />
        <NutritionSection title="Mineral Profile" rows={MINERAL_ROWS} />

        {/* Disclaimer */}
        <Box
          sx={{
            mx: { xs: 2.5, md: 3 },
            my: 2.5,
            p: 2,
            borderRadius: 2,
            border: `1px dashed ${alpha(BRAND_COLORS.SOFT_GOLD, 0.4)}`,
            bgcolor: alpha(BRAND_COLORS.SOFT_GOLD, 0.04),
          }}
        >
          <Typography variant="caption" sx={{ color: BRAND_COLORS.STEEL, lineHeight: 1.7, display: 'block' }}>
            <Box component="span" sx={{ color: BRAND_COLORS.SOFT_GOLD, fontWeight: 600 }}>Note: </Box>
            Values are approximate reference values. Final Prozekt-1 pack values should be confirmed through lab testing before using on printed labels.
          </Typography>
        </Box>
      </DialogContent>

      {/* ── Footer ── */}
      <Divider sx={{ borderColor: alpha(BRAND_COLORS.STEEL, 0.15) }} />
      <Box sx={{ px: { xs: 2.5, md: 3 }, py: 1.5, bgcolor: alpha(BRAND_COLORS.BONE_WHITE, 0.6) }}>
        <Typography variant="caption" sx={{ color: alpha(BRAND_COLORS.STEEL, 0.7) }}>
          PROZEKT-1 ORGANICS PRIVATE LIMITED
        </Typography>
      </Box>
    </Dialog>
  )
}

// ── Card content ──────────────────────────────────────────────────────────────

function CardContent({ card }: { card: RecipeCardData }): JSX.Element {
  if (card.contentType === 'narrative' && card.narrative) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {card.narrative.map((para, i) => (
          <Typography
            key={i}
            variant="body2"
            sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, lineHeight: 1.85, fontSize: { xs: '1.125rem', md: '1.25rem' } }}
          >
            {para}
          </Typography>
        ))}
      </Box>
    )
  }

  if (card.contentType === 'steps' && card.items) {
    return (
      <Box component="ol" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {card.items.map((step, i) => (
          <Box component="li" key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Typography
              variant="overline"
              sx={{ color: BRAND_COLORS.SOFT_GOLD, fontWeight: 400, minWidth: 24, lineHeight: 1.6, fontSize: '0.9rem', letterSpacing: '0.06em' }}
            >
              {String(i + 1).padStart(2, '0')}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '1.125rem', md: '1.25rem' } }}
            >
              {step}
            </Typography>
          </Box>
        ))}
      </Box>
    )
  }

  if (card.contentType === 'ingredients' && card.items) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {card.items.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              py: 1,
              borderBottom: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.12)}`,
              '&:last-child': { borderBottom: 'none' },
            }}
          >
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: BRAND_COLORS.SOFT_GOLD, flexShrink: 0 }} />
            <Typography
              variant="body2"
              sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, fontSize: { xs: '1.125rem', md: '1.25rem' } }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    )
  }

  if (card.items) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {card.items.map((item, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
            <Box
              sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: BRAND_COLORS.SOFT_GOLD, flexShrink: 0, mt: '0.45em' }}
            />
            <Typography
              variant="body2"
              sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '1.125rem', md: '1.25rem' } }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    )
  }

  return <></>
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function PinkOyster65Page(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const [nutritionOpen, setNutritionOpen] = useState(false)
  const totalCards = recipe.cards.length

  const goTo = useCallback(
    (index: number) => {
      if (!scrollRef.current) return
      const clamped = Math.max(0, Math.min(index, totalCards - 1))
      scrollRef.current.scrollTo({ left: clamped * scrollRef.current.offsetWidth, behavior: 'smooth' })
      setActiveCard(clamped)
    },
    [totalCards],
  )

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth)
    setActiveCard(index)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <PageWrapper>
      <PageContainer size="medium">
        <BackToRecipeBook />

        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', letterSpacing: '0.12em', display: 'block', mb: 0.5 }}
          >
            PROZEKT-1 RECIPES
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontFamily: RECIPE_BOOK_FONT, fontWeight: 400, mb: 2, lineHeight: 1.25 }}
          >
            {recipe.title}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
            <Chip
              label={recipe.primaryCategoryLabel}
              size="small"
              sx={{
                borderColor: BRAND_COLORS.SOFT_GOLD,
                color: BRAND_COLORS.DEEP_GRAPHITE,
                border: '1px solid',
                bgcolor: alpha(BRAND_COLORS.SOFT_GOLD, 0.12),
                fontWeight: 600,
                letterSpacing: '0.06em',
                fontSize: '0.7rem',
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeIcon sx={{ fontSize: 15, color: BRAND_COLORS.STEEL }} />
              <Typography variant="caption" sx={{ color: BRAND_COLORS.STEEL }}>{recipe.cookingTime}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PeopleIcon sx={{ fontSize: 15, color: BRAND_COLORS.STEEL }} />
              <Typography variant="caption" sx={{ color: BRAND_COLORS.STEEL }}>{recipe.serves}</Typography>
            </Box>

            {/* Nutrition link */}
            <Box
              onClick={() => setNutritionOpen(true)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                cursor: 'pointer',
                px: 1.25,
                py: 0.4,
                borderRadius: '12px',
                border: `1px solid ${alpha(BRAND_COLORS.SOFT_GOLD, 0.45)}`,
                bgcolor: alpha(BRAND_COLORS.SOFT_GOLD, 0.07),
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: alpha(BRAND_COLORS.SOFT_GOLD, 0.18),
                  borderColor: BRAND_COLORS.SOFT_GOLD,
                },
              }}
            >
              <ScienceOutlinedIcon sx={{ fontSize: 13, color: BRAND_COLORS.SOFT_GOLD }} />
              <Typography
                variant="caption"
                sx={{ color: BRAND_COLORS.SOFT_GOLD, fontWeight: 600, letterSpacing: '0.04em', fontSize: '0.7rem' }}
              >
                Product nutritional values
              </Typography>
            </Box>
          </Box>
        </Box>

        <NutritionModal open={nutritionOpen} onClose={() => setNutritionOpen(false)} />

        <Box sx={{ '& .MuiTypography-root': { fontFamily: `${RECIPE_BOOK_FONT} !important` } }}>
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              borderRadius: 2,
            }}
          >
            {recipe.cards.map((card, i) => (
              <Box key={card.id} sx={{ minWidth: '100%', scrollSnapAlign: 'start' }}>
                <Box
                  sx={{
                    border: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.18)}`,
                    borderRadius: 2,
                    overflow: 'hidden',
                    bgcolor: BRAND_COLORS.PAPER_WHITE,
                  }}
                >
                  {card.imageSrc && (
                    <Box
                      component="img"
                      src={card.imageSrc}
                      alt={card.imageAlt ?? card.title}
                      sx={{
                        width: '100%',
                        height: { xs: 240, md: 320 },
                        objectFit: 'contain',
                        display: 'block',
                        bgcolor: '#F5F0EA',
                      }}
                    />
                  )}
                  <Box sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ mb: 2.5 }}>
                      <Typography
                        variant="overline"
                        sx={{ color: BRAND_COLORS.SOFT_GOLD, letterSpacing: '0.14em', display: 'block', mb: 0.25 }}
                      >
                        {String(i + 1).padStart(2, '0')} of {totalCards}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: BRAND_COLORS.DEEP_GRAPHITE,
                          fontFamily: RECIPE_BOOK_FONT,
                          fontWeight: 400,
                          lineHeight: 1.2,
                          fontSize: { xs: '1.5rem', md: '1.625rem' },
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        maxHeight: { xs: 280, md: 'none' },
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': { width: 3 },
                        '&::-webkit-scrollbar-thumb': { bgcolor: alpha(BRAND_COLORS.STEEL, 0.30), borderRadius: 4 },
                        pr: { xs: 0.5, md: 0 },
                      }}
                    >
                      <CardContent card={card} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mt: 3 }}>
            <IconButton
              onClick={() => goTo(activeCard - 1)}
              disabled={activeCard === 0}
              size="small"
              sx={{
                color: BRAND_COLORS.STEEL,
                border: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.25)}`,
                '&:not(:disabled):hover': { borderColor: BRAND_COLORS.SOFT_GOLD, color: BRAND_COLORS.SOFT_GOLD },
              }}
            >
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {recipe.cards.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => goTo(i)}
                  sx={{
                    width: activeCard === i ? 20 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: activeCard === i ? BRAND_COLORS.SOFT_GOLD : alpha(BRAND_COLORS.STEEL, 0.35),
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                />
              ))}
            </Box>
            <IconButton
              onClick={() => goTo(activeCard + 1)}
              disabled={activeCard === totalCards - 1}
              size="small"
              sx={{
                color: BRAND_COLORS.STEEL,
                border: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.25)}`,
                '&:not(:disabled):hover': { borderColor: BRAND_COLORS.SOFT_GOLD, color: BRAND_COLORS.SOFT_GOLD },
              }}
            >
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </Box>
          {activeCard === 0 && (
            <Typography
              variant="caption"
              sx={{ display: 'block', textAlign: 'center', mt: 1, color: alpha(BRAND_COLORS.STEEL, 0.6) }}
            >
              Swipe or use arrows to read
            </Typography>
          )}
        </Box>
      </PageContainer>
    </PageWrapper>
  )
}
