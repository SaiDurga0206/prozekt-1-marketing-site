import { Box, Chip, IconButton, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import PeopleIcon from '@mui/icons-material/People'
import type { JSX } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { PageWrapper } from '@/components/layout'
import { BackToRecipeBook, PageContainer } from '@/components/ui'
import { BRAND_COLORS, RECIPE_BOOK_FONT, RECIPES } from '@/constants'
import type { RecipeCardData } from '@/types'

const recipe = RECIPES.find((r) => r.id === 'pink-oyster-65')!

function CardContent({ card }: { card: RecipeCardData }): JSX.Element {
  if (card.contentType === 'narrative' && card.narrative) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {card.narrative.map((para, i) => (
          <Typography
            key={i}
            variant="body2"
            sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, lineHeight: 1.85, fontSize: { xs: '1rem', md: '1.0625rem' } }}
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
              sx={{ color: BRAND_COLORS.SOFT_GOLD, fontWeight: 400, minWidth: 24, lineHeight: 1.6, fontSize: '0.8rem', letterSpacing: '0.06em' }}
            >
              {String(i + 1).padStart(2, '0')}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '1rem', md: '1.0625rem' } }}
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
              sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, fontSize: { xs: '1rem', md: '1.0625rem' } }}
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
              sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '1rem', md: '1.0625rem' } }}
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

export function PinkOyster65Page(): JSX.Element {
  const [activeCard, setActiveCard] = useState(0)
  const totalCards = recipe.cards.length
  const carouselRef = useRef<HTMLDivElement>(null)
  const activeCardRef = useRef(0)
  activeCardRef.current = activeCard

  const goTo = useCallback(
    (index: number) => setActiveCard(Math.max(0, Math.min(index, totalCards - 1))),
    [totalCards],
  )

  // Native touch listeners so we can call preventDefault on horizontal swipes
  // before the inner overflowY:auto element claims them.
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    let startX = 0
    let startY = 0

    const onStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const onMove = (e: TouchEvent) => {
      const dx = e.touches[0].clientX - startX
      const dy = e.touches[0].clientY - startY
      if (Math.abs(dx) > Math.abs(dy)) e.preventDefault()
    }

    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX
      if (Math.abs(dx) > 50) {
        setActiveCard(Math.max(0, Math.min(activeCardRef.current + (dx > 0 ? 1 : -1), totalCards - 1)))
      }
    }

    el.addEventListener('touchstart', onStart, { passive: true })
    el.addEventListener('touchmove', onMove, { passive: false })
    el.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchmove', onMove)
      el.removeEventListener('touchend', onEnd)
    }
  }, [totalCards])

  const slidePercent = 100 / totalCards

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
          </Box>
        </Box>

        <Box sx={{ '& .MuiTypography-root': { fontFamily: `${RECIPE_BOOK_FONT} !important` } }}>
          {/* Carousel viewport — ref used for native touch listeners */}
          <Box ref={carouselRef} sx={{ overflow: 'hidden', borderRadius: 2, userSelect: 'none' }}>
            {/* Track: totalCards×100% wide; each card is slidePercent% = exactly 1 viewport width */}
            <Box
              sx={{
                display: 'flex',
                width: `${totalCards * 100}%`,
                transform: `translateX(-${activeCard * slidePercent}%)`,
                transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                willChange: 'transform',
              }}
            >
              {recipe.cards.map((card, i) => (
                <Box key={card.id} sx={{ width: `${slidePercent}%`, flexShrink: 0 }}>
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
                          sx={{ color: BRAND_COLORS.SOFT_GOLD, letterSpacing: '0.14em', display: 'block', mb: 0.25, fontSize: '0.75rem' }}
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
                            fontSize: { xs: '1.375rem', md: '1.5rem' },
                          }}
                        >
                          {card.title}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          maxHeight: { xs: 300, md: 'none' },
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
          </Box>

          {/* Navigation dots + arrows */}
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
